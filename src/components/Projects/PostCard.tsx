import { format, parseISO } from 'date-fns' 
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Post } from 'contentlayer/generated'

export const PostCard = (post: Post) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={`/proyectos/${post._raw.flattenedPath}`}
      className=' bg-white p-3 rounded-md border border-zinc-200 shadow-md shadow-zinc-300 flex flex-col gap-3'>
      <motion.figure>
        <Image src={post.coverImage} alt={post.title} width={500} height={300} className='h-52 object-cover object-center lg:h-36 w-full rounded-sm' />
      </motion.figure>
      <motion.div className='flex flex-col gap-1.5'>
        <motion.h2
          className='text-lg font-semibold text-slate-700'>
          {post.title}
        </motion.h2>
        <time
          className='text-sm text-slate-500'
        >{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</time>
        <motion.p className='text-gray-700 text-sm line-clamp-3'>
          {post.description}
        </motion.p>
      </motion.div>
    </motion.a>
  )
}