import React from "react";
import Reuse3 from "./Reuse3";
import { FaArrowRightLong } from "react-icons/fa6";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
const Task3 = () => {
  return (
    <>
      <div className="h-[717px] relative top-[68px] bottom-[68px]">
        <div className="h-[597px] absolute top-[60px] left-[112px] right-[112px] bottom-[60px] flex flex-col gap-y-12">
          <div className="w-[528px] h-[88px]">
            <p className="">Explore our classes and master trending skills!</p>
            <p className="text-3xl font-bold  mt-3">
              Dive Into
              <span className="text-green-800">What’s Hot Right Now! </span>🔥
            </p>
          </div>

          <div className="h-[461px] grid grid-cols-2 gap-7">
            <div className="w-[550px] h-[461px] bg-pink-800 rounded-3xl flex flex-col justify-between items-center relative">
              <div className="absolute w-[161px] h-[23px] top-3 right-5 flex justify-end items-end gap-2 hover:bg-blue-900 hover:text-white">
                <button className="text-sm text-pink-200">
                  View all Courses
                </button>
                <span className="text-sm text-pink-200 animate-[moveRight_1s_ease-in-out_infinite]">
                  <FaArrowRightLong />
                </span>
              </div>
              <div className="flex justify-center items-center gap-6 mt-30">
                <img src={frame1} alt="frame1" className="w-75px] h-[75px]" />
                <img src={frame2} alt="frame2" className="w-75px] h-[75px]" />
                <img src={frame3} alt="frame3" className="w-75px] h-[75px]" />
                <img src={frame4} alt="frame4" className="w-75px] h-[75px]" />
              </div>

              <div className="mb-10 w-[442px] h-[138px] top-[283px] left-[75px] right-[75px] bottom-0 flex justify-center items-center gap-2">
                <div className="text-center relative  flex ">
                  <h1 className="text-pink-200 font-extrabold text-9xl leading-3 mt-9 ">
                    23
                  </h1>
                  <div className="absolute top-[-15px] -right-3 w-[34px] h-[77px] text-red-700 ">
                    <p className="text-pink-200 font-extrabold text-4xl leading-1">
                      +
                    </p>
                  </div>
                </div>
                <div className="w-[218px] h-[98px] mt-8">
                  <p className="w-[164px] h-[40px] font-bold text-pink-200">
                    All Courses
                  </p>
                  <p className="w-[218px] font-normal text-pink-200">
                    courses you're powering through right now.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Reuse3
                main="Upcoming Courses"
                detail="exciting new courses waiting to boost your skills."
                num="05"
              />
              <Reuse3
                main="Ongoing Courses"
                detail="currently happening—don’t miss out on the action!"
                num="10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task3;
