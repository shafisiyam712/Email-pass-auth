import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const MainLayout = () => {
    return (
        <div className="max-w-5xl mx-auto my-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;