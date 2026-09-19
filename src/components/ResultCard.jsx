import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[16rem] relative h-80 bg-white rounded-xl">
      <div className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
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
      </div>

      <div id="bottom" className="w-full p-4 text-black absolute bottom-0">
        <h2 className="text-white font-light text-sm capitalize">{item.title}</h2>
      </div>
    </div>
  );
};

export default ResultCard;
