import styled from "styled-components";

import logoGif from '../../Assets/gifs/ghibliLogo.gif';

const HomeHero = () => {
    return (
        <>
            <HomeTitleContainer>
                <LogoGif src={logoGif} />
                <InfoText>
                    Em construção...
                </InfoText>
            </HomeTitleContainer>
        </>
    );
};


const HomeTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const LogoGif = styled.img`
    width: 100%;
`;

const InfoText = styled.h3`
    position: absolute;
    top: 80%;
`;



export { HomeHero };