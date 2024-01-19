import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Contact me | " + siteConfig.name,
}

export default async function ContactPage() {
  return (
    <div className="container py-10 flex flex-col gap-y-4 md:gap-y-6">
      <div className="text-2xl md:text-4xl font-bold">Contact me</div>
      <hr className="bg-muted-foreground border-0 h-px" />
      <div className="md:px-56"><ContactForm /></div>
    </div>)
}

