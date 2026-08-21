"use client";
import { IconCalendarEvent, IconArrowNarrowRightDashed } from '@tabler/icons-react';
import Link from "next/link";

type Post = {
    slug: string;
    title: string;
    description: string;
    date: string;
};

export default function BlogSection({ posts }: { posts: Post[] }) {
    return (
        <section className="mx-auto w-full">
            <div className="flex flex-col gap-0">
                <h1 className="text-xl text-primary font-bold text-shadow-2xs tracking-tight leading-tight">Blogs</h1>
                <p className="text-secondary text-sm leading-tight">What I learn, I write down.</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 ">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className=""
                    >
                        <div className='flex flex-row justify-between items-start mt-2'>
                            <div >
                                <h3 className="text-xl font-semibold leading-tight">
                                    {post.title}
                                </h3>

                                <p className="tracking-tight text-sm text-neutral-500 leading-tight">
                                    {post.description}
                                </p>

                                <p className="flex flex-row items-center text-xs text-neutral-400">
                                    <IconCalendarEvent stroke={1} size={18} /> {post.date}
                                </p>
                            </div>
                            <div className="text-xs text-neutral-400 flex flex-row items-center">
                                <p> Read more </p>
                                <IconArrowNarrowRightDashed stroke={1} />
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
            <div className='w-full text-center mt-6'>
                <Link href="/blog" className="text-sm border border-neutral-300 p-2 rounded-lg hover:shadow transition-all duration-300 ease-in-out ">
                    Show all blogs
                </Link>
            </div>
        </section>
    );
}