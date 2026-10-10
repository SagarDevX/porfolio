"use client"
import Container from './container'
import Link from 'next/link'
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react"
import { useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { easeIn } from "motion"

const navItems = [
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
    {
        title: "Contact",
        href: "/contact"
    },
]

const Navbar = () => {
    const [hovered, setHovered] = useState<number | null>(null)

    const { scrollY } = useScroll()
    const blur = useTransform(scrollY, [0, 100], [0, 20])
    const paddingX = useTransform(scrollY, [0, 200], ["0px", "8px"], { ease: easeIn })
    const bgOpacity = useTransform(scrollY, [0, 300], [0, 0.19])
    const borderRadius = useTransform(scrollY, [0, 100], ["0px", "100px"])
    const width = useTransform(scrollY, [0, 200], ["100%", "98%"], { ease: easeIn })
    const marginTop = useTransform(scrollY, [0, 200], ["0px", "16px"], { ease: easeIn })
    const shadow = useTransform(scrollY, [0, 200], ["0 0 0 rgba(0,0,0,0)", "0 1px 5px rgba(0,0,0,0.3)"])


    return (
        <Container className='px-6 fixed top-0 inset-x-0 z-100 '>
            <motion.div className=' flex flex-row justify-between items-center text-primary z-50 py-3 mx-auto'
                style={{
                    width,
                    marginTop, paddingLeft: paddingX,
                    paddingRight: paddingX,
                    boxShadow: shadow,
                    borderRadius,
                    backdropFilter: useMotionTemplate`blur(${blur}px)`,
                    backgroundColor: useMotionTemplate`rgba(128,128,128,${bgOpacity})`
                }}>
                <div className='flex flex-row gap-0'
                    onMouseLeave={() => setHovered(null)}>
                    {navItems.map((item, idx) => (
                        <Link
                            href={item.href}
                            key={idx}
                            className='relative px-2 py-1'
                            onMouseEnter={() => setHovered(idx)}
                        >
                            {hovered === idx && (
                                <motion.span
                                    layoutId='navabar-bghover'
                                    className="absolute inset-0 rounded-xl bg-[#c4c4c4] dark:bg-neutral-700"
                                    transition={{ type: "spring", stiffness: 450, damping: 25 }} />
                            )}
                            <span className='relative z-10  '>{item.title}</span>
                        </Link>
                    ))}
                </div>

                <ThemeToggle />
            </motion.div>

        </Container>
    )
}

export default Navbar