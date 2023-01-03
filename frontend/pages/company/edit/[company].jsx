import { useState } from 'react'
import { getCompanies, updateCompany } from '../../../data/companies'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextAreaInput from '../../../components/TextAreaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getCompanies(context.query.company)
    return {
        props: {
            data: response.data
        }
    }
}

const edit = ({ data }) => {
    const [mant, setCompany] = useState(data)
    const router = useRouter()
    const { company } = router.query

    const handleChange = (e) => {
        setCompany({
            ...mant,
            [e.target.name]: e.target.value
        })
    }

    const submitCompany = async (e) => {
        e.preventDefault()
        const response = await updateCompany(company, mant)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Company actualizada',
                showConfirmButton: true,
                text: 'La company se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la company'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar company: {mant._id}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Objetivo" handleChange={handleChange} name="target" placeholder="Objetivo de la " type="text" value={mant.target} />
                <TextAreaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción de la " value={mant.description} />
                <InputForm label="Tipo" handleChange={handleChange} name="type" placeholder="Tipo de " type="text" value={mant.type} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitCompany}>Editar Company</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default edit