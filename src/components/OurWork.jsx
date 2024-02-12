import { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import LazyLoad from "react-lazyload";
import { BallTriangle } from "react-loader-spinner";

// Импорт изображений для каждого проекта
import alegro1 from "../assets/images/Alegro/alegro1.jpg";
import alegro2 from "../assets/images/Alegro/alegro2.jpg";
import alegro4 from "../assets/images/Alegro/alegro4.jpg";
import alegro5 from "../assets/images/Alegro/alegro5.jpg";
import alegro6 from "../assets/images/Alegro/alegro6.jpg";
import alegro7 from "../assets/images/Alegro/alegro7.jpg";
import alegro8 from "../assets/images/Alegro/alegro8.jpg";
import alegro9 from "../assets/images/Alegro/alegro9.jpg";
import alegro10 from "../assets/images/Alegro/alegro10.jpg";
import alegro11 from "../assets/images/Alegro/alegro11.jpg";
import alegro12 from "../assets/images/Alegro/alegro12.jpg";
import office1 from "../assets/images/Office/office1.png";
import office2 from "../assets/images/Office/office2.png";
import office3 from "../assets/images/Office/office3.png";
import office4 from "../assets/images/Office/office4.png";
import office5 from "../assets/images/Office/office5.png";
import office6 from "../assets/images/Office/office6.png";

import clothes1 from "../assets/images/Clothes/clothes1.png";
import clothes2 from "../assets/images/Clothes/clothes2.png";
import clothes3 from "../assets/images/Clothes/clothes3.png";
import clothes5 from "../assets/images/Clothes/clothes5.png";
import clothes6 from "../assets/images/Clothes/clothes6.png";
import clothes7 from "../assets/images/Clothes/clothes7.png";
import clothes8 from "../assets/images/Clothes/clothes8.png";

import coats1 from "../assets/images/Coats/coats1.png";
import coats3 from "../assets/images/Coats/coats3.png";
import coats4 from "../assets/images/Coats/coats4.png";
import coats5 from "../assets/images/Coats/coats5.png";
import coats6 from "../assets/images/Coats/coats1.png";

import house1 from "../assets/images/HouseAbloun/ablo1.png";
import house2 from "../assets/images/HouseAbloun/ablo2.png";
import house3 from "../assets/images/HouseAbloun/ablo3.png";
import house4 from "../assets/images/HouseAbloun/ablo4.png";

import in1 from "../assets/images/IntAblon/in1-min.png";
import in2 from "../assets/images/IntAblon/in2-min.png";
import in3 from "../assets/images/IntAblon/in3-min.png";
import in4 from "../assets/images/IntAblon/in4-min.png";
import in5 from "../assets/images/IntAblon/in5-min.png";
import in6 from "../assets/images/IntAblon/in6-min.png";
import in7 from "../assets/images/IntAblon/in7-min.png";
import in8 from "../assets/images/IntAblon/in8-min.png";
import in9 from "../assets/images/IntAblon/in9-min.png";

// import hon1 from '../assets/images/Honf/hon1-min.png';
// import hon2 from '../assets/images/Honf/hon2-min.png';
// import hon3 from '../assets/images/Honf/hon3-min.png';
// import hon4 from '../assets/images/Honf/hon4-min.png';
import hon5 from "../assets/images/Honf/hon5-min.png";
import hon6 from "../assets/images/Honf/hon6-min.png";
import hon7 from "../assets/images/Honf/hon7-min.png";
import hon8 from "../assets/images/Honf/hon8-min.png";

import ger1 from "../assets/images/Germ/ger1-min.png";
import ger2 from "../assets/images/Germ/ger2-min.png";
import ger3 from "../assets/images/Germ/ger3-min.png";
import ger4 from "../assets/images/Germ/ger4-min.png";
import ger5 from "../assets/images/Germ/ger5-min.png";
import ger6 from "../assets/images/Germ/ger6-min.png";
import ger7 from "../assets/images/Germ/ger7-min.png";
import ger8 from "../assets/images/Germ/ger8-min.png";
import ger9 from "../assets/images/Germ/ger9-min.png";
import ger10 from "../assets/images/Germ/ger10-min.png";
import ger11 from "../assets/images/Germ/ger11-min.png";
import ger12 from "../assets/images/Germ/ger12-min.png";
import ger13 from "../assets/images/Germ/ger13-min.png";
import ger14 from "../assets/images/Germ/ger14-min.png";
import ger15 from "../assets/images/Germ/ger15-min.png";
import ger16 from "../assets/images/Germ/ger16-min.png";
import ger17 from "../assets/images/Germ/ger17-min.png";
import ger18 from "../assets/images/Germ/ger18-min.png";
import ger19 from "../assets/images/Germ/ger19-min.png";
import ger20 from "../assets/images/Germ/ger20-min.png";
import ger21 from "../assets/images/Germ/ger21-min.png";
import ger22 from "../assets/images/Germ/ger22-min.png";
import ger23 from "../assets/images/Germ/ger23-min.png";

import green1 from "../assets/images/Green/green1-min.jpg";
import green2 from "../assets/images/Green/green2-min.jpg";
import green3 from "../assets/images/Green/green3-min.jpg";
import green4 from "../assets/images/Green/green4-min.jpg";
import green5 from "../assets/images/Green/green5-min.jpg";
import green6 from "../assets/images/Green/green6-min.jpg";
import green7 from "../assets/images/Green/green7-min.jpg";
import green8 from "../assets/images/Green/green8-min.jpg";
import green9 from "../assets/images/Green/green9-min.jpg";
import green10 from "../assets/images/Green/green10-min.jpg";
import green11 from "../assets/images/Green/green11-min.jpg";
import green12 from "../assets/images/Green/green12-min.jpg";
import green13 from "../assets/images/Green/green13-min.jpg";
import green14 from "../assets/images/Green/green14-min.jpg";
import green15 from "../assets/images/Green/green15-min.jpg";
import green16 from "../assets/images/Green/green16-min.jpg";
import green17 from "../assets/images/Green/green17-min.jpg";
import green18 from "../assets/images/Green/green18-min.jpg";
import green19 from "../assets/images/Green/green19-min.jpg";
import green20 from "../assets/images/Green/green20-min.jpg";
import green21 from "../assets/images/Green/green21-min.jpg";
import green22 from "../assets/images/Green/green22-min.jpg";
import green23 from "../assets/images/Green/green23-min.jpg";
import green24 from "../assets/images/Green/green24-min.jpg";
import green25 from "../assets/images/Green/green25-min.jpg";

import bea1 from "../assets/images/Bea/bea1-min.jpg";
import bea2 from "../assets/images/Bea/bea2-min.jpg";
import bea3 from "../assets/images/Bea/bea3-min.jpg";
import bea4 from "../assets/images/Bea/bea4-min.jpg";
import bea5 from "../assets/images/Bea/bea5-min.jpg";

import fl1 from "../assets/images/Flat/fl1-min.jpg";
import fl2 from "../assets/images/Flat/fl2-min.jpg";
import fl3 from "../assets/images/Flat/fl3-min.jpg";
import fl4 from "../assets/images/Flat/fl4-min.jpg";
import fl5 from "../assets/images/Flat/fl5-min.jpg";
import fl6 from "../assets/images/Flat/fl6-min.jpg";
import fl7 from "../assets/images/Flat/fl7-min.jpg";
import fl8 from "../assets/images/Flat/fl8-min.jpg";

import re1 from "../assets/images/Re2/re1-min.jpg";
import re2 from "../assets/images/Re2/re2-min.jpg";
import re3 from "../assets/images/Re2/re3-min.jpg";
import re4 from "../assets/images/Re2/re4-min.jpg";
import re5 from "../assets/images/Re2/re5-min.jpg";

import { useTranslation } from "react-i18next";

const imagesByProject = {
  "Alegro-Paris": [
    alegro1,
    alegro2,
    alegro4,
    alegro5,
    alegro6,
    alegro7,
    alegro8,
    alegro9,
    alegro10,
    alegro11,
    alegro12,
  ],
  "Office-Project": [office1, office2, office3, office4, office5, office6],
  "Clothes-boutique": [
    clothes1,
    clothes2,
    clothes3,
    clothes5,
    clothes7,
    clothes8,
    clothes6,
  ],
  "Coat-store": [coats1, coats3, coats4, coats5, coats6],
  "House-Ablon": [house1, house2, house3, house4],
  "Interier-Ablon": [in1, in2, in3, in4, in5, in6, in7, in8, in9],
  "Interier-Honfleur": [hon5, hon6, hon7, hon8],
  "Hanover-Germany": [
    ger1,
    ger2,
    ger3,
    ger4,
    ger5,
    ger6,
    ger7,
    ger8,
    ger9,
    ger10,
    ger11,
    ger12,
    ger13,
    ger14,
    ger15,
    ger16,
    ger17,
    ger18,
    ger19,
    ger20,
    ger21,
    ger22,
    ger23,
  ],
  "Office Green Farm Cosmetic": [
    green1,
    green2,
    green3,
    green4,
    green5,
    green6,
    green7,
    green8,
    green9,
    green10,
    green11,
    green12,
    green13,
    green14,
    green15,
    green16,
    green17,
    green18,
    green19,
    green20,
    green21,
    green22,
    green23,
    green24,
    green25,
  ],
  "Beauty store": [bea1, bea2, bea3, bea4, bea5],
  "Apartment interior": [fl1, fl2, fl3, fl4, fl5,fl6,fl7,fl8],
  "Restaurant in Honfleur. France": [re1, re2, re3, re4, re5],
};


const OurWork = () => {
  const { t } = useTranslation("translation");

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [selectedTabIndex]);

  const handleTabChange = (index) => {
    setSelectedTabIndex(index);
  };

  const currentProject = Object.keys(imagesByProject)[selectedTabIndex];

  return (
    <div className="m-8" id="projects">
      <Tabs value={selectedTabIndex} onChange={handleTabChange}>
        <TabsHeader className="flex-wrap justify-center overflow-x-auto">
          {Object.keys(imagesByProject).map((project, index) => (
            <Tab
              key={index}
              value={index}
              className={`m-1 w-[140px] md:max-w-sm h-[60px] md:w-[260px] md:h-[80px] text-[16px] md:text-[18px] rounded-sm border-[#9E8372] border-[2px]  ${
                selectedTabIndex === index ? "bg-[#5F5F5F] text-white" : ""
              }`}
              onClick={() => handleTabChange(index)}
            >
              {t(project)}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody className="grid grid-cols-1 gap-4">
          <TabPanel
            value={selectedTabIndex}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {imagesByProject[currentProject].map((imageLink, imgIndex) => (
              <LazyLoad key={imgIndex} height={200} offset={100}>
                <div className="flex justify-center items-center relative">
                  {loading ? (
                    <div
                      className="loader-overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                      }}
                    >
                      <BallTriangle
                        height={30}
                        width={30}
                        radius={5}
                        color="#ffffff"
                        ariaLabel="ball-triangle-loading"
                      />
                    </div>
                  ) : null}
                  <img
                    onLoad={() => setLoading(false)}
                    className="h-[200px] w-[320px] md:w-[600px] md:h-[200px] lg:h-[400px] rounded-lg object-cover object-center"
                    src={imageLink}
                    alt={`image-${imgIndex}`}
                    loading="lazy"
                  />
                </div>
              </LazyLoad>
            ))}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default OurWork;