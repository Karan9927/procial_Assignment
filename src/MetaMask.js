import React, { useState, useEffect } from "react";
import Web3 from "web3";
import metamask from "./Asset/metamask-icon.png";

const MetaMask = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } else {
        console.error("MetaMask not found");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <div className="top-0 flex justify-center p-10 sm:p-0 sm:absolute right-10">
      {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <button
          className="flex flex-col font-semibold items-center justify-center transition-all duration-100 ease-in-out hover:scale-110 hover:drop-shadow-[0_10px_35px_rgba(255,165,0)]"
          onClick={connectToMetaMask}
        >
          <img className="" src={metamask} alt="Metamask-logo" />
          Connect to Meta Mask
        </button>
      )}
    </div>
  );
};

export default MetaMask;
