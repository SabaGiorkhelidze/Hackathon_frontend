import React from "react";
import SideNav from "../Main/SideNav";
const Transaction = () => {
  return (
    <div className="bg-[#EBECEE] min-h-screen flex flex-row ">
      <div className="w-[10%]">
        <SideNav />
      </div>
      <div className="w-[90%] border-2 border-black px-4">
        transactions
      </div>
    </div>
  );
};

export default Transaction;
