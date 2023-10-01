import { BG_URL } from "../../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


export default function GptSearch() {
    return(
        <div className="">
            <div className="absolute -z-10">
               <img src={BG_URL} alt="BG_URL" />
            </div> 
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
};
