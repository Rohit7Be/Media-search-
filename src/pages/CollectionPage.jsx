import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCollection,
  removeFromCollection,
} from "../redux/features/collectionSlice";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const items = useSelector(state => state.collection.items);

  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearCollection())
  }

  return (
    <div>
      <div className="flex items-center justify-between px-4 ">
        <h2 className="text-2xl text-center p-4 font-semibold">
          My Collection
        </h2>
        <button onClick={() => {
          clear()
          alert("Collection Cleared")
        }} className="border-2 p-2 rounded-xl hover:bg-red-500 cursor-pointer active:scale-95">
          Clear Collection
        </button>
      </div>
      <div className="flex md:justify-start justify-center flex-wrap w-full gap-6 overflow-auto p-10">
        {items.length > 0 ? (
          items.map((elem, idx) => {
            return (
              <div key={idx}>
                <CollectionCard item={elem} />
              </div>
            );
          })
        ) : (
          <h3 className="text-xl font-semibold text-red-400">
            Nothing To Show 🙄
          </h3>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
