import styled from 'styled-components';


const LoadingTopBar = ({ loading }) => {

    return (
        <LoadingContainer hidden={!loading} />
    );
};



const LoadingContainer = styled.div`
    position: absolute;
    top: -.5%;
    width: 99.9%;
    height: 3vh;
    background: url('/workingLittleSpiders.gif') center center;
    background-size: contain;

    @media screen and (min-width: 1024px) {
        height: 5vh;
        top: -1%;
    }

`;


export { LoadingTopBar };
