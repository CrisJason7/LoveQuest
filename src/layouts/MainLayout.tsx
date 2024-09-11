import React from "react";
import { Outlet } from "react-router-dom"; // Sử dụng để render các page con
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="content-wrapper">
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
