import { NewsContainer } from "./newsletter";

const Newsletter = () => {
    return (
        <NewsContainer>
            <h4>Newsletter</h4>
            <p>Receba nossas informações por e-mail e fique sabendo de todas as novidades</p>

            <form action="">
                <input type="text" placeholder="Seu e-mail"/>
                <button>Salvar</button>
            </form>
        </NewsContainer>
    );
}

export default Newsletter;