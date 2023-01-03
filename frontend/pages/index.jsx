import { React, Fragment, useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { getMaintenances, updateMaintenance } from '../data/maintenances'

function index() {

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
                <Tr key={maintenance._id + maintenance.company}>
                    <Td>{maintenance.company}</Td>
                    <Td>{maintenance.description}</Td>
                    <Td>{maintenance.type}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./maintenance/${maintenance._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./maintenance/edit/${maintenance._id}`)}>Editar</Button>
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
          <Container maxW="container.xl">
              <Heading as="h2" size="2xl" textAlign="center" mt="10">Mantenciones</Heading>
              <Stack spacing={4} mt="10">
                  <Table variant="simple">
                      <Thead>
                          <Tr>
                              <Td>Compañía</Td>
                              <Td>Descripción</Td>
                              <Td>Tipo</Td>
                              <Td>Acciones</Td>
                          </Tr>
                      </Thead>
                      <Tbody>
                          {contentTable()}
                      </Tbody>
                  </Table>
              </Stack>
          </Container>
      </Fragment>
    )
}

export default index
