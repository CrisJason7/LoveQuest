import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import LoginModal from "../Modal/LoginModal";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const loginWithGoogle = useGoogleLogin({
    onSuccess: codeResponse =>
      console.log("Google login success", codeResponse),
    flow: "auth-code"
  });

  const loginWithFacebook = () => {
    console.log("Facebook login success");
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">LoveQuest</h1>

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

        <div>
          <button
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={toggleModal}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {/* Modal */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onGoogleLogin={loginWithGoogle}
        onFacebookLogin={loginWithFacebook}
      />
    </header>
  );
};

export default Header;
