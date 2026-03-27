
import { Link } from "react-router-dom";
import type { Livro } from "../../../types/Livro";

type Props = {
  livro: Livro;
};

export function LinhaLivro({ livro }: Props) {
  return (
    <tr>
      <td>{livro.id}</td>
      <td>{livro.titulo}</td>
      <td>{livro.autor}</td>
      <td><Link to={`/livros/${livro.id}`}>Ver Detalhe</Link></td>
    </tr>
  );
}