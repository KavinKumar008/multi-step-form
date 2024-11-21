import React from "react";

const LeftContainer = () => {
  return (
    <section className="h-full w-[20vw] bg-blue-400 rounded-md flex flex-col gap-4 p-10 max-sm:w-full max-sm:h-[35%] max-sm:flex-row max-sm:justify-center max-sm:rounded-none max-sm:absolute">
      <div className="flex gap-4">
        <span className="text-white max-sm:text-2xl max-sm:font-medium">1</span>
        <span>
          <p className="text-gray-300 text-xs max-sm:hidden">STEP 1</p>
          <p className="text-white font-medium tracking-wider max-sm:hidden">
            YOUR INFO
          </p>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="text-white max-sm:text-2xl max-sm:font-medium">2</span>
        <span>
          <p className="text-gray-300 text-xs max-sm:hidden">STEP 2</p>
          <p className="text-white font-medium tracking-wider max-sm:hidden">
            SELECT PLAN
          </p>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="text-white max-sm:text-2xl max-sm:font-medium">3</span>
        <span>
          <p className="text-gray-300 text-xs max-sm:hidden">STEP 4</p>
          <p className="text-white font-medium tracking-wider max-sm:hidden">
            ADD-ONS
          </p>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="text-white max-sm:text-2xl max-sm:font-medium">4</span>
        <span>
          <p className="text-gray-300 text-xs max-sm:hidden">STEP 4</p>
          <p className="text-white font-medium tracking-wider max-sm:hidden">
            SUMMARY
          </p>
        </span>
      </div>
    </section>
    // <section className="h-full w-[20vw] bg-blue-400 rounded-md flex flex-col gap-4 p-10">
    //   <div className="flex gap-4">
    //     <span className="text-white">1</span>
    //     <span>
    //       <p className="text-gray-300 text-xs">STEP 1</p>
    //       <p className="text-white font-medium tracking-wider">YOUR INFO</p>
    //     </span>
    //   </div>
    //   <div className="flex gap-4">
    //     <span className="text-white">2</span>
    //     <span>
    //       <p className="text-gray-300 text-xs">STEP 2</p>
    //       <p className="text-white font-medium tracking-wider">SELECT PLAN</p>
    //     </span>
    //   </div>
    //   <div className="flex gap-4">
    //     <span className="text-white">3</span>
    //     <span>
    //       <p className="text-gray-300 text-xs">STEP 4</p>
    //       <p className="text-white font-medium tracking-wider">ADD-ONS</p>
    //     </span>
    //   </div>
    //   <div className="flex gap-4">
    //     <span className="text-white">4</span>
    //     <span>
    //       <p className="text-gray-300 text-xs">STEP 4</p>
    //       <p className="text-white font-medium tracking-wider">SUMMARY</p>
    //     </span>
    //   </div>
    // </section>
  );
};

export default LeftContainer;
