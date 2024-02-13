import React from 'react';

const DiatPlanCard = () => {
  return (
    <div className="w-[17vw] border flex flex-col items-center  border-white rounded-xl shadow-md h-max mb-28 ">
      <div className="flex flex-col">
        <div className="px-4 py-8 flex flex-col gap-4">
          <div className="uppercase tracking-wide text-xl text-white font-semibold">Only For Students</div>
          <div className=''>
          <li className=" mt-2 text-gray-400">1 Month Plan</li>
          <li className="mt-2 text-gray-400">2 Diet Plans</li>
          <li className="mt-2 text-gray-400">1 Workout Plan</li>
          <li className="mt-2 text-gray-400">Forearm Workout</li>
          <li className="mt-2 text-gray-400">Grocery List</li>
          <li className="mt-2 text-gray-400">Abs Workout</li>
          </div>
          <div className='flex items-center justify-between gap-8 mt-2 pt-4 border-t'>
            <div>
            <p className=" text-gray-400 font-semibold line-through ">₹ 1,599/- Only</p>
          <p className=" text-white font-semibold ">₹1,439/- Only</p>
            </div>
          <button className="mx-auto uppercase border text-black bg-[#E0B985] border-orange-300 px-4 py-2 w-max  transition-all hover:opacity-90 rounded-2xl text-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiatPlanCard;
