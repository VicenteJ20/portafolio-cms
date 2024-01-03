'use client'
import { HeaderProps } from "@/interfaces/HeaderI"
import { motion } from 'framer-motion'

const Header = ({ title, overtitle, description }: HeaderProps) => {
  return (
    <motion.header
      className='flex flex-col gap-4'
    >
      <motion.h3
        className='font-semibold text-lime-600'>{overtitle}</motion.h3>
      <motion.h2
        className='text-2xl lg:text-3xl font-bold text-slate-700'
      >
        {title}
      </motion.h2>
      <motion.p
        className='text-lg lg:text-xl text-stone-700'
      >
        {description}
      </motion.p>
    </motion.header>
  )
}

export { Header }