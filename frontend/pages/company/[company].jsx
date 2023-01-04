import { useState } from 'react'
import { getCompanies } from '../../data/companies'
import { useRouter } from 'next/router'
import ShowInfo from '../../components/ShowInfo'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'

export const getServerSideProps = async (context) => {
    try {
        const response = await getCompanies(context.query.company)
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
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>ID: {company._id}</Heading>
            <Stack my={10}>
                <ShowInfo value={company.name} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={company.phone} color={"blue.300"} tag={"Numero"} />
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default View
