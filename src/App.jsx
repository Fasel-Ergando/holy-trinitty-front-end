import { Routes, Route } from "react-router-dom";
import PersistentLogin from "./components/PersistentLogin";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MainHome from "./pages/MainHome";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import DashboardLessonPlan from "./components/DashboardLessonPlan";
import DashboardUpload from "./components/DashboardUpload";
import DashboardAttendance from "./components/DashboardAttendance";
import DashboardReport from "./components/DashboardReport";
import DashboardHome from "./components/DashboardHome";
import DashboardCheckPayment from "./components/DashboardCheckPayment";
import DashboardSchedule from "./components/DashboardSchedule";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import UploadForm from "./components/UploadForm";

import DashboardResultModify from "./components/DashboardResultModify";

import Tunnel from "./components/Tunnel";

import Result from "./components/dashboard/result/Result";
import ResultHome from "./components/dashboard/result/ResultHome";
import UploadManually from "./components/dashboard/result/UploadManually";
import UploadFile from "./components/dashboard/result/UploadFile";

import ScheduleNew from "./components/dashboard/schedule/ScheduleNew";
import Schedule from "./components/dashboard/schedule/Schedule";

import Assessment from "./components/dashboard/assessment/Assessment";
import AssessmentHome from "./components/dashboard/assessment/AssessmentHome";

import StudentsHome from "./components/dashboard/students/StudentsHome";
import StudentProfile from "./components/dashboard/students/StudentProfile";

import Attendance from "./components/dashboard/attendance/Attendance";
import FillAttendance from "./components/dashboard/attendance/FillAttendance";

import Events from "./components/dashboard/events/Events";

import Registration from "./components/dashboard/registration/Registration";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PersistentLogin />}>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<MainHome />} />
            <Route path="/" element={<MainHome />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="" element={<DashboardHome />} />

              <Route path="schedule" element={<Tunnel />}>
                <Route path="" element={<Schedule />} />
                <Route path="new" element={<ScheduleNew />} />
              </Route>

              <Route path="students" element={<Tunnel />}>
                <Route path="" element={<StudentsHome />} />
                <Route path="profile" element={<StudentProfile />} />
              </Route>

              <Route path="check-payment" element={<DashboardCheckPayment />} />

              <Route path="result" element={<Result />}>
                <Route path="" element={<ResultHome />} />

                <Route path="upload-file" element={<Tunnel />}>
                  <Route path="" element={<UploadForm />} />
                  <Route path="upload" element={<UploadFile />} />
                </Route>
                <Route path="manually" element={<Tunnel />}>
                  <Route path="" element={<UploadForm />} />
                  <Route path="upload" element={<UploadManually />} />
                </Route>
                <Route path="modify" element={<DashboardResultModify />} />
              </Route>

              <Route path="assessment" element={<Tunnel />}>
                <Route path="upload" element={<Assessment />} />
                <Route path="" element={<AssessmentHome />} />
              </Route>

              <Route path="upload" element={<DashboardUpload />} />

              <Route path="attendance" element={<Tunnel />}>
                <Route path="" element={<Attendance />} />
                <Route path="u" element={<FillAttendance />} />
              </Route>

              <Route path="events" element={<Tunnel />}>
                <Route path="" element={<Events />} />
              </Route>

              <Route path="registration" element={<Tunnel />}>
                <Route path="" element={<Registration />} />
              </Route>

              <Route path="report" element={<DashboardReport />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="/*" element={<h1>not found</h1>} />
    </Routes>
  );
}
