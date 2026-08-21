import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getBlogPosts() {
  const files = fs.readdirSync(blogDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(blogDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        date: data.date,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}