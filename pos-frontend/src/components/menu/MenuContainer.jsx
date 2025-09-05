import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  // Changed: Use an object to store count for each item by ID
  const [itemCounts, setItemCounts] = useState({});
  const dispatch = useDispatch();

  const decrement = (itemId) => {
    // Create unique key using category ID and item ID
    const uniqueKey = `${selected.id}-${itemId}`;
    setItemCounts((prev) => {
      const currentCount = prev[uniqueKey] || 0;
      if (currentCount <= 0) return prev;
      return {
        ...prev,
        [uniqueKey]: currentCount - 1,
      };
    });
  };

  const increment = (itemId) => {
    // Create unique key using category ID and item ID
    const uniqueKey = `${selected.id}-${itemId}`;
    setItemCounts((prev) => {
      const currentCount = prev[uniqueKey] || 0;
      if (currentCount >= 4) return prev;
      return {
        ...prev,
        [uniqueKey]: currentCount + 1,
      };
    });
  };

  const handleAddToCart = (item) => {
    const uniqueKey = `${selected.id}-${item.id}`;
    const count = itemCounts[uniqueKey] || 0;

    if (count === 0) return;

    const newObj = {
      id: `${selected.id}-${item.id}-${Date.now()}`, // unique id
      name: String(item.name), // ensure it's a string
      priceQuantity: Number(item.price), // price per item
      quantity: count, // how many
      price: Number(item.price) * count, // total price
    };

    dispatch(addItems(newObj));

    // reset only this item’s count
    setItemCounts((prev) => ({ ...prev, [uniqueKey]: 0 }));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] ">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
              }}
            >
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-[#f5f5f5] text-lg font-semibold ">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white size={20} " />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4 " />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] ">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
            >
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-[#f5f5f5] text-lg font-semibold ">
                  {item.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#2e4a40] text-[#02ca3a] cursor-pointer p-2 rounded-lg"
                >
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full ">
                <p className="text-[#f5f5f5] text-xl font-bold">
                  ₹{item.price}
                </p>

                <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-yellow-500 text-2xl "
                  >
                    &minus;
                  </button>
                  <span className="text-white ">
                    {itemCounts[`${selected.id}-${item.id}`] || 0}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-yellow-500 text-2xl "
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
