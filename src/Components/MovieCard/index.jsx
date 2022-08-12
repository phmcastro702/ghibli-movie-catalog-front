import styled from "styled-components";

// Component card de cada filme
// Recebe a prop 'movieData' com os dados do filme
const MovieCard = ({ movieData }) => {

    return (
        <>
            <MovieCardContainer>
                <MovieCardImage src={movieData.banner} alt={`Banner do filme ${movieData.title}`} />
                <UpdatedAt>Atualizado em: {movieData.updatedAt}</UpdatedAt>
                <Title>
                    {movieData.title}
                </Title>
                <RoleContainer>
                    <Role>Director: {movieData.director}</Role>
                    <Role>Producer: {movieData.producer}</Role>
                </RoleContainer>
                <Description>
                    {
                        (movieData.description.length > 255)
                            ? movieData.description.substr(0, 255) + '...'
                            : movieData.description
                    }
                </Description>
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

    @media screen and (min-width: 1024px) {
        width: 90%;
        height: 95%;

    }

`;

const MovieCardImage = styled.img`
    width: 70%;
`;

const Title = styled.h3`
    padding: 5% 0;
    font-weight: 500;
    font-size: 20px;

    @media screen and (min-width: 1024px) {
        font-size: 22px;
    }
`;

const Description = styled.p`

`;

const UpdatedAt = styled.p`
    font-size: 12px;
    font-weight: 200;
    padding-top: 10px;
`;

const Role = styled.p`
    font-weight: 500;
    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`;

const RoleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8%;
    gap: 10px;
`;


export { MovieCard };