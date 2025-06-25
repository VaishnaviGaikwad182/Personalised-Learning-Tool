import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import RoleSelectionPage from './components/RoleSelectionPage';
import LoginPage from './components/LoginPage';
import SignUpPage from "./components/SignUpPage";
import ForgotPassword from "./components/ForgotPassword";
import TeacherSignUpPage from "./components/TeacherSignUpPage";
import Dashboard from "./pages/Dashboard";
import logo from "./assets/logo.png";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/login', '/signup', '/forgot-password', '/signup/teacher'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && (
        <nav className="bg-indigo-100 text-black flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="College Logo" className="w-20 h-20 object-contain" />
            <h1 className="text-xl font-bold">Pimpri Chinchwad College of Engineering</h1>
          </div>
          <ul className="flex gap-6">
            <li><Link to="/dashboard" className="hover:underline font-bold">Dashboard</Link></li>
            <li><Link to="/login" className="hover:underline mr-4 font-bold">Login</Link></li>
          </ul>
        </nav>
      )}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<RoleSelectionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup/teacher" element={<TeacherSignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
