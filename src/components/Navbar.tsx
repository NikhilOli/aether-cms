import { Drone } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
    const auth = false;
    return (
        <div className="w-full flex justify-between px-8 h-12">
            <Link href={"/"} className="flex gap-2">
                <Drone />
                <span className="font-extrabold">AetherCMS</span>
            </Link>
            {
                auth ? (
                    <Link href="/dashboard">
                        User
                    </Link>
                ) : (
                    <Link href="/sign-in">
                        Sign In
                    </Link>
                )
            }
        </div>
    )
}

export default Navbar