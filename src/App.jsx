import './Reset.css';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';

// Importing Pages
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
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
