import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTabs)
  



  return (
    <div className="flex gap-4 p-10 items-center justify-center">
      {tabs.map(function (elem, idx) {
        return (
          <button className={`${activeTab == elem ? "bg-green-600" : "bg-gray-700"} px-4 py-2 transition cursor-pointer rounded-2xl capitalize`} key={idx} onClick={() => {
            dispatch(setActiveTabs(elem))
          }}>
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
