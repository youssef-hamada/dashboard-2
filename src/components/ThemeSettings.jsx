import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummu";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:bg-main-dark-bg bg-white w-400">
        <div className="flex justify-between items-center p-4 border-b-1 border-color">
          <p className="text-xl font-bold">Settings</p>

          <button
            type="button"
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ borderRadius: "50%", background: "lightgray" }}
            onClick={() => {}}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <p className="text-lg p-3 hover:drop-shadow-xl hover:bg-light-gray font-semibold">
          Theme Options
        </p>

        <div className="mt-2">
          <input
            type="radio"
            id="light"
            name="theme"
            value={"Light"}
            className="cursor-pointer mx-6"
            onChange={() => {}}
            checked={true}
          />
          <label htmlFor="Light" className=" cursor-pointer">
            Light Theme
          </label>
        </div>
        <div className="mt-2">
          <input
            type="radio"
            id="dark"
            name="theme"
            value={"Dark"}
            className="cursor-pointer mx-6"
            onChange={() => {}}
            checked={true}
          />
          <label htmlFor="dark" className=" cursor-pointer">
            Dark Theme
          </label>
        </div>
        <p className="text-lg mt-6 p-3 hover:drop-shadow-xl hover:bg-light-gray font-semibold border-t-2 border-color">
          Theme Colors
        </p>
        <div className="flex gap-3 flex-wrap justify-center mt-2">
          {themeColors.map((item, index) => (
            <TooltipComponent
              key={index}
              content={item.name}
              position="TopCenter"
            >
              <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => {}}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      item.color === "#03C9D7" ? "block" : "hidden"
                    }`}
                  />
                </button>
              </div>
            </TooltipComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
