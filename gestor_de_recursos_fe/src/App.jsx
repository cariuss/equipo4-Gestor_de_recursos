import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CreateRecurso} from "./pages/CreateRecurso";
import {ListRecursos} from "./pages/ListRecursos";
import "./App.css";
import UpdateRecurso from "./pages/UpdateRecurso";
function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/crear_recurso" element={<CreateRecurso/>} />
        <Route path="/list_recurso" element={<ListRecursos/>} />
        {/* <Route path="/update_recurso" element={<UpdateRecurso/>} /> */}
      </Routes>
  </BrowserRouter>
    
  )
}

export default App
