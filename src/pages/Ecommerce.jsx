import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SpakleLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummu";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
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
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            ></Button>
          </div>
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
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
    </div>
  );
};

export default Ecommerce;
