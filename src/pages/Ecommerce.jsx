import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot, GoArrowDown } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummu";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12 ">
      <div className="flex  justify-center w-full ">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9  bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/5100570.jpg')",
          }}
        >
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$54,445.45</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              size="md"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            ></Button>
          </div>
        </div>
      </div>
      <div className="flex m-6 flex-wrap justify-center gap-8 items-center">
        {earningData.map((item) => (
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mg:w-56 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-between p-6">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expence</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="flex gap-10 flex-wrap justify-center mt-10">
            <div className="border-r-1 border-color m-4 pr-10 ">
              <div>
                <p className="flex justify-start items-center">
                  <span className="text-3xl font-semibold">$63,448</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p>
                  <span className="text-sm text-gray-600 ml-3">Budget</span>
                </p>
              </div>
              <div className="mt-8">
                <p className="">
                  <span className="text-3xl font-semibold">$44,448</span>
                </p>
                <p>
                  <span className="text-sm text-gray-600 ml-3">Expense</span>
                </p>
              </div>

              <div className="mt-8">
                <SparkLine
                  currentColor={currentColor}
                  id={"line-sparkline"}
                  type={"Line"}
                  height={"80px"}
                  width={"250px"}
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color={"white"}
                  size="md"
                  bgColor={currentColor}
                  text="Download"
                  borderRadius="10px"
                ></Button>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
