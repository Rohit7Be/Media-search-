import { useEffect } from "react";
import { setError, setLoading, setResults } from "../redux/features/searchSlice";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTabs, results, loading, error } = useSelector(
    (state) => state.search,
  );

  const dispatch = useDispatch()

  useEffect(() => {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoading(true))
        let data;
        let response;
        if (activeTabs == "photos") {
          response = await fetchPhotos(query);
          data = response.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTabs == "videos") {
          response = await fetchVideos(query);
          data = response.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }
        console.log(data);

        dispatch(setResults(data));
        
      } catch (err) {
        dispatch(setError(err))
      }
    };
    getData();
  }, [activeTabs, query]);

  



  if (loading) return <h1 className="p-10 text-2xl">Loading...</h1>;
  if (error) return <h1 className="p-10 text-2xl">Error loading results</h1>;

  return <div className="flex justify-between flex-wrap w-full gap-6 overflow-auto p-10">
    {results.map((elem, idx) => {
      return <div key={idx}>
        <ResultCard item={elem}/>
      </div>
    })}

  </div>;
};

export default ResultGrid;
