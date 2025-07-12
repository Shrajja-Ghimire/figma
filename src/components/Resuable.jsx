import React from "react";
const Resuable = (props) => {
  return (
    <div
      className={`h-[341px] relative text-white ${props.color} rounded-2xl flex justify-between items-start gap-10 ${props.move}`}
    >
      <img
        src={props.img}
        className="absolute top-20 left-10 h-[200px] transition-all duration-500 peer-checked:opacity-0 "
        alt="Image 1"
      />
      <img
        src={props.card}
        className="absolute top-20 left-10 h-[200px] opacity-0 transition-all duration-500 peer-checked:opacity-100"
        alt="Image 2"
      />

      <div className="ml-[180px] mt-7">
        <p className="text-right w-[345px] font-bold text-2xl">{props.title}</p>
        <p className=" text-right w-[345px] leading-1 mt-7">{props.name}</p>
        <p className="text-right w-[351px] h-[115px] mt-15 text-sm">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Resuable;
