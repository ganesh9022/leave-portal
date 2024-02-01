import React from 'react'


function SideBar() {
  return (
    <div className="flex h-screen ">
      
    <div className=" w-64 p-4 border-2 md:border-t-4">
      
      <div className="text-2xl font-bold mb-4 ">Avkash</div>

     
      <ul>
        <li className="mb-4">
          <a href="#" className="hover:text-lime-500">Link 1</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-lime-500">Link 2</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-lime-500">Link 3</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-lime-500">Link 4</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-lime-500">Link 5</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-lime-500">Link 6</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-lime-500">Link 7</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-lime-500">Link 8</a>
        </li>
      </ul>
    </div>
    <div className="flex-1 p-8">
      
    </div>
  </div>
  )
}

export default SideBar
