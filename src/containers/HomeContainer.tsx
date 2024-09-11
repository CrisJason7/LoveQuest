import React, { useState } from "react";
import Home from "../pages/Home/Home"; // Import component trình bày
// import { fetchHomeData } from '../services/api'; // Một hàm fetch dữ liệu

const HomeContainer: React.FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return <div>{loading ? <div>Loading...</div> : <Home data={data} />}</div>;
};

export default HomeContainer;
