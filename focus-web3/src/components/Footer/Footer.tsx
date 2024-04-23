import { createClient } from "@/prismicio";
import Link from "next/link";
import "./Footer.css"
import { PrismicNextLink } from "@prismicio/next";
import Logo from "@/components/Logo"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default async function Footer(){
    const client = createClient();
    const settings = await client.getSingle("settings");
    const services = await client.getSingle("footer");

    return(
        <footer>
            <div className="footerwrap">
                <div className="footercontentwrap">
                    <div className="footerflexboxfor2boxes">
                    <div className="footerflexbox1">
                    <Link href="/"><Logo />
                    </Link>
                    <p className="footeremail">
                    Email:Contact@focusweb3.io
                    </p>
                    <p>
                    Follow us on social media
                    </p>
                        <div className="footerflexbox1subflexbox">
                            <Link href="/">
                            <FaTwitter />
                            </Link>
                            <Link href="/">
                            <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="footerflexbox2">
                        <h2>Company</h2>
                        <ul className="footernavigation">
                    {settings.data.navigation.map(({link,label})=>
                    (<li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink> 
                    </li>)
                    )}
                </ul>
                    </div>
                </div>
                    <div className="footerflexboxfor3boxes">
                    <div className="footerflexbox3">
                    <h2>Services</h2>
                        {/* <ul className="footerservices">
                    {services.data.services_footer.map(({label})=>
                    (<li>
                        {label}
                    </li>)
                    )}
                </ul> */}
                    </div>
                    <div className="footerflexbox4">
                    <h2>Official info</h2>
                    {/* <ul className="footerservices">
                    {services.data.official_info_footer.map(({label1})=>
                    (<li>
                        {label1}
                    </li>)
                    )}
                    </ul> */}
                    <div className="footersignup">
                        <h2>Sign up for our newsletter</h2>
                        <div className="formsignup">
                            <input type="text" className="signupinput" placeholder="Enter your email address"/>
                            <button className="footerbutton">Sign me up</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </footer>
    )
}