import { Avatar } from "@mui/material";
import profile from "../images/profile.jpg";

const MyProfile = () => {
  return (
    <div className="">
      <h1 className="font-bold text-xl text-gray-800 mb-8">My Profile</h1>
      <div className="">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-600 font-semibold">Basic Information</h2>
          <div className="flex-grow border-b border-gray-300 ml-4" />
        </div>
        <div className="mb-6">
          <h3 className="mb-2">Profile Picture</h3>
          <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 110, height: 110 }}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              FIRST NAME
            </label>
            <input
              type="text"
              value={"Emma"}
              className="text-sm text-gray-500 w-[35vw] border-[1px] border-gray-300 rounded py-[7px] px-2 focus:outline-[1px] focus:outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              LAST NAME
            </label>
            <input
              type="text"
              value={"Watson"}
              className="text-sm text-gray-500 w-[35vw] border-[1px] border-gray-300 rounded py-[7px] px-2 focus:outline-[1px] focus:outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              Email ID
            </label>
            <input
              type="text"
              value={"emmawatson@gmail.com"}
              className="text-sm text-gray-500 w-[35vw] border-[1px] border-gray-300 rounded py-[7px] px-2 focus:outline-[1px] focus:outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              Age
            </label>
            <input
              type="text"
              value={"31"}
              className="text-sm text-gray-500 w-[35vw] border-[1px] border-gray-300 rounded py-[7px] px-2 focus:outline-[1px] focus:outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              Location
            </label>
            <input
              type="text"
              value={"Assam"}
              className="text-sm text-gray-500 w-[35vw] border-[1px] border-gray-300 rounded py-[7px] px-2 focus:outline-[1px] focus:outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm">
              Phone Number
            </label>
            <input
              type="text"
              value={"88888-99999"}
              className="text-sm text-gray-500 w-[35vw] border-[1px] border-gray-300 rounded py-[7px] px-2 focus:outline-[1px] focus:outline-gray-400"
            />
          </div>
        </div>
        <button className="text-[14px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg w-fit mt-6">
            SAVE CHANGES
          </button>
      </div>
    </div>
  );
};

export default MyProfile;
