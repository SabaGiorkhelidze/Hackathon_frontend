import React from "react";
import SideNav from "../Main/SideNav";
import Chart from "../Main/Home/Charts/Chart";
import Test from "../Main/Home/Charts/test";
import TestChart from "../Main/Home/Charts/TestChart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StatsPage = () => {
  const { id } = useParams();
  const [dataArray, setDataArray] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/Stats/${id}`);
        const responseData = await response.json();
        const combinedDataArray = Object.values(responseData);
        console.log(combinedDataArray, "logs");
        setDataArray(combinedDataArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  console.log(dataArray);
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="bg-[#EBECEE] min-h-screen flex flex-row">
      <div className="w-[10%]">
        <SideNav />
      </div>
      <div className="flex flex-row w-[90%]">
        <div className="flex flex-col items-center justify-start">
          <div className="flex mt-10 items-center flex-col ">
            <h1>Daily statistic</h1>
            <Chart />
          </div>

          <div className="flex mt-10 items-center flex-col ">
            <h1>Weekly statistic</h1>
            <Chart />
          </div>

          <div className="flex mt-10 items-center flex-col ">
            <h1>Montly statistic</h1>
            <Chart />
            <TestChart />
          </div>
        </div>

        <div className="w-[30%] mx-6 mt-10 border-2 border-red-800">
          {dataArray && (
            <>
            // api gadasawyobia swor struqturaze
              {dataArray.map((el) => {
                return <div>hello world</div>;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
