import { getBlogPosts } from "@/lib/blog";
import HomeClient from "./components/HomeClient";

export default function Home() {
  const posts = getBlogPosts();

  return <HomeClient posts={posts.slice(0, 3)} />;
}