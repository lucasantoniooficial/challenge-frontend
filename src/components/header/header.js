import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    background-image: url('asset/img/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 2rem 10rem;
    height: 75rem;

    @media (max-width: 576px) {
        padding: 2rem 3rem;
    }

    @media (min-width: 740px) and (max-width: 980px) {
        padding: 2rem 5rem;
    }

    .swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
}

`

export const Logo = styled.img`
    width: 10rem;
    height: 1.7rem;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
    gap: 10rem;
    align-items: center;

    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    ul > li > a {
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        letter-spacing: 0.12rem;
    }

    @media (min-width: 740px) and (max-width: 1024px) {
        gap: 4rem;
    }
    
    @media (max-width: 576px) {
        ul {
            display: none;
            visibility: hidden;
        }
    }

`

export const Right = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    
    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        align-items: center;
    }

    li:last-child {
        border: 1px solid #fff;
        padding: 0.8rem;
        border-radius: 1.5rem;

        &:hover {
            background: #fff;
            a {
                color: #0196f5;
            }
        }
    }

    ul > li > a {
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        letter-spacing: 0.12rem;
    }

    ul > li > button {
        background: transparent;
        border: none;
        color: #fff;
        font-size: 0;
        cursor: pointer;
        
        svg {
            width: 1.3rem;
            height: 1.3rem;

        }
    }

    ul li:first-child {
        display: flex;
        align-items: center;
    }

    @media (max-width: 739px) {
        ul {
            display: none;
            visibility: hidden;
        }
    }

`

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;

    h1 {
        font-weight: 900;
        color: #fff;
        letter-spacing: 0.11rem;
    }

    p {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #fff;
        margin-top: 3rem;
        letter-spacing: 0.11rem;
    }

    @media (max-width: 576px) {
        margin-top: 5rem;
    }
`

export const SliderContainerButton = styled.div`
    display: flex;
    margin-top: 6.5rem;
    gap: 1rem;

    button {
        padding: 1.2rem;
        background: transparent;
        border-radius: 0.3rem;
        border: 0.1rem solid #fff;
        color: #fff;
        cursor: pointer;
        letter-spacing: 0.15rem;
    }

    .btn-color {
        background: #00baff;
        border: none;
    }
`

export const Search = styled.input.attrs({type: 'search'})`
    background: transparent;
    border: 0.1rem solid #fff;
    margin-right: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &::-webkit-search-cancel-button {
        color: #fff;
        background: red;
    }
`