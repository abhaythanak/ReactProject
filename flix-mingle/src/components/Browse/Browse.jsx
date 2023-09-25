
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondContainer/SecondaryContainer";

export default function Browse(params) {
    useNowPlayingMovies();
    usePopularMovies();
    return(
        <div className="">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
};
