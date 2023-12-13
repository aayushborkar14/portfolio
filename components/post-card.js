import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { badgeVariants } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function PostCard({ post }) {
  return (
    <div className="relative flex flex-col max-w-full gap-y-1 sm:p-6 sm:hover:bg-white/10 rounded-3xl duration-300 transition-all">
      <div className="max-w-full h-60 relative sm:h-40 md:h-60 mb-2">
        <Image fill src={post.featuredImage.url} className="rounded-xl object-cover" />
      </div>
      <span className="flex justify-start gap-2 flex-wrap my-2">
        {post.categories.map((category) => <Link className={cn("z-50", badgeVariants({ variant: "destructive" }))} href={`/categories/${category.slug}`}>{category.name}</Link>)}
      </span>
      <div className="font-bold md:text-2xl text-xl">{post.title}</div>
      <div className="text-gray-300">{formatDate(post.createdAt)}</div>
      <div className="text-gray-400 md:text-lg text-md">{post.excerpt}</div>
      <Link href={`/posts/${post.slug}`} className="absolute inset-0 z-40"><span className="sr-only">View Article</span></Link>
    </div>
  )
}
