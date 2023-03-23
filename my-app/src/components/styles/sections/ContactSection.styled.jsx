import styled, {keyframes} from "styled-components";

const float = keyframes`
    from{
        transform: translate(0px, 0px);
    }
    65%{
        transform: translate(0px, 10px);
    }

    to{
        transform: translate(0px, 0px);
    }
`


export const StyledContactSection = styled.section`
    min-height: 90vh;
    padding: 10rem 0 5rem 0 ;
    width: 100%;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column-reverse;
    }
`;

export const ContactInfo = styled.div`
    flex: 1;
    font-family: "Poppins", sans-serif;
    font-size: 18px;

`;

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex;

    img{
        width: 70%;
        animation: ${float} 3s ease-in-out infinite;
    }

`;

export const StyledContactForm = styled.div`
    width: 400px;

    form{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 16px;

        input{
            height: 35px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);
            width: 100%;

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
            }
        }

        label{
            margin-top: 1rem;
        }

        input[type="submit"]{
            margin-top: 2rem;
            cursor: pointer;
            background: rgb(249, 105, 14);
            color: white;
            border: none;
        }
    }
`