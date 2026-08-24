"use client"
import Container from "./container";
import Image from "next/image"
import { IconBrandX, IconMail, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import BlogSection from "./BlogSection";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Quote from "./Quote";
import Footer from "./Footer";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

const socialMedia = [
  {
    title: "Email",
    icon: IconMail,
    href: "https://mail.google.com/mail/u/0/?fs=1&to=sagarpundir25@gmail.com&tf=cm"
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

const HomeClient = ({ posts }: { posts: Post[] }) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <Container className="min-h-screen flex flex-col gap-8">
      <div className=" flex flex-row gap-4 pt-4">
        <div className=" overflow-hidden rounded-full">
          <Image
            src='/avatar.jpeg'
            alt="avatar"
            height={120}
            width={120}
            className="object-cover" />
        </div>

        <div className=" w-full flex flex-row justify-between ">
          <div>
            <h1 className="text-primary  text-4xl font-semibold text-shadow-md">
              Sagar Pundir
            </h1>
            <div className="flex flex-row gap-2 text-sm text-secondary ">
              <h2>•Developer</h2>
              <h2>•Builder</h2>
            </div>
          </div>

          <div className="flex flex-row gap-2 py-2 text-secondary darl:text-black-800 bg-neutral-100 h-fit px-4 rounded-3xl hover:shadow-xl shadow-neutral-300 dark:shadow-neutral-800 transition-shadow duration-500 ease-in-out">
            {socialMedia.map(({ icon: Icon, href, title }, idx) => (
              <div className="relative"
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}>
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="cursor-pointer hover:text-neutral-800 dark:text-neutral-500 transition-all duration-300 ease-in-out" />
                </Link>

                <AnimatePresence>
                  {hovered === idx && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 8 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 450, damping: 20 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-neutral-100 dark:text-neutral-800 dark:bg-white px-2 py-1 text-xs rounded-md">
                      {title}
                      <div
                        className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary dark:bg-white"
                      />
                    </motion.div>)}
                </AnimatePresence>
              </div>

            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-secondary leading-loose text-base">
        <h2>I'm a developer who loves to design - turning ideas into interfaces, design and code, end to end. I learned by breaking things,reading the docs and understanding how systems work under the surface.</h2>
        <h2>I care about clean code, simple solutions, and shipping real products.</h2>
        <h2>Into Tech, Gym, Books and Anime.</h2>
      </div>

      <div className="flex flex-col gap-0">
        <h1 className="text-xl text-primary font-bold text-shadow-2xs tracking-tight leading-tight">Builds</h1>
        <p className="text-secondary text-sm leading-tight">Ideas turned into working code</p>
      </div>
      <Projects />
      <BlogSection posts={posts} />
      <TechStack />
      <Quote />
      <Footer />

    </Container>

  )
}

export default HomeClient