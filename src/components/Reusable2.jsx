import React from "react";

const Reusable2 = (props) => {
  return (
    <div>
      <div
        className={`h-[341px] relative text-white ${props.color} rounded-2xl flex justify-between items-start gap-10 ${props.move}`}
      >
        <img
          src={props.img}
          className={`${props.ani} absolute top-[150px] -right-2 bottom-0 h-[280px]`}
        />

        <div className="mr-[150px] ml-8">
          <p className="text-left w-[351px] font-bold mt-7 text-2xl">
            {props.title}
          </p>
          <p className=" text-left w-[351px] leading-1 mt-7 ">{props.name}</p>
          <p className="text-left w-[345px] h-[115px] mt-15 text-sm">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reusable2;
