"use client"


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { GraduationCap, Lock, Mail, PersonStanding, Phone, UserRound } from "lucide-react"
import { LoginStudent, RegisterStudent } from "@/lib/database/actions/auth.action"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast, Toaster } from "sonner"



const LoginStudentSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(10),
})


const StudentLoginForm = () => {

  const router = useRouter();


  const form = useForm<z.infer<typeof LoginStudentSchema>>({
    resolver: zodResolver(LoginStudentSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const setCookie = (name: string, value: string, maxAge: number) => {
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge};`;
  };

  async function onSubmit(values: z.infer<typeof LoginStudentSchema>) {
    const response = await LoginStudent({ student: { ...values } });
    if (response.status == 401) {
      toast.error("Invalid Email Address");
    }
    else if (response.status == 402) {
      toast.error("Invalid Password");
    }
    else if (response.status == 200) {
      const savedToken = localStorage.setItem("x-auth-token", response.token);
      router.push(`/student/home/`);
      setCookie("role", "student", 3600);
      setCookie("token", response.token, 3600);
    }
    else {

      toast.warning("Some issue occured , please try again later");
    }


  }
  return (
    <Form {...form}>
      <Toaster position="top-center" richColors />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:w-[450px] lg:w-[100%]" >
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <div className="flex gap-2" >
                  <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <Input type="email" placeholder="Your email addrerss" {...field} />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="md:w-[450px] lg:w-[100%] w-[100%]" >
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex gap-2" >
                  <div className="h-10 w-12 bg-zinc-100 rounded-sm flex items-center justify-center">
                    <Lock className="text-zinc-800" size={20} />
                  </div>
                  <Input type="password" placeholder="Password" {...field} />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right">
          <Link href="/forgot-password" className="text-sm text-slate-500">
            Forgot Password?
          </Link>
        </div>
        <div className="h-1 lg:py-8">
          <Button

            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="bg-blue-700 w-full"
          >
            {form.formState.isSubmitting ? (
              'Submitting...'
            ) : `Login now`}</Button>
        </div>


        <div className="mt-3 w-full flex justify-center items-center flex-col">
          <div className="w-2 h-2 lg:py-2 py-6"></div>
          <Link href={`/student/auth/register`} >
            <p className="text-sm">Don't Have an account? <span className="text-blue-700 font-normal" >Create an Account</span> </p></Link>
        </div>
      </form>
    </Form>
  )
}

export default StudentLoginForm
