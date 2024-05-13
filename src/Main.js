import axios from "axios";
import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import MetaMask from "./MetaMask";
import "./App.css";

const Main = () => {
  const [currencyData, setCurrencyData] = useState();

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setCurrencyData(response.data);
      } catch (error) {
        console.error("Error fetching currency data: ", error);
      }
    };

    fetchCurrencyData();
  }, []);

  return (
    <>
      <div className="bg-[#0b0b0b] pt-10 sm:px-10 px-5 w-full text-white">
        <div className="w-full pt-5 sm:pt-0">
          <div>
            <h1 className="text-2xl sm:text-3xl">
              Hello,{" "}
              <span className="text-green-400 ">Brooklyn Simmons 👋</span>
            </h1>
            <h2 className="text-xl sm:text-2xl">
              Welcome to <span className="text-green-700">Spot trading !</span>
            </h2>
          </div>
        </div>
        <div className="bg-[#171717] sm:w-[550px] w-[100%] flex justify-center items-center sm:h-[350px] h-[320px] shadow-md shadow-gray-800 mt-5 p-4 rounded-xl ">
          <LineGraph />
        </div>
        <div>
          <h3 className="pt-5 text-3xl">Currency</h3>
          <div className="w-full gap-5 mt-5 rounded-md md:flex sm:flex sm:w-max currency-container">
            {currencyData &&
              Object.entries(currencyData.bpi).map(([key, value]) => (
                <div
                  key={key}
                  className=" p-4 rounded-md shadow-md shadow-gray-800 bg-[#171717]"
                >
                  <h3 className="text-2xl">{value.description}</h3>
                  <p className="text-xl">
                    <span dangerouslySetInnerHTML={{ __html: value.symbol }} />{" "}
                    {value.rate}
                  </p>
                  <p className="text-gray-400">({value.code})</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <MetaMask />
        </div>
      </div>
    </>
  );
};

export default Main;
