'use client'
import { useState } from 'react';
import Container from '../components/container'
import { IconBrandX, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';


const socialMedia = [
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

const page = () => {
    const [result, setResult] = useState("");

   const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        setResult("Web3Forms access key is missing.");
        return;
    }

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    if (data.success) {
        setResult(
            "Message sent. Thanks for reaching out. I'll get back to you soon."
        );
        form.reset();
    } else {
        setResult("Error: " + data.message);
    }
};
    return (
        <Container>
            <div className='min-h-fit pb-4'>
                <div className="flex flex-col gap-0 pt-2 mb-8">
                    <h1 className="text-2xl text-primary font-bold text-shadow-xs tracking-tight leading-tight">Contact Me</h1>
                    <p className="text-secondary text-md leading-tight ">Feel free to get in touch. Let’s talk about ideas, projects, design, or whatever you’re working on.</p>
                </div>
                <form onSubmit={onSubmit} className='flex flex-col gap-6 py-8 md:px-12 px-8 my-16 md:mx-28 border border-neutral-300 dark:border-neutral-600 rounded-2xl outline outline-offset-4 outline-neutral-300 dark:outline-neutral-600 '>
                    <div className='w-full flex flex-col gap-1 '>
                        <h4 className='text-primary text-sm'>Full Name</h4>
                        <input type="text" name="name" required className='shadow-sm dark:shadow-[0_1px_5px_rgba(120,120,120,0.2)] p-1 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-primary font-medium' />
                    </div>
                    <div className='w-full flex flex-col gap-1 '>
                        <h4 className='text-primary text-sm'>Email Address</h4>
                        <input type="email" name="email" required className='shadow-sm dark:shadow-[0_1px_5px_rgba(120,120,120,0.2)] p-1 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-primary font-medium' />
                    </div>
                    <div className='w-full flex flex-col gap-1 '>
                        <h4 className='text-primary text-sm'>Message</h4>
                        <textarea name="message" required className='min-h-24 shadow-sm dark:shadow-[0_1px_5px_rgba(120,120,120,0.2)] p-1 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-primary font-medium'></textarea>
                    </div>
                    <button type="submit" className='inset-shadow-xs inset-shadow-neutral-200 dark:inset-shadow-neutral-700 shadow-sm dark:shadow-[0_1px_5px_rgba(120,120,120,0.5)] p-1 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:border-neutral-700 rounded-lg text-primary font-xs text-sm transition-all duration-300 ease-in-out cursor-pointer'>Send Message</button>
                    <span>{result}</span>
                </form>

                <div className='flex flex-col items-center justify-between gap-1 pt-7 my-2 border-t border-neutral-300 '>
                    <h4 className='text-secondary text-md '>Find me on socials -</h4>
                    <div className='flex flex-row items-center gap-4'>
                        {socialMedia.map(({ icon: Icon, href }, idx) => (
                            <div className="group relative border border-x border-neutral-300 hover:border-secondary p-2 rounded-md text-secondary cursor-pointer transition-all duration-300 ease-in-out"
                                key={idx}>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className=" group-hover:text-primary " size={20} />
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </Container>
    )
}

export default page