import React from "react";
import { getRandomBG } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ key, name, status, initials, seats }) => {
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
      key={key}
      className="w-[250px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg  cursor-pointer "
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">{name}</h1>
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
      <div className="flex items-center justify-center mt-5 mb-7">
        <h1
          className="w-[60px] h-[60px] text-[#f5f5f5] rounded-full p-4 text-xl"
          style={{ backgroundColor: getRandomBG() }}
        >
          {initials}
        </h1>
      </div>
      <p className="text-[#ababab] text-xs">
        Seats: <span className="text-[#f5f5f5] ">{seats}</span>
      </p>
    </div>
  );
};
export default TableCard;
