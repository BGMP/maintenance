import {React, useState, useEffect } from "react";
import {
    Button,
    Container, FormControl, FormLabel,
    Heading,
    HStack, Input,
    Stack,
    Text
} from "@chakra-ui/react";
import {createRegistry} from '../../data/registry'
import {getMaintenances} from '../../data/maintenances'
import { useRouter } from 'next/router'
import {Field, Formik} from "formik";
import InputForm from "../../components/InputForm";
import {getCompanies} from "../../data/companies";

const Create = () => {

    const [registry, setRegistry] = useState({
        maintenance: "",
        comment: "",
        files: []
    })

    const [maintenance, setMaintenance] = useState([{
        company: '',
        target: '',
        type: '',
        description: '',
        start_date: '',
        end_date: ''
    }])

    const router = useRouter()

    const options = () => {
        return maintenance.map(m => {
            return (
                <option key={m.id} value={m.id}>{m.target}</option>
            )
        })
    }

    useEffect(() => {
        getMaintenances().then(res => {
            setMaintenance(res.data)
        })
    }, [])

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Agregar registro</Heading>
            <Formik
                initialValues={registry}
                onSubmit={(values) => {
                    createRegistry(values).then(res => {
                        router.push("/registries")
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
                            <FormControl id="maintenance">
                                <FormLabel>Mantención</FormLabel>
                                <Input as="select" name="maintenance" type="maintenance" onChange={handleChange} value={values.maintenance} onBlur={handleBlur}>
                                    <option value="777">---</option>
                                    { options() }
                                </Input>
                            </FormControl>
                            <InputForm label="Comentario" handleChange={handleChange} name="comment" placeholder="Comentario" type="text" value={values.comment} handleBlur={handleBlur} />
                            {touched.comment && errors.comment && (
                                <Text color={"red"}>{errors.comment}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} onClick={() => router.push('/registries')}>Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/registries')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default Create
