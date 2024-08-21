/** import react icons */
import {IoCall} from "react-icons/io5";
import myImageHero from "../../assets/example-hero.jpg";
import {WHATSAPP_ME} from "../../utils/constant";

const Hero = () => {
  return (
    <section className="bg-white" id="hero">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h3 className="max-w-2xl mb-4 text-xl font-bold tracking-tight leading-none md:text-5xl xl:text-xl dark:text-white" style={{color: '#2C88D9'}}>👋🏻 Hi, I am</h3>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" style={{color: '#2C88D9'}}>
            Irvan Naufali Rahmanto
          </h1>
          <p className="max-w-4xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Software Engineer
          </p>
          <a
            href={WHATSAPP_ME}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            style={{ backgroundColor: "#2C88D9" }}
          >
            <IoCall style={{margin: 'auto', marginRight: "8px"}}/> Contact Me{" "}
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg: flex">
          <img
            src={myImageHero}
            alt="profile"
            style={{borderWidth: '10px 4px', borderRadius: '10px 40px'}}
            className="shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
