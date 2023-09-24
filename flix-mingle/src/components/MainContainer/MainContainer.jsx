import { useSelector } from "react-redux"
import VideoTitle from "../VideoTitle/VideoTitle"
import VideoBackground from "../VideoBackground/VideoBackground"

export default function MainContainer( ) {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    // if (movies === null) return;  OR
    if (!movies) return; 

    const mainMovie = movies[0];
    
    const {original_title, overview, id} = mainMovie;
    return(
        <div className="">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
};
