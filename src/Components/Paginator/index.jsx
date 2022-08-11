import styled from "styled-components";


const Paginator = ({ pagesData, nextPage, previousPage }) => {

    return (
        <>
            <a onClick={previousPage}>Anterior</a>
            <p>{pagesData.currentPage}</p>
            <a onClick={nextPage}>Próximo</a>
        </>
    );

};

export { Paginator };