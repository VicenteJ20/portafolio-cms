'use client'
import { motion, AnimatePresence } from "framer-motion"
import { IoLogoGithub } from "react-icons/io"
import { SOCIAL_MEDIA } from "@/constants/Navbar"
import Link from "next/link"

const HeroSectionPage = () => {

  return (
    <motion.section className='max-w-7xl h-screen lg:h-auto mx-auto py-32 lg:py-44 xl:py-72 flex flex-col lg:flex-row gap-12 text-start items-center justify-center lg:justify-between px-4'>
      <motion.header className='flex flex-col gap-5 lg:max-w-[75%] text-center lg:text-start'>
        <motion.h3 className='text-xl font-semibold text-lime-600'>
          Hola, soy Vicente
        </motion.h3>

        <motion.h1 className='text-3xl xl:text-5xl font-semibold text-slate-700'>
          Desarrollador full-stack<br />e Ingeniero en Informática.
        </motion.h1>
        <motion.p
          className='text-xl text-stone-700'>
          Me especializo en el desarrollo de soluciones eficientes y escalables, utilizando tecnologías de vanguardia y con la seguridad siempre en mente.
        </motion.p>
      </motion.header>
      <motion.ul className='flex w-fit flex-row lg:flex-col gap-8 items-center justify-center'>
        {
          SOCIAL_MEDIA.map((social, index) => (
            <motion.li key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}

              className='flex flex-row gap-2 items-center justify-center'>

              <motion.span className='text-3xl'>
                <Link href={social.href} title={social.title} target='_blank' rel='noreferrer'>
                  {social.icon}
                </Link>
              </motion.span>
            </motion.li>
          ))
        }
      </motion.ul>
    </motion.section >
  )
}

export { HeroSectionPage }