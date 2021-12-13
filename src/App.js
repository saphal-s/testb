
import React from "react";
import HeroSection from "./component/herosec/HeroSection";
import DiscountP from "./component/nav/discount/DiscountP";
import Footers from "./component/nav/footer/Footers";
import Header from "./component/nav/Header";
import ScrollButton from "./component/nav/scroll/ScrollButton";
import Service from "./component/nav/service/Service";
import BestSellers from "./component/page/bestseller/BestSellers";
import Featured from "./component/page/featured/Featured";
import LatestArrivals from "./component/page/latestarrivals/LatestArrivals";
import SkinCareGuide from "./component/page/skincareguide/SkinCareGuide";
import Spotlights from "./component/page/spotlight/Spolights";
import Spotlightt from "./component/page/spotlight/Spolightt";
import Spotlight from "./component/page/spotlight/Spotlight";
import Trending from "./component/page/Trending/Trending";


function App() {
  return (
    <>
      <DiscountP/>
      <Header/> 
      <HeroSection/>
      <BestSellers/>
      <Spotlight/>
      <LatestArrivals/>
      <Spotlights/>
      <Trending/>
      <Spotlightt/>
      <Featured/>
      <Service/>
      <SkinCareGuide/>
      <Footers/>
      <ScrollButton/>
    </>
  );
}

export default App;
