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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function previousPage() {
        if (pagesData.currentPage > 1) {
            getMovieDataFromAPI(--pagesData.currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <RefreshButton>Atualizar</RefreshButton>
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

    @media screen and (min-width: 1024px) {
        /* flex-direction: row;
        flex-wrap: wrap; */
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 40px;
        column-gap: 20px;

        
    }

`;

const ListTitle = styled.h1`
    font-weight: 700;
    font-size: 27px;
    margin-bottom: 5%;
    color: #7fc3ff;
    text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (min-width: 1024px) {
        grid-column: 1 / 4;
        font-size: 36px;
        margin-bottom: 0;
    }
`;

const RefreshButton = styled.button`

    justify-self: end;
    font-weight: 700;
    font-size: 24px;
    width: 50%;
    border: none;
    background-color: #2d9dff;
    color: white;
    cursor: pointer;
    border-radius: 15px;

    &:hover {
        background-color: #79c0ff;
    }

    &:active {
        background-color: #0075db;
    }

    @media screen and (min-width: 1024px) {
        grid-column: 1 / 4;
        justify-self: end;
        align-self: center;

        width: 20%;
        font-size: 36px;
        top: 80%;
        height: auto;
        
    }

`;

export { MoviesList };