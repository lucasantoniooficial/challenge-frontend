import { ContactContainer } from './contact';
import Image from '../../image/Christmas.png'
const Contact = () => {
    return(
        <ContactContainer>
            <div>
                <h3>Atendimento ao Cliente</h3>
                <p>Precisando entrar em contato, utilize nossos canais de atendimento ou consulte a documentação para informações.</p>
                <button>Envie um Ticket</button>
                <button>Documentação</button>
            </div>
            <img src={Image} alt="" />
        </ContactContainer>
    );
}

export default Contact;