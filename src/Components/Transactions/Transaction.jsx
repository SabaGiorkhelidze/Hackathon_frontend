import React, { useEffect, useState, useContext } from "react";
import SideNav from "../Main/SideNav";
import PaymentForm from "./PaymentForm";
import TransactionCard from "./TransactionCard";
import TransactionDetails from "./TransactionDetails";
import TransactionContext from "../../Context/TransactionContext";

const Transaction = () => {
  const [data, setData] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:5000/Transactions")
        .then((response) => response.json())
        .then((responseData) => {
          const dataArray = Object.values(responseData);
          console.log(dataArray)
          setData(dataArray);
          // console.log(dataArray);
        })
        .catch((error) => {
          // console.error(error);
        });
    };

    fetchData();
  }, []);

  //   console.log(selectedTransaction);

  return (
    <TransactionContext.Provider value={{ selectedTransaction, data }}>
      <div className="bg-[#EBECEE] min-h-screen flex flex-row">
        <div className="w-[10%]">
          <SideNav />
        </div>
        <div className="w-[90%]  flex flex-row">
          <div className="flex items-center justify-center w-[80%]  flex-col py-2">
            <div className="">
              <PaymentForm />
            </div>
            {/* transaction */}
            <div className="h-full flex flex-row">
              <div className="flex flex-col overflow-y-scroll h-[400px] mt-8">
                {data[0]?.map((element, index) => (
                  <TransactionCard
                    key={index}
                    amount={element.transaction}
                    date={element.date}
                    onClick={() => setSelectedTransaction(true)} // Modify this line
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mx-4 w-[40%]">
            <TransactionDetails handler={selectedTransaction} />
          </div>
        </div>
      </div>
    </TransactionContext.Provider>
  );
};

export default Transaction;
