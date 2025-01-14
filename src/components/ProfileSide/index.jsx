import { HiOutlineDotsVertical } from "react-icons/hi";
import profile from "/admin.jpg";
import { Avatar } from "@mui/material";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";

const ProfileSide = () => {
  return (
    <div className="w-[22%] bg-white rounded-2xl px-4 py-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="font-bold">Your Profile</p>
        <button>
          <HiOutlineDotsVertical />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Avatar alt="Remy Sharp" src={profile} sx={{ width: 85, height: 85 }} />
        <h3 className="font-bold">Good Morning, Emma</h3>
        <p className="text-sm text-center text-gray-400">
          Continue your journey and achieve your target
        </p>
        <div className="flex gap-6 mt-2">
          <button className="border-[1px] border-gray-300 rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <IoMdNotificationsOutline size={22} />
          </button>
          <button className="border-[1px] border-gray-300 rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <GoInbox size={18} />
          </button>
          <button className="border-[1px] border-gray-300 rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <FaRegUser size={15} />
          </button>
        </div>
      </div>
      {/* <div>
        <h3 className="font-bold">Other Admins</h3>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Haven Strickland</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Porter Morrison</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Danna Anthony</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Emory French</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
      </div> */}
      <div>
        <h3 className="font-bold">Employees</h3>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Hannah Nolan</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Salem Pratt</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Holly Merritt</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Kate Parrish</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-2 items-center">
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 25, height: 25 }}
            />
            <div className="text-sm">
              <h4 className="font-semibold">Bentley Luna</h4>
              <p className="text-gray-500 text-[12px]">Sales</p>
            </div>
          </div>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Contact
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <FcCustomerSupport size={20} />
          <h3 className="font-bold">Query</h3>
        </div>
        <p className="text-sm text-gray-500 pt-2">
          Please send you query to us. Our representative will contact you soon
        </p>
        <form action="" className="my-4">
          <textarea
            name=""
            id=""
            placeholder="Enter Your Query"
            className="text-sm border-[1px] border-gray-300 rounded w-full h-[150px] p-2"
          ></textarea>
          <button className="text-[12px] bg-[#7e30e1] px-[10px] py-[8px] text-white rounded-lg">
            Send Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSide;
