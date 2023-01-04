import * as yup from 'yup';

const maintenanceValidation = yup.object({
    company: yup.string()
        .required("La mantención debe estar asociada a una empresa!"),
    target: yup.string()
        .min(5)
        .max(60)
        .required("La mantención debe tener un objetivo"),
    type: yup.string()
        .min(5)
        .max(40)
        .required("La cantidad es obligatoria"),
    description: yup.string()
        .min(5, "Debe contener minimo 5 caracteres")
        .max(512, "Debe contener maximo 150 caracteres")
        .required("La descripcion es obligatoria"),
    start_date: yup.date()
        .required("Le fecha debe ir en formato mm/dd/aa"),
    end_date: yup.date()
        .required("Le fecha debe ir en formato mm/dd/aa")
})

export default maintenanceValidation
