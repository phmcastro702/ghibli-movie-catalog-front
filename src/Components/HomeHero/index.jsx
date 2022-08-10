import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import logoGif from '../../Assets/gifs/ghibliLogo.gif';

const HomeHero = () => {
    const navigate = useNavigate();

    return (
        <>
            <HomeTitleContainer>
                <LogoGif src={logoGif} />
                <StartButton onClick={() => navigate('/catalog')}>
                    Entrar
                </StartButton>
            </HomeTitleContainer>
        </>
    );
};



const HomeTitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: ${() => window.innerHeight + 'px'};
    background: rgb(255,252,231);
    background: linear-gradient(180deg, rgba(255,252,231,1) 0%, rgba(231,236,188,0.37) 51%, rgba(158,210,255,1) 100%);

    
    @media screen and (min-width: 1024px) {
        justify-content: start;
        align-items: center;
        background: #fffce7;
        background: linear-gradient(90deg, rgba(255,252,231,1) 0%, rgba(231, 236, 188, 0.376) 17%, #9ed2ff 100%);
    }
`;

const LogoGif = styled.img`
    height: auto;
    width: 95%;

    @media screen and (min-width: 1024px) {
        width: 100%;
        height: 100%;
    }
`;

const StartButton = styled.button`
    font-weight: 700;
    font-size: 36px;
    width: 60%;
    height: 13%;
    border: none;
    background-color: #2d9dff;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    /* margin-top: 20%; */

    &:hover {
        background-color: #79c0ff;
    }

    &:active {
        background-color: #0075db;
    }
    
    @media screen and (min-width: 1024px) {
        position: absolute;
        width: 20%;
        top: 80%;
        height: auto;
    }

`;

const InfoText = styled.h3`
    top: 80%;
    font-weight: 700;
    font-size: 36px;
    position: absolute;

`;



export { HomeHero };