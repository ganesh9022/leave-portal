import React from 'react';
import { MdNotifications } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="flex items-center p-2 justify-end mr-10">
 
      <div className="mr-3 rounded-full border p-2 bg-lime-500 ">
        <MdNotifications size="1.5em" color='white'/>
        </div>

      <div className="flex items-center bg-white border rounded-full p-2">
      <IoIosSearch size="1.2em"/>
        <input
          type="text"
          placeholder="  Search here"
          className="outline-none bg-transparent"
        />

        <IoMdMic size="1.2em"/>
      </div>
    </div>
  );
}

export default SearchBar;
