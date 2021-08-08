import { useState } from "react";
import { Header as HeaderDiv, Logo as Img, Left, Right, HeaderContainer, SliderContainer, Search} from "./header";
import Logo from '../../image/logo_white.png';
import {FaSearch} from 'react-icons/fa'
import Burguer from "../burguer";


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [open, setOpen] = useState(false);
    
    return (
        <HeaderDiv>
            <HeaderContainer>
                <Left>
                    <a href="/"><Img src={Logo} alt="SiteDemo" /></a>
                    <nav>
                        <ul>
                            <li><a href="/">Sobre</a></li>
                            <li><a href="/">Preços</a></li>
                            <li><a href="/">Desenvolvedores</a></li>
                        </ul>
                    </nav>
                </Left>
                <Right>
                    <ul>
                        <li><Search hidden={!toggleSearch} /><button onClick={() => setToggleSearch((state) => !state)}><FaSearch/></button></li>
                        <li><a href="/">Ajuda</a></li>
                        <li><a href="/">Contato</a></li>
                        <li><a href="/">Começar</a></li>
                    </ul>
                    <Burguer open={open} setOpen={setOpen}/>
                </Right>
            </HeaderContainer>

            <SliderContainer>
                <Swiper autoplay={{
                    "delay": 10000,
                    "disableOnInteraction": false
                }}>
                    <SwiperSlide>
                        <h1>Napoleon Hill</h1>
                        <p>O entusiasmo é a maior força da alma. Conserva-o e nunca te faltará poder para conseguires o que desejas.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Martin Luther King</h1>
                        <p>Eu não sou quem eu gostaria de ser;
eu não sou quem eu poderia ser, ainda,
eu não sou quem eu deveria ser. Mas graças a Deus
eu não sou mais quem eu era!</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Platão</h1>
                        <p>Uma vida não questionada não merece ser vivida.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>João Grilo</h1>
                        <p>É tanta qualidade que exigem para dar emprego, que não conheço um patrão com condições de ser empregado!</p>
                    </SwiperSlide>
                </Swiper>
            </SliderContainer>
        </HeaderDiv>
    );
}

export default Header;