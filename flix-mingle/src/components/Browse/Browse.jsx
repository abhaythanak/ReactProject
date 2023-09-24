
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondContainer/SecondaryContainer";

export default function Browse(params) {
    useNowPlayingMovies()
    return(
        <div className="">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
};
