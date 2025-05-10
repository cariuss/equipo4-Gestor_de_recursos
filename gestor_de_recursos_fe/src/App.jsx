import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ListRecursos} from "./pages/ListRecursos";
import {ListUsuario} from "./pages/usuarios/ListUsuario";
import UsuarioLogin from "./pages/usuarios/UsuarioLogin";
import "./App.css";
function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/list_recurso" element={<ListRecursos/>} />
        <Route path="/list_usuarios" element={<ListUsuario/>} />
        <Route path="/login" element={<UsuarioLogin/>} />
      </Routes>
  </BrowserRouter>
    
  )
}

export default App
