import { TabelaLivros } from "../components/TabelaLivros";
import { livroTest } from "../types/livro-test";

export function ListaLivros() {
  const livros = livroTest;

  return (
    <>
      <h1>Livros</h1>
      <TabelaLivros livros={livros} />
    </>
  );
}