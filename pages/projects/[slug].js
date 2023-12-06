import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import projectTrackerImg from "../../public/project-tracker/image.png";
import popcornClubImg from "../../public/popcorn-club/image.png";
import restaurantSearchImg from "../../public/restaurant-search/image.png";
import placeholderImg from "../../public/placeholder-image.jpg";

const projectDetail = {
  remotely: {
    title: "Remotely",
    image: "",
    description:
      "A job board platform where you can search for remote Software Engineer jobs and track your job applications built with React.js, React Router, Tailwind CSS, Supabase and more. Coming soon...",
    stack: "React, React Router, Tailwind CSS, Supabase",
    url: "",
    github: "remotely",
  },
  projectTracker: {
    title: "Project Tracker",
    image: projectTrackerImg,
    description:
      "A project tracker application built with MongoDB, Express, React.js and Node.js. This app allows users to create and manage projects. * Please allow some time for the app to load.",
    stack:
      "React, Redux, React Router, Redux Thunk, CSS Modules, Firebase, Node.js, Express, MongoDB, Heroku",
    url: "project-tracker-khkm.onrender.com",
    github: "project-tracker",
  },
  popcornClub: {
    title: "Popcorn Club",
    image: popcornClubImg,
    description:
      "A movie and TV show library built with React JS. Allows users to search movies and TV shows, get data by different genres, sort by categories, and see movies and TV shows' details. Users can also save their favorite movies and TV shows after signed in.",
    stack: "React, Redux, React Router, Redux Thunk, CSS Modules, Netlify",
    url: "popcorn-club.netlify.app",
    github: "popcorn-club",
  },
  restaurantSearch: {
    title: "Restaurant Search",
    image: restaurantSearchImg,
    description:
      "A restaurant search application built with HTML, CSS and JavaScript. Allows users to search restaurants near them, see details and bookmark restaurants.",
    stack: "HTML, CSS(Sass), JavaScript, Netlify",
    url: "restaurant-search-myapp.netlify.app",
    github: "restaurant-search",
  },
};

function ProjectPage() {
  const router = useRouter();
  const project = router?.query?.slug;

  const { title, image, description, stack, url, github } =
    projectDetail[project || "remotely"];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <Link className="text-accent-color-1 mr-1" href="/projects">
          Projects
        </Link>{" "}
        &gt;{" "}
        <span className="ml-1 text-lg md:text-xl font-medium">{title}</span>
      </div>

      <div className="w-11/12 sm:w-4/5 md:w-3/5 mx-auto text-text-color-2">
        <Image
          className="w-full rounded-lg mb-10 shadow-sm"
          src={image || placeholderImg}
          alt={title}
        />
        <p className="mb-5">{description}</p>
        <div className="text-sm flex items-center mb-8">
          <p className="inline-block bg-bg-color-2 px-3 py-1.5 rounded-2xl text-text-color-1 mr-2.5">
            Stack
          </p>
          <p className="text-accent-color-2">{stack}</p>
        </div>

        <div className="text-text-color-3 text-sm">
          {url && (
            <Link
              className="flex items-center mb-1.5 transition duration-300 hover:text-text-color-1"
              href={`https://${url}`}
              target="_blank"
            >
              <CiLink className="h-7 w-7 mr-3" />
              {url}
            </Link>
          )}
          <Link
            className="flex items-center transition duration-300 hover:text-text-color-1"
            href={`https://github.com/yumietzk/${github}`}
            target="_blank"
          >
            <FaGithub className="h-7 w-7 mr-3" />
            {github}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
