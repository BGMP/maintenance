import {Button, HStack, Td, Text} from "@chakra-ui/react";
import {Container} from "@chakra-ui/layout";
import {Fragment} from "react";
import {useRouter} from "next/router";

const NavBar = ({ children }) => {
    const router = useRouter()
    return (
        <Fragment>
            <Container>
                <HStack>
                    <Button colorScheme={"orange"} onClick={() => router.push(`/`)}>Mantenciones</Button>
                    <Button colorScheme={"teal"} onClick={() => router.push(`./companies`)}>Empresas</Button>
                    <Button colorScheme={"teal"} onClick={() => router.push(`./registries`)}>Registros</Button>
                </HStack>
            </Container>
            { children }
        </Fragment>
    )
}

export default NavBar
