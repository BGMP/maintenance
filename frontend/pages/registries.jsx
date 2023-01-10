import { React, Fragment, useState, useEffect } from 'react'
import {
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Table,
    Thead,
    Tr,
    Td,
    Tbody,
    TableContainer,
    Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { getMaintenances } from '../data/maintenances'
function Registries() {

    const [maintenances, setMaintenances] = useState([{
        id: '',
        company: '',
        target: '',
        type: '',
        description: '',
        start_date: '',
        end_date: '',
    }])

    const router = useRouter()

    const contentTable = () => {
        return maintenances.map(maintenance => {
            return (
                <Tr key={maintenance._id }>
                    <Td>{maintenance.target}</Td>
                    <Td>{maintenance.type}</Td>
                    <Td>{maintenance.description}</Td>
                    <Td>
                        <HStack>
                            <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} onClick={() => router.push(`./registry/${maintenance._id}`)}>Ver</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getMaintenances().then(res => {
            setMaintenances(res.data)
        })
    }, [])

    return (
        <Fragment>
            <Container maxW="container.xl">
                <Heading as="h2" size="2xl" textAlign="center" mt="10"><Text as='u'>Registros</Text></Heading>
                <Button color={"#FFF"} backgroundColor={"#41DC94"} _hover={{bgColor: "#1b583c"}} mt="5" onClick={() => router.push('/registry/create')}>Crear Registro</Button>

                <TableContainer w="full">
                    <Stack spacing={4} mt="10">
                        <Table variant="striped">
                            <Thead>
                                <Tr>
                                    <Td>Mantencion</Td>
                                    <Td>Tipo</Td>
                                    <Td>Descripción</Td>
                                    <Td>Acciones</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {contentTable()}
                            </Tbody>
                        </Table>
                    </Stack>
                </TableContainer>
            </Container>
        </Fragment>
    )
}

export default Registries
