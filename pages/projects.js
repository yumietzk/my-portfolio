import Image from "next/image";
import projectTrackerImg from "../public/project-tracker.png";
import popcornClubImg from "../public/popcorn-club.png";
import restaurantSearchImg from "../public/restaurant-search.png";

const projectsData = [
  {
    icon: projectTrackerImg,
    title: "Remotely",
    description:
      "Eliminate redundancy in your job search and land your dream job.",
  },
  {
    icon: projectTrackerImg,
    title: "Project Tracker",
    description: "Elevate your project management experience with this app.",
  },
  {
    icon: popcornClubImg,
    title: "Popcorn Club",
    description:
      "This app will take you to dive into the world of entertainment.",
  },
  {
    icon: restaurantSearchImg,
    title: "Restaurant Search",
    description:
      "Explore and enjoy new dishes with this user-friendly restaurant search app.",
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
              <Image
                className="w-full h-full object-cover rounded-full"
                src={item.icon}
                alt={item.title}
              />
            </div>
            <h3 className="font-medium mb-2.5">{item.title}</h3>
            <p className="text-sm text-text-color-2 mb-5">{item.description}</p>
            <button className="text-sm bg-bg-color-2 px-4 py-3 rounded-md transition duration-300 hover:bg-bg-color-3">
              More details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
