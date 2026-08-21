import Link from "next/link";
import { IconBrandX, IconMail , IconBrandLinkedin, IconBrandGithub, IconEmailStamp } from '@tabler/icons-react';

const socialMedia = [
    {
        icon: IconMail ,
        href: "https://mail.google.com/mail/u/0/?fs=1&to=sagarpundir25@gmail.com&tf=cm"
    },
    {
        icon: IconBrandX,
        href: "https://x.com/SagaaDev"
    },
    {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/in/sagaadev/"
    },
    {
        icon: IconBrandGithub,
        href: "https://github.com/SagarDevX"
    },
]

const Navigate = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "Blogs",
        href: "/blog"
    },

]

const BlogFooter = () => {
    return (
        <div className="flex flex-row gap-8 mt-16 mb-4 pt-8 border-t border-0 border-secondary/30 ">
            <div className=' text-secondary w-1/2'>
                <h1 className="text-sm text-shadow-2xs">NAVIGATE</h1>
                <div className="flex flex-row gap-4 mt-4">
                    {Navigate.map((item,idx) => (
                        <div className="relative text-secondary hover:text-primary" key={idx}>
                            <Link
                                key={item.href}
                                href={item.href}
                            >
                                <h1>{item.title}</h1>
                            </Link>

                        </div>

                    ))}
                </div>

            </div>

            <div className=" px-4">
                <h1 className="text-secondary text-sm text-shadow-2xs">CONNECT</h1>
                <div className="flex flex-row gap-4 mt-2">
                    {socialMedia.map(({ icon: Icon, href }, idx) => (
                        <div className="relative border border-x border-neutral-300 p-2 rounded-md text-secondary"
                            key={idx}>
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out" size={20} />
                            </Link>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogFooter