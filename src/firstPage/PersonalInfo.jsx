import React from "react";

const PersonalInfo = () => {
  return (
    <div className="h-screen">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex p-4 gap-16 shadow-lg max-sm:hidden">
        <section className="w-2/5 h-full bg-blue-400 rounded-md flex flex-col gap-4 p-10">
          <div className="flex gap-4">
            <span className="text-white">1</span>
            <span>
              <p className="text-gray-300 text-xs">STEP 1</p>
              <p className="text-white font-medium tracking-wider">YOUR INFO</p>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white">2</span>
            <span>
              <p className="text-gray-300 text-xs">STEP 2</p>
              <p className="text-white font-medium tracking-wider">
                SELECT PLAN
              </p>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white">3</span>
            <span>
              <p className="text-gray-300 text-xs">STEP 4</p>
              <p className="text-white font-medium tracking-wider">ADD-ONS</p>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white">4</span>
            <span>
              <p className="text-gray-300 text-xs">STEP 4</p>
              <p className="text-white font-medium tracking-wider">SUMMARY</p>
            </span>
          </div>
        </section>
        <section className="w-3/4 flex flex-col p-5">
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
          <div className="flex justify-end mt-12">
            <button
              type="button"
              className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
            >
              Next Step
            </button>
          </div>
        </section>
      </main>
      <section className=" text-white bg-blue-900 hidden max-sm:flex flex-col gap-10 h-48">
        <div className="flex justify-center gap-10 mt-10">
          <span className="text-xl font-bold">1</span>
          <span className="text-xl font-bold">2</span>
          <span className="text-xl font-bold">3</span>
          <span className="text-xl font-bold">4</span>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="bg-white text-black w-[90%] rounded-lg p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold text-blue-900">
                Personal info
              </h3>
              <p className="text-gray-400 text-lg mb-4">
                Please provide your name,email address and phone number.
              </p>
            </div>
            <div className="bg-white flex flex-col gap-4">
              <div>
                <label htmlFor="name">
                  <p className="text-sm text-violet-900 font-bold">Name</p>
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
                  <p className="text-sm text-violet-900 font-bold">
                    Email Address
                  </p>
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
                  <p className="text-sm text-violet-900 font-bold">
                    Phone Number
                  </p>
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
          </div>
        </div>
        <div className="w-full bg-white p-6 flex justify-end mt-12">
          <button
            type="button"
            className="bg-blue-900 text-white py-4 px-4 rounded-md text-sm"
          >
            Next Step
          </button>
        </div>
      </section>
    </div>
  );
};

export default PersonalInfo;
