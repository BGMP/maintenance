import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

function companies() {

    const [company, setCompany] = useState([])
    const router = useRouter()

    const getProducts = async () => {
        const response = await axios.get(`${company.env.API_URL}/companys`)
        setCompany(response.data)
    }

    const showNumbers = () => {
        return company.map(company => {
            return (
                <Tr key={company._id}>
                    <Td>{company.name}</Td>
                    <Td>{company.email}</Td>
                    <Td>{company.rut}</Td>
                    <Td>{company.area}</Td>
                    <Td>{company.phone}</Td>
                    <Td>{company.address}</Td>
                    <Td><Button onClick={() => router.push(`/company/ver/${company._id}`)}>Ver mas</Button></Td>
                </Tr>
            )
        })
    }
    return (
        <Container maxH="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Agenda</Heading>
            <Button colorScheme="teal" onClick={() => router.push('/companies/crear')}>Agregar contacto</Button>
            <Table variant="simple">
                <Thead>
                    <tr>
                        <Td>Nombre</Td>
                        <Td>Email</Td>
                        <Td>Rut</Td>
                        <Td>Area</Td>
                        <Td>Numero</Td>
                        <Td>Direccion</Td>
                    </tr>
                </Thead>
            </Table>
            {showNumbers()}
        </Container>
    )
}

export default companies