import React from 'react';
import './LeavesBalanceCart.css'
import { FaCalendarAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdFileDownloadDone } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";



function LeavesBalanceCard() {
  return (
    <div className='max-w-screen-2xl'>
    {/*bg-white border rounded-2xl p-5 max-w-96 mx-auto justify-end*/}
      <div className="bg-white border rounded-2xl p-5 max-w-xl mx-auto justify-end m-5 ">

        <div className="flex items-center mb-4">
          <span className="text-xl font-bold mr-20">Leave Balance</span>
          <span className="ml-auto text-slate-500 ml-20 "><FiMoreHorizontal size="20px" /></span>
        </div>

        <div className="flex flex-col space-y-4 font-bold text-xl">

          <div className="flex items-center">
            <span className="mr-2 border p-2 rounded-xl text-slate-400">
              <FaCalendarAlt  />
            </span>
            <span className='ml-2'>Total Leaves:<br/><span className=''>18</span></span>
          </div>
          <hr className="hr-line"/>

          <div className="flex items-center">
            <span className="mr-2 border p-2 rounded-md text-slate-400">
              < RxCross2 />
            </span>
            <span className='ml-2'>Leave Taken: <br/>5</span>
            
          </div>
          <hr className="hr-line" />


          <div className="flex items-center">
            <span className="mr-2 border p-2 rounded-md text-slate-400">
              <MdFileDownloadDone />
            </span>
            <span className='ml-2'>Leave Remaining: <br/>13</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeavesBalanceCard;
