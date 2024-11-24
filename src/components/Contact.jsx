import { FaInstagram} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
// import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="container contactpage py-4" id="contact">
      <h1 className="py-4">Contact Us</h1>
      <div className="icon-container d-flex justify-content-center aling-item-center py-4 "  data-aos="Zoom-in-up" data-aos-duration="1000">
        <a href="" className=" bg-black text-white mx-4 p-3 fs-2 icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/notifications/?filter=all" className="bg-black text-white mx-4 p-3 fs-2 icon">
          <CiLinkedin />
        </a>
        <a href="https://github.com/sanjana9560" className="bg-black text-white mx-4 p-3 fs-2 icon ">
          <FiGithub />
        </a>
        <a href="sanjana.gupta106849@gmail.com" className="bg-black text-white mx-4 p-3 fs-2 icon">
          <MdOutlineMail/>
        </a>
        <a href="" className="bg-black text-white mx-4 p-3 fs-2 icon ">
          <FaXTwitter/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
