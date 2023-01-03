import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createMaintenance } from '../../data/maintenances'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import maintenanceValidation from '../../validations/maintenanceValidation'

const maintenances = () => {

    const [maintenance, setMaintenance] = useState({
        company: '',
        target: 0,
        type: 0,
        description: '',
        start_date: '',
        end_date: ''
    })

    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Mantención</Heading>
            <Formik
                initialValues={maintenance}
                validationSchema={maintenanceValidation}
                onSubmit={(values) => {
                    createMaintenance(values).then(res => {
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
                            <InputForm label="Nombre" handleChange={handleChange} name="company" placeholder="ID de la empresa" type="text" value={values.company} handleBlur={handleBlur} />
                            {touched.company && errors.company && (
                                <Text color={"red"}>{errors.company}</Text>
                            )}
                            <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción de la mantención" value={values.description} handleBlur={handleBlur} />
                            {touched.description && errors.description && (
                                <Text color={"red"}>{errors.description}</Text>
                            )}
                            <InputForm label="Objetivo" handleChange={handleChange} name="target" placeholder="Objetivo de la mantención" type="text" value={values.target} handleBlur={handleBlur} />
                            {touched.target && errors.target && (
                                <Text color={"red"}>{errors.target}</Text>
                            )}
                            <InputForm label="Tipo" handleChange={handleChange} name="type" placeholder="Tipo de prioridad" type="text" value={values.type} handleBlur={handleBlur} />
                            {touched.type && errors.type && (
                                <Text color={"red"}>{errors.type}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default maintenances
