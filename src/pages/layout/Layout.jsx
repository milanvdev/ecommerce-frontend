import Sidebar from "../sidebar/Sidebar.jsx";
import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-auto">
                <Header/>
                <section className="bg-alabaster flex-1 p-6">
                    <Outlet/>
                </section>
            </div>
        </div>
    )
}
export default Layout;
