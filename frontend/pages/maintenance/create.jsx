import {React, useState, useEffect, Fragment} from 'react'
import {Button, Container, FormControl, FormLabel, Heading, HStack, Input, Stack, Text} from '@chakra-ui/react'
import {createMaintenance, getMaintenances} from '../../data/maintenances'
import { getCompanies } from '../../data/companies'
import InputForm from '../../components/InputForm'
import TextAreaInput from '../../components/TextAreaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import maintenanceValidation from '../../validations/maintenanceValidation'

const Maintenances = () => {

    const [maintenance, setMaintenance] = useState({
        company: '',
        target: '',
        type: '',
        description: '',
        start_date: '',
        end_date: ''
    })

    const [companies, setCompanies] = useState([{
        id: '',
        name: '',
        email: '',
        rut: '',
        area: '',
        phone: '',
        address: '',
        contact: ''
    }])

    const router = useRouter()

    const options = () => {
        return companies.map(company => {
            return (
                <option key={company._id} value={company._id}>{company.name}</option>
            )
        })
    }

    useEffect(() => {
        getCompanies().then(res => {
            setCompanies(res.data)
        })
    }, [])

    return (
        <Fragment>
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
                                <FormControl id="company">
                                    <FormLabel>Empresa</FormLabel>
                                    <Input as="select" name="company" type="company" onChange={handleChange} value={values.company} onBlur={handleBlur}>
                                        { options() }
                                    </Input>
                                </FormControl>
                                <TextAreaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción de la mantención" value={values.description} handleBlur={handleBlur} />
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
                                <InputForm label="Fecha Inicio" handleChange={handleChange} name="start_date" placeholder="Fecha inicio" type="text" value={values.start_date} handleBlur={handleBlur} />
                                {touched.start_date && errors.start_date && (
                                    <Text color={"red"}>{errors.start_date}</Text>
                                )}
                                <InputForm label="Fecha Término" handleChange={handleChange} name="end_date" placeholder="Fecha término" type="text" value={values.end_date} handleBlur={handleBlur} />
                                {touched.end_date && errors.end_date && (
                                    <Text color={"red"}>{errors.end_date}</Text>
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
        </Fragment>
    )
}

export default Maintenances
