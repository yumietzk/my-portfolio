import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import {
  SiNextdotjs,
  SiFirebase,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiGatsby,
  SiGraphql,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "JavaScript",
    icon: (
      <DiJavascript1 className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />
    ),
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Sass",
    icon: <FaSass className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "PostgreSQL",
    icon: (
      <SiPostgresql className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />
    ),
  },
  {
    name: "Gatsby JS",
    icon: <SiGatsby className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "Jest",
    icon: <SiJest className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
  {
    name: "React Testing Library",
    icon: (
      <SiTestinglibrary className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />
    ),
  },
  {
    name: "Git",
    icon: <FaGit className="h-4 w-4 md:h-5 md:w-5 text-accent-color-2" />,
  },
];

function Skills() {
  return (
    <div>
      <p className="text-lg font-medium mb-1">Skills</p>
      <div className="flex items-center space-x-2.5 space-y-1 flex-wrap">
        {skills.map((item) => (
          <div key={item.name}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
