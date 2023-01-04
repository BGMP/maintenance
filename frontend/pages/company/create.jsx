import {React, useState} from "react";
import {
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text
} from "@chakra-ui/react";
import {createCompany} from '../../data/companies'
import { useRouter } from 'next/router'
import {Field, Formik} from "formik";
import InputForm from "../../components/InputForm";
import companyValidation from "../../validations/companyValidation";

const Create = () => {

    const [company, setCompany] = useState({
        name: '',
        email: '',
        rut: '',
        area: '',
        phone: '',
        address: '',
        contact: ''
    })

    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Agendar Empresa</Heading>
            <Formik
                initialValues={company}
                validationSchema={companyValidation}
                onSubmit={(values) => {
                    createCompany(values).then(res => {
                        router.push("/")
                    })
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Stack spacing={4} mt={10}>
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                            <InputForm label="Email" handleChange={handleChange} name="email" placeholder="Email" type="text" value={values.email} handleBlur={handleBlur} />
                            {touched.email && errors.email && (
                                <Text color={"red"}>{errors.email}</Text>
                            )}
                            <InputForm label="rut" handleChange={handleChange} name="rut" placeholder="RUT" type="text" value={values.rut} handleBlur={handleBlur} />
                            {touched.rut && errors.rut && (
                                <Text color={"red"}>{errors.rut}</Text>
                            )}
                            <InputForm label="Área" handleChange={handleChange} name="area" placeholder="Área" type="text" value={values.area} handleBlur={handleBlur} />
                            {touched.area && errors.area && (
                                <Text color={"red"}>{errors.area}</Text>
                            )}
                            <InputForm label="Teléfono" handleChange={handleChange} name="phone" placeholder="Teléfono" type="text" value={values.phone} handleBlur={handleBlur} />
                            {touched.phone && errors.phone && (
                                <Text color={"red"}>{errors.phone}</Text>
                            )}
                            <InputForm label="Dirección" handleChange={handleChange} name="address" placeholder="Dirección" type="text" value={values.address} handleBlur={handleBlur} />
                            {touched.address && errors.address && (
                                <Text color={"red"}>{errors.address}</Text>
                            )}
                            <InputForm label="Contacto" handleChange={handleChange} name="contact" placeholder="Contacto" type="text" value={values.contact} handleBlur={handleBlur} />
                            {touched.contact && errors.contact && (
                                <Text color={"red"}>{errors.contact}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} onClick={() => router.push('/companies')}>Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/companies')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default Create
