"use client";
import Image from "next/image";
import React from "react";
import heroSvg from "../../public/images/blob.svg";
import heroImage from "../../public/images/s1-c.png";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
const Hero: React.FC = () => {
  return (
    <>
      <MobileView>
        <div className="relative flex  px-7 kanit-regular   z-[-1]">
          <div className="relative " style={{}}>
            <div className="relative z-[-1]  ">
              <div className="flex flex-col w-[70vw] mt-0">
                <p className=" font-bold   text-[#000000] text-[28px] ">
                  Facilities, That Make Your Stay
                  
                  <span className="text-[#FF7433] ml-[5px]">Comfortable</span>
                </p>
                
                <div className="frame_36 inline-flex  items-start mt-4 px-5 py-3 rounded-2xl bg-[#ff7433]">
                  <div className="frame_35 flex justify-between items-center ">
                    <svg
                      width={19}
                      height={24}
                      viewBox="0 0 19 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.52469 0.762207C4.70787 0.762207 0.349792 4.4551 0.349792 10.1665C0.349792 13.8135 3.1596 18.1028 8.76776 23.0457C9.20357 23.4242 9.85728 23.4242 10.2931 23.0457C15.8898 18.1028 18.6996 13.8135 18.6996 10.1665C18.6996 4.4551 14.3415 0.762207 9.52469 0.762207ZM9.52469 12.2308C8.26314 12.2308 7.23096 11.1986 7.23096 9.9371C7.23096 8.67555 8.26314 7.64338 9.52469 7.64338C10.7862 7.64338 11.8184 8.67555 11.8184 9.9371C11.8184 11.1986 10.7862 12.2308 9.52469 12.2308Z"
                        fill="white"
                      />
                    </svg>
                    <div className="text-white text-right  ml-[32px] text-[14px] leading-[normal] capitalize">
                      Explore Your Living Space
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="relative"
              style={{ width: "1002px", height: "525px", left: "10px" }}
            >
              <Image
                src={heroSvg}
                style={{
                  position: "absolute",
                  width: "325px",
                  height: "344px",
                  objectFit: "fill",
                  transform: "rotate(180deg)",
                  top: "20px",
                  left: "20px",
                  marginLeft: "15vw",
                }}
                alt="svg"
              />
              <Image
                src={heroImage}
                style={{
                  position: "absolute",
                  width: "312px",
                  height: "280px",
                  objectFit: "cover",
                  marginLeft: "12vw",
                  bottom: "120px",
                }}
                alt="svg"
              />
            </div>
          </div>
        </div>
      </MobileView>
      <DesktopView>
        <div className="relative flex justify-between px-24 kanit-regular   z-[-1]">
          <div className="relative z-[-1]  ">
            <div className="flex-shrink-0">
              <p className="flex-shrink-0 font-bold w-[50vw] h-[212px] text-[#000000]  text-[57.47px] leading-[3.625rem]">
                Facilities,
                <br />
                That Make Your Stay
                <br />
                <span className="text-[#FF7433]">Comfortable</span>
              </p>
              <div className="flex-shrink-0 w-[640.258px] h-[5.875rem] text-[#04536c]  text-[1.0625rem] leading-[1.625rem]">
                To provide a secure, comfortable, and supportive living
                <br />
                environment that promotes academic success, personal
                <br />
                growth, and community among post-graduate students.
              </div>
              <div className="frame_36 inline-flex justify-center items-start px-5 py-3 rounded-2xl bg-[#ff7433]">
                <div className="frame_35 flex items-center w-[14.4375rem]">
                  <svg
                    width={19}
                    height={24}
                    viewBox="0 0 19 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.52469 0.762207C4.70787 0.762207 0.349792 4.4551 0.349792 10.1665C0.349792 13.8135 3.1596 18.1028 8.76776 23.0457C9.20357 23.4242 9.85728 23.4242 10.2931 23.0457C15.8898 18.1028 18.6996 13.8135 18.6996 10.1665C18.6996 4.4551 14.3415 0.762207 9.52469 0.762207ZM9.52469 12.2308C8.26314 12.2308 7.23096 11.1986 7.23096 9.9371C7.23096 8.67555 8.26314 7.64338 9.52469 7.64338C10.7862 7.64338 11.8184 8.67555 11.8184 9.9371C11.8184 11.1986 10.7862 12.2308 9.52469 12.2308Z"
                      fill="white"
                    />
                  </svg>
                  <div className="text-white text-right  ml-[9.17px] text-[1.0625rem] leading-[normal] capitalize">
                    Explore Your Living Space
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-end items-center pt-[4.5rem] pr-[3.75rem] pb-14 pl-32"></div>
            </div>
          </div>
          <div className="relative flex-shrink-0" style={{}}>
            <div
              className="relative"
              style={{ width: "1002px", height: "725px", left: "-119px" }}
            >
              <Image
                src={heroSvg}
                style={{
                  position: "absolute",
                  width: "725px",
                  height: "544px",
                  objectFit: "fill",
                  transform: "rotate(180deg)",
                  top: "-105px",
                  marginLeft: "15vw",
                }}
                alt="svg"
              />
              <Image
                src={heroImage}
                style={{
                  position: "relative",
                  width: "612px",
                  height: "580px",
                  objectFit: "cover",
                  marginLeft: "12vw",
                }}
                alt="svg"
              />
            </div>
          </div>
        </div>
      </DesktopView>
    </>
  );
};

export default Hero;
