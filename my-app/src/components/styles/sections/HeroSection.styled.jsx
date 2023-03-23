import styled, {keyframes} from "styled-components";

const typing = keyframes`
    75%{
        width: 0ch;
    }
    100%{
        width: 32ch;
    }
`;


const blink = keyframes`
    0%{
        border-right: 4px solid rgba(255, 255, 255, 0);
    }
    100%{
        border-right: 4px solid rgba(255, 255, 255, 1);
    }
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100%{
        transform: translateY(0);
    }
    40%{
       transform: translateY(-30px)
    }
    60%{
       transform: translateY(-15px)
    }
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const textPan = keyframes`
    from{
        background-position: 0% center;
    }
    to{
        background-position: -200% center;
    }
`



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

        animation: ${typing} 5s steps(32), ${blink} 1s ease-in-out 5.5s infinite;
        border-right: 4px solid rgba(255, 255, 255, 1);


    }

    h3 {
    font-size: 4rem;
    margin: 1.4rem 0;
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.orange},
        ${({ theme }) => theme.colors.purple},
        ${({ theme }) => theme.colors.orange}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${textPan} 10s linear infinite;
    }

    p{
        font-size: 1.7rem;
        font-weight: 400;
        text-transform: none;
    }

    div{
        margin: 2.5rem 0;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        h1{
            letter-spacing: 1rem;
            font-size: 1.5rem;
            width: 29ch;
        }
        h1{
            font-size: 2.2rem;
        }
        p{
            font-size: 1.3rem;
        }
    }


`;

export const StyledArrowDown = styled.a`
    position: absolute;
    bottom: 50px;

    svg {
        font-size: 30px;
        color: ${({ theme }) => theme.colors.white};
        animation: ${bounce} 2s infinite 8s;

        &:hover {
            color: ${({theme}) => theme.colors.orange};
        }
    }
`;

export const HeroSocialIcons = styled.div`
    position: fixed;
    right: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        bottom: 50px;

    }

`;

export const SocialIcon = styled.a`
    align-items: center;
    border-radius: 50%;
    background-color: rgba(249, 105, 14, 0.1);
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 3rem;
    justify-content: center;
    width: 3rem;

    margin-bottom: 10px;

    svg{
        color: rgba(249, 105, 14);
        transition: ${({ theme }) => theme.transition};
    }

    &:hover{
        svg{
           color: ${({ theme }) => theme.colors.white}; 
        }
        animation: ${rotate} 1.5s linear infinite;
        
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 2.2rem;
        width: 2.2rem;
        
    }

`
