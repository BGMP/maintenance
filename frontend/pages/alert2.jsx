import { Heading, Select, Stack, Button, Box, Container, HStack, Table, Thead, Tr, Td, Tbody} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import CustomControlsExample from './_app2'
import InputStackDos from '../components/InputStackDos'
import axios from 'axios'
import {useRouter} from "next/router";
import { getAlert } from '../data/alert'
import {Input} from "@chakra-ui/react";

const alert2 = () => {

    const [alert, setAlert] = useState([{
        id: '',
        nameAlert: '',
        descriptionAlert: ''
        }
    ])

    const contentTable = () =>{
        return alert.map(alert =>{
            return(
                <Tr key={alert._id}>
                    <Td>{alert.nameAlert}</Td>
                    <Td>{alert.descriptionAlert}</Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getAlert().then(res=>{
            setAlert(res.data)
        })
        console.log(alert)
    }, [])

    return (
        <div>
            <Container maxW="container.xl">
            </Container>
        </div>
    )
}

export default alert2