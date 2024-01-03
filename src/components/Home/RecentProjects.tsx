'use client'
import { motion } from 'framer-motion'
import { Header } from './Header'
import RecentProjectsList from './RecentProjectsList'

const RecentProjectsSection = () => {
  return (
    <motion.section className='py-12 px-4'>
      <motion.section className='max-w-7xl mx-auto'>
        <Header
          overtitle='Proyectos'
          title='Proyectos recientes'
          description='Estos son algunos de los proyectos en los que he trabajado recientemente, en los proyectos personales tendrás acceso al código fuente y a su versión en producción, si está disponible. También encontrarás proyectos para clientes, sin embargo aquí el código fuente no estará disponible.'
        />
        <RecentProjectsList />
      </motion.section>
    </motion.section>
  )
}

export { RecentProjectsSection }