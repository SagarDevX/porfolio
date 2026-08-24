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
        <h1 className="text-2xl font-bold tracking-tight leading-loose text-primary">
          {data.title}
        </h1>

        <p className="text-secondary leading-loose ">
          {data.description}
        </p>

        <p className=" text-sm text-secondary">
          {data.date}
        </p>
      </header>

      <article className="prose prose-neutral max-w-none prose-p:my-0 prose-p:mb-6 mt-6 text-primary">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}