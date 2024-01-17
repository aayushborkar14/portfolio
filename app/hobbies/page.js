import Link from "next/link";
import { hobbyData } from "./hobby_data";

export default async function HobbiesPage() {
  return (<div className="container py-10 flex flex-col gap-y-6 md:gap-y-10">
    <div className="text-4xl md:text-6xl font-bold">Hobbies</div>
    <hr className="bg-muted-foreground border-0 h-px" />
    <ul>
      {Object.keys(hobbyData).map(slug => <li> <Link href={`/hobby/${slug}`} className="text-xl">{hobbyData[slug].name}</Link> </li>)}
    </ul>
  </div >)
}

