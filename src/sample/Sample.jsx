import React from "react";
import LeftContainer from "../leftcontainer/LeftContainer";

const Sample = () => {
  return (
    <div className="h-screen flex justify-center items-center max-sm:items-start max-lg:visible max-sm:absolute">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none">
        {/* <section className="h-full w-[20vw] bg-blue-400 rounded-md flex flex-col gap-4 p-10 max-sm:w-full max-sm:h-[35%] max-sm:flex-row max-sm:justify-center max-sm:rounded-none max-sm:absolute">
          <div className="flex gap-4">
            <span className="text-white max-sm:text-2xl max-sm:font-medium">
              1
            </span>
            <span>
              <p className="text-gray-300 text-xs max-sm:hidden">STEP 1</p>
              <p className="text-white font-medium tracking-wider max-sm:hidden">
                YOUR INFO
              </p>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white max-sm:text-2xl max-sm:font-medium">
              2
            </span>
            <span>
              <p className="text-gray-300 text-xs max-sm:hidden">STEP 2</p>
              <p className="text-white font-medium tracking-wider max-sm:hidden">
                SELECT PLAN
              </p>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white max-sm:text-2xl max-sm:font-medium">
              3
            </span>
            <span>
              <p className="text-gray-300 text-xs max-sm:hidden">STEP 4</p>
              <p className="text-white font-medium tracking-wider max-sm:hidden">
                ADD-ONS
              </p>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white max-sm:text-2xl max-sm:font-medium">
              4
            </span>
            <span>
              <p className="text-gray-300 text-xs max-sm:hidden">STEP 4</p>
              <p className="text-white font-medium tracking-wider max-sm:hidden">
                SUMMARY
              </p>
            </span>
          </div>
        </section> */}
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

      {/* responsive design */}
      {/* <section className=" text-white bg-blue-900 hidden max-sm:flex flex-col gap-10 h-48">
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
      </section> */}
    </div>
    // <div className="h-screen flex justify-center items-center max-lg:visible">
    //   <main className="bg-white w-8/12 h-5/6 rounded-lg flex p-4 gap-16 shadow-lg max-sm:hidden">
    //     <LeftContainer />
    //     <section className="w-[70%] flex flex-col p-5">
    //       <div className="flex flex-col gap-2">
    //         <h3 className="text-3xl font-bold text-blue-900">Personal info</h3>
    //         <p className="text-gray-400 text-sm">
    //           Please provide your name,email address and phone number.
    //         </p>
    //       </div>
    //       <div className="flex flex-col gap-4 mt-4">
    //         <div>
    //           <label htmlFor="name">
    //             <p className="text-sm text-violet-900">Name</p>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               required
    //               className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
    //             />
    //           </label>
    //         </div>
    //         <div>
    //           <label htmlFor="email">
    //             <p className="text-sm text-violet-900">Email Address</p>
    //             <input
    //               type="mail"
    //               id="email"
    //               name="email"
    //               required
    //               className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
    //             />
    //           </label>
    //         </div>
    //         <div>
    //           <label htmlFor="phone">
    //             <p className="text-sm text-violet-900">Phone Number</p>
    //             <input
    //               type="tel"
    //               id="phone"
    //               name="phone"
    //               required
    //               className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
    //             />
    //           </label>
    //         </div>
    //       </div>
    //       <div className="flex justify-end mt-12">
    //         <button
    //           type="button"
    //           className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
    //         >
    //           Next Step
    //         </button>
    //       </div>
    //     </section>
    //   </main>

    //   {/* responsive design */}
    //   <section className=" text-white bg-blue-900 hidden max-sm:flex flex-col gap-10 h-48">
    //     <div className="flex justify-center gap-10 mt-10">
    //       <span className="text-xl font-bold">1</span>
    //       <span className="text-xl font-bold">2</span>
    //       <span className="text-xl font-bold">3</span>
    //       <span className="text-xl font-bold">4</span>
    //     </div>
    //     <div className="flex justify-center flex-col items-center">
    //       <div className="bg-white text-black w-[90%] rounded-lg p-4 shadow-lg">
    //         <div className="flex flex-col gap-2">
    //           <h3 className="text-3xl font-bold text-blue-900">
    //             Personal info
    //           </h3>
    //           <p className="text-gray-400 text-lg mb-4">
    //             Please provide your name,email address and phone number.
    //           </p>
    //         </div>
    //         <div className="bg-white flex flex-col gap-4">
    //           <div>
    //             <label htmlFor="name">
    //               <p className="text-sm text-violet-900 font-bold">Name</p>
    //               <input
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 required
    //                 className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
    //               />
    //             </label>
    //           </div>
    //           <div>
    //             <label htmlFor="email">
    //               <p className="text-sm text-violet-900 font-bold">
    //                 Email Address
    //               </p>
    //               <input
    //                 type="mail"
    //                 id="email"
    //                 name="email"
    //                 required
    //                 className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
    //               />
    //             </label>
    //           </div>
    //           <div>
    //             <label htmlFor="phone">
    //               <p className="text-sm text-violet-900 font-bold">
    //                 Phone Number
    //               </p>
    //               <input
    //                 type="tel"
    //                 id="phone"
    //                 name="phone"
    //                 required
    //                 className="w-full p-2 mt-2 outline-none border border-gray-300 focus:border-blue-600 rounded-md"
    //               />
    //             </label>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full bg-white p-6 flex justify-end mt-12">
    //       <button
    //         type="button"
    //         className="bg-blue-900 text-white py-4 px-4 rounded-md text-sm"
    //       >
    //         Next Step
    //       </button>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Sample;
