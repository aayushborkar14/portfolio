import { hobbyData } from "@/app/hobbies/hobby_data"

export default async function HobbyPage({ params }) {
  const hobby = hobbyData[params.slug]
  return (<div>

  </div>)
}
