import { allModules, type Module } from "@/data";
import { useCallback, useEffect, useMemo, useState } from "react";

export type LibrarySection = {
  label: string;
  content: string;
};

export type SkillItem = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  sections: LibrarySection[];
};

export type ScenarioItem = SkillItem;

export type ChecklistItem = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export type ModuleOverride = {
  title?: string;
  shortDesc?: string;
  content?: string;
  skills?: SkillItem[];
  scenarios?: ScenarioItem[];
  checklists?: ChecklistItem[];
};

export type ContentState = {
  version: 1;
  hiddenModules: number[];
  overrides: Record<string, ModuleOverride>;
};

export type EditableModule = Module & {
  skills: SkillItem[];
  scenarios: ScenarioItem[];
  checklists: ChecklistItem[];
};

const STORAGE_KEY = "lms-training-content-v1";

const emptyState = (): ContentState => ({
  version: 1,
  hiddenModules: [],
  overrides: {},
});

function isBrowser() {
  return typeof window !== "undefined";
}

function loadState(): ContentState {
  if (!isBrowser()) return emptyState();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as Partial<ContentState>;
    return {
      version: 1,
      hiddenModules: Array.isArray(parsed.hiddenModules) ? parsed.hiddenModules.filter((id): id is number => typeof id === "number") : [],
      overrides: parsed.overrides && typeof parsed.overrides === "object" ? parsed.overrides as Record<string, ModuleOverride> : {},
    };
  } catch {
    return emptyState();
  }
}

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export const makeEmptySkill = (prefix = "skill"): SkillItem => ({
  id: createId(prefix),
  title: "Kỹ năng mới",
  category: "Chưa phân loại",
  tags: [],
  summary: "",
  sections: [
    { label: "Khi nào sử dụng", content: "" },
    { label: "Các bước thực hiện", content: "" },
    { label: "Câu nói mẫu", content: "" },
    { label: "Lỗi cần tránh", content: "" },
    { label: "Tiêu chí đạt", content: "" },
  ],
});

export const makeEmptyScenario = (): ScenarioItem => ({
  id: createId("scenario"),
  title: "Tình huống mới",
  category: "Chưa phân loại",
  tags: [],
  summary: "",
  sections: [
    { label: "Câu trả lời ngắn", content: "" },
    { label: "Câu hỏi đào sâu", content: "" },
    { label: "Câu chuyển bước", content: "" },
    { label: "Câu chốt mềm", content: "" },
    { label: "Ghi chú cho sale", content: "" },
  ],
});

export const makeEmptyChecklist = (): ChecklistItem => ({
  id: createId("checklist"),
  title: "Checklist mới",
  description: "",
  category: "Chưa phân loại",
});

export function getEditableModule(module: Module, state: ContentState): EditableModule {
  const override = state.overrides[String(module.id)] ?? {};
  return {
    ...module,
    ...override,
    skills: override.skills ?? [],
    scenarios: override.scenarios ?? [],
    checklists: override.checklists ?? [],
  };
}

export function useContentStore() {
  const [state, setState] = useState<ContentState>(loadState);

  useEffect(() => {
    if (isBrowser()) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const updateModule = useCallback((moduleId: number, patch: ModuleOverride) => {
    setState((current) => ({
      ...current,
      overrides: {
        ...current.overrides,
        [String(moduleId)]: {
          ...current.overrides[String(moduleId)],
          ...patch,
        },
      },
    }));
  }, []);

  const setModuleVisibility = useCallback((moduleId: number, visible: boolean) => {
    setState((current) => ({
      ...current,
      hiddenModules: visible
        ? current.hiddenModules.filter((id) => id !== moduleId)
        : Array.from(new Set([...current.hiddenModules, moduleId])),
    }));
  }, []);

  const restoreModule = useCallback((moduleId: number) => {
    setState((current) => {
      const overrides = { ...current.overrides };
      delete overrides[String(moduleId)];
      return {
        version: 1,
        hiddenModules: current.hiddenModules.filter((id) => id !== moduleId),
        overrides,
      };
    });
  }, []);

  const restoreAll = useCallback(() => setState(emptyState()), []);

  const importState = useCallback((incoming: ContentState) => {
    setState({
      version: 1,
      hiddenModules: Array.isArray(incoming.hiddenModules) ? incoming.hiddenModules : [],
      overrides: incoming.overrides && typeof incoming.overrides === "object" ? incoming.overrides : {},
    });
  }, []);

  const exportState = useCallback(() => {
    if (!isBrowser()) return;
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lms-training-content-backup.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }, [state]);

  const visibleModules = useMemo(
    () => allModules.filter((module) => !state.hiddenModules.includes(module.id)).map((module) => getEditableModule(module, state)),
    [state]
  );

  const getModule = useCallback((moduleId: number) => {
    const base = allModules.find((module) => module.id === moduleId);
    return base ? getEditableModule(base, state) : undefined;
  }, [state]);

  return {
    state,
    visibleModules,
    allEditableModules: allModules.map((module) => getEditableModule(module, state)),
    getModule,
    updateModule,
    setModuleVisibility,
    restoreModule,
    restoreAll,
    importState,
    exportState,
  };
}

export { STORAGE_KEY };
