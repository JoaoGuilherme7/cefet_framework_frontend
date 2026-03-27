// src/types/Livro.ts
export type Livro = {
  id: number;
  titulo: string;
  autor: string;
  anoLancamento?: number; // Campo opcional
};