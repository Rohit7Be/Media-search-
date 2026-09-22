import React from "react";
import { useSelector } from "react-redux";
import {
  clearCollection,
  removeFromCollection,
} from "../redux/features/collectionSlice";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const items = useSelector(state => state.collection.items);

  return (
    <div className="flex justify-between flex-wrap w-full gap-6 overflow-auto p-10">
      {items.map((elem,idx) => {
        return <div key={idx}><CollectionCard item={elem} /></div>;
      })}
    </div>
  );
};

export default CollectionPage;
