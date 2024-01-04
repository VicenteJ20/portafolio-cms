'use client'
import { motion } from 'framer-motion'
import { Experience } from '@/constants/Experience'

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={experience.url || '/sobre-mi'} target='_blank' className='flex flex-col gap-2 bg-white px-4 py-2 border border-zinc-400 rounded-sm shadow-lg shadow-zinc-300'>
      <header className='flex flex-row gap-4 items-center justify-between'>
        <h2 className='text-lg font-semibold text-slate-700'>{experience.position}</h2>
        <time className='text-sm text-slate-500'>{experience.period}</time>
      </header>
      <h3 className='text-sm font-semibold text-slate-500'>{experience.company}</h3>
      <p className='text-sm text-gray-700'>{experience.description}</p>
    </motion.a>
  )
}

export { ExperienceCard }