import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Contact me | " + siteConfig.name,
}

export default async function ContactPage() {
  return (
    <div className="container py-10 flex flex-col gap-y-4 md:gap-y-6">
      <div className="text-2xl md:text-4xl font-bold">Get in touch</div>
      <div className="md:pr-96"><ContactForm /></div>
    </div>)
}

