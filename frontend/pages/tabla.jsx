import { Heading, Select, Stack, Button, Box, Container, HStack, Table, Thead, Tr, Td, Tbody} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import CustomControlsExample from './_app2'
import InputStackDos from '../components/InputStackDos'
import axios from 'axios'
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
const tabla = () => {

    const [alert,setAlert] = useState([{
        title:'',
        description:'',
    }])

    const getAlert = async () =>{
        const response = await axios.get(`${process.env.SERVIDOR}/alert`)
        setAlert(response.data)
        console.log(response)
    }

    const contenTable = () =>{
    }

    useEffect(() => {
        getAlert()
    }, [])


    return (
        <div>
                <Box bg="#2B6CB0">
                    <Heading as="h1" size="2xl" ml={'3'} color="white">Bienvenido a Alertas</Heading>
                </Box>
            <Box bg="#BEE3F8">
                <Heading as="h1" size="xl" mt="3" ml={'3'} > Listado de Alertas</Heading>
                <Stack spacing={4} mt="2">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>NombreAlert</Td>
                                <Td>DescripcionAlert</Td>
                            </Tr>
                            <Tr>
                                <Td>Alerta 1</Td>
                                <Td>Esta alerta es sobre...</Td>
                            </Tr>
                            <Tr>
                                <Td>Alerta 2</Td>
                                <Td>Esta alerta es sobre...</Td>
                            </Tr>
                            <Tr>
                                <Td>Alert 3</Td>
                                <Td>Esta alerta es sobre...</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/*Agregar alertas*/}
                        </Tbody>
                    </Table>
                </Stack>
            </Box>

        </div>
    )
}

export default tabla
