import { bool, func } from "prop-types";
import { useEffect } from "react";
import { StyledBurguer, StyledMenu } from "./burguer";

const Burguer = ({open, setOpen}) => {
    useEffect(() => {
        if(open) {
            document.getElementsByTagName('body')[0].style = 'overflow: hidden';
        }else {
            document.getElementsByTagName('body')[0].style = 'overflow: auto;'
        }
    }, [open]);
    return(
        <>
        <StyledBurguer open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurguer>
        <StyledMenu open={open}>
            <a href="/">Teste</a>
            <a href="/">Teste</a>
            <a href="/">Teste</a>
        </StyledMenu>
        </>
    );
}

Burguer.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default Burguer;