import styled, {keyframes, css} from "styled-components";

const navItemFade = keyframes`
    from{
        opacity: 0;
        transform: translate(50px);
    }
    to{
        opacity: 1;
        transform: translate(0px);
    }
`;

const navItemAnimation = ({index}) => css`
    animation: ${navItemFade} 1s ease forwards ${index / 7 + 0.5}s
`

export const Nav = styled.nav`
    align-items: center;
    background:  rgba(2, 12, 27, 0.8);
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    transition: all 1s ease-in-out;
    top: ${({ scrollDirection }) => scrollDirection === "down" ? "-80px" : "40px"};
    width: 100%;
    z-index: 98;
`;

export const Logo = styled.img`
    background: ${({theme}) => theme.colors.white};
    border-radius: 25%;
    width: 55px;
`;

export const MenuIcon = styled.div`
     background: ${({ theme, menuOpen }) => menuOpen ? "none": theme.colors.lightNavyBlue};
     border-radius: 5px;
     background: ${({ theme }) => theme.colors.lightNavyBlue};
     display: none;
     padding: 0.7rem;
     position: absolute;
     right: 20px;
     z-index: 999;

    @media(max-width: ${({theme}) => theme.mobile}){
        display: inline-block;
    }
`;

export const LineOne = styled.div `
    background: linear-gradient(
        135deg,
        rgba(249, 105, 14, 1) 0%,
        rgba(255, 255, 255, 1) 100% 
    );

    height: 3px;
    margin: 5px 0px;

    transition: ${({ theme }) => theme.transition};
    transform: ${({ menuOpen }) => menuOpen ? "rotate(-405deg) translate(-5px, 6px) scaleX(2)" : "none"};

    width: 15px;

`;

export const LineTwo = styled.div `
    background: linear-gradient(
        135deg,
        rgba(249, 105, 14, 1) 0%,
        rgba(255, 255, 255, 1) 100% 
    );

    height: 3px;
    margin: 5px 0px;

    //Fade
    /* opacity: ${({menuOpen}) => menuOpen ? 0 : 1}; */

    transition: ${({ theme }) => theme.transition}, 1s cubic-bezier(0.07, -0.97, 0, 1.19);

    //UnderLine Picture
    transform: ${({ menuOpen }) => menuOpen ? "translate(-102px, 141px) rotate(-180deg) scaleX(3)" : "translate(0) rotate(0) scaleX(1)"};

    width: 30px;

`;

export const LineThree = styled.div `
    background: linear-gradient(
        135deg,
        rgba(249, 105, 14, 1) 0%,
        rgba(255, 255, 255, 1) 100% 
    );

    height: 3px;
    margin: 5px 0;
    margin-left: ${({menuOpen})=> menuOpen ? 0 : "15px"};

    transition: ${({ theme }) => theme.transition};
    transform: ${({ menuOpen }) => menuOpen ? "rotate(405deg) translate(-5px, -6px) scaleX(2)" : "none"};

    width: 15px;

`;

export const NavList = styled.ul`
    align-items: center;
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;
    justify-content: flex-end;
    
    @media(max-width: ${({ theme }) => theme.mobile}) {
        background: ${({ theme })=> theme.colors.lightNavyBlue};
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 3rem;
        position: fixed;
        right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
        top: 0%;
        width: 24rem;
        z-index: 998;
        transition: ${({ theme }) => theme.transition};

    }
`;

export const NavItemStyled = styled.li`
    margin: 0.2rem 0.7rem;

    &:last-child {
        margin-right: 0;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        opacity: 0;
        margin: 1.2rem 0;
        ${({menuOpen}) => menuOpen ? navItemAnimation : null } 
    }
`;

export const NavLink = styled.a`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1.5px;

    &::after{
        background: ${({theme}) => theme.colors.orange};
        content: "";
        display: block;
        height: 3px;

        transition: all ease-in-out 300ms;
        width: 0%;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }
`;

export const Profile = styled.div`
    display: none;

    @media (max-width: ${({ theme })=> theme.mobile}){
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            height: 9rem;
            width: auto;
            border: 50%;
            display: block;
            margin: 1.5rem 0;
        }
    }
`

export const SocialIcons = styled.div`
    display: none;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            margin: 0 0.5rem;
            font-size: 2rem;
        }
    }
`;