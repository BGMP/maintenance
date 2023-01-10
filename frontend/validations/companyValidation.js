import * as yup from 'yup';

const companyValidation = yup.object({
    name: yup.string()
        .required("La empresa debe tener nombre!")
        .min(5)
        .max(50),
    email: yup.string()
        .required("La empresa debe tener un email!"),
    rut: yup.string()
        .min(11)
        .max(12)
        .required("El rut de empresa es obligatorio!"),
    area: yup.string()
        .required("El área es obligatoria!")
        .min(5, "Debe contener minimo 5 caracteres")
        .max(30, "Debe contener maximo 30 caracteres"),
    phone: yup.string()
        .required("El teléfono debe tener 9 dígitos!")
        .min(9)
        .max(9),
    address: yup.string()
        .required("La empresa debe tener dirección!")
        .min(5, "Debe contener minimo 5 caracteres")
        .max(60, "Debe contener maximo 60 caracteres"),
    contact: yup.string()
        .required("La empresa debe tener un contacto!")
        .min(5, "Debe contener minimo 5 caracteres")
        .max(40, "Debe contener maximo 40 caracteres")
})

export default companyValidation
