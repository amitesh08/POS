import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 h-16 flex justify-around bg-[#262626] ">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] "
      >
        <FaHome className="inline mr-4 size={15}" />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] "
      >
        <IoMdReorder className="inline mr-4 size={15}" />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] "
      >
        <MdTableBar className="inline mr-4 size={15}" />
        <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] ">
        <CiCircleMore className="inline mr-4 size={15}" />
        <p>More</p>
      </button>

      <button className="absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center  ">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};
export default BottomNav;
