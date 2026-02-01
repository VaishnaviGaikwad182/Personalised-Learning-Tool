import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../features/teacher/Sidebar";

const TeacherLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <TeacherSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;
