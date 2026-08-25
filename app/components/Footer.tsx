import Link from "next/link";
import { IconBrandX, IconBrandYoutube, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const socialMedia = [
    {
        icon: IconBrandYoutube,
        href: "https://www.youtube.com/@SaGaa25"
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
const Footer = () => {
    return (
        <div className="w-full flex flex-col md:flex-row  gap-8 my-8 pt-8 border-t border-0 border-secondary/30 ">
            <div className=' text-secondary w-full md:w-1/2'>
                <h1 className="font-normal text-shadow-2xs text-primary">GET IN TOUCH</h1>
                <h1 className="tracking-tight mt-1 text-secondary">
                    If you have any inquiries, please feel free to reach out. You can contact me via email at  <Link href='https://mail.google.com/mail/u/0/?fs=1&to=sagarpundir25@gmail.com&tf=cm'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary">sagarpundir25@gmail.com</Link>
                </h1>
            </div>

            <div className="md:px-4">
                <h1 className="text-primary text-shadow-2xs text-start">CONNECT</h1>
                <div className="flex flex-row gap-4 mt-2">
                    {socialMedia.map(({ icon: Icon, href }, idx) => (
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