import dateFormat from "@/app/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

const tempHtml = `
<p>This is a sample blog post content. It can be replaced with actual content later.</p>
`

const BlogPage = ({ params }: PageProps) => {
  const tempTags = ["nodejs", "backend", "javascript"];
  return (
    <section className="p-10">
      <div className="flex items-center flex-col gap-4 ">
        <Image src={`/thumbnails/django.png`} alt={"nodejs"} width={500} height={250} className="rounded border w-[90%] md:w-[700px]" />
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
          {/* <div className="content" dangerouslySetInnerHTML={{__html: tempHtml}}>
          </div> */}
          <p className="text-sm w-[90%] md:w-2/3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga commodi ducimus omnis iure facilis doloremque obcaecati aliquam esse accusamus harum, amet laudantium totam reprehenderit asperiores error enim est, sequi rerum dicta quidem recusandae. Consectetur, nemo quos ipsam consequatur nisi quidem distinctio temporibus amet eos, labore, officiis beatae. Fugiat laudantium, eos porro debitis et optio culpa tempora atque repellendus molestiae voluptates corrupti nisi vel soluta amet voluptatum dicta mollitia? Possimus quam, aspernatur aperiam ratione molestias consequuntur necessitatibus ea voluptatibus dolores, numquam unde voluptate doloribus qui molestiae vero quis modi quod ut consequatur earum veniam ducimus! Ipsum consectetur facilis optio repellendus dolor soluta expedita minus quos officiis. Voluptatibus et provident ducimus totam dolorum illum qui magni, quae hic fuga nesciunt eaque suscipit eos nostrum ad vel quis quas iste unde? Corrupti perspiciatis quasi quaerat id ipsum, laborum blanditiis necessitatibus delectus debitis nisi harum cumque expedita dicta cupiditate similique obcaecati? Consequatur, dicta voluptatem.</p>
      </div>
    </section>
  );
};

export default BlogPage;