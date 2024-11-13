import React from "react";
import Image1 from "./constants/Image1.png";
import Image2 from "./constants/Image2.png";
import Image3 from "./constants/Image3.png";
import Image4 from "./constants/Image4.png";
import { LucideCheck } from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="flex justify-center items-center my-20  ">
      <div className="flex flex-col justify-center items-center gap-20  lg:max-w-7xl lg:px-28 md:px-0 md:max-w-2xl sm:px-5">
        <div className="flex md:flex-row  sm:flex-col justify-between items-center gap-10 ">
          <img
            src={
              "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/663551aaaa4eb51d3cadc3f1_Section2_JobsearchCRM.webp"
            }
            className="md:w-1/2 sm:w-full h-full rounded-lg"
          />
          <div className="md:w-1/2 sm:w-full flex flex-col  gap-4">
            <h1 className=" md:text-2xl" style={{ fontFamily: "Gilroy-Bold" }}>
              Find Your Dream Job with a Personal Touch!
            </h1>
            <p className="text-sm">
              Get referred by someone you trust to boost your chances of landing
              your ideal role. Our referral system connects you with
              professionals in your industry who know you’re the right fit for
              the job.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Why Choose Us?
            </a>
            <p className="flex"></p>
          </div>
        </div>
        <div className="flex md:flex-row  sm:flex-col justify-between items-center gap-10 ">
          <div className=" sm:hidden md:w-1/2 sm:w-full md:flex flex-col  gap-4">
            <h1 className=" md:text-2xl" style={{ fontFamily: "Gilroy-Bold" }}>
              Turn Your Network into Opportunities
            </h1>
            <p className="text-sm">
              Help friends, colleagues, or connections find jobs by referring
              them. Not only do they benefit, but you get rewarded for every
              successful referral. Shape someone’s future while enhancing your
              professional network.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Start a free trial
            </a>
          </div>
          <div className="flex items-center md:w-1/2 sm:w-full h-full rounded-lg">
            <img
              src={
                "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/663551d3463b21c2e453c0f8_Section4_JobChecklists.webp"
              }
              className=" z-10 border h-full rounded-lg"
            />
          </div>
          <div className="md:hidden sm:w-full flex flex-col  gap-4">
            <h1
              className=" sm:block md:hidden md:text-2xl"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Track your progress with <br /> our advanced site
            </h1>
            <p className="text-sm">
              We share all your work progress along with improvement points
              making sure you stay in demand.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Start a free trial
            </a>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col justify-between items-center gap-10 ">
          <img
            src={
              "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/663551ed56f85796ef2c2299_Section6_Contatcs.webp"
            }
            className=" md:w-1/2 sm:w-full h-full "
          />
          <div className="md:w-1/2 sm:w-full flex flex-col  gap-4">
            <h1 className=" md:text-2xl" style={{ fontFamily: "Gilroy-Bold" }}>
              Access Verified, <br /> Referral-Backed Candidates
            </h1>
            <p className="text-sm">
              Skip the noise and hire quality candidates through trusted
              referrals. Every candidate profile is verified and endorsed, so
              you’re hiring top-tier talent without the hassle.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Got someone to refer ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
