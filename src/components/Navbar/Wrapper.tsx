'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND, NAVBAR_PAGES, CONTACT_BTN } from '@/constants/Navbar'
import { useRouter } from 'next/navigation'

const NavbarWrapper = () => {
  const router = useRouter()

  return (
    <section className='fixed top-0 left-0 right-0 max-h-20 p-4 bg-white'>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-between items-center max-w-7xl mx-auto'
      >
        <motion.h2
          whileHover={{ scale: 1.050}}
          className='font-bold text-xl text-stone-800'>
          <Link href={BRAND.url}>{BRAND.title}</Link>
        </motion.h2>
        <motion.ul className='flex flex-row gap-6 items-center justify-center'>
          {
            NAVBAR_PAGES && NAVBAR_PAGES.map((item: any) => (
              <motion.li
                key={item.title}
                whileHover={{ scale: 1.1, fontWeight: '500' }}
                whileFocus={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={item.url} className='text-stone-500 hover:text-stone-800 font-normal'>
                  {item.title}
                </Link>
              </motion.li>
            ))
          }
        </motion.ul>
        <motion.button type='button'
          whileHover={{
            backgroundColor: '#1E293B',
          }}
          whileTap={{
            scale: 0.9,
            backgroundColor: '#1E293B',
          }}
          className='bg-[#475569] text-white font-semibold px-4 py-2 rounded-md'
          onClick={() => router.push(CONTACT_BTN.url)}>
          {CONTACT_BTN.title}
        </motion.button>
      </motion.nav>
    </section>
  )
}

export { NavbarWrapper }