import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
    </div>
  )
}

export default function RecentProjectsList() {
  const posts: Post[] = allPosts.sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
  
  return (
    <div>
      {posts.map((post: Post) => (
        <PostCard key={post.title} {...post} />
      ))}
    </div>
  )
}