import MovieList from "../Movies/MovieList";
import { useSelector } from "react-redux"
export default function SecondaryContainer() {
    const movies = useSelector(store => store.movies);
    return(
        movies && (
        <div className=" bg-black text-white">
            <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Adult 18+"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    ))
};
