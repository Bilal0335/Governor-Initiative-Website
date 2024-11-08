import ListItem from "./Listitem";
// import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
const courses = [
  { title: "Programming Fundamentals", href: "#" },
  { title: "Web2 Using NextJS", href: "#" },
  { title: "Earn as You Learn", href: "#" }
];

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 py-8 px-10 text-gray-800 justify-around flex">
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-xl">Course Course</h3>
            <ul className="space-y-2 text-lg">
              {/* Map over courses array */}
              {courses.map((course, index) => (
                <ListItem key={index} href={course.href}>
                  {course.title}
                </ListItem>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-xl">Advanced Courses</h3>
            <ul className="space-y-2 text-lg">
              <ListItem href="#">Web 3 and Metaverse</ListItem>
              <ListItem href="#">Cloud-Native Computing</ListItem>
              <ListItem href="#">
                Artificial Intelligence (AI) and Deep Learning
              </ListItem>
              <ListItem href="#">Ambient Computing and IoT</ListItem>
              <ListItem href="#">Genomics and Bioinformatics</ListItem>
              <ListItem href="#">
                Network Programmability and Automation
              </ListItem>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-400 mb-4 text-xl">
              Social Link
            </h3>

            {/* <div className="flex space-x-4 mb-4 cursor-pointer py-1">
              <Link href="https://www.facebook.com/TeamKTessori" target="_blank">
                <div className="flex justify-center items-center text-white w-6 h-6 rounded-full bg-facebookBlue pt-1 pb-1">
                  <FaFacebookF />
                </div>
              </Link>
              <Link href="https://www.youtube.com/@KamranTessorikk" target="_blank">
                <div className="flex justify-center items-center text-white w-6 h-6 rounded-full bg-youTube pt-1 pb-1">
                  <FaYoutube />
                </div>
              </Link>
              <Link href="https://twitter.com/KamranTessoriPk" target="_blank">
                <div className="flex justify-center items-center text-white w-6 h-6 rounded-full bg-twitter pt-1 pb-1">
                  <FaTwitter />
                </div>
              </Link>
              <Link href="https://www.instagram.com/KamranTessoriPk" target="_blank">
                <div className="flex justify-center items-center text-white w-6 h-6 rounded-full bg-instagram-gradient pt-1 pb-1">
                  <FaInstagram />
                </div>
              </Link>
              <Link href="https://www.tiktok.com/@KamranTessoriPk" target="_blank">
                <div className="flex justify-center items-center text-white w-6 h-6 rounded-full bg-tikTok pt-1 pb-1">
                  <FaTiktok />
                </div>
              </Link>
            </div> */}

            {/* Social Links */}
            <SocialLinks />
            <div className="flex flex-wrap space-x-4 mb-4">
              <Link
                href="mailto:education@governorsindh.com"
                target="_blank"
                className="flex-grow flex gap-4 text-[#38729B] items-center underline"
              >
                <AiOutlineMail className="text-[#4178A1] size-7" />
                education@governorsindh.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
