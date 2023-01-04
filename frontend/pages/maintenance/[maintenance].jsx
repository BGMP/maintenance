import { useState } from 'react'
import { getMaintenance } from '../../data/maintenances'
import { useRouter } from 'next/router'
import ShowInfo from '../../components/ShowInfo'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import { formatDate } from "../../utils/format"

export const getServerSideProps = async (context) => {
    try {
        const response = await getMaintenance(context.query.maintenance)
        return {
            props: {
                data: response
            }
        }
    } catch (error) {
        console.log(error)
        return {
            redirect: {
                destination: "/",
            }
        }
    }
}

const View = ({ data }) => {
    const [maintenance] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>ID: {maintenance[0]._id}</Heading>
            <Stack my={10}>
                <ShowInfo value={maintenance[0].company.name} color={"green.300"} tag={"Empresa"} />
                <ShowInfo value={maintenance[0].description} color={"blue.300"} tag={"Descripción"} />
                <ShowInfo value={maintenance[0].target} color={"blue.300"} tag={"Objetivo"} />
                <ShowInfo value={maintenance[0].type} color={"blue.300"} tag={"Tipo"} />
                <ShowInfo value={formatDate(maintenance[0].start_date)} color={"blue.300"} tag={"Fecha de Inicio"} />
                <ShowInfo value={formatDate(maintenance[0].end_date)} color={"blue.300"} tag={"Fecha de Termino"} />
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10} onClick={() => router.push(`./edit/${maintenance[0]._id}`)}>Editar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default View
