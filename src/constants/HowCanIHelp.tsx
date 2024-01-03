'use client'
import { SiTypescript, SiLinux, SiNodedotjs } from 'react-icons/si'
import { GrStorage } from "react-icons/gr";

const FavoriteTechnologies = [
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    href: 'https://www.typescriptlang.org/',
    description: 'TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipado estático y objetos basados en clases.',
    priority: true,
    color: '#007acc'
  },
  {
    name: 'RHEL',
    icon: <SiLinux />,
    href: 'https://www.redhat.com/es/technologies/linux-platforms/enterprise-linux',
    description: 'Red Hat Enterprise Linux es una distribución de Linux desarrollada por Red Hat y orientada al mercado comercial. Red Hat Enterprise Linux está disponible para arquitecturas IBM System z, Itanium, x86 y x86-64, PowerPC y PowerPC64.',
    priority: false,
    color: '#B91C1C'
  },
  {
    name: 'SQL Server',
    icon: <GrStorage />,
    href: 'https://www.microsoft.com/es-es/sql-server/sql-server-2022',
    description: 'Microsoft SQL Server es un sistema de gestión de base de datos relacional, desarrollado por la empresa Microsoft. El lenguaje de desarrollo utilizado es Transact-SQL, una implementación del estándar ANSI del lenguaje SQL, utilizado para manipular y recuperar datos.',
    priority: false,
    color: '#7E22CE'
  },
  {
    name: 'PostgreSQL',
    icon: <GrStorage />,
    href: 'https://www.postgresql.org/',
    description: 'PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL, similar a la BSD o la MIT.',
    priority: false,
    color: '#1E40AF'
  },
  {
    name: 'NodeJS / Frameworks',
    icon: <SiNodedotjs />,
    href: 'https://nodejs.org/en',
    description: 'Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.',
    priority: false,
    color: '#115E59'
  }
]

export { FavoriteTechnologies }