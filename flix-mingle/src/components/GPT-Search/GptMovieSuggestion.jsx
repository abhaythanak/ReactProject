import { useSelector } from "react-redux";
import MovieList from '../Movies/MovieList';

export default function GptMovieSuggestion() {
    const { movieNames,movieResults } = useSelector((store)=> store.gpt)
    if (!movieNames) return null;
    return(
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <div className="">
                {movieNames.map((movieName, i)=> (
                    <MovieList
                    key={movieName}
                    title={movieName}
                    movies={movieResults[i]}
                    />
                ))}
            </div>
        </div>
    )
};
