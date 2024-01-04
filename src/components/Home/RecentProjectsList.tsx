'use client'

import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated'
import { PostCard } from '@/components/Projects/PostCard';

export default function RecentProjectsList({ max }: { max?: number}) {
  const posts: Post[] = allPosts.sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));

  return (
    <section
      className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
      {max ? posts.slice(0, 4).map((post: Post) => (
        <PostCard key={post.title} {...post} />
      ))  : posts.map((post: Post) => (
        <PostCard key={post.title} {...post} />
      ))}
    </section>
  )
}