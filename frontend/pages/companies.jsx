import { React, Fragment, useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {getCompanies, updateCompany} from '../data/companies'
function index() {

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
                    <Td>{company.contact}</Td>
                    <Td>
                        <HStack>

                        </HStack>
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
                <Heading as="h2" size="2xl" textAlign="center" mt="10">Mantenciones</Heading>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Compañía</Td>
                                <Td>Descripción</Td>
                                <Td>Tipo</Td>
                                <Td>Acciones</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {contentTable()}
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </Fragment>
    )
}

export default index