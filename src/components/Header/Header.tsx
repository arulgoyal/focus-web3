import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
// import styles from "./Header.module.css"
import "./Header.css"


export default async function Header(){

    const client = createClient();
    const settings = await client.getSingle("settings");


    return(
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
        <header>
        <div className="navbar">
            <div className="logo">
            <Link href="/">{settings.data.site_title}
            </Link>
            </div>
            <ul className="links">
                    {settings.data.navigation.map(({link,label})=>
                    (<li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink> 
                    </li>)
                    )}
                </ul>
                <div className="toggle_btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
            
        </div>
        <div className="dropdown_menu">
        <ul className="">
                    {settings.data.navigation.map(({link,label})=>
                    (<li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink> 
                    </li>)
                    )}
                </ul>
        </div>
    </header>
    )
}