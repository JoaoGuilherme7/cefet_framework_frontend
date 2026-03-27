import './App.css'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';


function App() {
  return (
    <>
    <h1>Bem Vindo</h1>
    <ul>
      <li><a href="/pessoas">Listar Pessoas</a></li>
      <li><a href="/pessoas/cadastra">Cadastrar Pessoa</a></li>
      <br />
      <li><a href="/livros">Listar Livros</a></li>
      <li><a href="/livros/cadastra">Cadastrar Livro</a></li>
    </ul>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  
    </>
  )
}

export default App
