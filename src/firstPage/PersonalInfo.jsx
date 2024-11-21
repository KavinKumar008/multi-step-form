import React from "react";
import LeftContainer from "../leftcontainer/LeftContainer";

const PersonalInfo = () => {
  return (
    <div className="h-screen flex justify-center items-center max-sm:items-start max-lg:visible">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none">
        <LeftContainer />
        <section className="w-[70%] flex flex-col p-5 max-sm:w-full max-sm:relative max-sm:mt-28  max-sm:bg-white">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-blue-900">Personal info</h3>
            <p className="text-gray-400 text-sm">
              Please provide your name,email address and phone number.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <label htmlFor="name">
                <p className="text-sm text-violet-900">Name</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <p className="text-sm text-violet-900">Email Address</p>
                <input
                  type="mail"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
                />
              </label>
            </div>
            <div>
              <label htmlFor="phone">
                <p className="text-sm text-violet-900">Phone Number</p>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-12 max-sm:hidden">
            <button
              type="button"
              className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
            >
              Next Step
            </button>
          </div>
        </section>
        <div className="flex justify-end mt-28 pr-4 bg-white p-3 min-[640px]:hidden">
          <button
            type="button"
            className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
          >
            Next Step
          </button>
        </div>
      </main>
    </div>
  );
};

export default PersonalInfo;
