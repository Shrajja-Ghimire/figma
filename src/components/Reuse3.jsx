import React from "react";
import "../../src/index.css";
import vector from "../assets/Vector.png";
const Reuse3 = (props) => {
  return (
    <div className="w-[265px] h-[461px] rounded-3xl flex flex-col justify-center items-center bg-pink-200 cursor-pointer group">
      <div className=" w-[209px] h-[422px] flex flex-col justify-between items-end ">
        <div className="absolute top-10 left-[10] -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <p>Click me!</p>
          <img src={vector} alt="popup" />
        </div>
        <div className="text-red-700 mt-10 rotate-[-90deg] w-[218px] h-[138px] flex flex-col gap-0 justify-center items-center">
          <p className="w-[218px]  font-bold text-2xl">{props.main}</p>
          <p className="w-[218px] ">{props.detail}</p>
        </div>
        <div className="w-[209px] h-[180px]">
          <div className="text-center relative text-red-700 ">
            <h1 className="font-extrabold text-9xl leading-3 mt-25">
              {props.num}
            </h1>
            <div className="absolute top-[-45px] right-[12px] w-[34px] h-[77px] text-red-700  group-hover:translate-y-1">
              <p className="font-extrabold text-6xl leading-1">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reuse3;
