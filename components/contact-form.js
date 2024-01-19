"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Character limit hit" }),
  email: z.string().min(1, { message: "Your email is required." }).email("This is not a valid email."),
  message: z.string().min(1, { message: "Message must be at least 1 character." }),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  function onSubmit(values) {
    console.log(values)
  }
  return (
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
        <FormField control={form.control} name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className="resize-none" placeholder="Message" {...field} />
              </FormControl>
            </FormItem>
          )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
