import React, { useState } from "react";

const Color1 = () => {
  const [color, setcolor] = useState("green");
  return (
    <div>
      <div className=" w-full h-screen " style={{ backgroundColor: color }}>
        <div
          className="flex felx wrap  justify-center gap-3 shadow-lg px-4 py-2 rounded-3xl bottom-3"
          style={{ backgroundColor: "green" }}
        >
          <button
            className="outline-none px-4 py-2  bg-white rounded-full"
            onClick={() => setcolor("red")}
          >
          
            Red
          </button>
        </div>

        <div className="flex justify-center wrap shadow-lg px- py-1 rounded-full">
          <button
            className="outline-none px-2 py-2 bg-white rounded-full duration-0"
            onClick={() => setcolor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Color1;
