import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

export default function useMovieTrailer(movieId) {
    const dispatch = useDispatch();
     //Fetching trailer video and updating store with trailer video
     const getMovieVideos = async ()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + 
            movieId + 
            "/videos?language=en-US", 
            API_OPTIONS
            );
        const json =await data.json();
        console.log(json)

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=> {
        getMovieVideos();
    },[])
};
