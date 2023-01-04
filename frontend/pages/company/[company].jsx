import {React, useState} from 'react'
import { getCompany } from '../../data/companies'
import { useRouter } from 'next/router'
import ShowInfo from '../../components/ShowInfo'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'

export const getServerSideProps = async (context) => {
    try {
        const response = await getCompany(context.query.company)
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
                }
            }
        } else {
            return {
                redirect: {
                    destination: "/",
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/",
            }
        }
    }
}

const View = ({ data }) => {
    const [company] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h2"} size={"2xl"}>Empresa</Heading>
            <Heading as={"h3"} size={"1xl"}>ID: {company._id}</Heading>
            <hr color={"#000"}/>
            <Stack my={10}>
                <ShowInfo value={company.name} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={company.phone} color={"blue.300"} tag={"Numero"} />
                <ShowInfo value={company.email} color={"blue.300"} tag={"Email"} />
                <ShowInfo value={company.rut} color={"blue.300"} tag={"RUT"} />
                <ShowInfo value={company.area} color={"blue.300"} tag={"Localización"} />
                <ShowInfo value={company.phone} color={"blue.300"} tag={"Teléfono"} />
                <ShowInfo value={company.address} color={"blue.300"} tag={"Dirección"} />
                <ShowInfo value={company.contact} color={"blue.300"} tag={"Contacto"} />
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10} onClick={() => router.push(`./edit/${company._id}`)}>Editar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/companies")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default View
