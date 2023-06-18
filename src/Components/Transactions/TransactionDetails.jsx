import React from "react";

const TransactionDetails = (props) => {
  const handler = true;
  console.log(handler)

  return (
    <div>
      {!handler ? (
        <div className="py-10 flex justify-center items-center">
            <h1 className="text-2xl">No details to show</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-4 bg-white min-h-screen">
          {/* image of company */}
          <div className="bg-black w-32 h-32 rounded-full"></div>

          {/* name of company */}
          <div className="my-2">
            <h1 className="text-3xl">Nikora</h1>
          </div>

          {/* payment */}
          <div className="my-2">
            <h1 className="text-xl text-gray-500">$932.32</h1>
          </div>

          {/* details */}
          <div className="mt-16 w-[300px]">
            <div className="flex flex-row items-center justify-between">
              <div className="text-2xl">date: </div>
              <div className="text-2xl">12/12/2020</div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4">
              <div className="text-2xl">Location: </div>
              <div className="text-2xl">Chiatura</div>
            </div>

            <div className="flex flex-row items-center justify-between mt-16">
              <div className="text-2xl">Total: </div>
              <div className="text-2xl">$1186.14</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
