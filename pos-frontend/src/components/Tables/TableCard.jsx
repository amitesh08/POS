import React from "react";
import { getAvatarName, getRandomBG } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({ name, status, initials, seats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (name) => {
    if (status === "Booked") return;
    dispatch(updateTable({ tableNo: name }));
    navigate("/menu");
  };

  return (
    <div
      onClick={() => handleClick(name)}
      className="w-[250px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg  cursor-pointer "
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">
          Table
          <FaLongArrowAltRight className="text-[#ababab] ml-2 inline " />
          {name}
        </h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#937019] text-white "
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-8">
        <h1
          className=" text-[#f5f5f5] rounded-full p-5 text-xl"
          style={{ backgroundColor: initials ? getRandomBG() : "#1f1f1f" }}
        >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>
      <p className="text-[#ababab] text-xs">
        Seats: <span className="text-[#f5f5f5] ">{seats}</span>
      </p>
    </div>
  );
};
export default TableCard;
