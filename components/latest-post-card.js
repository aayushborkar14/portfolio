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
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { formatDate } from "@/lib/utils"
import { badgeVariants } from "./ui/badge"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function LatestPostCard({ post }) {
  return (
    <Card className="max-w-full my-4 relative">
      <div className="flex items-center">
        <div className="relative w-50 h-50">
          <Image fill src={post.featuredImage.url} />
        </div>
        <Avatar className="ml-8">
          <AvatarImage src={post.featuredImage.url} />
        </Avatar>
        <div>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{formatDate(post.createdAt)}</CardDescription>
            <span className="flex justify-start gap-2 flex-wrap my-2">
              {post.categories.map((category) => <Link className={cn("z-50", badgeVariants({ variant: "destructive" }))} href={`/categories/${category.slug}`}>{category.name}</Link>)}
            </span>
          </CardHeader>
        </div>
      </div>
      <Link className="absolute inset-0" href={`/posts/${post.slug}`}><span className="sr-only">Read article</span></Link>
    </Card>
  )
}

