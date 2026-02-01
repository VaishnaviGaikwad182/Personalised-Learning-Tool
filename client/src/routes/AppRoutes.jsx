import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import SignUpPage from "../features/auth/SignUpPage";
import TeacherSignUpPage from "../features/auth/TeacherSignUpPage";
import StudentDashboard from "../features/student/StudentDashboard";
import TeacherDashboard from "../features/teacher/Dashboard";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/teacher" element={<TeacherSignUpPage />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
    </Routes>
  </Router>
);

export default AppRoutes;
