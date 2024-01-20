"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Character limit hit" }),
  email: z.string().min(1, { message: "Your email is required." }).email("This is not a valid email."),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(1, { message: "Message is required." }),
})

export function ContactForm() {
  const [openOK, setOpenOK] = React.useState(false)
  const [openER, setOpenER] = React.useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })
  async function onSubmit(values) {
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    if (res.ok) {
      setOpenOK(true)
      form.reset()
    }
    else { setOpenER(true) }
  }
  return (
    <div>
      <AlertDialog open={openOK} onOpenChange={setOpenOK}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message sent succesfully</AlertDialogTitle>
            <AlertDialogDescription>I usually reply within 24 hours.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={openER} onOpenChange={setOpenER}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Error encountered</AlertDialogTitle>
            <AlertDialogDescription>Please try again. If the issue persists, report this issue on <Link className='font-medium' href={`${siteConfig.links.repo}/issues`}>GitHub</Link></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Form>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={form.control} name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            )} />
          <FormField control={form.control} name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )} />
          <FormField control={form.control} name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
              </FormItem>
            )} />
          <FormField control={form.control} name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea className="resize-none" placeholder="Message" {...field} />
                </FormControl>
              </FormItem>
            )} />
          <Button type="submit">Send Message</Button>
        </form>
      </Form>
    </div >
  )
}
