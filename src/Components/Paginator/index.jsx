import styled from "styled-components";


const Paginator = ({ pagesData, nextPage, previousPage }) => {

    return (
        <PaginatorContainer>
            <a href="#" onClick={previousPage}>Anterior</a>
            <p>{'<' + pagesData.currentPage + '>'}</p>
            <a href="#" onClick={nextPage}>Próximo</a>
        </PaginatorContainer>
    );

};

const PaginatorContainer = styled.div`

    display: flex;
    margin: 30px 0;

    p {
        margin: 0 20px;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        &:visited {
            color: #2269a7;
        }
    }

    @media screen and (min-width: 1024px) {
        grid-column: 1 / 4;
    }

`;

export { Paginator };