import { React, Fragment, useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody, TableContainer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {getMaintenance, getMaintenances} from '../data/maintenances'
import { getCompany } from '../data/companies'

function Index() {

    const [maintenances, setMaintenances] = useState([{
        id: '',
        company: '',
        target: '',
        type: '',
        description: '',
        start_date: '',
        end_date: '',
    }])

    const router = useRouter()

    const contentTable = () => {
        return maintenances.map(maintenance => {
            return (
                <Tr key={maintenance._id + maintenance.company._id}>
                    <Td>{maintenance.company.name}</Td>
                    <Td>{maintenance.description}</Td>
                    <Td>{maintenance.type}</Td>
                    <Td>
                        <HStack>
                            <Button color={"#FFF"} backgroundColor={"#428BCA"} _hover={{bgColor: "#2a577a"}} onClick={() => router.push(`./maintenance/${maintenance._id}`)}>Ver</Button>
                            <Button color={"#ffffff"} backgroundColor={"#ffb432"} _hover={{bgColor: "#c48d29"}} onClick={() => router.push(`./maintenance/edit/${maintenance._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getMaintenances().then(res => {
            setMaintenances(res.data)
        })
    }, [])

    return (
      <Fragment>
          <Container maxW="container.xl" pb={10}>
              <Heading as="h2" size="2xl" textAlign="center" mt="10">Mantenciones</Heading>
              <Button color={"#FFF"} backgroundColor={"#41DC94"} _hover={{bgColor: "#1b583c"}} mt="10" mb="10" onClick={() => router.push('/maintenance/create')}>Agregar Mantención</Button>
              <Stack spacing={4} mt="10">
                  <TableContainer w="full">
                      <Table variant="simple">
                          <Thead>
                              <Tr>
                                  <Td>Empresa</Td>
                                  <Td>Descripción</Td>
                                  <Td>Tipo</Td>
                                  <Td>Acciones</Td>
                              </Tr>
                          </Thead>
                          <Tbody>
                              {contentTable()}
                          </Tbody>
                      </Table>
                  </TableContainer>
              </Stack>
          </Container>
      </Fragment>
    )
}

export default Index
