import { ReactNode } from "react";
import GitHubSvg from "../ui/icons/GithubSvg"
import InstagramSvg from "../ui/icons/InstagramSvg";
import LinkedInSvg from "../ui/icons/LinkedinSvg";
import TwitterSvg from "../ui/icons/TwitterSvg";
import { ArrowUpRight } from "lucide-react";


type SocialLink = {
  name: string;
  url: string;
  icon ? : ReactNode
};

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eliseu-samulolo-53564230b/', icon: <LinkedInSvg/>},
  { name: 'GitHub', url: 'https://github.com/samulolo/samulolo', icon : <GitHubSvg/>},
  { name: 'Instagram', url: 'https://www.instagram.com/ololumas/', icon: <InstagramSvg/>},
  { name: 'X', url: '#', icon: <TwitterSvg/> },
];

export default function Contacts(){

    return (
        <section className="mt-32 px-4 py-5 bg-[#4169E1] text-white">
            <div className="p-2">
                <h5 className="my-4">Feel free to contact-me</h5>
                <div>
                    <ul className="flex flex-col gap-3">
                        {
                            socialLinks.map(social => <li key={social.name} className="flex items-center gap-2 font-bold text-white">

                                {social.icon}<a href={social.url} target="_blank"
                                className="flex items-center justify-between w-full">{social.name} <ArrowUpRight  size={20}/></a>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}