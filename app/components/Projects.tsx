
"use client"

import { useRef } from "react"
import { motion, type Variants } from "motion/react"
import Link from "next/link"

import TechInProjects, { type Tech } from "./TechInProjects"

import {
  IconApi,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandGithub,
} from "@tabler/icons-react"

type Project = {
  name: string
  description: string
  href: string
  mediaType: "video" | "image"
  media: string
  poster?: string
  tech: Tech[]
}

const projects: Project[] = [
  {
    name: "ReScan",
    description:
      "AI-powered resume analysis that identifies weaknesses, evaluates skills, and delivers actionable insights to help you stand out to recruiters.",
    href: "https://rescan-ai.vercel.app/",
    mediaType: "image",
    media: "/project%20media/rescan.png",
    tech: [
      { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
      { name: "Tailwind CSS", icon: IconBrandTailwind, color: "#38BDF8" },
    ],
  },
  {
    name: "GitScope",
    description:
      "An interactive GitHub profile explorer for discovering developers, exploring repositories, and analyzing coding statistics.",
    href: "https://gitscope-x.vercel.app/",
    mediaType: "image",
    media: "/project%20media/gitscope.png",
    tech: [
      { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
      { name: "TypeScript", icon: IconBrandTypescript, color: "#3178C6" },
      { name: "GitHub API", icon: IconBrandGithub, color: "#181717" },
    ],
  },
  {
    name: "CineZest",
    description:
      "A Netflix-inspired movie discovery platform with search, genres, watchlists, authentication, and smooth animations.",
    href: "https://cinezest.vercel.app/",
    mediaType: "video",
    media: "/project%20media/cinezest%20video.mp4",
    poster: "/project%20media/cinezest.png",
    tech: [
      { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
      { name: "Supabase", icon: IconBrandSupabase, color: "#24B47E" },
      { name: "IMDb API", icon: IconApi, color: "#000000" },
    ],
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    y: 15,
    opacity: 0,
    filter: "blur(20px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
}

const Projects = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const MotionLink = motion(Link)

  return (
    <div className="my-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.03 }}
        className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 -mt-3 gap-4 min-h-80"
      >
        {projects.map((item, idx) => (
          <MotionLink
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="group size-full flex-wrap rounded-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]"
            onMouseEnter={() => {
              const video = videoRefs.current[idx]

              if (item.mediaType === "video" && video) {
                video.currentTime = 0
                video.play().catch(() => { })
              }
            }}
            onMouseLeave={() => {
              const video = videoRefs.current[idx]

              if (item.mediaType === "video" && video) {
                video.pause()
                video.currentTime = 0
              }
            }}
          >
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
              {item.mediaType === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el
                  }}
                  src={item.media}
                  poster={item.poster}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover scale-95 group-hover:scale-100 transition-transform duration-500 ease-in-out rounded-lg"
                />
              ) : (
                <img
                  src={item.media}
                  alt={`${item.name} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover scale-95 group-hover:scale-100 transition-transform duration-500 ease-in-out rounded-lg"
                />
              )}
            </div>

            <div className="my-2 p-2">
              <h2 className="text-primary text-lg tracking-wide">
                {item.name}
              </h2>

              <p className="text-secondary text-sm">
                {item.description}
              </p>

              <TechInProjects items={item.tech} />
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
