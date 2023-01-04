import { React, Fragment, useState, useEffect } from 'react'
import {Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody, TableContainer} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {getCompanies, getMaintenances, updateCompany} from '../data/maintenances'
function Registries() {

    const [maintenances, setMaintenances] = useState([{

    }])

    const router = useRouter()

    const contentTable = () => {
        return maintenances.map(maintenance => {
            return (
                <Tr key={maintenance._id }>
                    <Td>{maintenance.target}</Td>
                    <Td>{maintenance.type}</Td>
                    <Td>{maintenance.description}</Td>
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
                <Heading as="h2" size="2xl" textAlign="center" mt="10">Registros</Heading>
                <TableContainer w="full">
                    <Stack spacing={4} mt="10">
                        <Table variant="simple">
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
