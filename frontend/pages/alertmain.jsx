import {useState} from "react";
import {
    Button,
    Container,
    Heading,
    HStack,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Textarea,
    Box
} from "@chakra-ui/react";
import {createAlert} from '../data/alert'

const alertmain = () => {

    const [alert, setAlert] = useState({
        nameAlert: '',
        descriptionAlert: ''
    })
    console.log(alert)

    console.log(alert)
    const handleChange = (e) => {
        setAlert({
            ...alert,
            [e.target.nameAlert]: e.target.value
        })
    }

    {/*const submitProduct = (e) => {
        e.preventDefault()
        createAlert(alert).then(res => {
            console.log(res)
        })
    }*/}
    const submitProduct = (e) => {
        e.preventDefault()
        const response = createAlert(alert)
        console.log(response)
    }



    return(
        <div>
            <Box bg="#2B6CB0">
                <Heading as="h1" size="2xl" ml={'3'} color="white">Bienvenido a Alertas</Heading>
            </Box>
        <Container maxW="container.xl" mt={10}>
            <Heading  as="h1" size="xl" >Crear Alerta</Heading>
            <Stack spacing={4} mt={3}>
                <FormControl id="nameAlert">
                    <FormLabel>Nombre Alerta</FormLabel>
                    <Input type="text" placeholder="Nombre" name={"nameAlert"} />
                </FormControl>
                <FormControl id="descriptionAlert">
                    <FormLabel>Descripcion Alerta</FormLabel>
                    <Input type="text" placeholder="Descripcion" name={"descriptionAlert"} />
                </FormControl>
            </Stack>
            <Button colorScheme="blue" mt={5} mb={5}>Crear</Button>

        </Container>
        </div>
    )
}

export default alertmain