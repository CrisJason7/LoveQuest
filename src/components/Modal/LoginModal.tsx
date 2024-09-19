import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onGoogleLogin,
  onFacebookLogin
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
        <p className="mb-4">Chọn phương thức đăng nhập:</p>
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 mb-4 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full"
          onClick={onGoogleLogin}
        >
          Đăng nhập bằng Google
        </button>
        <button
          className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 transition-all duration-300 w-full"
          onClick={onFacebookLogin}
        >
          Đăng nhập bằng Facebook
        </button>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
