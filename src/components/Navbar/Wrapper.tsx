'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND, NAVBAR_PAGES, CONTACT_BTN } from '@/constants/Navbar'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { MobileNav } from './MobileNav'

const NavbarWrapper = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <section className={
      `fixed top-0 left-0 right-0 ${open ? 'h-screen' : ''} md:max-h-20 p-4 bg-white bg-opacity-25 backdrop-blur-md border-b border-stone-200`
    }>
      <motion.nav
        transition={{ duration: 0.5 }}
        className='flex flex-col md:flex-row justify-between md:items-center max-w-7xl mx-auto'
      >
        <motion.h2
          whileHover={{ scale: 1.050 }}
          className='font-bold text-xl text-stone-800 w-fit'>
          <Link href={BRAND.url}>{BRAND.title}</Link>
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={
            `hidden md:flex flex-col md:flex-row gap-4 md:gap-8 md:items-center md:justify-center`
          }>
          {
            NAVBAR_PAGES && NAVBAR_PAGES.map((item: any) => (
              <motion.li
                key={item.title}
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={item.url} className='text-stone-500 hover:text-stone-800 hover:scale-110 font-normal'>
                  {item.title}
                </Link>
              </motion.li>
            ))
          }
        </motion.ul>
        <MobileNav open={open} setOpen={setOpen} />
        <motion.button type='button'
          whileHover={{
            backgroundColor: '#1E293B',
          }}
          whileTap={{
            scale: 0.9,
            backgroundColor: '#1E293B',
          }}
          className={
            `bg-[#475569] text-white font-semibold px-4 py-2 rounded-md hidden md:block`
          }
          onClick={() => router.push(CONTACT_BTN.url)}>
          {CONTACT_BTN.title}
        </motion.button>
        <motion.button
          title='Open close mobile menu button'
          type='button'
          whileTap={{
            scale: 0.9,
          }}
          className='font-semibold select-none rounded-md absolute top-4.5 right-4 md:hidden text-2xl'
          onClick={handleOpen}>
          {open ? <IoMdClose /> : <IoMdMenu />}
        </motion.button>
      </motion.nav>
    </section>
  )
}

export { NavbarWrapper }