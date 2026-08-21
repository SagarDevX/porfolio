"use client"
import Container from './container'
import Link from 'next/link'
import { AnimatePresence, motion, } from "motion/react"
import { useState } from 'react'
import { IconSun, IconMoon } from '@tabler/icons-react';

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
    const [theme, setTheme] = useState(false)

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
                                    className="absolute inset-0 rounded-xl bg-neutral-200"
                                    transition={{ type: "spring", stiffness: 450, damping:25 }} />
                            )}
                            <span className='relative z-10 text-neutral-600'>{item.title}</span>
                        </Link>
                    ))}
                </div>

              <div
    onClick={() => setTheme(!theme)}
    className="cursor-pointer"
>
    <AnimatePresence mode="wait">
        {theme ? (
            <motion.div
                key="sun"
                initial={{ rotate: 180, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
            >
                <IconSun stroke={2} />
            </motion.div>
        ) : (
            <motion.div
                key="moon"
                initial={{ rotate: -180, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -180, opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
            >
                <IconMoon stroke={2} />
            </motion.div>
        )}
    </AnimatePresence>
</div>

            </div>

        </Container>
    )
}

export default Navbar