import React from "react";

import Slider from "../components/slider/Slider";
import Catagories from "../components/catagories/Catagories";
import Accessories from "../components/accessories/Accessories";
import PopularProducts from "../components/popularProduct/PopularProducts";
import News from "../components/news/News";
import Clients from "../components/clients/Clients";

const UserHome = () => {
  return (
    <div>
      <Slider />
      <Catagories />
      <Accessories />
      <PopularProducts />
      <News />
      <Clients />
    </div>
  );
};

export default UserHome;
