import { useCallback, useState } from "react";

const STORAGE_KEY = "lms_progress_2026";

interface ProgressData {
  completedModules: number[];
  quizScores: Record<number, number>;
  quizAnswers: Record<number, Record<number, number>>;
}

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedModules: [], quizScores: {}, quizAnswers: {} };
}

function persistProgress(data: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [data, setData] = useState<ProgressData>(loadProgress);

  const saveQuizResult = useCallback((moduleId: number, score: number, answers: Record<number, number>) => {
    setData((prev) => {
      const newCompleted = score >= 80 && !prev.completedModules.includes(moduleId)
        ? [...prev.completedModules, moduleId]
        : prev.completedModules;
      const newData: ProgressData = {
        completedModules: newCompleted,
        quizScores: { ...prev.quizScores, [moduleId]: score },
        quizAnswers: { ...prev.quizAnswers, [moduleId]: answers },
      };
      persistProgress(newData);
      return newData;
    });
  }, []);

  return {
    completedModules: data.completedModules,
    quizScores: data.quizScores,
    quizAnswers: data.quizAnswers,
    saveQuizResult,
  };
}
