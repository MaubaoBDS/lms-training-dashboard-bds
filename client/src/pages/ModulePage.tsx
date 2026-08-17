import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type QuizQuestion } from "@/data";
import { useContentStore, type ChecklistItem, type SkillItem } from "@/hooks/useContentStore";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileText,
  ListFilter,
  Menu,
  Search,
  Trophy,
  Wrench,
  X,
  XCircle,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Link, useParams } from "wouter";
import { Streamdown } from "streamdown";

type Tab = "knowledge" | "skills" | "scenarios" | "checklists" | "quiz" | "results";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "knowledge", label: "Kiến thức", icon: <BookOpen className="w-4 h-4" /> },
  { id: "skills", label: "Kỹ năng", icon: <Wrench className="w-4 h-4" /> },
  { id: "scenarios", label: "Tình huống", icon: <ListFilter className="w-4 h-4" /> },
  { id: "checklists", label: "Checklist", icon: <ClipboardCheck className="w-4 h-4" /> },
  { id: "quiz", label: "Bài kiểm tra", icon: <ClipboardList className="w-4 h-4" /> },
  { id: "results", label: "Kết quả", icon: <Trophy className="w-4 h-4" /> },
];

export default function ModulePage() {
  const params = useParams<{ id: string }>();
  const moduleId = parseInt(params.id || "1");
  const { getModule, state } = useContentStore();
  const module = getModule(moduleId);
  const { completedModules, quizScores, quizAnswers, saveQuizResult } = useProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("knowledge");
  const [currentAnswers, setCurrentAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    if (submitted) return;
    setCurrentAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, [submitted]);

  const handleSubmit = useCallback(() => {
    if (!module || module.quiz.length === 0) return;
    let correct = 0;
    module.quiz.forEach((question) => {
      if (currentAnswers[question.id] === question.correctAnswer) correct += 1;
    });
    const score = Math.round((correct / module.quiz.length) * 100);
    saveQuizResult(moduleId, score, currentAnswers);
    setSubmitted(true);
    setActiveTab("results");
  }, [currentAnswers, module, moduleId, saveQuizResult]);

  const handleRetry = useCallback(() => {
    setCurrentAnswers({});
    setSubmitted(false);
    setActiveTab("quiz");
  }, []);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="text-center"><p className="text-slate-700 font-medium">Module không tồn tại hoặc đã bị xóa.</p><Link href="/admin/content" className="text-teal-700 text-sm hover:underline mt-2 inline-block">Mở khu vực chỉnh sửa nội dung</Link></div>
      </div>
    );
  }

  const isHidden = state.hiddenModules.includes(module.id);
  if (isHidden) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="text-center"><Eye className="w-10 h-10 text-slate-300 mx-auto mb-3" /><p className="text-slate-700 font-medium">Hạng mục này đang được ẩn.</p><Link href="/admin/content" className="text-teal-700 text-sm hover:underline mt-2 inline-block">Mở khu vực chỉnh sửa để hiển thị lại</Link></div>
      </div>
    );
  }

  const savedScore = quizScores[moduleId];
  const savedAnswers = quizAnswers[moduleId];
  const isCompleted = completedModules.includes(moduleId);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar completedModules={completedModules} quizScores={quizScores} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:ml-[280px]">
        <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-slate-200/60 px-4 lg:px-8 h-14 flex items-center gap-3">
          <button className="lg:hidden p-1.5 rounded-md hover:bg-slate-100" onClick={() => setSidebarOpen(true)} aria-label="Mở menu"><Menu className="w-5 h-5 text-slate-600" /></button>
          <Link href={module.id === 1 ? "/" : "/"} className="p-1.5 rounded-md hover:bg-slate-100"><ArrowLeft className="w-4 h-4 text-slate-500" /></Link>
          <div className="flex items-center gap-2 min-w-0"><div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: `${module.accentColor}15`, color: module.accentColor }}>{module.id}</div><h2 className="font-heading font-semibold text-slate-800 text-sm lg:text-base truncate">{module.title}</h2></div>
          {isCompleted && <div className="ml-auto flex items-center gap-1 text-emerald-600 text-xs font-medium"><CheckCircle className="w-3.5 h-3.5" /><span className="hidden sm:inline">Đã hoàn thành</span></div>}
        </header>

        <div className="border-b border-slate-200/60 bg-white px-2 lg:px-8 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("flex items-center gap-1.5 px-3.5 lg:px-4 py-3 text-sm font-medium border-b-2 transition-colors", activeTab === tab.id ? "border-teal-500 text-teal-700" : "border-transparent text-slate-500 hover:text-slate-700")}>{tab.icon}{tab.label}</button>)}
          </div>
        </div>

        <main className="p-4 lg:p-8 max-w-5xl">
          {activeTab === "knowledge" && <KnowledgePanel content={module.content} />}
          {activeTab === "skills" && <LibraryPanel title="Kỹ năng thực hành" description="Các kỹ năng cần làm được sau khi học module này." items={module.skills} emptyText="Chưa có skill card. Người quản trị có thể thêm nội dung trong Chỉnh sửa nội dung." />}
          {activeTab === "scenarios" && <LibraryPanel title="Tình huống & Kịch bản" description="Tra cứu nhanh theo bối cảnh sales đang gặp." items={module.scenarios} emptyText="Chưa có tình huống. Người quản trị có thể thêm nội dung trong Chỉnh sửa nội dung." />}
          {activeTab === "checklists" && <ChecklistPanel items={module.checklists} />}
          {activeTab === "quiz" && <QuizPanel moduleTitle={module.title} quiz={module.quiz} currentAnswers={currentAnswers} submitted={submitted} onAnswer={handleAnswer} onSubmit={handleSubmit} />}
          {activeTab === "results" && <ResultsPanel moduleTitle={module.title} quiz={module.quiz} score={savedScore} answers={savedAnswers || currentAnswers} onRetry={handleRetry} />}
        </main>
      </div>
    </div>
  );
}

