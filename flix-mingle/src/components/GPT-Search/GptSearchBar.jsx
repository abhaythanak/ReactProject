import { useDispatch, useSelector } from "react-redux"
import lang from "../../utils/LanguageConstants"
import { useRef } from "react"
import openai from "../../utils/openAI";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../utils/gptSlice";


export default function GptSearchBar() {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langKey = useSelector(store => store.config.lang)

    //      Search Movie In TMDB
    const searchMovieTMDB = async (movie)=>{
        const data = await fetch(
        'https://api.themoviedb.org/3/search/movie?query=' +
        movie +'&include_adult=false&language=en-US&page=1', 
        API_OPTIONS
        );
        const json = await data.json()

        return json.results;
    }
   
    const HandleGptSearchClick = async ()=>{
        const GptQuery = "Act as movie recommendation system and suggest some movies for the query:"
          + searchText.current.value + 
          ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, sholay, don, Golmaal, Koi Mil Gaya";

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GptQuery }],
            model: 'gpt-3.5-turbo',
          });

          if(!gptResult.choices){
            //Error Handling
          }
          
          const gptMovies = gptResult.choices?.[0].message?.content.split(",");

          const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));

          const tmdbResults = await Promise.all(promiseArray);

          dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))

    }
    

    return(
        <div className="">
            <div className="pt-[10%] flex justify-center">
                <form 
                onSubmit={(e) => e.preventDefault()}
                className=" w-1/2 bg-black grid grid-cols-12">
                    <input 
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                     />
                     <button 
                     onClick={HandleGptSearchClick}
                     className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
                        {lang[langKey].Search}
                     </button>
                </form>
            </div>
        </div>
    )
};
