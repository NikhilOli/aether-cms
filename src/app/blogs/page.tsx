import Image from "next/image"
import Link from "next/link"


interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    url: string;
    index?: number;
}

const page = () => {

    const blogConfig = [
        {
            title: "React vs NextJs",
            description: "Nextjs is the ultimate framework ...",
            image: "/thumbnails/react.jpg",
            url: "react-nextjs"
        },
        {
            title: "Dreams to be a nodejs developer",
            description: "Nextjs is the ultimate framework ...",
            image: "/thumbnails/nodejs.png",
            url: "nodejs"
        },
        {
            title: "Become backend developer in no time",
            description: "Nextjs is the ultimate framework ...",
            image: "/thumbnails/django.png",
            url: "djando"
        },
    ]
    return (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 p-8 gap-4">
            {
                blogConfig.map((blogConfig, index) => {
                    return <BlogCard key={index} title={blogConfig.title} description={blogConfig.description} image={blogConfig.image} url={blogConfig.url} index={index} /> 
                })
            }
        </section>
    )
}

export default page

const BlogCard = ({ title, description, image, url, index }: BlogCardProps) => {
    return (
        <div key={index} className="flex flex-col bg-gray-600/20 rounded-lg border items-center justify-center gap-1 p-1 sm:p-6 hover:scale-[1.03] transition-all duration-100 ease-in-out">
            <Image src={image} alt={title} width={300} height={170} className="w-full max-w-md rounded-md" />
            <h2 className="text-xl font-bold text-gray-200">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
            <Link href={`/blogs/blog/${url}`} className="text-xs bg-zinc-600/70 py-2 px-3 rounded w-fit hover:underline">Read more</Link>
        </div>
    )
}

