import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
  name: Yup.string().required('Debe ingresar su nombre'),
  email: Yup.string().email('Invalid email').required('Debe ingresar su correo electrónico'),
  phone: Yup.string().matches(/^[0-9]{9}$/, 'El teléfono debe tener exactamente 9 dígitos').required('Debe ingresar su número de teléfono'),
  message: Yup.string().required('Debe ingresar su mensaje especificando el motivo de su contacto')
})