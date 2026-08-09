"use client"
import Image from "next/image";
import { motion, Variants } from "motion/react"

const projects = [
  {
    name: "CineZest",
    description: "A Netflix-inspired movie discovery platform with search, genres, watchlists, authentication, and smooth animations.",
    href: "/",
    media: "",
  },
  {
    name: "GitScope",
    description: "An interactive GitHub profile explorer for discovering developers, exploring repositories, analyzing detailed coding statistics and activity.",
    href: "/",
    media: "",
  },
  {
    name: "Project 3",
    description: "An interactive GitHub profile explorer for discovering developers, exploring repositories, analyzing detailed coding statistics and activity.",
    href: "/",
    media: "",
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
    y:15,
    opacity: 0,
    filter: "blur(5px)",
    
  },
  show: {
    y:0,
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
    <div>
      <div className="leading-none">
        <h1 className="text-2xl text-primary text-shadow-2xs tracking-tight">Builds</h1>
        <p className="text-secondary text-base">Ideas turned into working code</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-3 grid-rows-1 mt-4 gap-4 min-h-80">
        {projects.map((item, idx) => (
          <motion.div
            variants={cardVariants}
            className="group size-full rounded-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]  ">
            <div className="relative h-48 w-full ">
              <Image src={item.media} alt="projects" fill className="object-cover overflow-hidden rounded-xl bg-purple-300 group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            </div>
            <div className="my-2 p-2">
              <h1 className="text-secondary text-lg tracking-wide">{item.name}</h1>
              <h2 className="text-secondary text-sm tracking-tight">{item.description}</h2>
            </div>
          </motion.div>

        ))}
      </motion.div>
    </div>
  )
}

export default Projects