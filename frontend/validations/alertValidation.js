import * as yup from 'yup';

const alertValidation = yup.object({
    title: yup.string()
        .required("La alerta debe tener título!")
        .min(5, "El titulo debe tener al menos 5 caracteres!")
        .max(50),
    description: yup.string()
        .required("La alerta debe tener descripción")
        .max(1024)
})

export default alertValidation
