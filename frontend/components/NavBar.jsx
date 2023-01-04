import {Button, HStack, Td, Text} from "@chakra-ui/react";
import {Container} from "@chakra-ui/layout";
import {Fragment} from "react";
import {useRouter} from "next/router";

const NavBar = ({ children }) => {
    const router = useRouter()
    return (
        <Fragment>
            <Container py={10}>
                <HStack justify={"center"} width={"full"}>
                    <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} width={"full"} onClick={() => router.push(`/`)}>Mantenciones</Button>
                    <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} width={"full"} onClick={() => router.push(`./companies`)}>Empresas</Button>
                    <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} width={"full"} onClick={() => router.push(`./registries`)}>Registros</Button>
                </HStack>
            </Container>
            { children }
        </Fragment>
    )
}

export default NavBar
