import { FooterContainer } from "./footer";
import Logo from '../../image/logo.png'
const Footer = () => {
    return (
        <FooterContainer>
            <img src={Logo} alt="SiteDemo" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Preços</a></li>
                <li><a href="/">Desenvolvedores</a></li>
                <li><a href="/">Ajuda</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
            <div>
                <span>+80 1234 56789</span>
                <span>ola@sitedemo.com.br</span>
            </div>
        </FooterContainer>
    );
}

export default Footer;