import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/TeamKTessori",
    icon: <FaFacebookF />,
    colorClass: "bg-facebookBlue"
  },
  {
    href: "https://www.youtube.com/@KamranTessorikk",
    icon: <FaYoutube />,
    colorClass: "bg-youTube"
  },
  {
    href: "https://twitter.com/KamranTessoriPk",
    icon: <FaTwitter />,
    colorClass: "bg-twitter"
  },
  {
    href: "https://www.instagram.com/KamranTessoriPk",
    icon: <FaInstagram />,
    colorClass: "bg-instagram-gradient"
  },
  {
    href: "https://www.tiktok.com/@KamranTessoriPk",
    icon: <FaTiktok />,
    colorClass: "bg-tikTok"
  }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mb-4 cursor-pointer py-1">
      {socialLinks.map(({ href, icon, colorClass }, index) => (
        <Link key={index} href={href} target="_blank">
          <div
            className={`text-white w-6 h-6 rounded-full flex justify-center items-center ${colorClass}`}
          >
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
