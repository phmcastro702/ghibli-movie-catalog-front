import styled from "styled-components";


const MovieCard = ({ movieData }) => {

    return (
        <>
            <MovieCardContainer>
                <MovieCardImage src={movieData.banner} alt={`Banner do filme ${movieData.title}`} />
                <MovieCardTitle>
                    {movieData.title}
                </MovieCardTitle>
                <MovieCardDescription>
                    {movieData.description.substr(0, 255) + '...'}
                </MovieCardDescription>
            </MovieCardContainer>
        </>
    );
};


const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 5%;
    background-color: #b8cfff;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

`;

const MovieCardImage = styled.img`
    width: 70%;
`;

const MovieCardTitle = styled.h3`
    padding: 5% 0;
    font-weight: 500;
    font-size: 20px;
`;

const MovieCardDescription = styled.p`

`;


export { MovieCard };