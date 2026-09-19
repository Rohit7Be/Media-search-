import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTabs)
  



  return (
    <div className="flex gap-4 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button className={`${activeTab == elem ? "bg-green-600" : "bg-gray-700"} p-4 transition`} key={idx} onClick={() => {
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
