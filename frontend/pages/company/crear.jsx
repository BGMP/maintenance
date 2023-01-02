import {Box, Button, FormControl, FormLabel, Table,} from '@chakra-ui/react'
import {useForm} from "react-hook-form";

const agenda = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: {isSubmitting}} = useForm();
    const onSubmit = data => console.log(data);
    const Input = ({ label, register, required }) => (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );

   return (
       <Box>
           <TableContainer>
               <form onSubmit={handleSubmit(onSubmit)}>
               <Heading textAling={"center"} my={10}>Crear contacto </Heading>
               <FormControl>
                   <FormLabel>Nombre</FormLabel>
                   <Input placeHolder ="Nombre del tercero" type={"text"}/>
                   <input {...register("name")} />
               </FormControl>

               <FormControl>
                   <FormLabel>Email</FormLabel>
                   <Input placeHolder ="Correo electronico del tercero" type={"text"}/>
                   <input {...register("email")} />
               </FormControl>

               <FormControl>
                   <FormLabel>Rut</FormLabel>
                   <Input placeHolder ="Numero de rut del tercero" type={"text"} max={"9"}/>
                   <input {...register("rut")} />
               </FormControl>

               <FormControl>
                   <FormLabel>Area</FormLabel>
                   <Input placeHolder ="Especialidad del tercero" type={"text"}/>
                   <input {...register("area")} />
               </FormControl>

               <FormControl>
                   <FormLabel>Numero</FormLabel>
                   <Input placeHolder ="Numero telefonico del tercero" type={"number"} max={"9"}/>
                   <input {...register("phone")} />
               </FormControl>

               <FormControl>
                   <FormLabel>Direccion</FormLabel>
                   <Input placeHolder ="Dirección del tercero" type={"text"}/>
                   <input {...register("address")} />
               </FormControl>

                   <button type="submit">Enviar</button>
                   </form>
           </TableContainer>
       </Box>
   )}
export default agenda