import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
const Task1 = () => {
  return (
    <div className=" h-[814px] top-[60px] relative bottom-[60px] flex flex-col justify-center items-center gap-[20px]">
      <div className="w-[1214px] h-[697px] absolute flex flex-col justify-center items-center gap-[20px]">
        <div className="w-[630px] h-[341px]">
          <div className="flex justify-center items-center  flex-wrap gap-10">
            <img src={img1} alt="img1" className="sm:w-auto" />
            <img src={img2} alt="img2" className="sm:w-auto" />
            <img src={img3} alt="img3" className="sm:w-auto" />
          </div>
          <div className="flex justify-evenly items-center sm:flex-row sm:gap-0">
            <img src={img10} alt="img10" className="sm:w-24 block" />
            <div className="w-[399px] h-[131px] top-[114px] left-[144px] flex flex-col justify-center items-center gap-[20px]">
              <p className="text-xl sm:text-xl mt-2 leading-none w-[399px] h-[30px] text-center size-[24px] font-normal">
                Hear How They Level Up Their Game!
              </p>
              <p className=" text-center font-bold leading-1.2 text-2xl">
                Skill <span className="text-green-700">Masters</span> Unite! 🤝
              </p>

              <div className="flex justify-center gap-2 items-center hover:bg-green-700 hover:text-white p-1 rounded-2xl">
                <button>View all Testimonials</button>
                <span className="mt-1">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
            <img src={img4} alt="img4" className="mb-10 sm:w-auto" />
          </div>
          <div className="flex justify-center items-center gap-10 sm:flex-row">
            <img src={img8} alt="img8" className="mb-15 sm:w-auto" />
            <div className="flex justify-center items-center gap-10">
              <img src={img9} alt="img9" className="sm:w-auto" />
              <img
                src={img7}
                alt="img7"
                className="animate-spin-delay sm:w-auto "
              />
              <img src={img6} alt="img6" className="sm:w-auto" />
            </div>
            <img src={img5} alt="img5" className="mb-15 sm:w-auto" />
          </div>
          <img />
        </div>
      </div>
    </div>
  );
};

export default Task1;
