import { Routes, Route } from "react-router-dom";
import { ListaLivros } from "./pages/ListaLivros";
import { DetalheLivro } from "./pages/DetalheLivro";
import { CadastraLivro } from "./pages/CadastraLivro";

export function LivrosRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaLivros />} />
            <Route path=":id" element={<DetalheLivro />} />
            <Route path="cadastra" element={<CadastraLivro />} />
        </Routes>
    )

}

