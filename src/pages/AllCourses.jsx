import { useState } from "react";
import CourseCard from "../components/CourseCard";
import courseimg1 from "/soft-skills.jpg";
import courseimg2 from "/general-insurance.jpg";
import courseimg3 from "/stress-management.jpg";

const AllCourses = () => {
  const [active, setActive] = useState("all");
  return (
    <>
      <div>
        <div className="font-bold text-xl mb-4">All Courses</div>
        <div className="flex items-center justify-between">
          <div className="text-sm flex items-center flex-wrap gap-4">
            <button
              onClick={() => setActive("all")}
              className={`border-[1px] px-2 py-[3px] border-gray-400 rounded ${
                active == "all" && "bg-black text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActive("software")}
              className={`border-[1px] px-2 py-[3px] border-gray-400 rounded ${
                active == "software" && "bg-black text-white"
              }`}
            >
              Software Development
            </button>
            <button
              onClick={() => setActive("business")}
              className={`border-[1px] px-2 py-[3px] border-gray-400 rounded ${
                active == "business" && "bg-black text-white"
              }`}
            >
              Business & Finance
            </button>
            <button
              onClick={() => setActive("history")}
              className={`border-[1px] px-2 py-[3px] border-gray-400 rounded ${
                active == "history" && "bg-black text-white"
              }`}
            >
              History & Politics
            </button>
            <button
              onClick={() => setActive("music")}
              className={`border-[1px] px-2 py-[3px] border-gray-400 rounded ${
                active == "music" && "bg-black text-white"
              }`}
            >
              Music Production
            </button>
          </div>
          <div className="flex items-center flex-nowrap">
            <input
              type="text"
              className="border-[1px] border-gray-300 rounded-l p-2 w-[250px] text-[12px]"
              placeholder="Search for anything"
            />
            <button className="text-[12px] bg-[#7e30e1] px-[10px] py-2 text-white rounded-r w-fit">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {/* <h2 className="font-bold text-lg mb-4">Most Popular Courses</h2> */}
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-4">
          <CourseCard title="Soft Skills" pic={courseimg1} />
          <CourseCard title="Stress Management" pic={courseimg3} />
          <CourseCard title="General Insurance" pic={courseimg2} />
        </div>
      </div>
    </>
  );
};

export default AllCourses;
