import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo hoặc tiêu đề */}
        <h1 className="text-3xl font-bold">LoveQuest</h1>

        {/* Menu điều hướng */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:underline">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>

        {/* Button Đăng nhập */}
        <div>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
