import React from "react";
import slack from "../../assets/slack.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import webflow from "../../assets/webflow.png";
import discord from "../../assets/discord.png";
import instagram from "../../assets/instagram.png";
import wordpress from "../../assets/wordpress.png";
import product from "../../assets/product.png";

export default function IntegrateSection() {
  return (
    <div className="bg-gray-100 py-20 px-28">
      <div className="bg-white py-20 px-24 rounded-lg">
        <div className=" w-fit bg-purple-100 rounded-md font-semibold ">
          <h1 className=" px-2 py-1 ">INTEGRATION</h1>
        </div>
        <div className="flex justify-between items-center mt-8 gap-16">
          <h1 className=" text-left text-6xl font-bold">
            Integrated with tools you love
          </h1>
          <h1 className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut unde,
            repudiandae eveniet similique tempora modi quae culpa.
          </h1>
          <button className="rounded-full border border-gray-500 font-bold  text-nowrap px-8 py-3 w-fit h-fit">
            <p className="text-lg  hover:scale-105 hover:font-bold">
              Learn more
            </p>
          </button>
        </div>
        <div className="flex  mt-10 gap-4 justify-between">
          <div className="flex flex-col px-4 py-6 w-1/5  gap-12 shadow-md  border-2 border-gray-100  rounded-lg">
            <img src={google} alt="tech1" className="w-16" />
            <div className="text-left">
              <p className="font-bold">Google</p>
              <p className="text-xs text-gray-400">
                Empowering the world with information at your fingertips
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4   ">
            <div className="flex px-4 py-6 gap-12 h-1/2 shadow-md  border-2 border-gray-100  rounded-lg">
              <img src={webflow} alt="tech1" className="h-8" />
              <div className="text-left">
                <p className="font-bold">Webflow</p>
                <p className="text-xs text-gray-400">
                  Design, build, and launch without code.
                </p>
              </div>
            </div>
            <div className="flex px-4 py-6 h-1/2  gap-12 shadow-md  border-2 border-gray-100  rounded-lg">
              <img src={twitter} alt="tech1" className="h-10" />
              <div className="text-left">
                <p className="font-bold">Twitter</p>
                <p className="text-xs text-gray-400">Join the conversation.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 py-6 w-1/5  gap-12 shadow-md  border-2 border-gray-100  rounded-lg">
            <img src={slack} alt="tech1" className="w-16" />
            <div className="text-left">
              <p className="font-bold">Slack</p>
              <p className="text-xs text-gray-400">Where work happens.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4   ">
            <div className="flex px-8 py-6  h-1/2 gap-12  shadow-md  border-2 border-gray-100  rounded-lg">
              <img src={discord} alt="tech1" className="h-12" />
              <div className="text-left">
                <p className="font-bold">Discord</p>
                <p className="text-xs text-gray-400">
                  Your place to talk and hang out.
                </p>
              </div>
            </div>
            <div className="flex px-8 py-6 h-1/2 gap-12 shadow-md  border-2 border-gray-100  rounded-lg">
              <img src={instagram} alt="tech1" className="h-10" />
              <div className="text-left">
                <p className="font-bold">Instagram</p>
                <p className="text-xs text-gray-400">
                  Capture and share the world's moments.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 py-6 w-1/5  gap-12 shadow-md  border-2 border-gray-100  rounded-lg">
            <img src={wordpress} alt="tech1" className="w-20" />
            <div className="text-left">
              <p className="font-bold">Wordpress</p>
              <p className="text-xs  text-gray-400">
                Create, Connect, and Grow with WordPress.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="absolute z-10 flex justify-around items-center  gap-2 bg-white rounded-lg w-fit h-fit ml-5 py-2 px-4 shadow-md">
            <img src={product} alt="Product hunt" className="w-8" />
            <h1 className="text-center font-bold ">Product hunt </h1>
          </div>
          <div className=" relative top-8 flex justify-between p-10 gap-36  bg-custom_purple_dark rounded-lg">
            <h1 className="text-left text-white font-bold text-2xl w-1/4">
              We help real people to do more with money
            </h1>

            <div className="flex justify-around text-white w-3/4 gap-12 ">
              <div className="flex flex-col justify-center">
                <h1 className="text-6xl font-bold">98%</h1>
                <p>Client satisfaction</p>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-6xl font-bold">30%</h1>
                <p>Decrease sequences</p>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-6xl font-bold">7.6M</h1>
                <p>Money flows users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