function KnowledgePanel({ content }: { content: string }) {
  return <article className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 prose prose-slate max-w-none prose-headings:font-heading prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-table:text-sm prose-th:bg-slate-50 prose-th:font-semibold prose-td:border-slate-200 prose-blockquote:border-l-teal-500 prose-blockquote:bg-teal-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md"><Streamdown>{content}</Streamdown></article>;
}

function LibraryPanel({ title, description, items, emptyText }: { title: string; description: string; items: SkillItem[]; emptyText: string }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [openId, setOpenId] = useState<string | null>(null);
  const categories = useMemo(() => ["Tất cả", ...Array.from(new Set(items.map((item) => item.category).filter(Boolean)))], [items]);
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === "Tất cả" || item.category === category;
      const matchesSearch = !query || `${item.title} ${item.category} ${item.tags.join(" ")} ${item.summary} ${item.sections.map((section) => section.content).join(" ")}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, items, search]);

  return (
    <section className="space-y-4">
      <div><h3 className="font-heading font-semibold text-slate-800 text-xl">{title}</h3><p className="text-sm text-slate-500 mt-1">{description}</p></div>
      {items.length > 0 ? <>
        <div className="relative"><Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm kiếm kỹ năng hoặc tình huống..." className="pl-9" /></div>
        <div className="flex flex-wrap gap-2">{categories.map((itemCategory) => <button key={itemCategory} onClick={() => setCategory(itemCategory)} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors", category === itemCategory ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200")}>{itemCategory}</button>)}</div>
        <div className="space-y-2">{filtered.map((item) => <LibraryCard key={item.id} item={item} open={openId === item.id} onToggle={() => setOpenId(openId === item.id ? null : item.id)} />)}</div>
        {filtered.length === 0 && <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">Không tìm thấy nội dung phù hợp.</div>}
      </> : <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500"><Wrench className="w-8 h-8 mx-auto mb-2 text-slate-300" /><p>{emptyText}</p><Link href="/admin/content" className="text-teal-700 hover:underline inline-block mt-2">Mở chỉnh sửa nội dung</Link></div>}
    </section>
  );
}

function LibraryCard({ item, open, onToggle }: { item: SkillItem; open: boolean; onToggle: () => void }) {
  return <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden"><button className="w-full text-left px-4 lg:px-5 py-4 flex items-center gap-3 hover:bg-slate-50 transition-colors" onClick={onToggle}><span className="px-2 py-1 rounded-md bg-teal-50 text-teal-700 text-[11px] font-medium shrink-0">{item.category}</span><span className="font-medium text-slate-800 flex-1">{item.title}</span><span className="text-slate-400 text-xs">{open ? "Thu gọn" : "Mở"}</span>{open ? <X className="w-4 h-4 text-slate-400" /> : <ChevronIcon />}</button>{open && <div className="px-4 lg:px-5 pb-5 space-y-3 bg-slate-50/50"><div className="rounded-lg bg-white border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed">{item.summary || "Chưa có phần tóm tắt."}</div>{item.sections.map((section, index) => <div key={`${item.id}-${index}`} className="rounded-lg bg-white border border-slate-200 p-4"><p className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2"><span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center text-[10px]">{index + 1}</span>{section.label}</p><div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{section.content || "Chưa có nội dung."}</div></div>)}</div>}</div>;
}

function ChevronIcon() { return <span className="text-slate-400 text-lg leading-none">›</span>; }

function ChecklistPanel({ items }: { items: ChecklistItem[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  if (items.length === 0) return <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500"><ClipboardCheck className="w-8 h-8 mx-auto mb-2 text-slate-300" /><p>Chưa có checklist cho module này.</p><Link href="/admin/content" className="text-teal-700 hover:underline inline-block mt-2">Mở chỉnh sửa nội dung</Link></div>;
  return <section><div className="mb-4"><h3 className="font-heading font-semibold text-slate-800 text-xl">Checklist thực hành</h3><p className="text-sm text-slate-500 mt-1">Đánh dấu từng việc sau khi đã thực hiện.</p></div><div className="space-y-2">{items.map((item) => <button key={item.id} onClick={() => setChecked((current) => ({ ...current, [item.id]: !current[item.id] }))} className={cn("w-full text-left bg-white rounded-xl border p-4 flex items-start gap-3 transition-colors", checked[item.id] ? "border-emerald-200 bg-emerald-50/50" : "border-slate-200/80 hover:border-teal-300")}><span className={cn("w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5", checked[item.id] ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300")}>{checked[item.id] && <Check className="w-3.5 h-3.5" />}</span><span className="flex-1"><span className={cn("block font-medium text-sm", checked[item.id] ? "text-emerald-800 line-through" : "text-slate-800")}>{item.title}</span>{item.description && <span className="block text-xs text-slate-500 mt-1 whitespace-pre-wrap">{item.description}</span>}</span><span className="text-[10px] text-slate-400">{item.category}</span></button>)}</div></section>;
}

function QuizPanel({ moduleTitle, quiz, currentAnswers, submitted, onAnswer, onSubmit }: { moduleTitle: string; quiz: QuizQuestion[]; currentAnswers: Record<number, number>; submitted: boolean; onAnswer: (questionId: number, optionIndex: number) => void; onSubmit: () => void }) {
  return <div className="space-y-4"><div className="bg-white rounded-xl border border-slate-200/80 p-6"><h3 className="font-heading font-semibold text-slate-800 text-lg mb-1">Bài kiểm tra: {moduleTitle}</h3><p className="text-sm text-slate-500 mb-6">Trả lời {quiz.length} câu hỏi. Đạt 80% trở lên để hoàn thành module.</p><div className="space-y-6">{quiz.map((question, index) => <QuizQuestionCard key={question.id} question={question} index={index} selectedAnswer={currentAnswers[question.id]} onSelect={onAnswer} submitted={submitted} />)}</div>{!submitted && <Button onClick={onSubmit} disabled={Object.keys(currentAnswers).length < quiz.length} className={cn("mt-8", Object.keys(currentAnswers).length >= quiz.length ? "bg-teal-600 hover:bg-teal-700" : "")}>Nộp bài ({Object.keys(currentAnswers).length}/{quiz.length})</Button>}</div></div>;
}

function QuizQuestionCard({ question, index, selectedAnswer, onSelect, submitted }: { question: QuizQuestion; index: number; selectedAnswer?: number; onSelect: (questionId: number, optionIndex: number) => void; submitted: boolean }) {
  return <div className="border border-slate-200/80 rounded-lg p-4"><p className="font-medium text-slate-800 text-sm mb-3"><span className="text-teal-600 mr-1.5">Câu {index + 1}.</span>{question.question}</p><div className="space-y-2">{question.options.map((option, optionIndex) => { const isSelected = selectedAnswer === optionIndex; const isCorrect = question.correctAnswer === optionIndex; let optionStyle = "border-slate-200 hover:border-slate-300 hover:bg-slate-50"; if (submitted) { if (isCorrect) optionStyle = "border-emerald-300 bg-emerald-50"; else if (isSelected && !isCorrect) optionStyle = "border-red-300 bg-red-50"; } else if (isSelected) optionStyle = "border-teal-400 bg-teal-50"; return <button key={optionIndex} onClick={() => onSelect(question.id, optionIndex)} disabled={submitted} className={cn("w-full text-left px-4 py-2.5 rounded-md border text-sm transition-all duration-150 flex items-center gap-2", optionStyle)}><span className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] font-bold", isSelected && !submitted ? "border-teal-500 bg-teal-500 text-white" : submitted && isCorrect ? "border-emerald-500 bg-emerald-500 text-white" : submitted && isSelected && !isCorrect ? "border-red-500 bg-red-500 text-white" : "border-slate-300")}>{String.fromCharCode(65 + optionIndex)}</span><span className={cn(submitted && isCorrect ? "text-emerald-800 font-medium" : submitted && isSelected && !isCorrect ? "text-red-700" : "text-slate-700")}>{option}</span>{submitted && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto shrink-0" />}{submitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 ml-auto shrink-0" />}</button>; })}</div></div>;
}

function ResultsPanel({ moduleTitle, quiz, score, answers, onRetry }: { moduleTitle: string; quiz: QuizQuestion[]; score?: number; answers: Record<number, number>; onRetry: () => void }) {
  if (score === undefined) return <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center"><Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" /><h3 className="font-heading font-semibold text-slate-800 mb-2">Chưa có kết quả</h3><p className="text-sm text-slate-500">Hãy hoàn thành bài kiểm tra để xem kết quả.</p></div>;
  const passed = score >= 80;
  const correct = quiz.filter((question) => answers[question.id] === question.correctAnswer).length;
  return <div className="space-y-4"><div className={cn("rounded-xl border p-6 text-center", passed ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200")}><div className={cn("w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center", passed ? "bg-emerald-100" : "bg-amber-100")}>{passed ? <CheckCircle className="w-8 h-8 text-emerald-600" /> : <Trophy className="w-8 h-8 text-amber-600" />}</div><h3 className={cn("font-heading font-bold text-2xl mb-1", passed ? "text-emerald-800" : "text-amber-800")}>{score}%</h3><p className={cn("text-sm font-medium mb-1", passed ? "text-emerald-700" : "text-amber-700")}>{passed ? `Xuất sắc! Bạn đã hoàn thành ${moduleTitle}.` : "Chưa đạt. Cần 80% trở lên."}</p><p className="text-xs text-slate-500">Đúng {correct}/{quiz.length} câu</p>{!passed && <Button onClick={onRetry} className="mt-4 bg-amber-600 hover:bg-amber-700">Làm lại</Button>}</div><div className="bg-white rounded-xl border border-slate-200/80 p-6"><h4 className="font-heading font-semibold text-slate-800 mb-4">Chi tiết đáp án</h4><div className="space-y-3">{quiz.map((question, index) => { const userAnswer = answers[question.id]; const isCorrect = userAnswer === question.correctAnswer; return <div key={question.id} className={cn("p-3 rounded-md border text-sm", isCorrect ? "border-emerald-200 bg-emerald-50/50" : "border-red-200 bg-red-50/50")}><div className="flex items-start gap-2">{isCorrect ? <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> : <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />}<div><p className="font-medium text-slate-700">Câu {index + 1}: {question.question}</p>{!isCorrect && <p className="text-xs mt-1"><span className="text-red-600">Bạn chọn: {question.options[userAnswer] || "Chưa trả lời"}</span><br /><span className="text-emerald-600">Đáp án đúng: {question.options[question.correctAnswer]}</span></p>}</div></div></div>; })}</div></div></div>;
}
