import axios from "axios";

// Tạo một instance của axios
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Thay bằng URL API của bạn
  timeout: 10000 // Thời gian chờ của request
});

// Thêm request interceptor để thêm token vào header (nếu cần)
axiosInstance.interceptors.request.use(
  config => {
    // Lấy token từ localStorage (hoặc bất cứ đâu bạn lưu trữ)
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    // Xử lý lỗi trước khi request được gửi
    return Promise.reject(error);
  }
);

// Thêm response interceptor để xử lý response hoặc lỗi
axiosInstance.interceptors.response.use(
  response => {
    // Xử lý response thành công
    return response;
  },
  error => {
    // Xử lý lỗi
    if (error.response.status === 401) {
      // Ví dụ: Token hết hạn, điều hướng về trang login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
