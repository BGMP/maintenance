import { useState } from 'react'
import { getMaintenance, updateMaintenance } from '../../../data/maintenances'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextAreaInput from '../../../components/TextAreaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getMaintenance(context.query.maintenance)
    return {
        props: {
            data: response.data
        }
    }
}

const Edit = ({ data }) => {
    const [mant, setMaintenance] = useState(data)
    const router = useRouter()
    const { maintenance } = router.query

    const handleChange = (e) => {
        setMaintenance({
            ...mant,
            [e.target.name]: e.target.value
        })
    }

    const submitMaintenance = async (e) => {
        e.preventDefault()
        const response = await updateMaintenance(maintenance, mant)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Mantención actualizada',
                showConfirmButton: true,
                text: 'La mantención se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la mantención'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h2"} size={"2xl"}>Mantención</Heading>
            <Heading as={"h3"} size={"1xl"}>ID: {mant._id}</Heading>
            <hr color={"#000"}/>
            <Stack spacing={4} mt={10}>
                <InputForm label="Objetivo" handleChange={handleChange} name="target" placeholder="Objetivo de la mantención" type="text" value={mant.target} />
                <TextAreaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción de la mantención" value={mant.description} />
                <InputForm label="Tipo" handleChange={handleChange} name="type" placeholder="Tipo de mantención" type="text" value={mant.type} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitMaintenance}>Aplicar</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default Edit
