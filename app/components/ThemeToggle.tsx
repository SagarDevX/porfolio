"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="cursor-pointer"
        >
            <AnimatePresence mode="wait">
                {isDark ? (
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
    )
}