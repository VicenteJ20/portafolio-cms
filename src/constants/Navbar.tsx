import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"

const BRAND = {
  title: 'Vicente Jorquera',
  url: '/'
}

const NAVBAR_PAGES = [
  {
    title: 'Inicio',
    url: '/',
  },
  {
    title: 'Proyectos',
    url: '/proyectos',
  },
  {
    title: 'Sobre mí',
    url: '/sobre-mi',
  },
  
]

const CONTACT_BTN = {
  title: 'Contacto',
  url: '/contacto',
}

const SOCIAL_MEDIA = [
  {
    title: 'Github',
    href: 'https://www.github.com/VicenteJ20',
    icon:  <VscGithub />,
    highlight_color: '#1E293B'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vicentejorquera',
    icon: <FaLinkedinIn />,
    highlight_color: '#1E40AF'
  },
  {
    title: 'Twitter',
    href: 'https://www.twitter.com/jvicente_20',
    icon: <FaXTwitter />,
    highlight_color: '#0EA5E9'
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/jvicente_20',
    icon: <FaInstagram />,
    highlight_color: '#F472B6'
  },
]

const INITIAL_YEAR = 2024

export { BRAND, NAVBAR_PAGES, CONTACT_BTN, SOCIAL_MEDIA, INITIAL_YEAR }