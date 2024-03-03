import { FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
export const socialData=[
    {
        id:1,
        child:(
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href:"https://www.linkedin.com/in/sidharth-surya/",
        style:"rounded-tr-md"
    },
    {
        id:2,
        child:(
            <>
                Github <FaGithub size={30}/>
            </>
        ),
        href:"https://github.com/imsidharthsurya"
    },
    {
        id:3,
        child:(
            <>
                Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:"mailto:imsidharthsurya@gmail.com"
    },
    {
        id:4,
        child:(
            <>
                Resume <FaRegFileAlt size={30}/>
            </>
        ),
        href:"/Sidharth's Resume.pdf",
        style:"rounded-br-md",
        download:true
    }
]