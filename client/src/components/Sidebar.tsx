/**
 * Design: Corporate Academy — Sidebar dark slate-900, 280px fixed
 * Accent: teal left-border on active, progress ring per module
 */
import { useContentStore } from "@/hooks/useContentStore";
import { cn } from "@/lib/utils";
import {
  BarChart3, Bot, Building2, Database, LayoutDashboard,
  ListOrdered, Megaphone, MessageSquare, Phone, Rocket,
  Route, Search, Swords, Target, UserCheck, Users, Settings2
} from "lucide-react";
import { Link, useLocation } from "wouter";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard, Rocket, UserCheck, Target, Route, Building2,
  Search, ListOrdered, MessageSquare, Phone, Database, Bot,
  Megaphone, Swords, BarChart3, Users
};

interface SidebarProps {
  completedModules: number[];
  quizScores: Record<number, number>;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ completedModules, quizScores, isOpen, onClose }: SidebarProps) {
  const [location] = useLocation();
  const { visibleModules } = useContentStore();

  const totalModules = visibleModules.length;
  const completedCount = completedModules.length;
  const progressPercent = Math.round((completedCount / totalModules) * 100);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-[280px] bg-[#0f172a] text-slate-300 z-50 flex flex-col transition-transform duration-250",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-700/50">
          <h1 className="text-white font-heading text-lg font-bold leading-tight">
            Training LMS
          </h1>
          <p className="text-xs text-slate-400 mt-1">Đào tạo nhân sự BĐS 2026</p>
        </div>

        {/* Progress */}
        <div className="px-5 py-3 border-b border-slate-700/50">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400">Tiến độ tổng</span>
            <span className="text-teal-400 font-medium">{progressPercent}%</span>
          </div>
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 mt-1">{completedCount}/{totalModules} module hoàn thành</p>
        </div>

        {/* Module list */}
        <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          {visibleModules.map((mod) => {
            const Icon = iconMap[mod.icon] || LayoutDashboard;
            const isActive = location === `/module/${mod.id}` || (location === "/" && mod.id === 1);
            const isCompleted = completedModules.includes(mod.id);
            const score = quizScores[mod.id];

            return (
              <Link
                key={mod.id}
                href={mod.id === 1 ? "/" : `/module/${mod.id}`}
                onClick={onClose}
              >
                <div
                  className={cn(
                    "flex items-center gap-3 px-5 py-2.5 text-sm transition-all duration-150 relative group",
                    isActive
                      ? "bg-slate-800/80 text-white border-l-3 border-teal-400"
                      : "hover:bg-slate-800/40 border-l-3 border-transparent"
                  )}
                >
                  <div
                    className={cn(
                      "w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors",
                      isActive ? "bg-teal-500/20 text-teal-400" : "bg-slate-700/50 text-slate-400 group-hover:text-slate-300"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="truncate flex-1 leading-tight">{mod.title}</span>
                  {isCompleted && (
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {!isCompleted && score !== undefined && (
                    <span className="text-[10px] text-amber-400 font-medium">{score}%</span>
                  )}
                </div>
              </Link>
            );
          })}
          <Link href="/admin/content" onClick={onClose}>
            <div
              className={cn(
                "flex items-center gap-3 px-5 py-2.5 text-sm transition-all duration-150 relative group border-l-3",
                location === "/admin/content"
                  ? "bg-slate-800/80 text-white border-teal-400"
                  : "hover:bg-slate-800/40 border-transparent"
              )}
            >
              <div className={cn(
                "w-7 h-7 rounded-md flex items-center justify-center shrink-0",
                location === "/admin/content" ? "bg-teal-500/20 text-teal-400" : "bg-slate-700/50 text-slate-400"
              )}>
                <Settings2 className="w-4 h-4" />
              </div>
              <span className="truncate flex-1 leading-tight">Chỉnh sửa nội dung</span>
            </div>
          </Link>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
              NV
            </div>
            <div>
              <p className="text-xs text-white font-medium">Nhân viên mới</p>
              <p className="text-[10px] text-slate-500">Giai đoạn: Xây nền</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
