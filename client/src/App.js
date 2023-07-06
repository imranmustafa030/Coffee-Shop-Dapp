import abi from "./contract/coffee.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";

import Head from "./assets/Head.png";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contracts: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x8edb9d1aae22de0310b076b2931058abb236fd28";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please isntall Metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div className="App flex flex-col bg-white">
      <div className=" h-full">
        <div className="w-full pt-10 bg-black">
          <h1 className="text-5xl font-bold flex justify-center text-white">
            Decenteralize Coffee Shop
          </h1>
        </div>
        <div className="">
          <img src={Head} />
        </div>

        <div className=" ">
          <div className="flex justify-center">
            <div className="p-2 -mt-1 bg-gray-900 rounded-xl flex align-middle justify-center ">
              <span className=" text-3xl text-white font-medium text-center px-5"> Connected Account </span> 
              <span className=" cursor-not-allowed text-xl font-normal bg-white text-gray-700 px-5 rounded-md pt-1">{account}</span>
            </div>
          </div>
          <div>
          <Buy buyState={state}></Buy>
          </div>
          <div>
          <Memos memosState={state}></Memos>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
