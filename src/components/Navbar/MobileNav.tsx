'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND, NAVBAR_PAGES, CONTACT_BTN, SOCIAL_MEDIA } from '@/constants/Navbar'

const MobileNav = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
  return (
    <>
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
        className={`${open ? 'h-full w-full md:hidden py-10 flex flex-col gap-2' : 'h-0 absolute pointer-events-none left-0 right-0 md:hidden opacity-0 pb-24'}`}
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
              <Link href={item.url} className='text-stone-500 hover:text-stone-800 hover:scale-110 font-normal'>
                {item.title}
              </Link>
            </motion.li>
          ))
        }
        <motion.li
          whileHover={{ scaleY: 1.1 }}
          whileFocus={{ scaleY: 1.1 }}
          whileTap={{ scaleY: 0.9 }}
          className='md:hidden border-b border-zinc-400 min-w-full pb-2 text-xl'>
          <Link href={CONTACT_BTN.url} className='text-stone-500 hover:text-stone-800 hover:scale-110 font-normal' >
            {CONTACT_BTN.title}
          </Link>
        </motion.li>

        <motion.section
        className={`flex-col gap-8 items-start fixed bottom-4 left-4 right-4 ${open ? 'flex h-fit' : 'h-0 pointer-events-none opacity-0'} md:hidden`}>
          <motion.h2
            className='text-xl font-medium text-stone-500'
          >
            Sígueme en mis redes sociales
          </motion.h2>
          <motion.ul className={
            `w-full flex flex-row gap-4 justify-center items-center`
          }>
            {
              SOCIAL_MEDIA && SOCIAL_MEDIA.map((item: any) => (
                <motion.li
                  key={item.title}
                  whileHover={{ scaleY: 1.1 }}
                  whileFocus={{ scaleY: 1.1 }}
                  whileTap={{ scaleY: 0.9 }}
                  className='md:hidden border-b border-zinc-400 w-full pb-2 text-xl text-center'
                  onClick={() => setOpen(!open)}
                >
                  <Link
                    href={item.href} className={`text-stone-500 font-normal hover:text-[${item.highlight_color}]`} target='_blank'>
                    {item.icon ? item.icon : item.title}
                  </Link>
                </motion.li>
              ))
            }
          </motion.ul>
        </motion.section >
      </motion.ul>
    </>
  )
}

export { MobileNav }