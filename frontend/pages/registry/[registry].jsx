import {React, useState, useEffect, Fragment} from 'react'
import { getRegistries } from '../../data/registry'
import { useRouter } from 'next/router'
import ShowInfo from '../../components/ShowInfo'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'





export const getServerSideProps = async (context) => {
    try {
        const response = await getRegistries(context.query.registry)
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

    const [registry] = useState(data)
    const router = useRouter()

    const registros = () => {
        return registry.map(r => {
            return (
                <Fragment key={r._id}>
                    <ShowInfo value={r.comment} color={"blue.300"} tag={"Comentario"} />
                    <ShowInfo value={r.files} color={"blue.300"} tag={"Archivos"} />
                </Fragment>
            )}
        )
    }

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h2"} size={"2xl"}>Mantención: {registry[0].maintenance.target}</Heading>
            <Heading as={"h3"} size={"1xl"}>ID: {registry[0].maintenance._id}</Heading>
            <Stack my={10}>
                { registros() }
            </Stack>
        </Container>
    )
}

export default View
