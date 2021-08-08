import styled from 'styled-components';

export const ClientContainer = styled.div`
    padding: 5rem 20rem;
    display: flex;
    gap: 10rem;

    img {
        width: 20rem;
        height: 3rem;
    }

    @media (min-width: 740px) and (max-width: 1024px) {
        padding: 5rem 10rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 739px) {
        padding: 3rem;
        flex-direction: column;
        align-items: center;
    }
   
`