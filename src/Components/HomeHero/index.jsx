import styled from "styled-components";

import logoGif from '../../Assets/gifs/ghibliLogo.gif';

const HomeHero = () => {
    return (
        <>
            <HomeTitleContainer>
                <LogoGif src={logoGif} />
                <InfoText>
                    Em breve...
                </InfoText>
            </HomeTitleContainer>
        </>
    );
};


const HomeTitleContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    @media screen and (min-width: 1024px) {
        background: rgb(255,252,231);
        background: linear-gradient(90deg, rgba(255,252,231,1) 0%, rgba(231,236,188,0.3785889355742297) 17%, rgba(158,210,255,1) 100%);
        height: 100vh;
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

const InfoText = styled.h3`
    top: 80%;
    font-weight: 700;
    font-size: 36px;
    position: absolute;

`;



export { HomeHero };