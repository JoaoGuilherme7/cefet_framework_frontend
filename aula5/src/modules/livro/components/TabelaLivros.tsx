import type { Livro } from "../../../types/Livro";



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




import { LinhaLivro } from "./LinhaLivro";
import styles from "./TabelaLivros.module.css";

type TabelaProps = {
    livros: Livro[];
};

// export function TabelaLivros({ livros }: TabelaProps) {
//     return (
//         <table border={1}  className={styles.tabela}>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Nome</th>
//                     <th>Autor</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {livros.map((l) => (
//                     <LinhaLivro key={l.id} livro={l} />
//                 ))}
//             </tbody>
//         </table>
//     );
// }



export function TabelaLivros({ livros }: TabelaProps) {
    return (
        <TableContainer component={Paper}>
            <Table 
              sx={{ minWidth: 650, backgroundColor:"#444", color:"white"}} aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#ID</TableCell>
                        <TableCell align="left">Título</TableCell>
                        <TableCell align="left">Autor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {livros.map((l) => (
                        <LinhaLivro key={l.id} livro={l} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
