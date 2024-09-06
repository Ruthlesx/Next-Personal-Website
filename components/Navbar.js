'use client'
import Link from 'next/link'
import NavItem from './NavItem'
import { usePageContext } from '../context/pageContext';

const Navbar = () => {


  return (

    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav className="">
        <ul 
        className="flex rounded-full bg-black/90 px-3 text-sm font-medium text-white-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        >
        <NavItem title={"Home"} url={"/"}  />
         <NavItem title={"About me"} url={"/About-me"}   />
         <NavItem title={"Projects"} url={"/Projects"}/>
         <NavItem title={"Essays"} url={"/Essays"}/>
        </ul>
      </nav>
    </div>

 
  )
}

export default Navbar