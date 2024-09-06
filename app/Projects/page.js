import ProjectItem from "@/components/ProjectItem"
import Image, { StaticImageData } from "next/image"
import ImageDayCounter from "../../public/images/Day_Counter_img.png"
import ImageSecurityGame from "../../public/images/Security-Game.png"
import ImageStreamFix from "../../public/images/StreamFlix.png"
import ImageTimeManagement from "../../public/images/Time_Management.webp"
 


const Projects = () => {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
          <p className="text-base mt-6  text-zinc-600"> I have been working on a number of creative projects</p>
        
      </header>

      <div className="mt-16">
        <h2 className="text-2xl">Apps</h2>
        <ul className="grid grid-cols-4 gap-x-12 gap-y-16 mt-8">
         <ProjectItem name={"Day-Counter"} url={"https://ruthlesx.github.io/Countdown-timer"} urlDisplay={"GitHub.com"} imageSrc={ImageDayCounter}/>

         <ProjectItem name={"Security-Game"} url={"https://ruthlesx.github.io/securitygame/"} urlDisplay={"GitHub.com"} imageSrc={ImageSecurityGame} />

         <ProjectItem name={"StreamFlix"} url={" https://ruthlesx.github.io/StreamFlix/"} urlDisplay={"GitHub.com"} imageSrc={ImageStreamFix}/>
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl">Books</h2>

        <ul className="grid grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem name={"Time Management: as a means to a productive end"} url={"https://medium.com/@ifeoram/time-management-as-a-means-to-a-productive-end-89dafbb5e183 "} urlDisplay={"Medium.com"} imageSrc={ImageTimeManagement}   />
        </ul>
      </div>
    </div>
  )
}

export default Projects