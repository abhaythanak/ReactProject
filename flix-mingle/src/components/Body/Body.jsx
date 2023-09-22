import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../Browse/Browse";
import Login from "../Login/Login";

export default function Body() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "browse",
            element: <Browse/>,
        },
    ]);
    return(
        <div className="">
            <RouterProvider router={appRouter}/>
        </div>
    )
};
