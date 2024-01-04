import Image from 'next/image'
import { SOCIAL_MEDIA } from '@/constants/Navbar';
import Link from 'next/link';
import { Header } from '@/components/Home/Header';
import { Experience } from '@/constants/Experience';
import { ExperienceCard } from '@/components/Home/Experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mi',
  description: 'Bienvenido/a aquí podrás encontrar información sobre mí y mis proyectos, así también puedes contactarme mediante el formulario disponible en esta misma página o directamente a través de mis redes sociales.'
}


const AboutMePage = () => {
  return (
    <section className='max-w-7xl mx-auto pt-24 px-4 flex flex-col gap-8 '>
      <header className='flex flex-col gap-4 text-center'>
        <Image src='/profile.webp' alt='Vicente Jorquera' width={200} height={200} className='rounded-full h-20 w-20 mx-auto' />
        <section>
          <h2 className="text-zinc-600 text-lg">Sobre mí</h2>
          <h1 className='font-bold text-2xl'>Vicente Jorquera</h1>
        </section>
        <ul className='flex flex-row gap-5 items-center justify-center transition-all duration-300 ease-in-out'>
          {
            SOCIAL_MEDIA.map((social, index) => (
              <li key={index} className='text-3xl hover:scale-110 transition-all duration-300 ease-in-out hover:text-slate-600'>
                <Link href={social.href} title={social.title} target='_blank' rel='noreferrer'>
                  {social.icon}
                </Link>
              </li>
            ))
          }
        </ul>
        <p className='text-zinc-600'>
          Soy un desarrollador full stack con experiencia en el desarrollo de soluciones web con TypeScript, NextJS 14 y prácticas SEO para mejorar el posicionamiento en buscadores. También cuento con conocimientos en la nube de AWS, siendo así que este misma web aloja sus imágenes en S3, como agregado me encuentro estudiando la certificación de AWS Cloud Partitioner para posteriormente este año, rendir el examen y obtener la certificación para así poder seguir creciendo y obtener la certificación de Solutions Architect y con esto mejorar la calidad y escalibilidad de los proyectos que desarrollo para mi y mis clientes.
        </p>
      </header>
      <Header overtitle='' title='Experiencia' description='' />
      {
        Experience.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))
      }
    </section >
  );
}

export default AboutMePage