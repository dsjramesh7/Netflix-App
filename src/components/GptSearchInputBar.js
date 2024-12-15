import React from "react";

const GptSearchInputBar = () => {
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder="What do you wanna watch Hashira........?"
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-600 text-white py-2 px-4 col-span-3 m-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchInputBar;
