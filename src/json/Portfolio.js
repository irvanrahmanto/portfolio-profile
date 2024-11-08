import imgProject1 from '../assets/project/line-bank.jpeg';
import imgProject2 from '../assets/project/pasar-murah-nusantara.jpeg';
import imgProject3 from '../assets/project/other-project.jpeg';

const portfolioData = [
  {
    id: 1,
    urlImg: imgProject1,
    urlHeading: "LINE Bank",
    urlContent: "This is content paragraph",
    urlProject: "https://linebank.co.id",
    techStackOne: "ReactJs",
    techStackTwo: "NextJs",
    techStackThree: "JavaScript",
  },
  {
    id: 2,
    urlImg: imgProject2,
    urlHeading: "Pasar Murah Nusantara",
    urlContent: "This is content paragraph",
    urlProject: "https://pasarmurahnusantara.co.id/",
    techStackOne: "Wordpress",
    techStackTwo: "PHP",
    techStackThree: "Elementor",
  },
  {
    id: 3,
    urlImg: imgProject3,
    urlHeading: "Other Project",
    urlContent: "This is content paragraph",
    urlProject: "https://irvanrahmanto.github.io/",
    techStackOne: "HTML",
    techStackTwo: "CSS",
    techStackThree: "JavaScript",
  },
];

export default portfolioData;
