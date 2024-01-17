"use client"
import * as z from "zod"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Contact me | " + siteConfig.name,
}

export default async function ContactPage() {
  return (
    <div className="container py-10 flex flex-col gap-y-6 md:gap-y-10">
      <div className="text-4xl md:text-6xl font-bold">Contact me</div>
      <hr className="bg-muted-foreground border-0 h-px" />
    </div>)
}

