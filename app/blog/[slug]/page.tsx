import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content",
    "blog",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return (
    <main className="">
      <header className="">
        <h1 className="text-2xl font-bold tracking-tight leading-loose">
          {data.title}
        </h1>

        <p className="text-neutral-500 leading-loose">
          {data.description}
        </p>

        <p className=" text-sm text-neutral-400">
          {data.date}
        </p>
      </header>

      <article className="prose prose-neutral max-w-none prose-p:my-0 prose-p:mb-6 mt-6">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}