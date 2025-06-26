import { Drone } from "lucide-react"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserProps {
    user: {
        name: string;
        email: string;
    }
}


const Navbar = () => {
    const auth = true;
    const tempUser = {
        name: "Nikhil",
        email: "test@test.com"
    }
    return (
        <div className="w-full flex justify-between px-8 h-12">
            <Link href={"/"} className="flex gap-2">
                <Drone />
                <span className="font-extrabold">AetherCMS</span>
            </Link>
            {
                auth ? (
                    <UserModalCpmponent user={tempUser} />
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


const UserModalCpmponent = ({user} : UserProps) => {
    return <DropdownMenu>
                <DropdownMenuTrigger>{user.name}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={`/profile/${user.name}`}>View Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
}