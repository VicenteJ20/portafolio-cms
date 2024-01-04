import { FormikForm } from "@/components/Contacto/Contacto"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Binvenido/a a mi página de contacto, aquí podrás contactarme si quieres que trabajemos juntos, puedes utilizar el formulario y/o los enlaces a mis redes sociales.'
}

const ContactoPage = () => {
  return (
    <section className='max-w-7xl mx-auto py-28 px-4 lg:px-0 flex flex-col gap-8 '>
      <header className="flex flex-col gap-3">
        <h3 className='text-lime-600 font-medium text-lg'>Contacto</h3>
        <h1 className='text-2xl lg:text-3xl font-bold text-slate-700'>¿Te gusta mi trabajo y quieres que trabajemos juntos?</h1>
        <p className='text-slate-600 text-lg'>Puedes completar el formulario aquí abajo para contactarme inmediatamente. Además, recuerda que puedes contactarme a través de mis redes sociales.</p>
      </header>
      <FormikForm />
    </section>
  )
}

export default ContactoPage