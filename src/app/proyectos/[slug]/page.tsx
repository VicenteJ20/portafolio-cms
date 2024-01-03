import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import styles from '../../../../public/css/proyecto.module.css'

export const generateStaticParams = async () => allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post: any) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return {
    title: post.title,
    description: post.title,
    image: post.coverImage,
    author: post.author,
    date: format(parseISO(post.publishedAt), 'MMMM dd, yyyy'),
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post: any) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className='max-w-7xl py-24 px-4 xl:px-0 mx-auto'>
        <div className={`[&>*]:mb-3 [&>*:last-child]:mb-0 ${styles.main_post}`} dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )

}

export default PostLayout