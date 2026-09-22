import React from "react";
import { useDispatch } from "react-redux";
import { addToCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {

  const dispatch = useDispatch()

  const addCollection = (item) => {
    dispatch(addToCollection(item))
    console.log("saved")
    
  }

  return (
    <div className="w-[16rem] relative h-80 bg-white rounded-xl">
      <a target="_blank" href={item.url} className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center "
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>

      <div id="bottom" className="w-full p-4 text-black absolute bottom-0 flex items-center justify-between ">
        <h2 className="text-white font-light text-sm capitalize">{item.title}</h2>
        <button className="text-white bg-purple-600 px-2 py-1 text-sm rounded hover:bg-purple-800 cursor-pointer active:scale-95" onClick={() => {
          addCollection(item)
          alert("Saved To Collection")
        }}>Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
