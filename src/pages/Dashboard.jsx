import Card from "../components/Card";
import CourseCard from "../components/CourseCard";
import ProfileSide from "../components/ProfileSide";
import MentorsTable from "../components/MentorsTable";
import GraphSection from "../components/GraphSection";
import { PiStudent } from "react-icons/pi";
import { IoIosBook } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import courseimg1 from "/soft-skills.jpg"
import courseimg2 from "/general-insurance.jpg"
import courseimg3 from "/stress-management.jpg"


const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[78%]">
        <div className="flex justify-between">
          <Card title="Total Courses" amount="120" icon={<PiStudent color="green"/>} />
          <Card title="Your Courses" amount="3" icon={<IoIosBook color="orange"/>} />
          <Card title="Employees Registered" amount="1270" icon={<PiStudentFill color="red"/>} />
          <Card title="Total Admins" amount="53" icon={<FaChalkboardTeacher color="pink"/>} />
        </div>
        {/* <div className={`flex flex-col gap-6 p-4 bg-[#E26FE5] rounded-3xl my-4 text-white bg-[url("/coder.png")] bg-no-repeat bg-right bg-contain w-[100%]`}>
          <p>ONLINE COURSE</p>
          <h2 className="text-4xl font-semibold w-[30ch]">
            Sharpen your skills with professional mentors & online courses
          </h2>
          <button className="bg-black w-fit px-4 py-2 rounded-full text-sm">
            JOIN US
          </button>
        </div> */}
        {/* <div>
          <h2 className="font-bold text-lg mb-4">Your Courses</h2>
          <div className="flex justify-between gap-4">
            <CourseCard title="Soft Skills" pic={courseimg1} />
            <CourseCard title="Stress Management" pic={courseimg3}/>
            <CourseCard title="General Insurance" pic={courseimg2}/>
          </div>
        </div> */}
        <div className="my-4">
          <h2 className="font-bold text-lg mb-4">Yearly Stats</h2>
          <GraphSection/>
        </div>
        <div className="mt-4">
        <h2 className="font-bold text-lg mb-4">Employees Enrolled</h2>
          <MentorsTable/>
        </div>
      </div>
      <ProfileSide/>
    </div>
  );
};

export default Dashboard;
