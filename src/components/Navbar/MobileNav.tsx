'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { NAVBAR_PAGES, CONTACT_BTN, SOCIAL_MEDIA, INITIAL_YEAR } from '@/constants/Navbar'
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const MobileNav = ({ open, setOpen }: { open: boolean, setOpen: any }) => {

  const [openSubMenu, setOpenSubMenu] = useState(false)
  const actualYear = new Date().getFullYear()

  return (
    <motion.section className={` ${open ? 'min-h-screen w-full md:hidden pt-10 flex flex-col gap-2 pb-[7rem] relative' : 'h-0 absolute pointer-events-none left-0 right-0 md:hidden opacity-0 pb-24'}`}>
      <motion.ul
        initial={
          open ? { opacity: 0 } : { opacity: 1 }
        }
        animate={
          open ? { opacity: 1 } : { opacity: 0 }
        }
        transition={
          open ? { duration: 0.5 } : { duration: 0 }
        }
        className='flex flex-col gap-2 items-start'
      >
        {
          NAVBAR_PAGES && NAVBAR_PAGES.map((item: any) => (
            <motion.li
              key={item.title}
              whileHover={{ scaleY: 1.1 }}
              whileFocus={{ scaleY: 1.1 }}
              whileTap={{ scaleY: 0.9 }}
              className='border-b border-zinc-400 w-full pb-2 text-xl'
              onClick={() => setOpen(!open)}
            >
              <Link href={item.url} className='text-stone-500 hover:text-stone-800 block w-full font-normal min-w-full'>
                {item.title}
              </Link>
            </motion.li>
          ))
        }
        <motion.li
          whileHover={{ scaleY: 1.1 }}
          whileFocus={{ scaleY: 1.1 }}
          whileTap={{ scaleY: 0.9 }}
          onClick={() => setOpen(!open)}
          className='md:hidden border-b border-zinc-400 min-w-full  text-xl relative'>
          <Link href={CONTACT_BTN.url} className='block text-stone-500 w-full pb-2 hover:text-stone-800 font-normal '>
            {CONTACT_BTN.title}
          </Link>
        </motion.li>
      </motion.ul>
      <motion.section
        className={`md:hidden border-zinc-400 min-w-full pb-2 text-xl relative ${openSubMenu ? '' : 'border-b'}`}>
        <motion.button className='md:hidden min-w-full text-xl gap-4 text-start flex flex-row justify-between items-center' onClick={() => setOpenSubMenu(!openSubMenu)}>
          <span className={`hover:text-stone-800 ${openSubMenu ? 'text-stone-800' : 'text-stone-500'} font-normal`}>Redes sociales</span>
          <motion.span
            animate={
              openSubMenu ? { rotate: 180 } : { rotate: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <FaAngleDown />
          </motion.span>
        </motion.button>
        <motion.ul className={
          `w-full flex flex-row gap-4 justify-center pt-6 pl-4 items-center ${openSubMenu ? 'flex flex-col' : 'hidden'}`
        }>
          {
            SOCIAL_MEDIA && SOCIAL_MEDIA.map((item: any, index: number) => (
              <motion.li
                key={item.title}
                whileHover={{ scaleY: 1.1 }}
                whileFocus={{ scaleY: 1.1 }}
                whileTap={{ scaleY: 0.9 }}
                className={
                  `md:hidden border-b border-zinc-400 w-full pb-2 text-xl text-center `
                }
                onClick={() => setOpen(!open)}
              >
                <Link
                  href={item.href} className={`text-stone-500 flex flex-row gap-4 items-center min-w-full font-normal hover:text-[${item.highlight_color}]`} target='_blank'>
                  {item.icon}
                  {item.title}
                </Link>
              </motion.li>
            ))
          }
        </motion.ul>
      </motion.section>
      <footer className={
        `flex-row items-center gap-1 mt-4 text-stone-600 md:hidden ${open ? 'flex' : 'hidden'}`
      }>
        <span>&copy;</span>
        <span>Copyright {INITIAL_YEAR === actualYear ? actualYear : `${INITIAL_YEAR}-${actualYear}`},</span>
        <span> Vicente Jorquera.</span>
      </footer>
    </motion.section>
  )
}

export { MobileNav }