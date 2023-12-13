import { getPostDetails, getPosts } from "@/app/utils"

export default async function Page({ params }) {
  const post = await getPostDetails(params.slug)
  return (
    <div className="container flex max-w-full justify-center">
      <div className="text-4xl font-semibold">{post.title}</div>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.node.slug,
  }))
}
