import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers, Pencil, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex justify-center w-full h-[60vh] sm:h-[50vh]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Manage your content with Ease</h1>
            <p className="text-gray-400 w-[70%] text-centermx-auto max-w-[700px]:">Streamline your content workflow, publish with confidence</p>
          </div>
          <div className="flex gap-3">
            <Link
            href={"/blogs"}
            className="cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all duration-200 delay-100 text-black px-4 py-1 rounded"
            >Try it out!</Link>
            <Button
            className="cursor-pointer"
            variant={"outline"}
            >Learn More!</Button>
          </div>
        </div>
      </section>

      <section className="min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full flex justify-center items-center ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-4 sm:p-8">
          <span className="flex flex-col items-center gap-2">
            <Icons.CustomBlogIcons className="w-14 h-14 text-white" />
            <h3 className="text-xl font-bold text-gray-100">Intuitive Editor</h3>
            <p className="text-gray-400 w-[70%] text-center">Create and edit content with user-friendly interface</p>
        </span>
          <span className="flex flex-col items-center gap-2">
          <Layers size={50} />
          <h3 className="text-xl font-bold text-gray-100">Flexible Tools</h3>
          <p className="text-gray-400 w-[70%] text-center">Create and edit content with user-friendly interface</p>
        </span>
          <span className="flex flex-col items-center gap-2">
          <Zap size={50} />
          <h3 className="text-xl font-bold text-gray-100">Blazing fast</h3>
          <p className="text-gray-400 w-[70%] text-center">Create and edit content with user-friendly interface</p>
        </span>
        </div>
      </section>
      
      <section className="h-[50vh] sm:h[70vh] w-full flex flex-col justify-center items-start">
        <div className="max-w-[50%] mx-auto space-y-3">
          <h4 className="capitalize font-bold text-2xl">Ready to transform your content journey?</h4>
          <p className="text-sm text-gray-400">Join thousands of content creaters like you who joined AetherCMS</p>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" className="" />
            <Button className="cursor-pointer" variant={"outline"}>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
