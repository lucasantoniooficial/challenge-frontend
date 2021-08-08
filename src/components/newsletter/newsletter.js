import styled from 'styled-components';

export const NewsContainer = styled.div`
    background: #00192c;
    margin-top: 12rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    padding: 5rem 20rem;
    
    h4 {
        font-size: 1.8rem;
        margin-bottom: 3rem;
    }

    p {
        font-size: 1.4rem;
        margin-bottom: 6rem;
        color: #77838b;
    }

    & > form {
        margin-bottom: 3rem;
        & > input {
            background: transparent;
            border: 0.1rem solid #6d7a84;
            margin-right: 1rem;
            padding: 1.5rem;
            width: 25rem;
            border-radius: 0.5rem;
            
        }

        & > button {
            background: #0196f5;
            padding: 1.5rem 4rem;
            border: none;
            border-radius: 0.3rem;
            color: #fff;
            cursor: pointer;
        }
    }

    @media (min-width: 740px) and (max-width: 1024px) {
        & > form {
            display: flex;
            & > input {
                width: 18rem;
            }
        }
    }

    @media (max-width: 739px) {
        width: 100%;
        padding: 3rem;
        & > p {
            font-size: 2rem;
            width: 100%;
        }

        & > form {
            display: flex;
            & > input {
                width: 18rem;
            }
        }
    }
`