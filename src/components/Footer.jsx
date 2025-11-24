import { FaDiscord, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
    { href: "https://discord.com/invite/zentry", icon: <FaDiscord /> },
  { href: "https://x.com/i/flow/login?redirect_after_login=%2FKrishna_Rati", icon: <FaSquareXTwitter /> },
  { href: "https://github.com/33Frok1e", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/rati-krishna-moharana-40b19627a", icon: <FaLinkedin /> },
  { href: "https://www.youtube.com/@zentryhq", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center font-normal text-sm md:text-left">
          ©Ratikrishna 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-normal hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;