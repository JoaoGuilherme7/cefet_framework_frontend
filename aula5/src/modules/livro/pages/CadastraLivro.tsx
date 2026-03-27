import { TabelaLivros } from "../components/TabelaLivros";

export function CadastraLivro() {
  const livros = [
    { id: 1, titulo: "Livro 1", autor: "Autor 1" },
    { id: 2, titulo: "Livro 2", autor: "Autor 2" },
    { id: 3, titulo: "Livro 3", autor: "Autor 3" },
  ];

  return (
    <>
      <h1>Livros</h1>
      <TabelaLivros livros={livros} />
    </>
  );
}