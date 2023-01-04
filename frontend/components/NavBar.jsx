import {Button, HStack, Td, Text} from "@chakra-ui/react";
import {Box, Container} from "@chakra-ui/layout";
import {Fragment, React} from "react";
import {useRouter} from "next/router";
import {BellIcon} from "@chakra-ui/icons";

const NavBar = ({ children }) => {
    const router = useRouter()
    return (
        <Fragment>
            <Box bg="#2B6CB0">
                <Container py={10}>
                        <HStack justify={"center"} width={"full"}>
                            <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} width={"full"} onClick={() => router.push(`/`)}>Mantenciones</Button>
                            <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} width={"full"} onClick={() => router.push(`/companies`)}>Empresas</Button>
                            <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} width={"full"} onClick={() => router.push(`/registries`)}>Registros</Button>
                            <Button backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} onClick={() => router.push(`/alerts`)}>
                                <BellIcon w={8} h={8} color="white"/>
                            </Button>
                        </HStack>
                </Container>
            </Box>
            { children }
        </Fragment>
    )
}

export default NavBar
