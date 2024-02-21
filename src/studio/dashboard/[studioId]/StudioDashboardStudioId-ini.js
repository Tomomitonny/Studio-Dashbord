import React, { useState } from 'react';


export const StudioDashboardStudioId = () => {
  


  return (
    <body
      className="bg-gray-100 w-full min-h-screen pb-10">
      <div
        className="bg-white border border-gray-300 pl-72 text-left">
          <div
            className="text-sm font-semibold text-gray-500 mt-6">
              Back to Studios
          </div>
          <div
            className="text-xl font-semibold mt-2">
              Un Dance Studio
          </div>

        <div
          className="flex mt-6 text-sm text-gray-500 gap-10">
          
          <button
            className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
              Details
          </button>
          <button
            className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
              Rooms
          </button>
          <button
            className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
              Meida
          </button>
          <button
            className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
              Instructor
          </button>
          <button
            className="px-2.5 py-2.5 hover:text-blue-500 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500">
              Lessons
          </button>

          </div>
      </div>


        <div
          className="mt-10 pl-72">



            <div
              className="mb-10 p-6 w-[600px] bg-white text-left text-xs relative">

                <button
                  className="font-semibold text-base text-gray-500 absolute top-6 right-8">
                    Edit
                </button>
                <div
                  className="font-semibold text-base">
                    Property Details
                </div>
                <p
                  className="mt-6 text-sm text-gray-600">
                    Studio Name
                </p>
                <p
                  className="text-xl">
                    John’s Ballet Studio
                </p>
                <p
                  className="mt-6 text-sm text-gray-600">
                    Main Purpose
                </p>
                <p
                  className="text-xl">
                    Dance
                </p>
                <p
                  className="mt-6 text-sm text-gray-600">
                    Description
                </p>
                <p
                  className="text-xl">
                    This is a studio for ballet
                </p>
                
              </div>



              
            <div
              className="mb-10 p-6 w-[600px] bg-white text-left text-xs relative">

                <button
                  className="font-semibold text-base text-gray-500 absolute top-6 right-8">
                    Request to change address
                </button>
                <div
                  className="font-semibold text-base">
                    Location
                </div>
                <p
                  className="mt-6 text-sm text-gray-600">
                    Address
                </p>
                <p
                  className="text-xl">
                    Tokyo Shinjuku Sanchome 2-2-2TokyoBuilding 102
                </p>
                <div
                  className="mt-6 w-[560px] h-40 bg-gray-300">
                    
                </div>
                
                
              </div>



              
            <div
              className="mb-10 p-6 w-[600px] bg-white text-left text-xs relative">

                <button
                  className="font-semibold text-base text-gray-500 absolute top-6 right-8">
                    Edit
                </button>
                <div
                  className="font-semibold text-base">
                    Business Hour
                </div>

                <div className="grid grid-cols-3 text-base mt-7 w-[300px]">
                                    
                  <div className="item">Sunday</div>
                  <div className="item col-span-2">Closed</div>
                  
                  <div className="item">Monday</div>
                  <div className="item">9:00</div>
                  
                  <div className="item">18:00</div>
                  
                  <div className="item">Tuesday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                  
                  <div className="item">Wednesday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                  
                  <div className="item">Thursday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>

                  
                  <div className="item">Friday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                  
                  <div className="item">Saturday</div>
                  <div className="item">9:00</div>
                  <div className="item">18:00</div>
                </div>
                
                
              </div>



              
        
        </div>
    </body>
  );
};