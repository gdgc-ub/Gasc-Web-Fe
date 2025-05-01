import React from "react";
// @ts-ignore
import BgGreen from "../../../assets/BgGreen.png";
// @ts-ignore
import BgBlue from "../../../assets/BgBlue.png";
import axios from 'axios';
import {useState}  from "react";


interface MedicineResponse { 
  // ...
}

const Home = () => {
  const handleImageChange = () => {
    //...
  };

  const handleSearch = async () => {
    //....
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative flex flex-col gap-6 justify-center items-center h-screen z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent bg-clip-text ">
          GASC SEARCH ENGINE
        </h1>
        <div>
          <input type="file" accept="image/*"  />
          <button onClick={handleSearch}>Analyze</button>
        </div>
      </div>

      <div className="absolute bottom-30 inset-0 flex justify-between items-center ">
        <img src={BgGreen} alt="Background" className="object-cover" />
        <img src={BgBlue} alt="Background" className="object-cover" />
      </div>
    </div>
  );
};

export default Home;
