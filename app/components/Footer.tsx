import Link from "next/link";
import { IconBrandX, IconBrandYoutube , IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const socialMedia = [
    {
        title: "Email",
        icon: IconBrandYoutube ,
        href: "https://www.youtube.com/@SaGaa25"
    },
    {
        title: "x",
        icon: IconBrandX,
        href: "https://x.com/SagaaDev"
    },
    {
        title: "LinkedIn",
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/in/sagaadev/"
    },
    {
        title: "Github",
        icon: IconBrandGithub,
        href: "https://github.com/SagarDevX"
    },
]
const Footer = () => {
    return (
        <div className="flex flex-row gap-8 my-8 py-8 border-t border-0 border-secondary/30 ">
            <div className=' text-secondary'>
                <h1 className="font-normal">GET IN TOUCH</h1>
                <h1 className="tracking-tight mt-1">
                    If you have any inquiries, please feel free to reach out. You can contact me via email at  <Link href='https://mail.google.com/mail/u/0/?fs=1&to=sagarpundir25@gmail.com&tf=cm'
                        className="text-primary">sagarpundir25@gmail.com</Link>
                </h1>
            </div>

            <div className=" px-4">
                <h1 className="text-secondary">CONNECT</h1>
                <div className="flex flex-row gap-6 mt-2">
                    {socialMedia.map(({ icon: Icon, href, title }, idx) => (
                        <div className="relative border border-x border-neutral-300 p-2 rounded-md text-secondary"
                            key={idx}>
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out" />
                            </Link>
                            
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer