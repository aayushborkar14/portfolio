import { hobbyData } from "@/app/hobbies/hobby_data"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Hobbies | " + siteConfig.name,
}

export default async function HobbyPage({ params }) {
  const hobby = hobbyData[params.slug]
  return (<div className="container py-10 flex flex-col gap-y-6 md:gap-y-10">
    <div className="text-4xl md:text-6xl font-bold">Hobby: {hobby.name}</div>
    <hr className="bg-muted-foreground border-0 h-px" />
    <Image src={hobby.image} width={500} height={200} />
    <div className="text-xl md:text-2xl">{hobby.desc}</div>
  </div>)
}
