"use client";

import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
// import styles from "./Header.module.css"
import "./Header.css"
import Logo from "@/components/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { WiCloudDown } from "react-icons/wi";
  
// export default async function Header(){

//     const client = createClient();
//     const settings = await client.getSingle("settings");
//     const [menuIcon , setIcon] = useState(false)

//     const handleSmallerScreensNavigation = () => {
//         setIcon(!menuIcon);
//     }
//     return(
        // <header>
        //     <Link href="/">{settings.data.site_title}
        //     </Link>
            
        //     <nav>
        //         <ul className="ul">
        //             {settings.data.navigation.map(({link,label})=>
        //             (<li key={label}>
        //                 <PrismicNextLink field={link}>{label}</PrismicNextLink> 
        //             </li>)
        //             )}
        //         </ul>
        //     </nav>
        // </header>
    //     <header>
    //     <div className="navbar">
    //         <div className="logo">
    //         <Link href="/">
    //         <Logo />
    //         </Link>
    //         </div>
    //         <ul className="links">
    //                 {settings.data.navigation.map(({link,label})=>
    //                 (<li key={label}>
    //                     <PrismicNextLink field={link}>{label}</PrismicNextLink> 
    //                 </li>)
    //                 )}
    //             </ul>
    //             <div className="toggle_btn">
    //             <FontAwesomeIcon icon={faBars} />
    //             </div>
            
    //     </div>
    //     <div className="dropdown_menu">
    //     <ul className="">
    //                 {settings.data.navigation.map(({link,label})=>
    //                 (<li key={label}>
    //                     <PrismicNextLink field={link}>{label}</PrismicNextLink> 
    //                 </li>)
    //                 )}
    //             </ul>
    //     </div>
    // </header>
    
    
//   );
// };
export default function Navbar(){
    const [menuIcon , setIcon] = useState(false)

    const handleSmallerScreensNavigation = () => {
        setIcon( !menuIcon );
    }
    return(
    <header className=" text-white w-full ease-in duration-300  top-0 left-0 z-10">
        <nav className="max-auto h-[100px] flex  items-center   navbar">

            <div>
                <Link href ='/' onClick={handleSmallerScreensNavigation}><span className=""><Logo /></span></Link>
            </div>
            {/* larger screens Navigations  */}
            <ul className="hidden md:flex text-[16px] text-white navlist">
                <li className="mr-20 ml-20">
                    <Link href={"#aboutus"}>About Us</Link>
                </li>
                <li className="mr-20">
                    <Link href={"#ourservice"}>Our service</Link>
                </li>
                <li className="mr-20">
                    <Link href={"#blog"}>Blog</Link>
                </li>
                <li className="mr-20">
                    <Link href={"#contactus"}>Contact Us</Link>
                </li>

            </ul>
            <div className="hidden md:flex ml-auto buttonbox">
                <div className="flexbuttonbox">
                    <Link href="/"><button className="headerbutton1">Book a Call</button></Link>
                    <Link href="/"><button className="headerbutton2">Download Free PDF <WiCloudDown /></button></Link>
                </div>
            </div>

            {/* small screens onClick changes icons  */}
            <div onClick={handleSmallerScreensNavigation} className="menuicon">
                {menuIcon ? 
                    (<AiOutlineClose size={25} className="text-white" />)
                    : 
                    (<AiOutlineMenu size={25} className="text-white" />)
                    }
            </div>
            {/* small screens navabr  */}
            <div className={menuIcon ? 
            'absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300 menulist'
            :
            'absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300 menulist'}>
                
                <div className="w-full">
                    <ul className="text-2xl flex flex-col gap-5">
                        <li onClick={handleSmallerScreensNavigation} className=" cursor-pointer">
                            <Link href="./#aboutus">About Us</Link>
                        </li>
                        <li onClick={handleSmallerScreensNavigation} className=" cursor-pointer">
                            <Link href="./#ourservice">Our service</Link>
                        </li>
                        <li onClick={handleSmallerScreensNavigation} className=" cursor-pointer">
                            <Link href="./#blog">Blog</Link>
                        </li>
                        <li onClick={handleSmallerScreensNavigation} className=" cursor-pointer">
                            <Link href="./#contactus">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-center items-center gap-5 mt-5">
                        <Link onClick={handleSmallerScreensNavigation} href="">
                            <button className="headerbutton1">Book A Call</button>
                        </Link>
                        <Link onClick={handleSmallerScreensNavigation} href="">
                            <button className="headerbutton2">Download Free PDF <WiCloudDown /></button>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    </header>
    )
}

