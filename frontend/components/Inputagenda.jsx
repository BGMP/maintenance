import React from 'react'
import {Container, HStack,Stack, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,} from '@chakra-ui/react'

const Inputagenda= ({}) =>{

    return (

        <Stack>

                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Rut"/>
                <Input placeholder="Area"/>
                <Input placeholder="Numero"/>
                <Input placeholder="Direccion"/>
                <Button colorScheme="teal" sise="sm">Agregar</Button>
        </Stack>








    )


}
export default Inputagenda