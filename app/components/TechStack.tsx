"use client";
import {IconBrandGit ,IconBrandReact , IconBrandFramerMotion, IconBrandSupabase, IconBrandTailwind,IconBrandNextjs,IconBrandTypescript,IconBrandJavascript } from "@tabler/icons-react"

const Tech = [
  {name:"JavaScript",
    icon:IconBrandJavascript 
  },
  {name:"TypeScript",
    icon:IconBrandTypescript
  },
  {name:"React",
    icon:IconBrandReact 
  },
  {name:"Next.js",
    icon:IconBrandNextjs
  },
  {name:"Tailwind",
    icon:IconBrandTailwind
  },
  {name:"Git",
    icon:IconBrandGit 
  },
  {name:"Framer Motion",
    icon:IconBrandFramerMotion
  },
  {name:"Supabase",
    icon:IconBrandSupabase
  }
]


const TechStack = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col gap-0">
        <h1 className="text-xl text-primary font-bold text-shadow-2xs tracking-tight leading-tight">TeckStack</h1>
        <p className="text-secondary text-base leading-tight">Technologies I Use To Build</p>
      </div>
      <div className="flex flex-wrap gap-1 mt-3 ">
      {Tech.map((item,idx)=>(     
        <div  className="rounded-md font-semibold transition-colors duration-200 bg-neutral-200 text-primary hover:bg-neutral-300 inline-flex items-center gap-1.5 border border-border/50 px-3 py-1.5 text-sm" key={idx}>
          <item.icon size={20}/>
          <h1>{item.name}</h1>
        </div>
      ))}

    </div>
    </div>
    
  )
}

export default TechStack