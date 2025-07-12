import React from "react";
import Resuable from "./Resuable";
import Group1 from "../assets/Group1.png";
import Group3 from "../assets/Group3.png";
import Group2 from "../assets/Group2.png";
import Group4 from "../assets/Group4.png";
import Reusable2 from "./Reusable2";

const Task2 = () => {
  return (
    <div className="h-[1042px] relative ">
      <div className="h-[862px] absolute top-[120px] right-[113.5px] left-[120px] bottom-[60px]">
        <div className="w-[453px] h-[92px]">
          <p>Your SkillShikshya Journey</p>
          <p className="font-bold leading-1.2 text-2xl">
            <span className="text-green-800">Step </span>In.
            <span className="text-green-800">Skill </span>Up.
            <span className="text-green-800">Stand</span> Out. 🚀
          </p>
        </div>
        <div className="h-[770px] grid grid-cols-2 gap-5">
          <div className="">
            <Resuable
              img={Group1}
              title=" Start with Clarity"
              name=" Step into a better learning path."
              description="Overwhelmed by too many learning options? SkillShikshya provides a
          clear, curated roadmap from the start. Whether you're a beginner or
          upskilling, we have a path tailored to your growth."
              color="bg-pink-700"
              ani="animate-bounce-slow"
              move="transform transition-all duration-700 hover:-translate-x-full hover:opacity-0"
            />
          </div>
          <div>
            <Reusable2
              img={Group2}
              title="Learn by Doing"
              name="Practical skills, real projects."
              description="Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery."
              color="bg-cyan-900"
              ani="animate-bounce-slow"
              move="transform transition-all duration-700 hover:-translate-x-full hover:opacity-0"
            />
          </div>
          <div>
            <Resuable
              img={Group3}
              title="Get Mentored & Supported"
              name="You're not learning alone."
              description="Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own."
              color="bg-fuchsia-800"
            />
          </div>
          <div>
            <Reusable2
              img={Group4}
              title="Achieve & Showcase"
              name="Build your portfolio, get job-ready."
              description="Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
              color="bg-yellow-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
