import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }

  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1","2","3","4","5","6","7","8","9"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Telegram Bot (Elements Envato Downloader) -Private",
    desc: "A bot that downloads the file on the elements envato link sent via Telegram, uploads it to the gofile site and shares the download link.",
    url: "https://github.com/bahadirduzcan/",
  },
  {
    id: 2,
    title: "XBattleGround Api -Private",
    desc: "I wrote an API that performs user registration in xbattleground, a computer and phone game.",
    url: "https://github.com/bahadirduzcan/",
  },
  {
    id: 3,
    title: "QrMenu -Private",
    desc: "I wrote a system that reads the qr code on the restaurant and brings the menu. I used nodejs as api and front end.",
    url: "https://github.com/bahadirduzcan/",
  },
  {
    id: 4,
    title: "Nmac.to Website Bot",
    desc: "I wrote an api that instantly pulls the content of the site. I also developed a frontend project to showcase this.",
    url: "https://github.com/bahadirduzcan/NmacBot/",
  },
  {
    id: 5,
    title: "Smart Board System",
    desc: "I wrote an application that provides access to smart boards in high school via usb.",
    url: "https://github.com/bahadirduzcan/Akilli-Tahta-Sistemi/",
  },
  {
    id: 6,
    title: "BeChat",
    desc: "I developed a desktop chat application.",
    url: "https://github.com/bahadirduzcan/BeChat/",
  },
  {
    id: 7,
    title: "Lisans Generator",
    desc: "I developed a license system for the applications I wrote in C#.",
    url: "https://github.com/bahadirduzcan/Lisans-Uretici/",
  },
  {
    id: 8,
    title: "Image Processing",
    desc: "I did image processing with C#.",
    url: "https://github.com/bahadirduzcan/Goruntu-Isleme/",
  },
  {
    id: 9,
    title: "GuardPlus",
    desc: "An application I wrote to use on my own computer. Software to access the contents of the computer by reading a usb or qr code.",
    url: "https://github.com/bahadirduzcan/GuardPlus/",
  },
];

export default Projects;
