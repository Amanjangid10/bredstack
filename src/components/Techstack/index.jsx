import React from "react";

const techStacks = [
  {
    name: "HTML",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
  },
  {
    name: "CSS",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
  },
  {
    name: "JavaScript",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  },
  {
    name: "React",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  },
  {
    name: "Node.js",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
  },
  {
    name: "Python",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
  },
  {
    name: "Java",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png",
  },
  {
    name: "C++",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png",
  },
  {
    name: "Ruby",
    imgSrc:
      "https://raw.githubusercontent.com/github/explore/main/topics/ruby/ruby.png",
  },
];
export default function Techstack() {
  return (
    <div className=" flex  mt-10 items-center justify-center">
      <div className="mx-10 flex flex-col gap-2  md:grid md:grid-cols-3 md:gap-6">
        {techStacks.map((item, index) => {
          return (
            <div key={index} className="group inline-block h-30 w-auto">
              <ul className="p-10 flex items-center text-center justify-center  bg-[#F3F8FF] rounded-lg shadow-md transition-transform duration-200 transform group-hover:scale-105  ">
                <li>
                  <img src={item.imgSrc} />
                  {item.name}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
