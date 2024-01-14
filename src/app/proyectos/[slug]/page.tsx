import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import styles from '../../../../public/css/proyecto.module.css'
import { Metadata } from 'next'


export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = allPosts.find((post: any) => post._raw.flattenedPath === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return {
    title: post.title,
    description: post.description,
    publisher: post.author,
    openGraph: {
      images: [
        {
          url: post.coverImage,
          width: 800,
          height: 600,
          alt: post.title,
        }
      ],
      publishedTime: new Date(post.publishedAt).toString(),
      authors: [post.author],
      type: 'article',
      description: post.description,
      title: post.title,
      locale: 'es_CL',
      siteName: 'Vicente Jorquera',
    }
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