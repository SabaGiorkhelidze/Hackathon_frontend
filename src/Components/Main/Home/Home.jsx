import React from "react";
import HomeCard from "./HomeCard";
// import GmailBox from "./Gmail/GmailBox";
import Proposal from "./Proposal/Proposal";
import Chart from "./Charts/Chart";

const Home = () => {
  
  return (
    <div>
      <div className="">
        {/* header -> welcome {name} /// */}
        <div className="flex flex-col items-start mb-3 my-6">
          <div className="ml-6 mb-4">
            <h1 className="text-4xl">Welcome User</h1>
          </div>
          {/* basic income payment info */}
          <div className="flex flex-row w-full justify-around items-center px-3">
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </div>
      </div>

      <div className="flex flex-row  mx-5 mt-10 h-auto ">
        <div className="w-full flex justify-center items-center">
          <Chart />
        </div>
      </div>
      {/* suggestion section */}
      <div className="flex flex-row  mx-5 mt-10 ">
        {/* <GmailBox /> */}
        <Proposal />
      </div>
    </div>
  );
};

export default Home;
