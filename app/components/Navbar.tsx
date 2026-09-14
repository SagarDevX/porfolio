"use client"
import Container from './container'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from "motion/react"
import { useRef, useState } from 'react'
import { IconSun, IconMoon } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle'

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
    const blur = useTransform(scrollY, [0, 100],
        [0, 20])
    const bgOpacity = useTransform(scrollY, [0, 100], [0.15, 0.25])

    return (
        <Container className='-translate-x-2 fixed top-0 inset-x-0 z-50 '>
            <motion.div className=' flex flex-row justify-between items-center text-secondary z-50 py-3'
                style={{
                    backdropFilter: useMotionTemplate`blur(${blur}px)`,
                    backgroundColor: useMotionTemplate`rgba(128,128,128 ${bgOpacity})`
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
                                    className="absolute inset-0 rounded-xl bg-neutral-200 dark:bg-neutral-700"
                                    transition={{ type: "spring", stiffness: 450, damping: 25 }} />
                            )}
                            <span className='relative z-10  text-secondary '>{item.title}</span>
                        </Link>
                    ))}
                </div>

                <ThemeToggle />
            </motion.div>

        </Container>
    )
}

export default Navbar