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

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "d8de446f-afde-4585-a4cb-d118e9a70d59");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };
    return (
        <Container>
            <div className='min-h-fit pb-4'>
                <div className="flex flex-col gap-0 pt-2 mb-8">
                    <h1 className="text-2xl text-primary font-bold text-shadow-xs tracking-tight leading-tight">Contact Me</h1>
                    <p className="text-secondary text-md leading-tight ">Feel free to get in touch. Let’s talk about ideas, projects, design, or whatever you’re working on.</p>
                </div>
                <form onSubmit={onSubmit} className='flex flex-col gap-6 py-8 px-12 my-12 mx-28 border border-neutral-300 rounded-2xl outline outline-offset-4 outline-neutral-300 '>
                    <div className='w-full flex flex-col gap-1 '>
                        <h4 className='text-primary text-sm'>Full Name</h4>
                        <input type="text" name="name" required className='shadow-sm p-1 bg-neutral-50 border border-neutral-300 rounded-lg text-primary font-medium' />
                    </div>
                    <div className='w-full flex flex-col gap-1 '>
                        <h4 className='text-primary text-sm'>Email Address</h4>
                        <input type="email" name="email" required className='shadow-sm p-1 bg-neutral-50 border border-neutral-300 rounded-lg text-primary font-medium' />
                    </div>
                    <div className='w-full flex flex-col gap-1 '>
                        <h4 className='text-primary text-sm'>Message</h4>
                        <textarea name="name" required className='min-h-24 shadow-sm p-1 bg-neutral-50 border border-neutral-300 rounded-lg text-primary font-medium'></textarea>
                    </div>
                    <button type="submit" className='inset-shadow-sm p-1 bg-neutral-50 border border-neutral-300 rounded-lg text-primary font-sm text-sm hover:bg-neutral-200 transition-all duration-300 ease-in-out mt-2 cursor-pointer'>Send Message</button>
                    <span>{result}</span>
                </form>

                <div className='flex flex-col items-center justify-between gap-1 pt-4 border-t border-neutral-300'>
                    <h4 className='text-secondary text-md '>Find me on socials -</h4>
                    <div className='flex flex-row items-center gap-4'>
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

        </Container>
    )
}

export default page