import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"


const SignoutBtn = () => {
    return (
        <div onClick={() => signOut({callbackUrl: '/sign-in'})} className="flex items-center gap-2">
            <LogOut className="w-4 text-white" /> Sign Out
        </div>
    )
}

export default SignoutBtn