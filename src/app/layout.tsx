import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'
import { NavbarWrapper } from '../components/Navbar/Wrapper'

const FiraSans = Fira_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: {
    default: 'Vicente Jorquera',
    template: `%s | Vicente Jorquera`,
  },
  description: 'Bienvenido/a a mi web, aquí podrás encontrar información sobre mí y mis proyectos, así también puedes mantenerte al tanto de mis nuevos proyectos y contactarme para trabajar juntos.',
  keywords: [
    'Vicente Jorquera', 'Vicente', 'Jorquera', 'Desarrollador', 'Programador', 'Programador Curicó', 'Curicó', 'INACAP', 'Ingeniero en Informática en Curicó', 'Analista Programador', 'Analista', 'Soluciones web', 'TI', 'Ingeniero de TI', 'Computer Science', 'PYME', 'Developer', 'Developer Curicó', 'Freelancer', 'Freelance', 'Freelance Curicó', 'Molina', 'Lontué', 'Desarrollador Lontué', 'Ingeniero en Informática Chile', 'Chile', 'Ingeniero en Informática Molina', 'Ingeniero en Informática'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={FiraSans.className}>
        <NavbarWrapper />
        <main className='p-4'>
          <div className='max-w-7xl mx-auto py-20'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
