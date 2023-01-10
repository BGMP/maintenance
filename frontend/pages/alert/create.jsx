import {React, useState} from "react";
import {
    Button,
    Container, FormControl, FormLabel,
    Heading,
    HStack, Input,
    Stack,
    Text
} from "@chakra-ui/react";
import {createAlert} from '../../data/alert'
import { useRouter } from 'next/router'
import {Field, Formik} from "formik";
import InputForm from "../../components/InputForm";
import alertValidation from "../../validations/alertValidation";

const Create = () => {

    const [alert, setAlert] = useState({
        title: '',
        description: '',
        type: ''
    })

    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Alerta</Heading>
            <Formik
                initialValues={alert}
                validationSchema={alertValidation}
                onSubmit={(values) => {
                    createAlert(values).then(res => {
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
                            <InputForm label="Título" handleChange={handleChange} name="title" placeholder="Título" type="text" value={values.title} handleBlur={handleBlur} />
                            {touched.title && errors.title && (
                                <Text color={"red"}>{errors.title}</Text>
                            )}
                            <InputForm label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción" type="text" value={values.description} handleBlur={handleBlur} />
                            {touched.description && errors.description && (
                                <Text color={"red"}>{errors.description}</Text>
                            )}
                            <FormControl id="type">
                                <FormLabel>Tipo</FormLabel>
                                <Input as="select" name="type" type="type" onChange={handleChange} value={values.type} onBlur={handleBlur} placeholder="admin">
                                    <option value="admin">Admin</option>
                                    <option value="company">Company</option>
                                    <option value="vecino">Vecino</option>
                                </Input>
                            </FormControl>
                            {touched.type && errors.type && (
                                <Text color={"red"}>{errors.type}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} onClick={() => router.push('/alerts')}>Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/alerts')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default Create