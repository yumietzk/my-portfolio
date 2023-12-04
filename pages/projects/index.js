import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import projectTrackerIcon from "../../public/project-tracker/icon.png";
import popcornClubIcon from "../../public/popcorn-club/icon.png";
import restaurantSearchIcon from "../../public/restaurant-search/icon.png";
import Link from "next/link";

const projectsData = [
  {
    icon: "",
    title: "Remotely",
    description:
      "Eliminate redundancy in your job search and land your dream job.",
    url: "remotely",
  },
  {
    icon: projectTrackerIcon,
    title: "Project Tracker",
    description: "Elevate your project management experience with this app.",
    url: "projectTracker",
  },
  {
    icon: popcornClubIcon,
    title: "Popcorn Club",
    description:
      "This app will take you to dive into the world of entertainment.",
    url: "popcornClub",
  },
  {
    icon: restaurantSearchIcon,
    title: "Restaurant Search",
    description:
      "Explore and enjoy new dishes with this user-friendly restaurant search app.",
    url: "restaurantSearch",
  },
];

function projects() {
  return (
    <div>
      <h2 className="mb-12 text-xl font-semibold">
        Please take a look at my projects!
      </h2>

      <div className="w-full grid grid-cols-3 gap-x-7 gap-y-8">
        {projectsData.map((item) => (
          <div
            key={item.title}
            className="border border-border-color px-5 py-7 rounded-lg shadow-sm"
          >
            <div className="inline-block mb-6 w-11 h-11">
              {item.icon ? (
                <Image
                  className="w-full h-full object-cover rounded-full outline outline-offset-4 outline-bg-color-3 shadow-sm"
                  src={item.icon}
                  alt={item.title}
                />
              ) : (
                <CiImageOn className="w-full h-full text-text-color-3 object-cover rounded-full outline outline-offset-4 outline-bg-color-3 shadow-sm" />
              )}
            </div>
            <h3 className="font-medium mb-2.5">{item.title}</h3>
            <p className="text-sm text-text-color-2 mb-5">{item.description}</p>
            <Link
              href={`/projects/${item.url}`}
              className="text-sm bg-bg-color-2 px-4 py-3 rounded-md transition duration-300 hover:bg-bg-color-3"
            >
              More details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
