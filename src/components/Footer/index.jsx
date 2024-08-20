import React from "react";
import logo from "../../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { LocationCity } from "@mui/icons-material";
import { MapPin, Phone, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <div className="lg:max-w-7xl lg:px-28 md:my-20 md:px-20 sm:px-5 sm:my-10 ">
        <div className="flex md:flex-row sm:flex-col justify-center gap-10 item-center">
          <div className="flex flex-col gap-4">
            <a href="#" className="">
              <img src={logo} className="w-15 h-10" />
            </a>
            <div className="flex gap-2 text-xs text-nowrap font-medium text-gray-500 ">
              <CopyrightIcon />

              <h1 className="flex items-center justify-center text-center ">
                BredStack Private Limited. All rights reserved.
              </h1>
            </div>
            <div className="flex flex-col justify-start  gap-6">
              <h1 className="font-bold  ">INDIA OFFICE</h1>
              <div className="flex flex-col  font-medium gap-2 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <MapPin /> Dehradun, Uttarakhand.
                </span>
                <span className="flex items-center gap-2">
                  <Smartphone />
                  +91- 123456780
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <h1 className="text-md  font-bold ">Socials</h1>
                <div className="flex  gap-4 text-gray-500 text-sm font-medium">
                  <a href="#">
                    <FacebookIcon />
                  </a>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                  <a href="#">
                    <XIcon />
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-md  font-bold  ">LOCATIONS</h1>
                  <div className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
                    <a href="#">Dehradun,India</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex  gap-20 ">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h1 className="text-md  font-bold ">COMPANY</h1>
                <div className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
                  <a href="#">Careers</a>
                  <a href="#">Customer Review</a>
                  <a href="#">The Right Hire</a>
                  <a href="#">Blogs</a>
                  <a href="#">Events</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-md  font-bold ">FOR CUSTOMERS</h1>
                <div className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
                  <a href="#">Submit Enquiry</a>
                  <a href="#">Hire Developer</a>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-md  font-bold ">FOR DEVELOPERS</h1>
                <div className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
                  <a href="#">Developers</a>
                  <a href="#">Developer Sign-up</a>
                  <a href="#">Developer Login</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-md  font-bold ">HIRE TECH TALENTS </h1>
              <div className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
                <a href="#">Big Software Companies</a>
                <a href="#">Healthcare Companies</a>
                <a href="#">Fintech Companies</a>
                <a href="#">Startups</a>
                <a href="#">USA Startups & Businesses</a>
                <a href="#">Salesforce Need</a>
                <a href="#">VC Portfolio Companies</a>
                <a href="#">Pharma Industry</a>
                <a href="#">ServiceNow</a>
                <a href="#">WorkDay</a>
                <a href="#">SAP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
