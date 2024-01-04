import { Header } from "@/components/Home/Header"
import RecentProjectsList from "@/components/Home/RecentProjectsList"

const ProyectosPage = async () => {

  return (
    <section className='max-w-7xl mx-auto pt-24 px-4 flex flex-col gap-2'>
      <Header
        overtitle='Proyectos'
        title='Proyectos recientes'
        description='Aquí encontrarás mis proyectos personales y para clientes que hayan permitido su publicación en mi web  personal. Las tecnologías utilizadas en cada proyecto se encuentran disponibles en cada proyecto, junto a un enlace a su código y demo si está disponible.'
      />
      <RecentProjectsList />
    </section>
  )
}

export default ProyectosPage