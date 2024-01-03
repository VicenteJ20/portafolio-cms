'use client'

import { motion } from 'framer-motion'
import { Header } from './Header'
import { FavoriteTechnologies } from '@/constants/HowCanIHelp'

const HowCanIHelpSection = () => {
  return (
    <motion.section className='py-20 px-4'>
      <motion.section className='max-w-7xl mx-auto'>
        <Header
          overtitle='Sobre mí'
          title='¿Cómo puedo ayudarte?'
          description='Como desarrollador full-stack e ingeniero en informática, puedo ayudarte a crear soluciones eficientes y escalables para hacer crecer tu negocio y dar vida a tus ideas. A continuación, algunas de las tecnologías que suelo utilizar para desarrollar proyectos:'
        />

        <motion.section className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            FavoriteTechnologies && FavoriteTechnologies.map((technology, index) => (
              <motion.div
                key={index}
                className={`flex flex-col gap-4 justify-between p-6 rounded-md ${technology.priority ? 'row-span-2' : 'min-h-52'}`}
                style={{ backgroundColor: technology.color }}
              >
                <motion.h3 className='text-2xl font-semibold text-gray-100'>
                  {technology.icon}
                </motion.h3>
                <motion.article className='flex flex-col gap-4'>
                  <motion.h3 className='text-xl font-semibold text-gray-100'>
                    {technology.name}
                  </motion.h3>
                  <motion.p className={`font-normal text-gray-200 ${technology.priority ? ' line-clamp-3 md:line-clamp-none' : 'line-clamp-3'}`}>
                    {technology.description}
                  </motion.p>
                </motion.article>
              </motion.div>
            ))
          }
        </motion.section>
      </motion.section>
    </motion.section>
  )
}

export { HowCanIHelpSection }