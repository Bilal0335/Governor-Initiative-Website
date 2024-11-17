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
      <footer className="bg-[#F4F4F5] py-8 px-6 sm:px-8 lg:px-10 text-gray-800 flex justify-around">
        <div className="container mx-auto max-w-screen-lg grid md:grid-cols-3 grid-cols-1 gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold mb-4 text-xl">Course Course</h3>
            <ul className="space-y-2 text-sm">
              {courses.map((course, index) => (
                <ListItem key={index} href={course.href}>
                  {course.title}
                </ListItem>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-xl">Advanced Courses</h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="font-bold mb-4 text-xl">Social Link</h3>
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
