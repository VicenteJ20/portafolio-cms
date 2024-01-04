'use client'

import { contactSchema } from "@/schemas/contact"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState, useEffect } from "react"

const FormikForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    }
  }, [isSubmitting])

  const onSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await response.json()
      console.log(data)
      resetForm()
      setSubmitting(false)
      setIsSubmitting(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        isSubmitting ? (
          <div className='flex flex-col gap-4'>
            <h3 className='text-lime-600 font-medium text-lg'>¡Gracias por contactarme!</h3>
            <p className='text-slate-600 text-lg'>Me pondré en contacto contigo lo antes posible. A contuación serás redirigido en unos segundos al inicio.</p>
          </div>
        ) : (


          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              message: ''
            }}
            validationSchema={contactSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col gap-4'>
                <div className="flex flex-col gap-3">
                  <label htmlFor="name">Nombre</label>
                  <Field type="text" name="name" className='px-4 py-2 rounded-md border border-slate-400 bg-white shadow-lg shadow-zinc-200 outline-none' placeholder='ej: Vicente Jorquera' />
                  <ErrorMessage name="name" component="div" className="text-red-600 font-semibold" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className='px-4 py-2 rounded-md border border-slate-400 bg-white shadow-lg shadow-zinc-200 outline-none' placeholder='ej: contacto@vicentejorquera.dev' />
                  <ErrorMessage name="email" component="div" className="text-red-600 font-semibold" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="phone">Teléfono</label>
                  <Field type="number" name="phone" className='px-4 py-2 rounded-md border border-slate-400 bg-white shadow-lg shadow-zinc-200 outline-none' placeholder='ej: 920328991' />
                  <ErrorMessage name="phone" component="div" className="text-red-600 font-semibold" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="message">Mensaje</label>
                  <Field as="textarea" name="message" className='px-4 py-2 rounded-md border border-slate-400 bg-white shadow-lg shadow-zinc-200 outline-none h-44 overflow-y-auto w-full resize-none' placeholder='Debe ingresar el motivo por el cuál me está contactando.' />
                  <ErrorMessage name="message" component="div" className="text-red-600 font-semibold" />
                </div>
                <button className='bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out py-2 text-xl text-white font-semibold rounded-md shadow-lg shadow-zinc-200 w-fit px-8' type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        )}
    </>
  )

}

export { FormikForm }