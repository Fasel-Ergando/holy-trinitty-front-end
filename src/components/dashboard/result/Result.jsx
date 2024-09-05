import { Outlet } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

import "../../../styles/DashboardResult.css";
export default function Result() {
  return (
    <div className="p-3 h-main overflow-y-scroll">
      {/* upload navigation */}

      <div className="flex justify-between">
        <Link to="upload-file">
          <button className="btn">
            <AiOutlinePlusCircle />
            <span>Upload</span>
          </button>
        </Link>
        <Link to="modify">
          <button className="btn">
            <AiOutlinePlusCircle />
            <span>Modify</span>
          </button>
        </Link>
        <Link to="manually">
          <button className="btn">
            <AiOutlinePlusCircle />
            <span>Manually</span>
          </button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
