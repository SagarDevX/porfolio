
import { getBlogPosts } from "@/lib/blog";
import BlogSection from "../components/BlogSection";

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="w-full">
            <div className="flex flex-col gap-0 pt-20">
                <h1 className="text-2xl text-primary font-bold text-shadow-xs tracking-tight leading-tight">Blogs</h1>
                <p className="text-secondary text-md leading-tight tracking-tight">Just some honest thoughts, experiences, lessons, and ideas from the things I’m learning and going through.</p>
            </div>
            <div className=" mt-8 space-y-6">
                <BlogSection posts={posts} />
            </div>

            <div className='w-full mt-16 p-8 rounded-2xl text-secondary shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_10px_70px_rgba(5,5,5,1)]'>
                <h1 className='font-(--font-cormorant) text-shadow-xs text-xl italic'>
                    “You can always edit a bad page. You can’t edit a blank page.”
                </h1>
                <p className='w-full text-right text-shadow-xs'>
                    — Jodi Picoult
                </p>
            </div>
        </div>
    );
}