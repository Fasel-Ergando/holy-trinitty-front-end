import { useContext } from "react";
import SidebarContext from "../context/SidebarProvider";

const useSidebarToggle = () => {
  return useContext(SidebarContext);
};

export default useSidebarToggle;
