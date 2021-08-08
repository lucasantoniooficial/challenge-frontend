import styled from 'styled-components';

export const IntegrationContainer = styled.div`
    display: flex;
    padding: 1.6rem 20rem;

    @media (min-width: 740px) and (max-width: 1024px) {
        padding: 1.6rem 5rem;
    }


    @media (max-width: 739px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
`

export const Item = styled.div`
    background: #0195f5;
    display: flex;
    align-items: center;
    flex: 1;
    height: 25rem;
    padding: 2rem;
    flex-direction: column;
    text-align: center;
    color: #fff;
    h2 {
        font-size: 1.5rem;
        margin-bottom: 3rem;
    }

    p {
        font-size: 1.3rem;
    }
    img {
        width: 5rem;
    
        margin-bottom: 2rem;
    }

    &:nth-child(2) {
        background: #fff;  
        color: #000; 

        img {
            height: 3.4rem;
            margin-bottom: 3rem;
        }
    }

   

    @media (max-width: 739px) {
        width: 100vw;
    }
` 