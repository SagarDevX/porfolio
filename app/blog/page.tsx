import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { IconArrowNarrowRightDashed } from '@tabler/icons-react';

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="w-full ">
            <div className="flex flex-col gap-0">
                <h1 className="text-2xl text-primary font-bold text-shadow-xs tracking-tight leading-tight">Blogs</h1>
                <p className="text-secondary text-md leading-tight tracking-tight">Just some honest thoughts, experiences, lessons, and ideas from the things I’m learning and going through.</p>
            </div>
            <div className=" mt-8 space-y-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block mt-10 "
                    >
                        <div className="flex flex-row items-start justify-between">
                            <div>
                                <h2 className="text-lg font-semibold leading-tight">
                                    {post.title}
                                </h2>

                                <p className="leading-tight text-sm text-secondary">
                                    {post.description}
                                </p>

                                <p className="mt-1 text-sm text-neutral-400">
                                    {post.date}
                                </p>
                            </div>
                            <div className="text-sm text-secondary flex flex-row items-center">
                                <p> Read more </p>
                                <IconArrowNarrowRightDashed stroke={1} />
                            </div>
                        </div>


                    </Link>
                ))}
            </div>

            <div className='w-full mt-16 p-8 rounded-2xl text-secondary shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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