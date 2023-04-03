import React from "react"
import logo from "../assets/images/logo.png"
import {Link} from "react-router-dom"
const Header =() => {
    const navLinks =[
        {
            id: 1,
            text: "HOME",
            link: "/",
        },
    
        {
            id: 2,
            text: "ARTISTES",
            link: "/Artistes",
        },
        {
            id:3,
            text: "MUSIC",
            link: "/Music",
        },
        {
            id: 4,
            text: "VIDEOS",
            link: "/Videos",
        },
       
    ]
    return(
        <header className="flex z-50 justify-between items-center bg-[#f1f6ff] pt-[20px] pb-[20px] px-[80px] fixed w-full">
            <img src={logo} alt="logo"/>
            <nav className="hidden md:flex items-center gap-20">
                <ul className="flex gap-20 text-[#000000] cursor-pointer">
                    {navLinks?.map((links, i) =>(
                      <li key={i}>
                        <Link to={links?.link}>{links.text}</Link>
                      </li>  
                    ))}
                    
                </ul>
                <button className="text-[#f20a0a]"><Link to="/session">BOOK A SESSION</Link></button>
            </nav>
            
           
        </header>
    )
}


export default Header