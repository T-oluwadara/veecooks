import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 7/09</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" className="max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl" />
      </div>

      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Menu</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/2433979/pexels-photo-2433979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" className="max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl" />
      </div>

      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Make Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" className="max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default Cards;
