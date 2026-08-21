"use client"
import Image from "next/image";
import { motion, Variants } from "motion/react"
import TechInProjects, { Tech } from "./TechInProjects"
import { IconBrandFramerMotion,IconApi, IconBrandSupabase, IconBrandTailwind,IconBrandNextjs,IconBrandTypescript,IconBrandGithub} from "@tabler/icons-react"

const projects: {
  name: string
  description: string
  href: string
  media: string
  tech: Tech[]
}[] = [
  {
    name: "CineZest",
    description: "A Netflix-inspired movie discovery platform with search, genres, watchlists, authentication, and smooth animations.",
    href: "/",
    media: "",
    tech: [    
      { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
      { name: "Supabase", icon: IconBrandSupabase  , color: "#24B47E" },
      { name: "IMDb API", icon: IconApi   , color: "#000000" },
    ],
  },
  {
    name: "GitScope",
    description: "An interactive GitHub profile explorer for discovering developers, exploring repositories, analyzing detailed coding statistics and activity.",
    href: "/",
    media: "",
    tech: [
      { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
      { name: "TypeScript", icon: IconBrandTypescript, color: "#3178C6" },
      { name: "GitHub API", icon: IconBrandGithub, color: "#181717" },
    ],
  },
  {
    name: "Project 3",
    description: "An interactive GitHub profile explorer for discovering developers, exploring repositories, analyzing detailed coding statistics and activity.",
    href: "/",
    media: "",
    tech: [
      { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
      { name: "Tailwind CSS", icon: IconBrandTailwind, color: "#38BDF8" },
    ],
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    }
  }
}
const cardVariants: Variants = {
  hidden: {
    y: 15,
    opacity: 0,
    filter: "blur(5px)"
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
}

const Projects = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-0">
        <h1 className="text-xl text-primary font-bold text-shadow-2xs tracking-tight leading-tight">Builds</h1>
        <p className="text-secondary text-sm leading-tight">Ideas turned into working code</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-3 grid-rows-1 mt-2 gap-4 min-h-80">
        {projects.map((item, idx) => (
          <motion.div
            key={item.name}
            variants={cardVariants}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
            }}
            className="group size-full flex-wrap rounded-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]">
            <div className="relative h-48 w-full">
              <Image src={item.media} alt="projects" fill className="object-cover overflow-hidden rounded-xl bg-purple-300 group-hover:scale-100 scale-95 transition-transform duration-500 ease-in-out" />
            </div>
            <div className="my-2 p-2">
              <h1 className="text-primary text-lg tracking-wide ">{item.name}</h1>
              <h2 className="text-secondary text-sm tracking-tight">{item.description}</h2>

              <TechInProjects items={item.tech} />
            </div>
          </motion.div>

        ))}
      </motion.div>
    </div>
  )
}

export default Projects