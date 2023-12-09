import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Root = () => {
    const { darkMode } = useContext(AuthContext);

    return (
        <div>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div>
                    <div className="max-w-[1320px] mx-auto">
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Root;