import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LeaveBalanceCard from './components/LeavesBalanceCart';
import UpcommingHolidaysCart from './components/UpcommingHolidaysCart';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Applyleaves from './components/Applyleaves';
import Payslip from './components/Payslip';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Notification from './components/Notification';
import Setting from './components/Setting';
import Helpsupport from './components/Helpsupport';

// import OnLeave from './components/OnLeave';
// import Timeshhet2 from './components/Timeshhet2';

function App() {
  return (
    

    <BrowserRouter>
    {/* <div className="app"> */}
    <Navbar/>

      <Routes>
      
        {/* <Route path='/'element={<div>
          <Navbar/>
          
         
          <RightSide/></div>}/> */}
  <Route path='/Dashboard' element={<Dashboard/>}/>
  <Route path='/Applyleaves' element={<Applyleaves/>}/>
  <Route path='/Payslip' element={<Payslip/>}/>
  <Route path='/Setting' element={<Setting/>}/>
  <Route path='/Notification' element={<Notification/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='/Logout' element={<Logout/>}/>
  <Route path='/Helpsupport' element={<Helpsupport/>}/>
      
      
        

  {/* </Navbar> */}
      </Routes> 
      {/* </div> */}
    </BrowserRouter>
    
   
  );
}

export default App;
