import { getPostDetails, getPosts } from "@/app/utils"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { badgeVariants } from "@/components/ui/badge"
import Image from "next/image"
import PostContent from "@/components/post-content"

export default async function PostPage({ params }) {
  const post = await getPostDetails(params.slug)
  return (
    <div className="container flex flex-col max-w-full items-start gap-8">
      <div className="text-4xl font-semibold pt-10 text-left">{post.title}</div>
      <span className="flex gap-3 flex-wrap">
        <div>Published in </div>
        <Link className={badgeVariants({ variant: "outline" })} href={`/category/${post.category.slug}`}>{post.category.name}</Link>
        <div>•</div>
        <div className="">{formatDate(post.createdAt)}</div>
        <div>•</div>
        <div className="">by {post.author.name}</div>
      </span>
      <img src={post.featuredImage.url} className="h-full w-full" />
      <div className="flex flex-wrap gap-3">
        <div>Tags:</div>
        {post.tags.map((tag) => <Link className={badgeVariants({ variant: "default" })} href={`/tag/${tag.slug}`}>{tag.name}</Link>)}
      </div>
      <div className="flex flex-col md:flex-row w-full gap-y-8">
        <div className="md:w-1/5 md:pr-16">
          <div className="flex md:flex-col md:gap-y-3 gap-x-3">
            <Image src={post.author.photo.url} width={100} height={100} className="rounded-sm" />
            <div className="flex flex-col justify-center md:justify-normal gap-y-3">
              <hr className="border-0 bg-foreground h-px" />
              <div className="font-semibold">{post.author.name}</div>
              <hr className="border-0 bg-foreground h-px" />
              <div className="text-justify hyphens-auto">{post.author.bio}</div>
              <hr className="border-0 bg-foreground h-px" />
            </div>
          </div>
        </div>
        <div className="md:w-3/5"><PostContent postContent={post.content.raw.children} /></div>
        <div className="md:w-1/5"></div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.node.slug,
  }))
}
