import { React, Fragment, useState, useEffect } from 'react'
import {Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody, TableContainer, Text} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {getCompanies, updateCompany} from '../data/companies'

function Index() {

    const [companies, setCompanies] = useState([{
        name: '',
        email: '',
        rut: '',
        area: '',
        phone: '',
        address: '',
        contact: '',
    }])

    const router = useRouter()

    const contentTable = () => {
        return companies.map(company => {
            return (
                <Tr key={company._id }>
                    <Td>{company.name}</Td>
                    <Td>{company.email}</Td>
                    <Td>{company.rut}</Td>
                    <Td>{company.area}</Td>
                    <Td>{company.phone}</Td>
                    <Td>{company.address}</Td>
                    <Td>
                        <Td>
                            <HStack>
                                <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} onClick={() => router.push(`./company/${company._id}`)}>Ver</Button>
                                <Button color={"#ffffff"} backgroundColor={"#ffb432"} _hover={{bgColor: "#c48d29"}} onClick={() => router.push(`./company/edit/${company._id}`)}>Editar</Button>
                            </HStack>
                        </Td>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getCompanies().then(res => {
            setCompanies(res.data)
        })
    }, [])

    return (
        <Fragment>
            <Container maxW="container.xl">
                <Heading as="h2" size="2xl" textAlign="center" mt="10"><Text as='u'>Agenda de Empresas</Text></Heading>
                <Button color={"#FFF"} backgroundColor={"#41DC94"} _hover={{bgColor: "#1b583c"}} mt="5" onClick={() => router.push('/company/create')}>Agregar Empresa</Button>
                <Stack spacing={4} mt="10">
                    <TableContainer w="full">
                        <Table variant="striped">
                            <Thead>
                                <Tr>
                                    <Td>Nombre</Td>
                                    <Td>Email</Td>
                                    <Td>Rut</Td>
                                    <Td>Area de tabajo</Td>
                                    <Td>Numero</Td>
                                    <Td>Direccion</Td>
                                    <Td>Acciones</Td>
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
