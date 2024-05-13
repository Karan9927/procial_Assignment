import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { TbCube } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";
import { RiHourglass2Line } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiUserCircleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`bg-[#1a1e1c] w-[${
          isOpen ? "18vw" : "5vw"
        }] transition-all py-10 sm:flex flex-col justify-between hidden`}
      >
        <div>
          <div className="flex items-center justify-between px-6">
            <img
              className={`${isOpen ? "block" : "hidden"} w-24`}
              src="https://carboncell.io/assets/img/logo2.png"
              alt="logo"
            />
            <div onClick={handleSidebar} className="text-2xl text-white">
              <GiHamburgerMenu style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } max-w-md mx-auto px-4 pt-10 pb-5`}
          >
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[#333333] overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full font-semibold outline-none text-sm text-white bg-[#333333] pr-2"
                type="text"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div
            className={`flex flex-col text-white ${isOpen ? "" : "gap-4 my-8"}`}
          >
            <div
              className={`${
                isOpen ? "" : "p-10"
              }flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out p-2 px-7 text-lg gap-5`}
            >
              <NavLink
                className="flex items-center gap-5"
                to={"/"}
                activeClassName="active"
              >
                <FiHome />{" "}
                <span className={`${isOpen ? "block" : "hidden"}`}>Home</span>
              </NavLink>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out p-2 px-7 text-lg gap-5">
              <NavLink
                className="flex items-center gap-5"
                to={"/Organization"}
                activeClassName="active"
              >
                <GoOrganization />{" "}
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Organization
                </span>
              </NavLink>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <NavLink
                className="flex items-center gap-5"
                to={"/Assets"}
                activeClassName="active"
              >
                <TbCube />{" "}
                <span className={`${isOpen ? "block" : "hidden"}`}>Assets</span>
              </NavLink>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <NavLink
                className="flex items-center gap-5"
                to={"/trade"}
                activeClassName="active"
              >
                <LuArrowDownUp />{" "}
                <span className={`${isOpen ? "block" : "hidden"}`}>Trade</span>
              </NavLink>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <NavLink
                className="flex items-center gap-5"
                to={"/History"}
                activeClassName="active"
              >
                <RiHourglass2Line />{" "}
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  History
                </span>
              </NavLink>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <NavLink
                className="flex items-center gap-5"
                to={"/Wallet"}
                activeClassName="active"
              >
                <LuWallet />{" "}
                <span className={`${isOpen ? "block" : "hidden"}`}>Wallet</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={`text-white mt-[100px] ${isOpen ? "" : "mt-[74px]"}`}>
          <div
            className={`flex flex-col text-white ${isOpen ? "" : "gap-4 my-8"}`}
          >
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <MdOutlineNotificationsNone />{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                Notifications
              </span>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <FaRegQuestionCircle />{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>Support</span>
            </div>
            <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-lg gap-5">
              <IoSettingsOutline />{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>Settings</span>
            </div>
          </div>
          <div className="flex p-4 bg-[#333333] mt-1 gap-3 rounded-lg mx-2 justify-center items-center">
            <PiUserCircleBold style={{ fontSize: "36px" }} />
            <div className={`leading-5 ${isOpen ? "" : "hidden"}`}>
              <p className="font-semibold text-md">Brooklyn Simmons</p>
              <span className="text-xs text-gray-500">
                brooklyn@simmons.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <>
        <div
          className={` ${
            !isOpen ? "hidden" : "absolute"
          } z-10 w-full h-full bg-black md:hidden`}
        >
          <div className="flex items-center justify-center h-full">
            <div
              className={`flex flex-col gap-5 text-white ${
                isOpen ? "" : "gap-4 my-8"
              }`}
            >
              <div
                className={`${
                  isOpen ? "" : "p-10"
                }flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out p-2 px-7 text-2xl gap-5`}
              >
                <NavLink
                  onClick={handleSidebar}
                  className="flex items-center gap-5"
                  to={"/"}
                  activeClassName="active"
                >
                  <FiHome />{" "}
                  <span className={`${isOpen ? "block" : "hidden"}`}>Home</span>
                </NavLink>
              </div>
              <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out p-2 px-7 text-2xl gap-5">
                <NavLink
                  onClick={handleSidebar}
                  className="flex items-center gap-5"
                  to={"/Organization"}
                  activeClassName="active"
                >
                  <GoOrganization />{" "}
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    Organization
                  </span>
                </NavLink>
              </div>
              <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-2xl gap-5">
                <NavLink
                  onClick={handleSidebar}
                  className="flex items-center gap-5"
                  to={"/Assets"}
                  activeClassName="active"
                >
                  <TbCube />{" "}
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    Assets
                  </span>
                </NavLink>
              </div>
              <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-2xl gap-5">
                <NavLink
                  onClick={handleSidebar}
                  className="flex items-center gap-5"
                  to={"/trade"}
                  activeClassName="active"
                >
                  <LuArrowDownUp />{" "}
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    Trade
                  </span>
                </NavLink>
              </div>
              <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-2xl gap-5">
                <NavLink
                  onClick={handleSidebar}
                  className="flex items-center gap-5"
                  to={"/History"}
                  activeClassName="active"
                >
                  <RiHourglass2Line />{" "}
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    History
                  </span>
                </NavLink>
              </div>
              <div className="flex items-center hover:bg-[#333333] rounded-md cursor-pointer transition-all ease-in-out px-7 p-2 text-2xl gap-5">
                <NavLink
                  onClick={handleSidebar}
                  className="flex items-center gap-5"
                  to={"/Wallet"}
                  activeClassName="active"
                >
                  <LuWallet />{" "}
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    Wallet
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            onClick={handleSidebar}
            className="absolute top-0 right-0 text-2xl text-white p-7"
          >
            <RxCross2 style={{ cursor: "pointer" }} />{" "}
          </div>
        </div>
        <div
          onClick={handleSidebar}
          className="absolute top-0 right-0 text-2xl text-white p-7 sm:hidden"
        >
          <GiHamburgerMenu style={{ cursor: "pointer" }} />{" "}
        </div>
      </>
    </>
  );
};

export default Sidebar;
