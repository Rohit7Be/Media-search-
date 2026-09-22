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
    <div>
      <h2 className="text-2xl text-center p-4 font-semibold">My Collection</h2>
      <div className="flex justify-between flex-wrap w-full gap-6 overflow-auto p-10">
        {items.length > 0 ? items.map((elem, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={elem} />
            </div>
          );
        }): <h3 className="text-xl font-semibold text-red-400">Nothing To Show 🙄</h3>}
      </div>
    </div>
  );
};

export default CollectionPage;
