import { Outlet } from "react-router"
import Navbar from "../components/ui/Navbar"

function MainLayout() {
    return <div className="flex flex-col h-screen">
        <Navbar/>
        <div className="flex-1">
            <Outlet/>
        </div>
        <footer className="footer sm:footer-horizontal bg-base-200"></footer>
        <div>
            Footer &copy;
        </div>
    </div>
}

export default MainLayout