import './Styles/bootstrap-icons.css'
import './global.css'

import { Home } from "./Pages/Home";
import { Aluno } from "./Pages/Aluno";
import { Professor } from './Pages/Professor';
import { Mensagem } from './Pages/Mensagem';
import { Login } from './Pages/Login'


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aluno" element={<Aluno/>}/>
        <Route path="/professor" element={<Professor/>}/>
        <Route path="/mensagem" element={<Mensagem/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

