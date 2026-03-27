import type { Livro } from "../../../types/Livro";
import { LinhaLivro } from "./LinhaLivro";
import styles from "./TabelaLivros.module.css";

type TabelaProps = {
 livros: Livro[];
};

export function TabelaLivros({ livros }: TabelaProps) {
    return (
        <table border={1}  className={styles.tabela}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Autor</th>
                </tr>
            </thead>
            <tbody>
                {livros.map((l) => (
                    <LinhaLivro key={l.id} livro={l} />
                ))}
            </tbody>
        </table>
    );
}
