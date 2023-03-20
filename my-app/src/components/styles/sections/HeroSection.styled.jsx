import styled, {keyframes} from "styled-components";

const typing = keyframes`
    0%{
        width: 0ch;
    }
    100%{
        width: 32ch;
    }
`;


const blink = keyframes`
    0%{
        border-radius: 4px solid rgba(255, 255, 255, 0);
    }
    100%{
        border-radius: 4px solid rgba(255, 255, 255, 1);
    }
`;




export const StyledHeroSection = styled.section`
    align-items: center;
    background: linear-gradient(
            135deg,
            rgba(0, 64, 77, 0.9) 0%, 
            rgba(2, 12, 27, 0.8) 100%
        ), 
        url("./images/landing-page.png") center no-repeat;
    background-size: contain;
    display: flex;
    height: 90vh;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 100%;
`;

export const HeroContent = styled.div`
    color: ${({ theme }) => theme.colors.white};
    max-width: 58rem;
    text-transform: uppercase;
    width: 100%;

    h1{
        letter-spacing: 1.2rem;
        font-size: 2rem;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        width: 32ch;
        margin: auto;

        animation: ${typing} 5s steps(32), ${blink} 1s ease-in-out infinite;
        border-right: 4px solid rgba(255, 255, 255, 1);


    }

`;