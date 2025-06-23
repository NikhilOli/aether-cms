import dateFormat from "@/app/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: PageProps) => {
  const tempTags = ["nodejs", "backend", "javascript"];
  return (
    <section className="p-10">
      <div>
        <Image src={`/thumbnails/nodejs.png`} alt={"nodejs"} width={500} height={250} className="w-full h-auto rounded-lg mb-6" />
        <div className="meta-of-a-blog space-y-2">
          <div className="flex gap-2 items-center">
          <Calendar className="text-gray-400 size-4" />
          <p className="text-gray-400 text-xs">Created on: {dateFormat(new Date)}</p>
          </div>
          <div className="text-sm flex items-center gap-2">
            <p>Category:</p>
            <p className="badge bg-gray-600/30 border border-gray-700 py-1 px-2 w-fit rounded">Space exploration</p>
          </div>
          <div className="text-sm flex items-center gap-2">
            <p>Tags:</p>
            {tempTags.map(tag => <p key={tag} className="badge bg-gray-600/30 border border-gray-700 py-[2px] px-[4px] w-fit rounded">{tag}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;