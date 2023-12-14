import { getPostDetails, getPosts } from "@/app/utils"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import { badgeVariants } from "@/components/ui/badge"
import Image from "next/image"

export default async function Page({ params }) {
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
      <div className="flex w-full">
        <div className="w-1/5 pr-16">
          <div className="flex flex-col gap-y-3">
            <Image src={post.author.photo.url} width={100} height={100} className="rounded-sm" />
            <hr className="border-0 bg-gray-200 h-px" />
            <div className="">{post.author.name}</div>
            <hr className="border-0 bg-gray-200 h-px" />
            <div>{post.author.bio}</div>
            <hr className="border-0 bg-gray-200 h-px" />
          </div>
        </div>
        <div className="w-3/5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis pretium sollicitudin. Ut efficitur lectus ac dignissim molestie. Mauris commodo metus dui, ut venenatis ante pretium ut. Proin accumsan enim eget mi rhoncus dapibus. Fusce ac varius urna. Curabitur venenatis posuere libero eu posuere. Ut posuere commodo elit. Fusce sed turpis arcu. Cras condimentum felis justo, sit amet vehicula justo porttitor ut. Quisque lobortis mauris ac est varius, sed semper est feugiat. Aliquam a tincidunt ipsum, id ultrices arcu. Curabitur vel est id urna sodales scelerisque ac et nunc. In hac habitasse platea dictumst. Vivamus ultricies magna eget orci maximus viverra. Integer vitae consectetur dolor.</div>
        <div className="w-1/5"></div>
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
