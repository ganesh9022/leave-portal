import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import LeaveBalanceCard from './components/LeavesBalanceCart';
import UpcommingHolidaysCart from './components/UpcommingHolidaysCart';
import SearchBar from './components/SearchBar';
import RightSide from './components/RightSide';


function App() {
  return (
    

    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/'
        element={<div><RightSide/></div>}/>

      
      
        

       
      </Routes>
      </div>
    </BrowserRouter>
    
   
  );
}

export default App;
