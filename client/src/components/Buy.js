import React from "react";
import { ethers } from "ethers";

const Buy = ({ buyState }) => {
  
  const buyCoffee = async (event) => {

    event.preventDefault();
    try{
    const { contract } = buyState;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(contract, name, message);

    const amount = { value: ethers.utils.parseEther("0.046") };
    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();
    console.log("Transaction is Done");
    }catch(e){
      alert("Make sure you have enough Balance ")
    }
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={buyCoffee}>
        <div >
          <div className=" mt-5 p-2 bg-gray-900 rounded-xl flex align-middle justify-between">
            <label className=" text-3xl text-white font-medium text-center px-5">Name</label>
            <input className=" text-xl font-normal bg-white text-gray-700 px-5 rounded-md pt-1" type="text" id="name" placeholder="Enter Your Name"></input>
          </div>
        </div>
        <div className="mt-5 ">
          <div className="p-2 -mt-1 bg-gray-900 rounded-xl flex align-middle justify-between">
            <label className=" text-3xl text-white font-medium text-center px-5">Message</label>
            <input className="  text-xl font-normal bg-white text-gray-700 px-5 rounded-md pt-1" 
              type="text"
              id="message"
              placeholder="Enter Your Message"
            ></input>
          </div>
        </div>
        <div className="mt-5 p-2 bg-gray-900 rounded-xl flex align-middle justify-center hover:bg-gray-700">
          <button className="text-3xl text-white font-medium text-center px-5 w-full " type="submit" disabled={!buyState.contract}>
            <div className="">
              Pay
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Buy;
