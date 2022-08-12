// Importando CSS para resetar configurações iniciais de CSS do navegador
import './Reset.css';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';

// Importando páginas principais
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
// Posteriormente poderíamos implementar uma página com detalhes de um filme específico
import { MovieDetails } from './Pages/MovieDetails';



function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
