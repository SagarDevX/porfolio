"use client";
import { IconCalendarEvent, IconArrowNarrowRightDashed } from '@tabler/icons-react';
import Link from "next/link";
import {motion} from "motion/react"

type Post = {
    slug: string;
    title: string;
    description: string;
    date: string;
};

export default function BlogSection({ posts }: { posts: Post[] }) {
    return (
        <motion.section className="mx-auto w-full"
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
        
        >
        
            <div className="mt-8 flex flex-col gap-2 ">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className=""
                    >
                        <div className='flex flex-row justify-between items-start  hover:bg-neutral-200 dark:hover:bg-neutral-800 px-4 py-2  -translate-x-4 transition-all duration-200 ease-in rounded-2xl'>
                            <div >
                                <h3 className="text-xl text-primary font-semibold leading-tight">
                                    {post.title}
                                </h3>

                                <p className="tracking-tight text-secondary leading-[1.7] text-base">
                                    {post.description}
                                </p>

                                <p className="flex flex-row items-center text-xs text-neutral-400">
                                    <IconCalendarEvent stroke={1} size={18} /> {post.date}
                                </p>
                            </div>
                            <div className="w-8 md:w-24 text-xs text-neutral-400 flex flex-col md:flex-row items-center">
                                <p> Read more </p>
                                <IconArrowNarrowRightDashed stroke={1} />
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
            
        </motion.section>
    );
}