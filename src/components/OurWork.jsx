import { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import LazyLoad from "react-lazyload";

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

import hon1 from '../assets/images/Honf/hon1-min.png';
import hon2 from '../assets/images/Honf/hon2-min.png';
import hon3 from '../assets/images/Honf/hon3-min.png';
import hon4 from '../assets/images/Honf/hon4-min.png';
import hon5 from '../assets/images/Honf/hon5-min.png';
import hon6 from '../assets/images/Honf/hon6-min.png';
import hon7 from '../assets/images/Honf/hon7-min.png';
import hon8 from '../assets/images/Honf/hon8-min.png';

import ger1 from '../assets/images/Germ/ger1-min.png';
import ger2 from '../assets/images/Germ/ger2-min.png';
import ger3 from '../assets/images/Germ/ger3-min.png';
import ger4 from '../assets/images/Germ/ger4-min.png';
import ger5 from '../assets/images/Germ/ger5-min.png';
import ger6 from '../assets/images/Germ/ger6-min.png';
import ger7 from '../assets/images/Germ/ger7-min.png';
import ger8 from '../assets/images/Germ/ger8-min.png';
import ger9 from '../assets/images/Germ/ger9-min.png';
import ger10 from '../assets/images/Germ/ger10-min.png';
import ger11 from '../assets/images/Germ/ger11-min.png';
import ger12 from '../assets/images/Germ/ger12-min.png';
import ger13 from '../assets/images/Germ/ger13-min.png';
import ger14 from '../assets/images/Germ/ger14-min.png';
import ger15 from '../assets/images/Germ/ger15-min.png';
import ger16 from '../assets/images/Germ/ger16-min.png';
import ger17 from '../assets/images/Germ/ger17-min.png';
import ger18 from '../assets/images/Germ/ger18-min.png';
import ger19 from '../assets/images/Germ/ger19-min.png';
import ger20 from '../assets/images/Germ/ger20-min.png';
import ger21 from '../assets/images/Germ/ger21-min.png';
import ger22 from '../assets/images/Germ/ger22-min.png';
import ger23 from '../assets/images/Germ/ger23-min.png';


const imagesByProject = {
  "Alegro-Paris": [alegro1, alegro2, alegro4, alegro5, alegro6, alegro7, alegro8, alegro9, alegro10, alegro11, alegro12],
  "Office-Project": [office1, office2, office3, office4, office5, office6],
  "Clothes-boutique": [clothes1, clothes2, clothes3, clothes5, clothes7, clothes8, clothes6],
  "Coat-store": [coats1, coats3, coats4, coats5, coats6],
  "House-Ablon": [house1, house2, house3, house4],
  "Interier-Ablon": [in1, in2, in3, in4, in5, in6, in7, in8, in9],
  "Interier-Honfleur": [hon1, hon2, hon3, hon4, hon5, hon6, hon7, hon8, in9],
  "Hanover-Germany": [ger1, ger2, ger3, ger4, ger5, ger6, ger7, ger8, ger9, ger10, ger11, ger12, ger13, ger14, ger15, ger16, ger17, ger18, ger19, ger20, ger21, ger22, ger23],
};

const OurWork = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTabIndex(index);
  };

  const currentProject = Object.keys(imagesByProject)[selectedTabIndex];

  return (
    <div className="m-8" id="projects">
      <Tabs value={selectedTabIndex} onChange={handleTabChange}>
        <TabsHeader className="flex-wrap justify-center md:flex-nowrap">
          {Object.keys(imagesByProject).map((project, index) => (
            <Tab
              key={index}
              value={index}
              className={`rounded-sm max-w-sm w-[180px] h-[40px] mb-1 md:w-full md:h-[60px] text-[16px] md:text-[16px] border-[#9E8372] border-[2px] mr-1 ${
                selectedTabIndex === index ? "bg-[#5F5F5F] text-white" : ""
              }`}
              onClick={() => handleTabChange(index)}
            >
              {project}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody className="grid grid-cols-1 gap-4">
          <TabPanel value={selectedTabIndex} className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {imagesByProject[currentProject].map((imageLink, imgIndex) => (
              <LazyLoad key={imgIndex} height={200} offset={100}>
                <div className="flex justify-center items-center">
                  <img
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