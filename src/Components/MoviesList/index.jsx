import { useEffect, useState } from "react";
import styled from "styled-components";

import config from '../../app-config.json';



const MoviesList = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [currPage, setCurrPage] = useState(1);




    const getMovieDataFromAPI = (page) => {
        fetch(`${config.api_url}/movies/paginate/${page}`)
            .then((res) => res.json())
            .then((resData) => setMoviesData(resData.data))
            .catch((err) => console.log(err));
    };


    useEffect(() => {
        if (moviesData.length)
            return;

        getMovieDataFromAPI(currPage);

    }, []);


    return (
        <div>
            {
                moviesData.map((movie, index) => {
                    return (
                        <div key={movie.id}>
                            <img src={movie.banner} alt={`Banner do filme ${movie.title}`} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export { MoviesList };