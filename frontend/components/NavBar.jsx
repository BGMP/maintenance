import {HStack, Text} from "@chakra-ui/react";
import {Container} from "@chakra-ui/layout";
import {Fragment} from "react";


const NavBar = ({ children }) => {
    return (
        <Fragment>
            <Container>
                <h1>Mantenciones</h1>
                <h1>Empresas</h1>
                <h1>Registros</h1>
            </Container>
            { children }
        </Fragment>
    )
}

export default NavBar
