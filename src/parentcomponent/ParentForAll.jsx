import React, { useState } from "react";
import PersonalInfo from "../firstPage/PersonalInfo";
import PlansPage from "../secondpage/PlansPage";
import AddonPage from "../thirdpage/AddonPage";
import FinishupPage from "../fourthpage/FinishupPage";
import SuccessPage from "../fifthpage/SuccessPage";

const ParentForAll = () => {
  const [currentPage, setCurrentPage] = useState("info");

  return (
    <div>
      {currentPage === "info" && (
        <PersonalInfo setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "planPage" && (
        <PlansPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "addOns" && (
        <AddonPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "finishPage" && (
        <FinishupPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "successPage" && (
        <SuccessPage setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ParentForAll;
