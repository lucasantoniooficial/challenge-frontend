import styled from "styled-components";

export const StyledBurguer = styled.button`
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media (max-width: 576px) {
        display: flex;
    }

    &:focus{
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: #EFFFFA;
        border-radius: 1rem;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 0.1rem;

        :first-child {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({open}) => open ? '0' : '1'};
            transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export const StyledMenu = styled.nav`
    display: none;
    flex-direction: column;
    justify-content: center;
    background-image: url('asset/img/bg.png');
    background-size: cover;
    background-position: center center;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    inset: 0;
    transform: translateX(0);
    z-index: 2;

    @media (max-width: 739px) {
        display: flex;
        width: 100%;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease-in-out;
        overflow-y: hidden;
        position: fixed;
        height: 100%;
        z-index: 2;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #EFFFFA;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 739px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: #343078;
        }
    }
`