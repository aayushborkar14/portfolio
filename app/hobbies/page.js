import Link from "next/link"
import { siteConfig } from "@/config/site"
import { hobbyData } from "./hobby_data"

export const metadata = {
  title: "Hobbies | " + siteConfig.name,
}

export default async function HobbiesPage() {
  return (<div className="container py-10 flex flex-col gap-y-6 md:gap-y-10">
    <div className="text-4xl md:text-6xl font-bold">Hobbies</div>
    <hr className="bg-muted-foreground border-0 h-px" />
    <div className="flex flex-col gap-y-2 md:gap-y-3 text-xl md:text-2xl">
      {Object.keys(hobbyData).map(slug => <Link key={slug} href={`/hobby/${slug}`} className="text-xl">{hobbyData[slug].name}</Link>)}
    </div>
  </div >)
}

