import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { NavbarWrapper } from '../components/Navbar/Wrapper'
import { FooterComponent } from '@/components/Footer/Footer'
import { Analytics } from '@vercel/analytics/react'

const Vercetti = localFont({
  src: '/fonts/Vercetti-Regular.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vicentejorquera.dev/'),
  authors: [{ name: 'Vicente Jorquera', url: 'https://www.vicentejorquera.dev'}],
  creator: 'Vicente Jorquera',
  publisher: 'Vicente Jorquera',
  applicationName: 'Web personal de Vicente Jorquera',
  icons: [
    {
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/favicon-48x48.png',
      sizes: '48x48',
      type: 'image/png',
    },
    {
      url: '/apple-icon-57x57.png',
      sizes: '57x57',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-60x60.png',
      sizes: '60x60',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-72x72.png',
      sizes: '72x72',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-76x76.png',
      sizes: '76x76',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-114x114.png',
      sizes: '114x114',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-120x120.png',
      sizes: '120x120',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-144x144.png',
      sizes: '144x144',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-152x152.png',
      sizes: '152x152',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-180x180.png',
      sizes: '180x180',
      type: 'apple-touch-icon',
    },
    {
      url: '/apple-icon-precomposed.png',
      sizes: '192x192',
      type: 'apple-touch-icon-precomposed',
    },
    {
      url: '/apple-icon.png',
      sizes: '192x192',
      type: 'apple-touch-icon',
    },
    {
      url: '/android-icon-192x192.png',
      sizes: '192x192',
      type: 'android-icon',
    },
    {
      url: '/android-icon-144x144.png',
      sizes: '144x144',
      type: 'android-icon',
    },
    {
      url: '/android-icon-96x96.png',
      sizes: '96x96',
      type: 'android-icon',
    },
    {
      url: '/android-icon-72x72.png',
      sizes: '72x72',
      type: 'android-icon',
    },
    {
      url: '/android-icon-48x48.png',
      sizes: '48x48',
      type: 'android-icon',
    },
    {
      url: '/android-icon-36x36.png',
      sizes: '36x36',
      type: 'android-icon',
    }
  ],
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
        alt: 'Vicente Jorquera brand logo'
      },
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'Vicente Jorquera brand logo'
      }
    ],

  },
  twitter: {
    card: 'app',
    title: 'Vicente Jorquera',
    description: 'Bienvenido/a a mi web, aquí podrás encontrar información sobre mí y mis proyectos, así también puedes mantenerte al tanto de mis nuevos proyectos y contactarme para trabajar juntos.',
    creator: '@jvicente_20',
    images: {
      url: '/og-image.png',
      width: 800,
      height: 600,
      alt: 'Vicente Jorquera brand logo'
    },
    app: {
      name: 'Vicente_Jorquera',
      id: {
        iphone: 'Vicente_Jorquera://iphone',
        ipad: 'Vicente_Jorquera://ipad',
        googleplay: 'Vicente_Jorquera://googleplay'
      },
    }
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['jorquerav029@protonmail.com', 'https://www.vicentejorquera.dev'],
    }
  },

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
            <Analytics />
          </section>
        </main>
        <FooterComponent />
      </body>
    </html>
  )
}
