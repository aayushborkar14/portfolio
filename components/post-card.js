import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { badgeVariants } from "@/components/ui/badge"

export function PostCard({ post }) {
  return (
    <div className="flex flex-col max-w-full gap-y-1 sm:p-6">
      <div className="max-w-full h-60 relative sm:h-40 md:h-60 mb-2">
        <Image fill src={post.featuredImage.url} className="rounded-xl object-cover" />
      </div>
      <span className="flex justify-start gap-2 flex-wrap my-2">
        {post.categories.map((category) => <Link className={badgeVariants({ variant: "destructive" })} href="/">{category.name}</Link>)}
      </span>
      <div className="font-bold md:text-2xl text-xl">{post.title}</div>
      <div className="text-gray-400 md:text-lg text-md">{post.excerpt}</div>
    </div>
  )
}
