import * as React from "react"

import DiscordIcon from '../images/discord.png';
import FacebookIcon from '../images/facebook.png';
import GithubIcon from '../images/github.png';
import InstagramIcon from '../images/instagram.png';


const Contacts = [
    {
        description: "Discord",
        src: DiscordIcon,
        link: "https://discord.gg/Xk2Ah9dvgr",
    },
    {
        description: "Facebook",
        src: FacebookIcon,
        link: "",
    },
    {
        description: "Github",
        src: GithubIcon,
        link: "https://github.com/kaitech-kaist",
    },
    {
        description: "Instagram",
        src: InstagramIcon,
        link: "",
    }
]


const ContactScreen = () => {
    const renderedContacts = Contacts.map(x => (
        <img className="h-14 w-14" src={x.src} alt={x.description} />
    ));
    return (
        <div className="h-auto xl:mt-16">
            <p className="font-montserrat font-extrabold text-center xl:text-4xl">
                Contacts
            </p>
            <div className="flex flex-row flex-wrap xl:space-x-4 xl:mt-5 justify-center items-center">
                {renderedContacts}
            </div>
        </div>
    );
}
export default ContactScreen