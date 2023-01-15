import React, { useState } from "react";
import hamburger from "../Assets/Icons/hamburger.png";
import YoutubeLogo from "../Assets/Icons/YoutubeLogo.png";
import userIcon from "../Assets/Icons/userIcon.png";
import { useDispatch } from "react-redux";
import { toggleNav } from "./navtoggle-slice";

const HeaderComponent = () => {
  const { searchText, setSearchText } = useState("");
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col grid-cols-12">
      <div className="w-12 p-2 m-2 col-span-1 col-start-1 col-end-1">
        <img src={hamburger} alt="hamburger" onClick={()=>dispatch(toggleNav())}></img>
      </div>
      <div className="w-28 p-4 m-2 col-span-2 col-start-2">
        <img src={YoutubeLogo} alt="youtube"></img>
      </div>
      <div className="p-2 m-2 col-span-7">
        <form>
          <input className="border border-black rounded-md w-full p-2 h-7"
            type="text"
            value={searchText}
            placeholder="Search anything here..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
        </form>
      </div>
      <div className="w-10 p-2 m-2 col-span-2 col-start-12">
        <img src={userIcon} alt="user-icon"></img>
      </div>
    </div>
  );
};

export default HeaderComponent;
