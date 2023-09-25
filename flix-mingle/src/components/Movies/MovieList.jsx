import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
    console.log(movies)
    return(
        <div className="px-6">
            <h1 className="text-3xl py-6">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map((movie)=> (
                        <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
    )
};
