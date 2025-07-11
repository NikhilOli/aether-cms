"use client"
import { Icons } from "@/components/Icons"
import { Button } from "@/components/ui/button"
import { Anvil } from "lucide-react"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { toast } from "sonner"

const page = () => {
    const [loading, setLoading] = useState(false)
    const onSignIn = async() => {
        try {
            setLoading(true);
            await signIn('google')
        } catch (error) {
            console.error("Sign in failed:", error);
            toast.error("Uh oh!", {
                description: "Sign in failed, please try again later.",
                })
            
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="w-full flex h-screen justify-center items-center">
                <div className="w-full sm:w-1/2 md:w-1/5 mx-4 p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
                    <Anvil className="size-12 text-gray-300" />
                    <p className="text-sm text-center text-gray-200">Welcome, by continuing with AetherCMS sign in, you'll be a Master</p>
                    <Button onClick={onSignIn} variant={"outline"} className="cursor-pointer"> <Icons.GoogleIcon className="size-5 text-white" /> {loading ? "Loading..." :"Sign In"}</Button>
                </div>
        </section>
    )
}

export default page