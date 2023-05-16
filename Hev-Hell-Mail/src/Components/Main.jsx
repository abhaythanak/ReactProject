import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";


export default function Main() {

    const [ openDrawer, setOpenDrawer] = useState(false);

    const ToggleDrawer = ()=> {
        setOpenDrawer(prevState => !prevState) 
    }

    return(
        <>
        <Header ToggleDrawer={ToggleDrawer}/>
        <SideBar openDrawer={openDrawer}/>
        <div className="">
            Display Mail
        </div>

        </>
    )
}
