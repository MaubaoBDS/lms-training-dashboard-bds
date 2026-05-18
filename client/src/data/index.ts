import { modules as modules1 } from './modules';
import { modules2 } from './modules2';
import type { Module, QuizQuestion } from './modules';

export type { Module, QuizQuestion };

export const allModules: Module[] = [...modules1, ...modules2];
