import { getPosts } from "@/app/utils"
import { siteConfig } from "@/config/site"
import { PostCard } from "@/components/post-card";

export const metadata = {
  title: "Blog | " + siteConfig.name,
}

export default async function BlogPage() {
  const postEdges = await getPosts();
  return (
    <div className="container py-10 flex flex-col gap-y-6 md:gap-y-10">
      <div className="text-4xl md:text-6xl font-bold"> Blog</div>
      <hr className="bg-gray-400 border-0 h-px" />
      <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2">
        {postEdges.map((post) => <PostCard post={post.node} />)}
      </div>
    </div>)
}

