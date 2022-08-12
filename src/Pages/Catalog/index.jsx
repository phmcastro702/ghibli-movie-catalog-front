import { MoviesList } from '../../Components/MoviesList';

// Componente de catálogo de filmes
const Catalog = () => {
    return (
        <>
            {/* Renderiza lista de filmes consumidas no backend */}
            <MoviesList />
        </>
    );
};

export { Catalog };