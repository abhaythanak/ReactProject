
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import GptSearch from "../GPT-Search/GptSearch";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondContainer/SecondaryContainer";

export default function Browse(params) {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    return(
        <div className="">
            <Header/>
            {
                showGptSearch ? ( <GptSearch/> ) : (
                <>
                <MainContainer/>
                <SecondaryContainer/>
                </>
                )
            }
            
            
        </div>
    )
};
