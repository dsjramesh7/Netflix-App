import React, { useRef } from "react";
import openai from "../utils/openai";

const GptSearchInputBar = () => {
  const searchText = useRef(null);
  const handleGptSearch = async () => {
    // console.log(searchText.current.value);
    // make an API call to gpt api and get movie results

    const gptQuery = `Act as a Movie Recommandation system and suggest some movies for the query : ${searchText.current.value}. only give me names of 5 movies, comma separated like the example resulet given ahead. Example Result: Batman,  SpiderMan, IronMan, SuperMan, Docter Strange`;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // handling error here
    }
    // console.log(gptResults.choices[0]?.message.content);
  };
  return (
    <div className="pt-[40%] flex justify-center sm:pt-[5%]">
      <form
        className="w-4/5 px-1 bg-black grid grid-cols-12 sm:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What do you wanna watch Hashira........?"
          className="p-4 m-4 col-span-12 sm:col-span-9"
        />
        <button
          className="bg-red-600 text-white py-2 px-4 col-span-12 m-4 sm:col-span-3"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchInputBar;
