import styled from 'styled-components';

export const ContactContainer = styled.div`
    margin-top: 12rem;
    padding-left: 20rem;
    position: relative;
    div {
        
        h3 {
            width: 100%;
            font-size: 3rem;
            font-weight: 900;
        
        }

        p {
            margin-top: 1.5rem;
            width: 65rem;
            font-size: 1.34rem;
            color: #b6b6b6;
        }

        button {
            border:none;
            background: #04f385;
            padding: 1.6rem 4rem;
            margin-top: 2.5rem;
            margin-right: 2rem;
            border-radius: 0.7rem;
            color: #fff;
            font-size: 1.6rem;
            font-weight: 700;
            cursor: pointer;

            &:last-child {
                background: #0196f5;
            }
        }
    }
    & > img {
        position:absolute;
        top: 0;
        right: 0;
        width: 68rem;
        z-index: -1;
    }

    @media (min-width: 740px) and (max-width: 1024px) {
        padding-left: 10rem;
        & > div {
            & > h3 {
                font-size: 2.4rem;
            }

            & > p {
                width: 100%;
                font-size: 1.6rem;
            }
        }

        & > img {
            display: none;
        }
    }

    @media (max-width: 739px) {
        margin-top: 5rem;
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        padding-left: 1.3rem;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            & > h3 {
                font-size: 2.4rem;
            }

            & > p {
                width: 100%;
                font-size: 1.6rem;
            }
        }
        & > img {
            display: none;
        }
    }
`