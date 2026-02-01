import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

/* Common */
import Navbar from "./components/Navbar";

/* Pages */
import RoleSelectionPage from "./pages/RoleSelectionPage";

/* Auth */
import LoginPage from "./features/auth/LoginPage";
import SignUpPage from "./features/auth/SignUpPage";
import TeacherSignUpPage from "./features/auth/TeacherSignUpPage";
import ForgotPassword from "./features/auth/ForgotPassword";

/* Layouts */
import StudentLayout from "./layouts/StudentLayout";
import TeacherLayout from "./layouts/TeacherLayout";

/* Teacher Pages */
import Dashboard from "./features/teacher/Dashboard";
import FAMode from "./features/teacher/FAMode";
import Queries from "./features/teacher/Queries";
import SubmissionStatus from "./features/teacher/SubmissionStatus";
import MarksUpload from "./features/teacher/MarksUpload";

/* Navbar wrapper */
const AppLayout = ({ children }) => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/",
    "/login",
    "/signup",
    "/signup/teacher",
    "/forgot-password",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
};

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<RoleSelectionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/teacher" element={<TeacherSignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Teacher */}
        <Route path="/teacher/*" element={<TeacherLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="fa-mode" element={<FAMode />} />
          <Route path="queries" element={<Queries />} />
          <Route path="submission-status" element={<SubmissionStatus />} />
          <Route path="marks-upload" element={<MarksUpload />} />
        </Route>

        {/* Student */}
        <Route path="/student/*" element={<StudentLayout />} />
      </Routes>
    </AppLayout>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
