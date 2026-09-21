import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))

    setText("")
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="p-10 flex gap-4 w-full items-center justify-center">
        <input
          value={text}
          required
          onChange={(e) => {
            console.log(e.target.value)
            setText(e.target.value)
          }}
          className=" bg-gray-900 rounded px-4 py-2 text-xl w-[30rem]"
          type="text"
          placeholder="Search Anything..."
        />
        <button className="hover:bg-transparent hover:border-2 hover:border-gray-500 px-4  py-2  rounded active:scale-95 bg-blue-800">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
