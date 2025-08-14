"use client";

import { Drone } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useSession } from "next-auth/react";
import SignoutBtn from "./SignoutBtn";

interface UserProps {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="w-full flex justify-between px-8 h-12 items-center">
      <Link href="/" className="flex gap-2 items-center">
        <Drone />
        <span className="font-extrabold">AetherCMS</span>
      </Link>

      {status === "loading" ? null : session?.user ? (
        <UserModalComponent user={session.user} />
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </div>
  );
};

export default Navbar;

const UserModalComponent = ({ user }: UserProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          alt={user.name || "User avatar"}
          width={40}
          height={40}
          src={user.image || "/default-avatar.png"}
          className="rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile/${user.name}`}>View Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem><SignoutBtn /></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
