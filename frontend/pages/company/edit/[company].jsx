import { useState } from 'react'
import { getCompany, updateCompany } from '../../../data/companies'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextAreaInput from '../../../components/TextAreaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getCompany(context.query.company)
    return {
        props: {
            data: response.data
        }
    }
}

const Edit = ({ data }) => {
    const [comp, setCompany] = useState(data)
    const router = useRouter()
    const { company } = router.query

    const handleChange = (e) => {
        setCompany({
            ...comp,
            [e.target.name]: e.target.value
        })
    }

    const submitCompany = async (e) => {
        e.preventDefault()
        const response = await updateCompany(company, comp)
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
                text: 'Ocurrió un error al actualizar la compañía'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h2"} size={"2xl"}>Empresa</Heading>
            <Heading as={"h3"} size={"1xl"}>ID: {comp._id}</Heading>
            <hr color={"#000"}/>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre" type="text" value={comp.name} />
                <InputForm label="Email" handleChange={handleChange} name="email" placeholder="Objetivo de la " type="text" value={comp.email} />
                <InputForm label="RUT" handleChange={handleChange} name="rut" placeholder="RUT" type="text" value={comp.rut} />
                <InputForm label="Area" handleChange={handleChange} name="area" placeholder="Area" type="text" value={comp.area} />
                <InputForm label="Phone" handleChange={handleChange} name="phone" placeholder="Phone" type="text" value={comp.phone} />
                <InputForm label="address" handleChange={handleChange} name="address" placeholder="Address" type="text" value={comp.address} />
                <InputForm label="contact" handleChange={handleChange} name="contact" placeholder="Contact" type="text" value={comp.contact} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitCompany}>Aplicar</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/companies')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default Edit
