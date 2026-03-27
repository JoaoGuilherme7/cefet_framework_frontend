import { Routes, Route } from "react-router-dom";
import { PessoasRoutes } from "./modules/pessoa/routes";
import { LivrosRoutes } from "./modules/livro/routes";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
   
      <Route path="/pessoas/*" element={<PessoasRoutes />} />
      <Route path="/livros/*" element={<LivrosRoutes />} />

 
    </Routes>
  );
}