import { BG_URL } from "../../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


export default function GptSearch() {
    return(
        <div className="">
            <div className="fixed -z-10 h-screen">
               <img className="object-cover w-full h-full sm:h-auto" src={BG_URL} alt="BG_URL" />
            </div> 
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
};
