import React from "react";
import LeftContainer from "../leftcontainer/LeftContainer";

const FinishupPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex p-4 gap-20 shadow-lg max-sm:hidden justify-center">
        <LeftContainer />
        <section className="w-[70%] py-7 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-blue-900">Finishing Up</h3>
            <p className="text-gray-400 text-sm">
              Double-check everything looks OK before conforming.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="bg-blue-50 w-[400px] flex justify-between p-4">
              <div>
                <p className="text-blue-950 font-xs font-semibold">
                  Arcade (Monthly)
                </p>
                <a
                  href="#"
                  className="text-blue-500 border border-b-blue-700 text-xs"
                >
                  Change
                </a>
              </div>
              <div>
                <span className="text-sm text-blue-950 font-bold">$9/mo</span>
              </div>
            </div>
            {/* <hr /> */}
            <div className="w-[400px] flex flex-col">
              <div className="flex justify-between bg-blue-50 px-4">
                <p className="text-gray-400 text-xs">Online service</p>
                <span className="text-blue-900 text-xs">+$1/mo</span>
              </div>
              <div className="flex justify-between bg-blue-50 px-4">
                <p className="text-gray-400 text-xs">Larger storage</p>
                <span className="text-blue-900 text-xs">+$2/mo</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between items-center w-[360px]">
              <p className="text-gray-400 text-xs">Total(per month)</p>
              <span className="text-lg text-blue-600 font-semibold">
                +$12/mo
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-16 w-[450px]">
            <button className="text-blue-950 text-sm font-bold">Go Back</button>
            <button
              type="button"
              className="bg-blue-500 text-white font-medium py-3 px-6 rounded-md text-xs"
            >
              Confirm
            </button>
          </div>
        </section>
      </main>

      {/* responsive design */}
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

export default FinishupPage;
