import { useState } from 'react'
import { getMaintenance } from '../../data/maintenances'
import { useRouter } from 'next/router'
import ShowInfo from '../../components/ShowInfo'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'

export const getServerSidePropsShow = async (context) => {
    try {
        const response = await getMaintenance(context.query.maintenance)
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

const view = ({ data }) => {
    const [maintenance] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>ID: {maintenance._id}</Heading>
            <Stack my={10}>
                <ShowInfo value={maintenance.company} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={maintenance.description} color={"blue.300"} tag={"Descripción"} />
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default view
