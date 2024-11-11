import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/SideBar/SideBar";

const DashBoard = () => {
  return (
    <div className="relative min-h-screen md:flex ">
      <div className=" md:w-[200px] bg-red-300">
        <Sidebar></Sidebar>
      </div>
      <div className="md:flex-1 md:ml-10 bg-green-300 p-5">
        {/* outletfor dynamic contents */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
