/**
 * Design: Corporate Academy — Dashboard overview
 * Hero banner + stats cards + roadmap timeline
 */
import Sidebar from "@/components/Sidebar";
import { allModules } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { BookOpen, CheckCircle2, Clock, GraduationCap, Menu, Trophy } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Dashboard() {
  const { completedModules, quizScores } = useProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalModules = allModules.length;
  const completedCount = completedModules.length;
  const avgScore = Object.values(quizScores).length > 0
    ? Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / Object.values(quizScores).length)
    : 0;

  const roadmap = [
    { phase: "Ngày 1–30", title: "Xây nền", desc: "Ước Mơ, sản phẩm, CRM, pitch, role-play", color: "bg-teal-500" },
    { phase: "Ngày 31–60", title: "Thực chiến", desc: "Tạo nguồn khách, tăng volume, đi thực tế", color: "bg-blue-500" },
    { phase: "Ngày 61–90", title: "Tốc độ", desc: "Tối ưu pipeline, chốt giao dịch đầu tiên", color: "bg-violet-500" },
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
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 lg:px-8 h-14 flex items-center">
          <button
            className="lg:hidden mr-3 p-1.5 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <h2 className="font-heading font-semibold text-slate-800 text-base">Tổng quan đào tạo</h2>
        </header>

        <main className="p-4 lg:p-8 max-w-6xl">
          {/* Hero */}
          <div className="relative rounded-xl overflow-hidden mb-8 h-48 lg:h-56">
            <img
              src="/manus-storage/hero-banner-lms_3025816d.png"
              alt="Training LMS Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-10">
              <h1 className="font-heading text-white text-2xl lg:text-3xl font-bold mb-2">
                Chương trình Đào tạo 2026
              </h1>
              <p className="text-slate-200 text-sm lg:text-base max-w-lg">
                Xây nền tảng vững chắc để tư vấn chuyên nghiệp, chốt giao dịch thành công và phát triển bền vững.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
            <StatCard
              icon={<BookOpen className="w-5 h-5" />}
              label="Module"
              value={`${completedCount}/${totalModules}`}
              color="text-teal-600"
              bg="bg-teal-50"
            />
            <StatCard
              icon={<CheckCircle2 className="w-5 h-5" />}
              label="Hoàn thành"
              value={`${Math.round((completedCount / totalModules) * 100)}%`}
              color="text-blue-600"
              bg="bg-blue-50"
            />
            <StatCard
              icon={<Trophy className="w-5 h-5" />}
              label="Điểm TB"
              value={avgScore > 0 ? `${avgScore}%` : "—"}
              color="text-amber-600"
              bg="bg-amber-50"
            />
            <StatCard
              icon={<Clock className="w-5 h-5" />}
              label="Giai đoạn"
              value="Xây nền"
              color="text-violet-600"
              bg="bg-violet-50"
            />
          </div>

          {/* Roadmap */}
          <section className="mb-8">
            <h3 className="font-heading font-semibold text-slate-800 text-lg mb-4">Lộ trình 30-60-90 ngày</h3>
            <div className="grid lg:grid-cols-3 gap-4">
              {roadmap.map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-slate-200/80 p-5 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{item.phase}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Module grid */}
          <section>
            <h3 className="font-heading font-semibold text-slate-800 text-lg mb-4">Các module đào tạo</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allModules.slice(1).map((mod) => {
                const isCompleted = completedModules.includes(mod.id);
                const score = quizScores[mod.id];
                return (
                  <Link key={mod.id} href={`/module/${mod.id}`}>
                    <div className="bg-white rounded-lg border border-slate-200/80 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                      <div className="flex items-start justify-between mb-2">
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center"
                          style={{ backgroundColor: `${mod.accentColor}15`, color: mod.accentColor }}
                        >
                          <span className="text-sm font-bold">{mod.id}</span>
                        </div>
                        {isCompleted && (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="font-heading font-semibold text-slate-800 text-sm mb-1 group-hover:text-teal-700 transition-colors">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{mod.shortDesc}</p>
                      {score !== undefined && (
                        <div className="mt-2 flex items-center gap-1.5">
                          <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${score}%`, backgroundColor: score >= 80 ? '#10b981' : '#f59e0b' }}
                            />
                          </div>
                          <span className="text-[10px] font-medium" style={{ color: score >= 80 ? '#10b981' : '#f59e0b' }}>
                            {score}%
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color, bg }: { icon: React.ReactNode; label: string; value: string; color: string; bg: string }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200/80 p-4">
      <div className={`w-9 h-9 rounded-md ${bg} ${color} flex items-center justify-center mb-2`}>
        {icon}
      </div>
      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
      <p className="font-heading font-bold text-slate-800 text-lg">{value}</p>
    </div>
  );
}
