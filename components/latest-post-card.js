import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import { formatDate } from "@/lib/utils"
import { badgeVariants } from "./ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function LatestPostCard({ post }) {
  return (
    <Card className="max-w-full my-4 relative hover:bg-accent duration-300">
      <div className="flex items-center">
        <Avatar className="ml-8">
          <AvatarImage src={post.featuredImage.url} />
        </Avatar>
        <div>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription className='flex gap-x-3 gap-y-1 flex-wrap'>{formatDate(post.createdAt)}
              <span>•</span>
              <span className="flex"><Link className={cn('z-50', badgeVariants({ variant: "outline" }))} href={`/category/${post.category.slug}`}>{post.category.name}</Link></span>
            </CardDescription>
            <span className="flex justify-start gap-2 flex-wrap my-2">
              {post.tags.map((tag) => <Link className={cn("z-50", badgeVariants({ variant: "destructive" }))} href={`/tag/${tag.slug}`}>{tag.name}</Link>)}
            </span>
          </CardHeader>
        </div>
      </div>
      <Link className="absolute inset-0" href={`/post/${post.slug}`}><span className="sr-only">Read article</span></Link>
    </Card>
  )
}

