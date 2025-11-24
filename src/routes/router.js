import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/main-layout";

const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout, //untuk navbar 
        children : [
            {
                index : true,
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/predict-diabetes/predict-diabetes-page")
                        
                        return component.default
                    }
                }
            }
        ]
    }
])

export default router