
import { Link } from "react-router-dom";
import type { Livro } from "../../../types/Livro";


import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



type Props = {
  livro: Livro;
};

// export function LinhaLivro({ livro }: Props) {
//   return (
//     <tr>
//       <td>{livro.id}</td>
//       <td>{livro.titulo}</td>
//       <td>{livro.autor}</td>
//       <td><Link to={`/livros/${livro.id}`}>Ver Detalhe</Link></td>
//     </tr>
//   );
// }

export function LinhaLivro({ livro }: Props) {
  return (
    <TableRow
      key={livro.id}
      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="left">{livro.id}</TableCell>
      <TableCell component="th" scope="row">{livro.titulo} </TableCell>
      <TableCell align="left">{livro.autor}</TableCell>
    </TableRow>
  )
}