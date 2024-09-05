import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import useSidebarToggle from "../hooks/useSidebarToggle";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebarToggle();

  const currentLocation = useLocation()
    .pathname.split("/")
    .slice(2)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("/");
  return (
    <div className="grid bg-dashboard h-dvh grid-template-dashboard bg-no-repeat bg-cover">
      <Sidebar />
      <div className="scrollbar-hidden overflow-y-hidden">
        <div className="flex mx-2 justify-between">
          <div className="py-2 flex items-center gap-2 text-sm">
            <AiOutlineHome
              className="cursor-pointer text-xl"
              onClick={() => navigate("/")}
            />
            /<span className="text-sm font-semibold">{currentLocation}</span>
          </div>

          <span
            className="toggle-btn sm:hidden"
            onClick={() => toggleSidebar(true)}
          >
            <AiOutlineMenu className="h-full text-2xl" />
          </span>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
