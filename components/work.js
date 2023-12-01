import { CiDesktop } from "react-icons/ci";

const workData = [
  {
    title: "Full Stack Developer",
    company: "CodeBusters",
    place: "Toronto, Canada",
    date: "June 2022 - July 2023",
  },
  {
    title: "System Engineer",
    company: "Hewlett Packard Enterprise",
    place: "Tokyo, Japan",
    date: "April 2017 - January 2021",
  },
];

function Work() {
  return (
    <div className="h-max border border-border-color px-4 py-5 rounded-md shadow-sm">
      <h3 className="flex items-center pb-4 border-b border-border-color">
        <CiDesktop className="mr-2 h-6 w-6 text-text-color-2" />
        Work
      </h3>
      <div className="whitespace-nowrap px-1 pt-4 space-y-4">
        {workData.map((item) => (
          <div key={item.company}>
            <p className="text-sm mb-0.5">{item.title}</p>
            <div className="flex justify-between text-text-color-3 text-xs">
              <p className="mr-6">{item.company}</p>
              <div className="text-end">
                <p>{item.place}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
