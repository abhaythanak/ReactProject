import { useSelector } from "react-redux"
import lang from "../../utils/LanguageConstants"


export default function GptSearchBar() {
    const langKey = useSelector(store => store.config.lang)
    return(
        <div className="">
            <div className="pt-[10%] flex justify-center">
                <form 
                onSubmit={(e) => e.preventDefault()}
                className=" w-1/2 bg-black grid grid-cols-12">
                    <input 
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                     />
                     <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
                        {lang[langKey].Search}
                     </button>
                </form>
            </div>
        </div>
    )
};
