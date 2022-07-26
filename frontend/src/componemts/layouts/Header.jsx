import React, { useEffect, useState } from "react";
import { Searchbar } from "./Utility";
import Login from "../Login";
import {links} from "./Utility";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { logoutUser } from "../../actions/allAction";
import MyDetails from "../MyDetails";
function Header({ active,searchbar }) {
  let [open, setOpen] = useState(false);
  let [loginClick,setLogin] = useState(false);
  const isLoginClicked = (val)=>{
    setLogin(val);
    console.log("under logged in fun");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if(isAuthenticated){
      setLogin(false);
    }
  }, [])
  
  const {user,isAuthenticated} = useSelector(state=>state.user);
  return (
    <>
      <div className="flex  flex-col bg-fixed bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')]">
        <nav class="md:flex md:flex-row justify-between px-4 py-6 mx-auto  w-full items-center text-white">
        <div
              className={`space-x-3 font-semibold px-5 hover:scale-100 group flex flex-col ${
                isAuthenticated ? "block md:hidden" : "hidden"
              } transition-all duration-150 hover:scale-105 w-12`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="group-hover:flex flex-col hidden absolute top-[100%] left-[0%] md:text-lg text-md font-light w-40 bg-gray-400 z-100 text-black items-center justify-center p-1 rounded-lg border-2 border-black">
                <h1 className="font-medium md:text-xl text-lg p-1 border-b-[1px] border-black">{isAuthenticated?user.name:""}</h1>
                {isAuthenticated && user.role==="admin"?
                <Link to="/dashbord" className="text-slate-800 font-light" >Dash board</Link>:''}
                <Link to="/users/me" className="text-slate-800 font-light">My Profile</Link>
                <Link to="" className="text-slate-800 font-light">My orders</Link>
                <Link to="/users/me" className="text-slate-800 font-light">change password</Link>
                <Link to="/"  className="cursor-pointer" onClick={()=>dispatch(logoutUser())}>Sign Out</Link >
              {/* <div className="bg-white hidden group-hover:flex flex-nowrap text-sm text-slate-800 p-1 absolute w-auto top-8 right-2">{isAuthenticated?user.name.split(" ")[0]:""}</div> */}
              </div>
            </div>
          <div className="text-2xl lg:text-4xl cursor-pointer hidden md:block">
            <span className="text-red-500">भो</span>
            <span className="text-white">jan</span>
          </div>
          <div class="md:hidden space-x-3 px-2 absolute top-7 right-8 text-white">
            <div
              class={`space-y-2 cursor-pointer  ${open ? "hidden" : "block"}`}
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div
              class={`space-y-2 ${open ? "block" : "hidden"} `}
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div
            class={`absolute left-0 w-full opacity-95 h-auto md:bg-transparent text-white  md:w-auto md:space-x-8 md:relative md:top-2 items-center md:space-y-0  space-y-4 text-center flex lg:flex text-lg flex-col md:flex-row transition-all z-10 duration-300 ease-in-out ${
              open ? "top-[81px] bg-slate-700 py-3" : "-top-[420px]"
            }`}
          >
            {links.map((links) => (
              <a
                href={`${links.name === active?"#":links.link}`}
                key={links.name}
                className={`hover:text-slate-500 md:transition-all md:duration-100 ${links.name === active?"text-slate-500 font-semibold":"block"}`}
              >
                {links.name}
              </a>
              
            ))}
            <a
              href="#"
              className={`w-[auto] space-x-3 font-semibold px-5 ${
                isAuthenticated  ? "hidden" : "block"
              }  p-2 bg-green-400 hover:text-green-400 border-2 border-green-400 hover:bg-transparent rounded-md text-white active:text-green-600`}
              onClick={()=>setLogin(true)}
            >
              Login
            </a>
            <div
              className={`space-x-3 font-semibold px-5 hover:scale-100 group flex flex-col ${
                isAuthenticated ? "hidden md:block" : "hidden"
              } transition-all duration-150 hover:scale-105`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                fill=""
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="group-hover:flex flex-col hidden absolute top-[100%] right-[0%] md:text-lg text-md font-light w-[250%] bg-white text-black items-center justify-center p-1 rounded-lg border-2 border-black">
                <h1 className="font-medium md:text-xl text-lg p-1 border-b-[1px] border-black">{isAuthenticated?user.name:""}</h1>
                {isAuthenticated && user.role==="admin"?<Link to="/dashbord" className="" >Dash board</Link>:""}
                <Link to="/users/me" className="" onClick={()=>MyDetails()}>my profile</Link>
                <Link to="" className="">my orders</Link>
                <Link to="/users/me" className="">change password</Link>
                <Link to="/"  className="cursor-pointer" onClick={()=>dispatch(logoutUser())}>logout</Link>
              {/* <div className="bg-white hidden group-hover:flex flex-nowrap text-sm text-slate-800 p-1 absolute w-auto top-8 right-2">{isAuthenticated?user.name.split(" ")[0]:""}</div> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="md:flex md:flex-col text-center space-y-4 h-auto  from-red-200 via-blue-300 to-pink-300">
          <div className="text-[45px] pt-3 lg:text-[80px] xl:text-[110px] md:text-[85px] h-auto flex justify-center  items-center">
            <span className="text-red-500">भो</span>
            <span className="text-white">jan</span>
          </div>
          <div className="text-[20px] lg:text-[45px] md:text-[35px] h-auto font-light capitalize text-gray-200">
            discover the best food in delhi
          </div>
        </div>
        {Searchbar(searchbar)}
      </div>
      <div className={`w-[80%] md:w-[50%] mx-auto fixed md:top-[10%] top-14 left-[10%] z-50  md:left-[25%] bg-pink-100 rounded-lg  transition-all duration-500 ease-in-out scale-100 shadow-xl border-2  border-black ${!loginClick?"scale-0 ":"scale-100"}`}>
        <Login isLoginClicked={isLoginClicked}/>
      </div>
      
    </>
  );
}

export default Header;
