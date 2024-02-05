import React from 'react'
import LeavesBalanceCard from './LeavesBalanceCart'
import UpcommingHolidaysCart from './UpcommingHolidaysCart'
import Timeshhet from './Timeshhet'
import Onleaves from './Onleaves'

const Dashboard = () => {
  return (
  <div class="sm:container sm:mx-auto flex pl-[262px]">


<div class="flex">
 
  <div class="flex-auto w-[865px] ">
    <Timeshhet/>
    <Onleaves/>
  </div>
  <div class="flex-auto w-32 ...">
  {/* <div>
       <div className='flex justify-end mr-10 '>
       <LeavesBalanceCard/>
       </div>
       <div className='flex justify-end mr-10'>
       <UpcommingHolidaysCart/>
      </div>
     </div> */}
     <LeavesBalanceCard/>
     <UpcommingHolidaysCart/>
  </div>
</div>    </div>
  )
}

export default Dashboard
