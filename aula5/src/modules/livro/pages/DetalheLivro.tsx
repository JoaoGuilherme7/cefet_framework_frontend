import { useParams, Link } from "react-router-dom";
import type { Livro } from "../../../types/Livro";
import { livroTest } from "../types/livro-test";


export function DetalheLivro() {
  const { id } = useParams();

  const livros: Livro[] = livroTest;

  const livro = livros.find(l => l.id === Number(id));

  if (!livro) {
    return <h2>Livro não encontrado</h2>;
  }

  return (
    <div>
      <h1>Detalhe do Livro</h1>

      <p><strong>ID:</strong> {livro.id}</p>
      <p><strong>Titulo:</strong> {livro.titulo}</p>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <Link to="/livros">Voltar</Link>
    </div>
  );
}