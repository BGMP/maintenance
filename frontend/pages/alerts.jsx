import { React, Fragment, useState, useEffect } from 'react'
import {Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody, TableContainer, Text} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { getAlerts } from '../data/alert'

function Index() {

    const [alerts, setAlerts] = useState([{
        title: '',
        description: '',
        type: ''
    }])

    const router = useRouter()

    const contentTable = () => {
        return alerts.map(alert => {
            return (
                <Tr key={alert._id }>
                    <Td>{alert.title}</Td>
                    <Td>{alert.description}</Td>
                    <Td>{alert.type}</Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getAlerts().then(res => {
            setAlerts(res.data)
        })
    }, [])

    return (
        <Fragment>
            <Container maxW="container.xl">
                <Heading as="h2" size="2xl" textAlign="center" mt="10"><Text as='u'>Alertas</Text></Heading>
                <Button color={"#FFF"} backgroundColor={"#41DC94"} _hover={{bgColor: "#1b583c"}} mt="5" onClick={() => router.push('/alert/create')}>Crear Alerta</Button>
                <Stack spacing={4} mt="10">
                    <TableContainer w="full">
                        <Table variant="striped">
                            <Thead>
                                <Tr>
                                    <Td>Título</Td>
                                    <Td>Descripción</Td>
                                    <Td>Tipo</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {contentTable()}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Container>
        </Fragment>
    )
}

export default Index
