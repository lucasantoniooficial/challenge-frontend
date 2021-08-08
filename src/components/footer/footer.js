import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 20rem;

    & > img {
        height: 2rem;
    }

    & > ul {
        list-style: none;
        display: flex;
        gap: 2rem;

        & > li {
            & > a {
                text-decoration: none;
                color: #77838b;
                font-size: 1.2rem;
            }
        }
    }

    & > div {
        display: flex;
        
        & > span {
            font-weight: 700;
            &:after {
                content: "|";
                padding: 0 1rem;
            }

            &:last-child {
                &::after {
                    content: none;
                    padding: 0;
                }
            }
        }
    }

    @media (min-width: 740px) and (max-width: 1024px) {
    
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        
        & > div {
            margin-top:1rem;
        }
        
    }

    @media (max-width: 739px) {
        flex-direction: column;
        padding: 4rem;

        & > img {
            margin-bottom: 3rem;
        }


        & > ul {
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        & > div {
            flex-direction: column;
            & > span {
                padding: 1rem 0;
                &:first-child {
                    border-bottom: 0.1rem solid #000;
                    padding-top: 0;
                    
                }
                &::after {
                    content: none;
                   
                }
            }
        }
    }
`