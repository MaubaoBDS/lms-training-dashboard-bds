/**
 * Design: Corporate Academy — Module detail page
 * 3 tabs: Tài liệu | Bài kiểm tra | Kết quả
 */
import Sidebar from "@/components/Sidebar";
import { allModules } from "@/data";
import type { QuizQuestion } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { ArrowLeft, BookOpen, CheckCircle, ClipboardList, Menu, Trophy, XCircle } from "lucide-react";
import { useCallback, useState } from "react";
import { Streamdown } from "streamdown";
import { Link, useParams } from "wouter";

type Tab = "content" | "quiz" | "results";

export default function ModulePage() {
  const params = useParams<{ id: string }>();
  const moduleId = parseInt(params.id || "1");
  const module = allModules.find((m) => m.id === moduleId);

  const { completedModules, quizScores, quizAnswers, saveQuizResult } = useProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const [currentAnswers, setCurrentAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    if (submitted) return;
    setCurrentAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, [submitted]);

  const handleSubmit = useCallback(() => {
    if (!module) return;
    const totalQuestions = module.quiz.length;
    let correct = 0;
    module.quiz.forEach((q) => {
      if (currentAnswers[q.id] === q.correctAnswer) correct++;
    });
    const score = Math.round((correct / totalQuestions) * 100);
    saveQuizResult(moduleId, score, currentAnswers);
    setSubmitted(true);
    setActiveTab("results");
  }, [module, currentAnswers, moduleId, saveQuizResult]);

  const handleRetry = useCallback(() => {
    setCurrentAnswers({});
    setSubmitted(false);
    setActiveTab("quiz");
  }, []);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Module không tồn tại.</p>
      </div>
    );
  }

  const savedScore = quizScores[moduleId];
  const savedAnswers = quizAnswers[moduleId];
  const isCompleted = completedModules.includes(moduleId);

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "content", label: "Tài liệu", icon: <BookOpen className="w-4 h-4" /> },
    { id: "quiz", label: "Bài kiểm tra", icon: <ClipboardList className="w-4 h-4" /> },
    { id: "results", label: "Kết quả", icon: <Trophy className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar
        completedModules={completedModules}
        quizScores={quizScores}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-[280px]">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 lg:px-8 h-14 flex items-center gap-3">
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <Link href="/">
            <button className="p-1.5 rounded-md hover:bg-slate-100 transition-colors">
              <ArrowLeft className="w-4 h-4 text-slate-500" />
            </button>
          </Link>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: `${module.accentColor}15`, color: module.accentColor }}
            >
              {module.id}
            </div>
            <h2 className="font-heading font-semibold text-slate-800 text-sm lg:text-base truncate">
              {module.title}
            </h2>
          </div>
          {isCompleted && (
            <div className="ml-auto flex items-center gap-1 text-emerald-600 text-xs font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Đã hoàn thành</span>
            </div>
          )}
        </header>

        {/* Tabs */}
        <div className="border-b border-slate-200/60 bg-white px-4 lg:px-8">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-150",
                  activeTab === tab.id
                    ? "border-teal-500 text-teal-700"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <main className="p-4 lg:p-8 max-w-4xl">
          {activeTab === "content" && (
            <article className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 prose prose-slate max-w-none prose-headings:font-heading prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-table:text-sm prose-th:bg-slate-50 prose-th:font-semibold prose-td:border-slate-200 prose-blockquote:border-l-teal-500 prose-blockquote:bg-teal-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md">
              <Streamdown>{module.content}</Streamdown>
            </article>
          )}

          {activeTab === "quiz" && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6">
                <h3 className="font-heading font-semibold text-slate-800 text-lg mb-1">
                  Bài kiểm tra: {module.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Trả lời {module.quiz.length} câu hỏi. Đạt 80% trở lên để hoàn thành module.
                </p>

                <div className="space-y-6">
                  {module.quiz.map((q, idx) => (
                    <QuizQuestionCard
                      key={q.id}
                      question={q}
                      index={idx}
                      selectedAnswer={currentAnswers[q.id]}
                      onSelect={handleAnswer}
                      submitted={submitted}
                    />
                  ))}
                </div>

                {!submitted && (
                  <button
                    onClick={handleSubmit}
                    disabled={Object.keys(currentAnswers).length < module.quiz.length}
                    className={cn(
                      "mt-8 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-150",
                      Object.keys(currentAnswers).length >= module.quiz.length
                        ? "bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.97]"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    )}
                  >
                    Nộp bài ({Object.keys(currentAnswers).length}/{module.quiz.length})
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <ResultsPanel
              module={module}
              score={savedScore}
              answers={savedAnswers || currentAnswers}
              onRetry={handleRetry}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function QuizQuestionCard({
  question,
  index,
  selectedAnswer,
  onSelect,
  submitted,
}: {
  question: QuizQuestion;
  index: number;
  selectedAnswer?: number;
  onSelect: (qId: number, optIdx: number) => void;
  submitted: boolean;
}) {
  return (
    <div className="border border-slate-200/80 rounded-lg p-4">
      <p className="font-medium text-slate-800 text-sm mb-3">
        <span className="text-teal-600 mr-1.5">Câu {index + 1}.</span>
        {question.question}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, optIdx) => {
          const isSelected = selectedAnswer === optIdx;
          const isCorrect = question.correctAnswer === optIdx;
          let optionStyle = "border-slate-200 hover:border-slate-300 hover:bg-slate-50";
          if (submitted) {
            if (isCorrect) optionStyle = "border-emerald-300 bg-emerald-50";
            else if (isSelected && !isCorrect) optionStyle = "border-red-300 bg-red-50";
          } else if (isSelected) {
            optionStyle = "border-teal-400 bg-teal-50";
          }

          return (
            <button
              key={optIdx}
              onClick={() => onSelect(question.id, optIdx)}
              disabled={submitted}
              className={cn(
                "w-full text-left px-4 py-2.5 rounded-md border text-sm transition-all duration-150 flex items-center gap-2",
                optionStyle
              )}
            >
              <span className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] font-bold",
                isSelected && !submitted ? "border-teal-500 bg-teal-500 text-white" :
                submitted && isCorrect ? "border-emerald-500 bg-emerald-500 text-white" :
                submitted && isSelected && !isCorrect ? "border-red-500 bg-red-500 text-white" :
                "border-slate-300"
              )}>
                {String.fromCharCode(65 + optIdx)}
              </span>
              <span className={cn(
                submitted && isCorrect ? "text-emerald-800 font-medium" :
                submitted && isSelected && !isCorrect ? "text-red-700" :
                "text-slate-700"
              )}>
                {opt}
              </span>
              {submitted && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto shrink-0" />}
              {submitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 ml-auto shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultsPanel({
  module,
  score,
  answers,
  onRetry,
}: {
  module: { title: string; quiz: QuizQuestion[] };
  score?: number;
  answers: Record<number, number>;
  onRetry: () => void;
}) {
  if (score === undefined) {
    return (
      <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center">
        <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h3 className="font-heading font-semibold text-slate-800 mb-2">Chưa có kết quả</h3>
        <p className="text-sm text-slate-500">Hãy hoàn thành bài kiểm tra để xem kết quả.</p>
      </div>
    );
  }

  const passed = score >= 80;
  const correct = module.quiz.filter((q) => answers[q.id] === q.correctAnswer).length;

  return (
    <div className="space-y-4">
      <div className={cn(
        "rounded-xl border p-6 text-center",
        passed ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"
      )}>
        <div className={cn(
          "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center",
          passed ? "bg-emerald-100" : "bg-amber-100"
        )}>
          {passed ? (
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          ) : (
            <Trophy className="w-8 h-8 text-amber-600" />
          )}
        </div>
        <h3 className={cn(
          "font-heading font-bold text-2xl mb-1",
          passed ? "text-emerald-800" : "text-amber-800"
        )}>
          {score}%
        </h3>
        <p className={cn(
          "text-sm font-medium mb-1",
          passed ? "text-emerald-700" : "text-amber-700"
        )}>
          {passed ? "Xuất sắc! Bạn đã hoàn thành module này." : "Chưa đạt. Cần 80% trở lên."}
        </p>
        <p className="text-xs text-slate-500">
          Đúng {correct}/{module.quiz.length} câu
        </p>
        {!passed && (
          <button
            onClick={onRetry}
            className="mt-4 px-5 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 active:scale-[0.97] transition-all duration-150"
          >
            Làm lại
          </button>
        )}
      </div>

      {/* Review answers */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-6">
        <h4 className="font-heading font-semibold text-slate-800 mb-4">Chi tiết đáp án</h4>
        <div className="space-y-3">
          {module.quiz.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            return (
              <div key={q.id} className={cn(
                "p-3 rounded-md border text-sm",
                isCorrect ? "border-emerald-200 bg-emerald-50/50" : "border-red-200 bg-red-50/50"
              )}>
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-slate-700">Câu {idx + 1}: {q.question}</p>
                    {!isCorrect && (
                      <p className="text-xs mt-1">
                        <span className="text-red-600">Bạn chọn: {q.options[userAnswer]}</span>
                        <br />
                        <span className="text-emerald-600">Đáp án đúng: {q.options[q.correctAnswer]}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
