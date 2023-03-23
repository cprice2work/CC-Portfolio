import styled, {keyframes} from "styled-components";

const textPan = keyframes`
    from{
        background-position: 0% center;
    }
    to{
        background-position: -200% center;
    }
`

export const StyledServicesSection = styled.section`
    min-height: 90vh;
    padding: 10rem 0 5rem 0;
    width: 100%;
`;

export const ServicesItem = styled.div`
    display: flex;

    @media (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`;

export const SingleService = styled.div`
    min-height: 20rem;
    border-radius: 7px;
    background: rgba(4, 20, 44, 1);
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    padding: 1.2em;
    margin-right: 2rem;
    transition: all 300ms ease-in-out;

    &:hover{
        transform: translateY(-1rem);
    }

    &:last-child{
        margin-right: 0;
    }

    h1{
        font-size: 2rem;
        margin: 1.5rem 0;
        background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.orange},
        ${({ theme }) => theme.colors.purple},
        ${({ theme }) => theme.colors.orange}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: ${textPan} 5s linear infinite;
    }

    p{
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin: 0 0 4rem 0;
        width: 100%;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    font-size: 28px;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 4.5rem;
    flex-shrink: 0;
    color: ${({theme}) => theme.colors.navyBlue};
    background: ${({theme}) => theme.colors.white};
    border-radius: 100% 0% 46% 54% / 47% 0% 100% 53% ;

`;

