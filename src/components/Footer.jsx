import {
  MAIL_TO,
  WHATSAPP_ME,
  DRIBBBLE_ACCOUNT,
  INSTAGRAM_ACCOUNT,
  LINKEDIN_ACCOUNT,
  GITHUB_ACCOUNT,
  TWITTER_ACCOUNT,
} from "../utils/constant";
import { SiGmail } from "react-icons/si";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-gray-900"
      style={{
        backgroundColor: "#D5E7F7",
        boxShadow: "0 -6px 10px 5px rgba(0,0,0,0.5)",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-extrabold text-gray-900 uppercase dark:text-white">
              Contact Me
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="flex flex-wrap mb-4">
                <SiGmail className="mr-4" size={30} />
                <a href={`Mail to ${MAIL_TO}`} className=" hover:underline">
                  irvan.rahmanto123@gmail.com
                </a>
              </li>
              <li className="flex flex-wrap mb-4">
                <FaWhatsappSquare className="mr-4" size={30} />
                <a href={WHATSAPP_ME} className=" hover:underline">
                  WhatsApp Me
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-extrabold text-gray-900 uppercase dark:text-white ">
              Follow Me
            </h2>
            <div>
              <ul className="flex flex-wrap">
                <li>
                  <a href={INSTAGRAM_ACCOUNT}>
                    <FaInstagramSquare className="mr-4" size={50} />
                  </a>
                </li>
                <li>
                  <a href={TWITTER_ACCOUNT}>
                    <FaSquareXTwitter
                      className="mr-4"
                      size={50}
                    />
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_ACCOUNT}>
                    <FaLinkedin
                      className="mr-4"
                      size={50}
                    />
                  </a>
                </li>
                <li>
                  <a href={DRIBBBLE_ACCOUNT}>
                    <FaDribbbleSquare
                      className="mr-4"
                      size={50}
                    />
                  </a>
                </li>
                <li>
                  <a href={GITHUB_ACCOUNT}>
                    <FaGithubSquare
                      className="mr-4"
                      size={50}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-extrabold text-gray-900 uppercase dark:text-white">
              Interest
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Software Engineering
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Technology & Business
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sport Activities
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ border: "1px solid gray" }} />
        <div
          className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between"
          style={{ justifyContent: "center", backgroundColor: "#D5E7F7" }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 All Rights Reserved. | Created by{" "}
            <b style={{ color: "#2C88D9" }}>@irvanrahmanto</b> made by ❤️ with{" "}
            <b style={{ color: "#2C88D9" }}>React.js</b> and{" "}
            <b style={{ color: "#2C88D9" }}>Tailwind.css</b>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
