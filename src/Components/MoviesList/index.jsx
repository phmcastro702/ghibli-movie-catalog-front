import { useEffect, useState } from "react";
import styled from "styled-components";
import config from '../../app-config.json';

import { MovieCard } from '../MovieCard';
import { Paginator } from '../Paginator';



const MoviesList = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [pagesData, setPagesData] = useState({
        currentPage: 1,
        totalPages: 1
    });


    function getMovieDataFromAPI(page) {
        fetch(`${config.api_url}/movies/paginate/${page}`)
            .then((res) => res.json())
            .then((resData) => {
                setMoviesData(resData.data);
                setPagesData({
                    currentPage: page,
                    totalPages: resData.totalPages,
                    updatePage: getMovieDataFromAPI
                });
            })
            .catch((err) => console.log(err));
    }

    function nextPage() {
        if (pagesData.currentPage < pagesData.totalPages) {
            getMovieDataFromAPI(++pagesData.currentPage);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    function previousPage() {
        if (pagesData.currentPage > 1) {
            getMovieDataFromAPI(--pagesData.currentPage);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }


    useEffect(() => {
        if (moviesData.length)
            return;

        getMovieDataFromAPI(pagesData.currentPage);

    }, []);


    return (
        <MovieListContainer>
            <ListTitle>Ghibli Movies Catalog</ListTitle>
            {moviesData.map((movie) => { return <MovieCard key={movie.id} movieData={movie} />; })}
            <Paginator pagesData={pagesData} nextPage={nextPage} previousPage={previousPage} />
        </MovieListContainer>
    );
};

const MovieListContainer = styled.div`
    display: flex;
    padding: 5%;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    background: rgb(255,252,231);
    background: linear-gradient(180deg, rgba(255,252,231,1) 0%, rgba(231,236,188,0.37) 51%, rgba(158,210,255,1) 100%);

`;

const ListTitle = styled.h1`
    font-weight: 700;
    font-size: 27px;
    margin-bottom: 5%;
    color: #7fc3ff;
    text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export { MoviesList };