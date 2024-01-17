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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Character limit hit" }),
  message: z.string().min(1, { message: "Message must be at least 1 character." }),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values) {
    console.log(values)
  }
  return (
    <Form>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact me</FormLabel>
              <FormControl>
                <Input placeholder="contact" {...field} />
              </FormControl>
              <FormDescription>
                Form to contact me.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
