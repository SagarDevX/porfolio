"use client"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export type Tech = {
  name: string
  icon: React.ComponentType<{ size?: number; color?: string; stroke?: number }>
  color: string
}

export default function TechStack({ items }: { items: Tech[] }) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="flex gap-1 flex-wrap mt-2 ">
      {items.map((t) => {
        const Icon = t.icon
        const isHovered = hovered === t.name
        return (
          <motion.div
            key={t.name}
            layout
            onMouseEnter={() => setHovered(t.name)}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center gap-1 rounded-full border border-dashed border-neutral-300 px-1.5 py-1.5 cursor-pointer  "
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <motion.div
              layout
              className="size-6 flex items-center justify-center rounded-full shrink-0 bg-secondary"
              style={{ backgroundColor: t.color }}
            >
              <Icon size={14} color="white" stroke={2} />
            </motion.div>

            <AnimatePresence initial={false} >
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, width: 0  }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 , ease:"easeIn" }}
                  className="text-xs font-medium whitespace-nowrap pr-1  "
                >
                  {t.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}