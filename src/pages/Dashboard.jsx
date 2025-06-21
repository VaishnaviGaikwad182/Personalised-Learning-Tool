import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MarksUploader from '../components/MarksUploader';
import FAModeSelector from '../components/FAModeSelector';
import QuerySection from '../components/QuerySection';
import ClassStats from '../components/ClassStats';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Topbar />
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MarksUploader />
            <FAModeSelector />
            <ClassStats />
          </div>
          <QuerySection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
