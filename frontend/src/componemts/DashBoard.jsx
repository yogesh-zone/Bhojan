import React from "react";
import { useState } from "react";
import Header02 from "./layouts/Header02";
function DashBoard() {

    const [ active , setActive ] = useState("");

  return (
    <>
    <Header02 active={""} /> 
      <div class="flex">
        <div class="flex flex-col w-[25%] min-h-screen items-center space-y-1 pt-10 bg-gray-100 capitalize">
          <h1 class="mb-4 pb-2 border-b-[1px] border-black text-center font-semibold text-2xl">
            dashboard
          </h1>
          <p class={`hover:bg-blue-200 rounded-sm cursor-pointer min-w-full text-center p-4 hover:scale-105 transition-all ease-in-out ${active == "pendingRestaurant"?'bg-gradient-to-t from-blue-200 to-blue-500':''}`} onClick={()=>{setActive("pendingRestaurant")}}>
            Pending Restaurant
          </p>
          <p class={`hover:bg-blue-200 rounded-sm cursor-pointer min-w-full text-center p-4 hover:scale-105 transition-all ease-in-out ${active == "allUser"?'bg-gradient-to-t from-blue-200 to-blue-500':''}`} onClick={()=>{setActive("allUser")}}>
            All Users
          </p>
          <p class={`hover:bg-blue-200 rounded-sm cursor-pointer min-w-full text-center p-4 hover:scale-105 transition-all ease-in-out ${active == "allRestaurant"?'bg-gradient-to-t from-blue-200 to-blue-500':''}`} onClick={()=>{setActive("allRestaurant")}}>
            All Restaurant
          </p>
          <p class={`hover:bg-blue-200 rounded-sm cursor-pointer min-w-full text-center p-4 hover:scale-105 transition-all ease-in-out ${active == "totalSale"?'bg-gradient-to-t from-blue-200 to-blue-500':''}`} onClick={()=>{setActive("totalSale")}}>
            Total Sales
          </p>
          <p class={`hover:bg-blue-200 rounded-sm cursor-pointer min-w-full text-center p-4 hover:scale-105 transition-all ease-in-out ${active == "makeAdmin"?'bg-gradient-to-t from-blue-200 to-blue-500':''}`} onClick={()=>{setActive("makeAdmin")}}>
            make Admin
          </p>
        </div>


        <div class="bg-blue-100 w-[75%] text-center">
          {/* <!-- Pending Restaurant List --> */}
          {active == "pendingRestaurant" && 
          <div class="flex flex-col bg-green-300 p-4 h-full">
            <h1 class="text-3xl font-semibold text-slate-700 mb-8 h-[5%]">
              ALL Pending Restaurants for Verification
            </h1>
            <div class="bg-white overflow-y-auto space-y-6 h-[440px] p-1 flex flex-col">
              <div class="flex bg-pink-200 p-3 h-[200px] w-full rounded-md">
                <figure class="h-[100%] w-[40%] bg-blue-600 rounded-md my-auto">
                  <img
                    src="https://d4t7t8y8xqo0t.cloudfront.net/resized/180X200/restaurant%2F110004%2Frestaurant020210107094136.jpg"
                    alt=""
                    class="h-full w-full rounded-xl"
                  />
                </figure>
                <div class="w-[60%] flex flex-col items-start pl-4">
                  <h1 class="text-xl text-slate-600 font-bold">
                    Restaurant Name
                  </h1>
                  <h3 class="text-lg text-slate-600 font-semibold">
                    Restaurant location , delhi - xxxxx
                  </h3>
                  <div class="mt-auto mb-5 flex justify-around space-x-6">
                    <a href="#" class="px-2 py-3 bg-green-400 ">
                      Add to Bhojan
                    </a>
                    <a href="#" class="px-2 py-3 bg-red-400 ">
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>}



          {/* <!-- All Restaurant on Bhojan --> */}
          {active == "allRestaurant" && 
          <div class="flex flex-col bg-green-300 p-4 h-full">
            <h1 class="text-3xl font-semibold text-slate-700 mb-8 h-[5%]">
              ALL Restaurants on Bhojan
            </h1>
            <div class="bg-white overflow-y-auto space-y-6 h-[440px] p-1 flex flex-col">
              <div class="flex bg-pink-200 p-3 h-[200px] w-full rounded-md">
                <figure class="h-[100%] w-[40%] rounded-md my-auto">
                  <img
                    src="https://images.unsplash.com/photo-1657299156537-2fd96dc2446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    class="h-full w-full rounded-xl"
                  />
                </figure>
                <div class="w-[60%] flex flex-col items-start pl-4">
                  <h1 class="text-xl text-slate-600 font-bold">
                    Restaurant Name
                  </h1>
                  <h3 class="text-lg text-slate-600 font-semibold">
                    Restaurant location , delhi - xxxxx
                  </h3>
                  <div class="mt-auto mb-5 flex justify-around space-x-6">
                    <a href="#" class="px-2 py-3 bg-red-400 ">
                      Remove From Bhojan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>}



        {/* All User on Bhojan  */}
        {active == "allUser" && 
          <div class="flex flex-col bg-green-300 p-4 h-full">
            <h1 class="text-3xl font-semibold text-slate-700 mb-8 h-[5%]">
              All Users on Bhojan
            </h1>
            <div class="bg-white overflow-y-auto space-y-6 h-[440px] p-1 flex flex-col">
              <div class="flex bg-pink-200 p-3 h-[200px] w-full rounded-md">
                <figure class="h-[80%] w-[17%] my-auto bg-blue-400 rounded-full">
                  <img
                    src="httpss://media.istockphoto.com/photos/two-bubble-talk-or-comment-sign-symbol-on-blue-background-picture-id1304849823?b=1&k=20&m=1304849823&s=170667a&w=0&h=WyxXj3Pj8gAD-9UP3bijhKuKFW2_1kCamAa-XbJrpxQ="
                    alt=""
                    class="h-full w-full rounded-full"
                  />
                </figure>
                <div class="w-[60%] flex flex-col items-start pl-4">
                  <h1 class="text-xl text-slate-600 font-bold">
                    Restaurant Name
                  </h1>
                  <h3 class="text-lg text-slate-600 font-semibold">
                    Restaurant location , delhi - xxxxx
                  </h3>
                  <div class="mt-auto mb-5 flex justify-around space-x-6">
                    <a href="#" class="px-2 py-3 bg-blue-400 ">
                      Make Admin
                    </a>
                    <a href="#" class="px-2 py-3 bg-red-400 ">
                      Remove User
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>}



          {/* All User on Bhojan  */}
        {active == "makeAdmin" && 
          <div class="flex flex-col bg-green-300 p-4 h-full">
            <h1 class="text-3xl font-semibold text-slate-700 mb-8 h-[5%]">
              All Users on Bhojan
            </h1>
            <div class="bg-white overflow-y-auto space-y-6 h-[440px] p-1 flex flex-col">
              <div class="flex bg-pink-200 p-3 h-[200px] w-full rounded-md">
                <figure class="h-[80%] w-[17%] my-auto bg-blue-400 rounded-full">
                  <img
                    src="httpss://media.istockphoto.com/photos/two-bubble-talk-or-comment-sign-symbol-on-blue-background-picture-id1304849823?b=1&k=20&m=1304849823&s=170667a&w=0&h=WyxXj3Pj8gAD-9UP3bijhKuKFW2_1kCamAa-XbJrpxQ="
                    alt=""
                    class="h-full w-full rounded-full"
                  />
                </figure>
                <div class="w-[60%] flex flex-col items-start pl-4">
                  <h1 class="text-xl text-slate-600 font-bold">
                    Restaurant Name
                  </h1>
                  <h3 class="text-lg text-slate-600 font-semibold">
                    Restaurant location , delhi - xxxxx
                  </h3>
                  <div class="mt-auto mb-5 flex justify-around space-x-6">
                    <a href="#" class="px-2 py-3 bg-blue-400 ">
                      Make Admin
                    </a>
                    <a href="#" class="px-2 py-3 bg-red-400 ">
                      Remove User
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>}



        </div>
      </div>
    </>
  );
}

export default DashBoard;
