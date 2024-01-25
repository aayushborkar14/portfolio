import { getRecentPosts } from "./utils";
import { LatestPostCard } from "@/components/latest-post-card";

export default async function Home() {
  const recentPosts = await getRecentPosts();
  return (
    <main>
      <div className="flex flex-col container">
        <div className="text-4xl md:text-6xl mt-10 font-bold">
          Hi, I am Aayush 👋
        </div>
        <div className="mt-4 text-lg md:mt-10">
          I&apos;m a student at IIT Bombay. I am passionate about Data Science,
          Machine Learning, Web Development, Competitive Programming and CTFs.
        </div>
        <div className="text-2xl md:text-4xl mt-4 md:mt-10 font-bold">
          Latest
        </div>
        <div className="flex flex-col">
          {recentPosts.map((post) => (
            <LatestPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
