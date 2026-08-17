import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { allModules } from "@/data";
import {
  makeEmptyChecklist,
  makeEmptyScenario,
  makeEmptySkill,
  type ChecklistItem,
  type EditableModule,
  type LibrarySection,
  type SkillItem,
  useContentStore,
} from "@/hooks/useContentStore";
import { useProgress } from "@/hooks/useProgress";
import {
  ArchiveRestore,
  ArrowLeft,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardCheck,
  Download,
  Eye,
  EyeOff,
  FileUp,
  ListChecks,
  Plus,
  RotateCcw,
  Save,
  Settings2,
  Trash2,
  Wrench,
  X,
} from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const editorTabs = [
  { id: "knowledge", label: "Kiến thức", icon: BookOpen },
  { id: "skills", label: "Kỹ năng", icon: Wrench },
  { id: "scenarios", label: "Tình huống", icon: ListChecks },
  { id: "checklists", label: "Checklist", icon: ClipboardCheck },
] as const;
type EditorTab = (typeof editorTabs)[number]["id"];
type LibraryType = "skills" | "scenarios";

export default function ContentAdmin() {
  const { completedModules, quizScores } = useProgress();
  const {
    state,
    allEditableModules,
    getModule,
    updateModule,
    setModuleVisibility,
    restoreModule,
    restoreAll,
    importState,
    exportState,
  } = useContentStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState(1);
  const [activeTab, setActiveTab] = useState<EditorTab>("knowledge");
  const [draft, setDraft] = useState<EditableModule | undefined>(() => getModule(1));
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [librarySearch, setLibrarySearch] = useState("");
  const importInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraft(getModule(selectedModuleId));
    setEditingItemId(null);
    setLibrarySearch("");
  }, [selectedModuleId]);

  const selectedModule = draft;
  const isVisible = selectedModule ? !state.hiddenModules.includes(selectedModule.id) : false;

  const updateDraft = (patch: Partial<EditableModule>) => {
    setDraft((current) => current ? { ...current, ...patch } : current);
  };

  const saveDraft = () => {
    if (!selectedModule) return;
    updateModule(selectedModule.id, {
      title: selectedModule.title,
      shortDesc: selectedModule.shortDesc,
      content: selectedModule.content,
      skills: selectedModule.skills,
      scenarios: selectedModule.scenarios,
      checklists: selectedModule.checklists,
    });
    toast.success("Đã lưu thay đổi trên trình duyệt này");
  };

  const handleImport = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        importState(JSON.parse(String(reader.result)));
        toast.success("Đã nhập bản sao lưu nội dung");
        setDraft(getModule(selectedModuleId));
      } catch {
        toast.error("File không đúng định dạng JSON của LMS");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  const restoreCurrentModule = () => {
    if (!selectedModule) return;
    if (!window.confirm(`Khôi phục “${selectedModule.title}” về nội dung gốc? Các chỉnh sửa của module này sẽ mất.`)) return;
    restoreModule(selectedModule.id);
    const base = allModules.find((module) => module.id === selectedModule.id);
    if (base) setDraft({ ...base, skills: [], scenarios: [], checklists: [] });
    toast.success("Đã khôi phục module về mặc định");
  };

  const addLibraryItem = (type: LibraryType) => {
    if (!selectedModule) return;
    const item = type === "skills" ? makeEmptySkill() : makeEmptyScenario();
    updateDraft({ [type]: [...selectedModule[type], item] } as Partial<EditableModule>);
    setEditingItemId(item.id);
    setLibrarySearch("");
  };

  const addChecklist = () => {
    if (!selectedModule) return;
    const item = makeEmptyChecklist();
    updateDraft({ checklists: [...selectedModule.checklists, item] });
    setEditingItemId(item.id);
  };

  const removeLibraryItem = (type: LibraryType, itemId: string) => {
    if (!selectedModule) return;
    if (!window.confirm("Xóa mục này khỏi bản chỉnh sửa?")) return;
    updateDraft({ [type]: selectedModule[type].filter((item) => item.id !== itemId) } as Partial<EditableModule>);
    if (editingItemId === itemId) setEditingItemId(null);
  };

  const removeChecklist = (itemId: string) => {
    if (!selectedModule) return;
    if (!window.confirm("Xóa checklist này khỏi bản chỉnh sửa?")) return;
    updateDraft({ checklists: selectedModule.checklists.filter((item) => item.id !== itemId) });
    if (editingItemId === itemId) setEditingItemId(null);
  };

  const updateLibraryItem = (type: LibraryType, itemId: string, patch: Partial<SkillItem>) => {
    if (!selectedModule) return;
    updateDraft({
      [type]: selectedModule[type].map((item) => item.id === itemId ? { ...item, ...patch } : item),
    } as Partial<EditableModule>);
  };

  const updateSection = (type: LibraryType, itemId: string, sectionIndex: number, patch: Partial<LibrarySection>) => {
    if (!selectedModule) return;
    const items = selectedModule[type].map((item) => item.id === itemId
      ? { ...item, sections: item.sections.map((section, index) => index === sectionIndex ? { ...section, ...patch } : section) }
      : item);
    updateDraft({ [type]: items } as Partial<EditableModule>);
  };

  const addSection = (type: LibraryType, itemId: string) => {
    if (!selectedModule) return;
    const items = selectedModule[type].map((item) => item.id === itemId
      ? { ...item, sections: [...item.sections, { label: "Nội dung mới", content: "" }] }
      : item);
    updateDraft({ [type]: items } as Partial<EditableModule>);
  };

  const removeSection = (type: LibraryType, itemId: string, sectionIndex: number) => {
    if (!selectedModule) return;
    const items = selectedModule[type].map((item) => item.id === itemId
      ? { ...item, sections: item.sections.filter((_, index) => index !== sectionIndex) }
      : item);
    updateDraft({ [type]: items } as Partial<EditableModule>);
  };

  const filteredItems = useMemo(() => {
    if (!selectedModule || (activeTab !== "skills" && activeTab !== "scenarios")) return [];
    const items = selectedModule[activeTab];
    const query = librarySearch.trim().toLowerCase();
    if (!query) return items;
    return items.filter((item) => `${item.title} ${item.category} ${item.tags.join(" ")} ${item.summary}`.toLowerCase().includes(query));
  }, [activeTab, librarySearch, selectedModule]);

  const editingItem = selectedModule && (activeTab === "skills" || activeTab === "scenarios")
    ? selectedModule[activeTab].find((item) => item.id === editingItemId)
    : undefined;
  const editingChecklist = selectedModule && activeTab === "checklists"
    ? selectedModule.checklists.find((item) => item.id === editingItemId)
    : undefined;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar
        completedModules={completedModules}
        quizScores={quizScores}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="lg:ml-[280px]">
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/60 px-4 lg:px-8 h-14 flex items-center gap-3">
          <button className="lg:hidden p-1.5 rounded-md hover:bg-slate-100" onClick={() => setSidebarOpen(true)} aria-label="Mở menu">
            <Settings2 className="w-5 h-5 text-slate-600" />
          </button>
          <Link href="/" className="p-1.5 rounded-md hover:bg-slate-100">
            <ArrowLeft className="w-4 h-4 text-slate-500" />
          </Link>
          <div>
            <h1 className="font-heading font-semibold text-slate-800 text-base">Chỉnh sửa kho kiến thức</h1>
            <p className="text-[11px] text-slate-500 hidden sm:block">Giữ, sửa hoặc xóa từng nội dung theo nhu cầu thực tế</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <input ref={importInputRef} type="file" accept="application/json" className="hidden" onChange={handleImport} />
            <Button variant="outline" size="sm" onClick={() => importInputRef.current?.click()} className="hidden sm:inline-flex gap-1.5">
              <FileUp className="w-3.5 h-3.5" /> Nhập
            </Button>
            <Button variant="outline" size="sm" onClick={exportState} className="hidden sm:inline-flex gap-1.5">
              <Download className="w-3.5 h-3.5" /> Xuất bản sao lưu
            </Button>
            <Button size="sm" onClick={saveDraft} className="gap-1.5 bg-teal-600 hover:bg-teal-700">
              <Save className="w-3.5 h-3.5" /> Lưu thay đổi
            </Button>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          <div className="mb-5 rounded-xl border border-teal-200 bg-teal-50/70 p-4 flex items-start gap-3">
            <Settings2 className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
            <div className="text-sm text-teal-900">
              <p className="font-semibold">Chế độ biên tập thủ công</p>
              <p className="mt-1 text-teal-800/80">Các thay đổi được lưu trên trình duyệt này. Hãy dùng “Xuất bản sao lưu” để giữ file dữ liệu hoặc chuyển sang máy khác.</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-[280px_minmax(0,1fr)] gap-5 items-start">
            <section className="bg-white rounded-xl border border-slate-200/80 overflow-hidden xl:sticky xl:top-20">
              <div className="p-4 border-b border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-heading font-semibold text-slate-800">Danh sách hạng mục</h2>
                    <p className="text-xs text-slate-500 mt-1">{allEditableModules.length - state.hiddenModules.length}/{allEditableModules.length} đang hiển thị</p>
                  </div>
                  <button className="text-xs text-rose-600 hover:underline" onClick={() => { if (window.confirm("Khôi phục toàn bộ nội dung và module về mặc định?")) { restoreAll(); setDraft(getModule(selectedModuleId)); toast.success("Đã khôi phục toàn bộ"); } }}>
                    Khôi phục tất cả
                  </button>
                </div>
              </div>
              <div className="max-h-[calc(100vh-240px)] overflow-y-auto p-2">
                {allEditableModules.map((module) => {
                  const visible = !state.hiddenModules.includes(module.id);
                  const selected = selectedModuleId === module.id;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setSelectedModuleId(module.id)}
                      className={`w-full text-left px-3 py-3 rounded-lg flex items-center gap-3 transition-colors ${selected ? "bg-teal-50 text-teal-900" : "hover:bg-slate-50 text-slate-700"} ${!visible ? "opacity-50" : ""}`}
                    >
                      <span className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-xs font-bold ${selected ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"}`}>{module.id}</span>
                      <span className="truncate flex-1 text-sm font-medium">{module.title}</span>
                      {!visible ? <EyeOff className="w-3.5 h-3.5 text-slate-400" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-300" />}
                    </button>
                  );
                })}
              </div>
            </section>

            {selectedModule && (
              <section className="min-w-0">
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 lg:p-6 mb-5">
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: selectedModule.accentColor }}>
                      {selectedModule.id}
                    </div>
                    <div className="flex-1 min-w-[220px]">
                      <label className="text-xs font-medium text-slate-500">Tên hạng mục</label>
                      <Input value={selectedModule.title} onChange={(event) => updateDraft({ title: event.target.value })} className="mt-1 text-lg font-semibold" />
                      <label className="block text-xs font-medium text-slate-500 mt-3">Mô tả ngắn</label>
                      <Input value={selectedModule.shortDesc} onChange={(event) => updateDraft({ shortDesc: event.target.value })} className="mt-1" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button variant={isVisible ? "outline" : "secondary"} size="sm" onClick={() => setModuleVisibility(selectedModule.id, !isVisible)} className="gap-1.5">
                        {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        {isVisible ? "Đang hiển thị" : "Đang ẩn"}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={restoreCurrentModule} className="gap-1.5 text-slate-500 hover:text-rose-600">
                        <RotateCcw className="w-3.5 h-3.5" /> Khôi phục module
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden">
                  <div className="border-b border-slate-200/80 overflow-x-auto">
                    <div className="flex min-w-max px-2">
                      {editorTabs.map(({ id, label, icon: Icon }) => (
                        <button key={id} onClick={() => { setActiveTab(id); setEditingItemId(null); }} className={`flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium border-b-2 transition-colors ${activeTab === id ? "border-teal-500 text-teal-700" : "border-transparent text-slate-500 hover:text-slate-700"}`}>
                          <Icon className="w-4 h-4" /> {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 lg:p-6">
                    {activeTab === "knowledge" && (
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-heading font-semibold text-slate-800">Nội dung lý thuyết</h3>
                            <p className="text-xs text-slate-500 mt-1">Có thể chỉnh sửa Markdown trực tiếp. Nội dung này sẽ hiển thị trong tab Tài liệu.</p>
                          </div>
                          <span className="text-xs text-slate-400">{selectedModule.content.length.toLocaleString("vi-VN")} ký tự</span>
                        </div>
                        <Textarea value={selectedModule.content} onChange={(event) => updateDraft({ content: event.target.value })} className="min-h-[520px] font-mono text-xs leading-relaxed" />
                      </div>
                    )}

                    {(activeTab === "skills" || activeTab === "scenarios") && (
                      <LibraryEditor
                        type={activeTab}
                        items={filteredItems}
                        totalItems={selectedModule[activeTab].length}
                        search={librarySearch}
                        onSearch={setLibrarySearch}
                        onAdd={() => addLibraryItem(activeTab)}
                        onSelect={setEditingItemId}
                        onDelete={(id) => removeLibraryItem(activeTab, id)}
                        editingItem={editingItem}
                        onUpdate={(patch) => editingItem && updateLibraryItem(activeTab, editingItem.id, patch)}
                        onUpdateSection={(index, patch) => editingItem && updateSection(activeTab, editingItem.id, index, patch)}
                        onAddSection={() => editingItem && addSection(activeTab, editingItem.id)}
                        onRemoveSection={(index) => editingItem && removeSection(activeTab, editingItem.id, index)}
                      />
                    )}

                    {activeTab === "checklists" && (
                      <ChecklistEditor
                        items={selectedModule.checklists}
                        editingItem={editingChecklist}
                        onAdd={addChecklist}
                        onSelect={setEditingItemId}
                        onDelete={removeChecklist}
                        onUpdate={(patch) => editingChecklist && updateDraft({ checklists: selectedModule.checklists.map((item) => item.id === editingChecklist.id ? { ...item, ...patch } : item) })}
                      />
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function LibraryEditor({
  type, items, totalItems, search, onSearch, onAdd, onSelect, onDelete, editingItem, onUpdate, onUpdateSection, onAddSection, onRemoveSection,
}: {
  type: LibraryType;
  items: SkillItem[];
  totalItems: number;
  search: string;
  onSearch: (value: string) => void;
  onAdd: () => void;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  editingItem?: SkillItem;
  onUpdate: (patch: Partial<SkillItem>) => void;
  onUpdateSection: (index: number, patch: Partial<LibrarySection>) => void;
  onAddSection: () => void;
  onRemoveSection: (index: number) => void;
}) {
  const title = type === "skills" ? "Kỹ năng thực hành" : "Tình huống & Kịch bản";
  return (
    <div className="grid lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.4fr)] gap-5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="font-heading font-semibold text-slate-800">{title}</h3>
            <p className="text-xs text-slate-500 mt-1">{totalItems} mục đã tạo</p>
          </div>
          <Button size="sm" onClick={onAdd} className="gap-1 bg-teal-600 hover:bg-teal-700"><Plus className="w-3.5 h-3.5" /> Thêm</Button>
        </div>
        <Input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Tìm theo tên, tag, nhóm..." className="mb-3" />
        <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
          {items.map((item) => (
            <div key={item.id} className={`border rounded-lg p-3 transition-colors ${editingItem?.id === item.id ? "border-teal-400 bg-teal-50/50" : "border-slate-200 hover:border-slate-300"}`}>
              <button className="w-full text-left" onClick={() => onSelect(item.id)}>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 mt-0.5">{item.category}</span>
                  <span className="font-medium text-sm text-slate-800 flex-1">{item.title}</span>
                </div>
                {item.summary && <p className="text-xs text-slate-500 mt-2 line-clamp-2">{item.summary}</p>}
              </button>
              <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-slate-100">
                <button className="text-xs text-slate-500 hover:text-teal-700" onClick={() => onSelect(item.id)}>Chỉnh sửa</button>
                <button className="text-xs text-rose-500 hover:text-rose-700" onClick={() => onDelete(item.id)}>Xóa</button>
              </div>
            </div>
          ))}
          {items.length === 0 && <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">Chưa có nội dung. Hãy bấm “Thêm”.</div>}
        </div>
      </div>

      {editingItem ? (
        <div className="border border-slate-200 rounded-xl p-4 lg:p-5 bg-slate-50/60">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div><p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">Đang chỉnh sửa</p><h4 className="font-heading font-semibold text-slate-800 mt-1">{editingItem.title}</h4></div>
            <button onClick={() => onSelect("")} className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500" aria-label="Đóng trình chỉnh sửa"><X className="w-4 h-4" /></button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <Field label="Tên mục"><Input value={editingItem.title} onChange={(event) => onUpdate({ title: event.target.value })} /></Field>
            <Field label="Nhóm"><Input value={editingItem.category} onChange={(event) => onUpdate({ category: event.target.value })} /></Field>
          </div>
          <Field label="Tags, ngăn cách bằng dấu phẩy"><Input value={editingItem.tags.join(", ")} onChange={(event) => onUpdate({ tags: event.target.value.split(",").map((tag) => tag.trim()).filter(Boolean) })} /></Field>
          <Field label="Tóm tắt / câu dẫn"><Textarea value={editingItem.summary} onChange={(event) => onUpdate({ summary: event.target.value })} className="min-h-20" /></Field>
          <div className="flex items-center justify-between mt-5 mb-2"><h5 className="font-medium text-sm text-slate-800">Các phần nội dung</h5><Button variant="outline" size="sm" onClick={onAddSection} className="gap-1"><Plus className="w-3.5 h-3.5" /> Thêm phần</Button></div>
          <div className="space-y-3">
            {editingItem.sections.map((section, index) => (
              <div key={`${editingItem.id}-${index}`} className="bg-white border border-slate-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2"><Input value={section.label} onChange={(event) => onUpdateSection(index, { label: event.target.value })} className="font-medium" /><button onClick={() => onRemoveSection(index)} className="p-1.5 rounded hover:bg-rose-50 text-rose-500" title="Xóa phần"><Trash2 className="w-3.5 h-3.5" /></button></div>
                <Textarea value={section.content} onChange={(event) => onUpdateSection(index, { content: event.target.value })} className="min-h-24" placeholder="Nhập nội dung phần này..." />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex min-h-[300px] rounded-xl border border-dashed border-slate-300 items-center justify-center text-center p-8 text-slate-500"><div><Wrench className="w-8 h-8 mx-auto mb-2 text-slate-300" /><p>Chọn một mục bên trái để chỉnh sửa.</p></div></div>
      )}
    </div>
  );
}

function ChecklistEditor({ items, editingItem, onAdd, onSelect, onDelete, onUpdate }: { items: ChecklistItem[]; editingItem?: ChecklistItem; onAdd: () => void; onSelect: (id: string) => void; onDelete: (id: string) => void; onUpdate: (patch: Partial<ChecklistItem>) => void }) {
  return (
    <div className="grid lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.4fr)] gap-5">
      <div>
        <div className="flex items-center justify-between mb-3"><div><h3 className="font-heading font-semibold text-slate-800">Checklist & Công cụ</h3><p className="text-xs text-slate-500 mt-1">{items.length} mục đã tạo</p></div><Button size="sm" onClick={onAdd} className="gap-1 bg-teal-600 hover:bg-teal-700"><Plus className="w-3.5 h-3.5" /> Thêm</Button></div>
        <div className="space-y-2">
          {items.map((item) => <div key={item.id} className={`border rounded-lg p-3 ${editingItem?.id === item.id ? "border-teal-400 bg-teal-50/50" : "border-slate-200"}`}><button className="w-full text-left" onClick={() => onSelect(item.id)}><span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">{item.category}</span><p className="font-medium text-sm text-slate-800 mt-2">{item.title}</p></button><div className="flex justify-end gap-2 mt-2 pt-2 border-t border-slate-100"><button className="text-xs text-slate-500 hover:text-teal-700" onClick={() => onSelect(item.id)}>Chỉnh sửa</button><button className="text-xs text-rose-500 hover:text-rose-700" onClick={() => onDelete(item.id)}>Xóa</button></div></div>)}
          {items.length === 0 && <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">Chưa có checklist. Hãy bấm “Thêm”.</div>}
        </div>
      </div>
      {editingItem ? <div className="border border-slate-200 rounded-xl p-4 lg:p-5 bg-slate-50/60"><div className="flex items-center justify-between mb-4"><div><p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">Đang chỉnh sửa</p><h4 className="font-heading font-semibold text-slate-800 mt-1">{editingItem.title}</h4></div><button onClick={() => onSelect("")} className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500" aria-label="Đóng trình chỉnh sửa"><X className="w-4 h-4" /></button></div><Field label="Tên checklist"><Input value={editingItem.title} onChange={(event) => onUpdate({ title: event.target.value })} /></Field><Field label="Nhóm"><Input value={editingItem.category} onChange={(event) => onUpdate({ category: event.target.value })} /></Field><Field label="Mô tả / hướng dẫn"><Textarea value={editingItem.description} onChange={(event) => onUpdate({ description: event.target.value })} className="min-h-36" /></Field></div> : <div className="hidden lg:flex min-h-[300px] rounded-xl border border-dashed border-slate-300 items-center justify-center text-center p-8 text-slate-500"><div><ClipboardCheck className="w-8 h-8 mx-auto mb-2 text-slate-300" /><p>Chọn một checklist bên trái để chỉnh sửa.</p></div></div>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-xs font-medium text-slate-600 mb-3">{label}<div className="mt-1">{children}</div></label>;
}
