import './Reset.css';
import GlobalStyle from './globalStyles';

// Importing Pages
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
import { MovieDetails } from './Pages/MovieDetails';



function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
