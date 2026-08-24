"use client"
import Container from './container'
import Link from 'next/link'
import { AnimatePresence, motion } from "motion/react"
import { useState } from 'react'
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


    return (
        <Container className='py-4 '>
            <div className='flex flex-row justify-between items-center text-secondary'>
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
                                    className="absolute inset-0 rounded-xl bg-neutral-100 dark:bg-neutral-800"
                                    transition={{ type: "spring", stiffness: 450, damping: 25 }} />
                            )}
                            <span className='relative z-10  text-primary '>{item.title}</span>
                        </Link>
                    ))}
                </div>

                <ThemeToggle />
            </div>

        </Container>
    )
}

export default Navbar