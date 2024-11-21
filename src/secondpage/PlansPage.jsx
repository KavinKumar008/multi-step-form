import React from "react";
import LeftContainer from "../leftcontainer/LeftContainer";
import { LuJoystick } from "react-icons/lu";
import { BiJoystick } from "react-icons/bi";
import { BiSolidJoystickAlt } from "react-icons/bi";

const PlansPage = () => {
  return (
    <div className="h-screen flex justify-center items-center max-sm:h-0">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none">
        <LeftContainer />
        <section className="w-[70%] p-5 max-sm:w-full max-sm:mt-32 max-sm:bg-white max-sm:relative">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-blue-900  max-sm:bg-white max-sm:text-4xl">
              Select Your Plan
            </h3>
            <p className="text-gray-400 text-sm  max-sm:bg-white max-sm:text-xl">
              You have the option of monthly or yearly billings.
            </p>
          </div>
          <div className="flex gap-4 mt-12 max-sm:block max-sm:gap-4">
            <div className="flex flex-col justify-start gap-8 border border-gray-300 py-4 pl-3 pr-16 cursor-pointer rounded-md max-sm:py-2 max-sm:px-32">
              <div>
                <LuJoystick className="bg-green-400 rounded-full text-2xl text-white p-1" />
              </div>
              <div>
                <p className="text-blue-950 text-sm font-bold">Arcade</p>
                <span className="text-xs text-gray-400">$9/mo</span>
              </div>
            </div>
            <div className="flex flex-col gap-8 border border-gray-300 py-4 pl-3 pr-12 cursor-pointer rounded-md">
              <div>
                <BiJoystick className="bg-red-400 rounded-full text-2xl text-white p-1" />
              </div>
              <div>
                <p className="text-blue-950 text-sm font-bold">Advanced</p>
                <span className="text-xs text-gray-400">$12/mo</span>
              </div>
            </div>
            <div className="flex flex-col gap-8 border border-gray-300 py-4 pl-3 pr-16 cursor-pointer rounded-md">
              <div>
                <BiSolidJoystickAlt className="bg-blue-800 rounded-full text-2xl text-white p-1" />
              </div>
              <div>
                <p className="text-blue-950 text-sm font-bold">Pro</p>
                <span className="text-xs text-gray-400">$15/mo</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <label class="inline-flex items-center cursor-pointer bg-gray-100 p-2 rounded-md w-[400px] mt-8 justify-center gap-4">
              <input type="checkbox" value="" class="sr-only peer" />
              <span className="text-sm font-medium">Yearly</span>
              <div class="relative w-8 h-4 bg-blue-950 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Monthly
              </span>
            </label>
          </div>
          <div className="flex justify-between mt-20 w-[400px] max-sm:w-0">
            <button className="text-blue-950 text-sm font-bold">Go Back</button>
            <button
              type="button"
              className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
            >
              Next Step
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlansPage;