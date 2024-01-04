import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { NavbarWrapper } from '../components/Navbar/Wrapper'
import { FooterComponent } from '@/components/Footer/Footer'

const Vercetti = localFont({
  src: '/fonts/Vercetti-Regular.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vicente Jorquera',
    template: `%s - Vicente Jorquera`,
  },
  description: 'Bienvenido/a a mi web, aquí podrás encontrar información sobre mí y mis proyectos, así también puedes mantenerte al tanto de mis nuevos proyectos y contactarme para trabajar juntos.',
  keywords: [
    'Vicente Jorquera', 'Vicente', 'Jorquera', 'Desarrollador', 'Programador', 'Programador Curicó', 'Curicó', 'INACAP', 'Ingeniero en Informática en Curicó', 'Analista Programador', 'Analista', 'Soluciones web', 'TI', 'Ingeniero de TI', 'Computer Science', 'PYME', 'Developer', 'Developer Curicó', 'Freelancer', 'Freelance', 'Freelance Curicó', 'Molina', 'Lontué', 'Desarrollador Lontué', 'Ingeniero en Informática Chile', 'Chile', 'Ingeniero en Informática Molina', 'Ingeniero en Informática'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.vicentejorquera.dev',
    siteName: 'Vicente Jorquera',
    title: 'Vicente Jorquera',
    description: 'Bienvenido/a a mi web, aquí podrás encontrar información sobre mí y mis proyectos, así también puedes mantenerte al tanto de mis nuevos proyectos y contactarme para trabajar juntos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vicente Jorquera'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${Vercetti.className} bg-[#ffffff]`}>
        <NavbarWrapper />
        <main>
          <section>
            {children}
          </section>
        </main>
        <FooterComponent />
      </body>
    </html>
  )
}
