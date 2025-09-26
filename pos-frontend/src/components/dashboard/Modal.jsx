import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Modal = ({ setIsTableModelOpen }) => {
  const handleCloseModal = () => {
    setIsTableModelOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        {/* Modal header */}
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-[#f5f5f5] text-xl font-semibold">Add Table</h2>
          <button
            onClick={handleCloseModal}
            className="text-[#f5f5f5] hover:text-red-500 "
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <form className="space-y-4 mt-10 ">
          <div>
            <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium ">
              Table Number
            </label>
            <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f] ">
              <input
                type="number"
                name="tableNo"
                // value={}
                // onChange={}
                className="bg-transparent flex-1 text-white focus:outline-none "
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium ">
              Number of Seats
            </label>
            <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f] ">
              <input
                type="number"
                name="seats"
                // value={}
                // onChange={}
                className="bg-transparent flex-1 text-white focus:outline-none "
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 text-lg bg-yellow-400 text-gray-900font-bold "
          >
            Add Table
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
