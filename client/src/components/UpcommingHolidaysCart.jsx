import React from 'react'
import './LeavesBalanceCart.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FlagIcon from '@mui/icons-material/Flag';
import Person4Icon from '@mui/icons-material/Person4';
import { BsFlagFill } from "react-icons/bs";


function UpcommingHolidaysCart() {
  return (
    <div>
      <div className="bg-white border rounded-2xl p-5 max-w-[350px] mx-auto justify-end ">
        
        <div className="flex items-center mb-4">
          <span className="text-xl font-bold">Upcoming Holidays</span>
          <span className="ml-auto text-slate-500"><MoreHorizIcon /></span>
        </div>

        <div className="flex flex-col space-y-4 font-bold text-xl">
          <div className="flex items-center">
            <span className="mr-2 border p-2 rounded-xl text-slate-400">
              <BsFlagFill  />
            </span>
            <span className='ml-2'>Republic Day<br/> 26th January</span>
          </div>
          <hr className="hr-line"/>

          <div className="flex items-center">
            <span className="mr-2 border p-2 rounded-md text-slate-400">
              <Person4Icon  />
            </span>
            <span className='ml-2'>Chhatrapati Shivaji Maharaj Jayanti <br/> 19th February</span>
            
          </div>
          
          <div className="flex items-center justify-center text-lime-500">
            
            <span className='text-base'>Show All</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcommingHolidaysCart;
