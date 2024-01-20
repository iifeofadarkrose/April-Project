import alegro1 from "../assets/images/Alegro/alegro1.png";
import alegro2 from "../assets/images/Alegro/alegro2.png";

import alegro4 from "../assets/images/Alegro/alegro4.png";
import alegro5 from "../assets/images/Alegro/alegro5.png";
import alegro6 from "../assets/images/Alegro/alegro6.png";
import alegro7 from "../assets/images/Alegro/alegro7.png";
import alegro8 from "../assets/images/Alegro/alegro8.png";
import alegro9 from "../assets/images/Alegro/alegro9.png";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { useState } from "react";

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

import in1 from "../assets/images/IntAblon/in1.png";
import in2 from "../assets/images/IntAblon/in2.png";
import in3 from "../assets/images/IntAblon/in3.png";
import in4 from "../assets/images/IntAblon/in4.png";
import in5 from "../assets/images/IntAblon/in5.png";
import in6 from "../assets/images/IntAblon/in6.png";
import in7 from "../assets/images/IntAblon/in7.png";
import in8 from "../assets/images/IntAblon/in8.png";
import in9 from "../assets/images/IntAblon/in9.png";


import hon1 from '../assets/images/Honf/hon1.png'
import hon2 from '../assets/images/Honf/hon2.png'
import hon3 from '../assets/images/Honf/hon3.png'
import hon4 from '../assets/images/Honf/hon4.png'
import hon5 from '../assets/images/Honf/hon5.png'
import hon6 from '../assets/images/Honf/hon6.png'
import hon7 from '../assets/images/Honf/hon7.png'
import hon8 from '../assets/images/Honf/hon8.png'

import ger1 from '../assets/images/Germ/ger1.png'
import ger2 from '../assets/images/Germ/ger2.png'
import ger3 from '../assets/images/Germ/ger3.png'
import ger4 from '../assets/images/Germ/ger4.png'
import ger5 from '../assets/images/Germ/ger5.png'
import ger6 from '../assets/images/Germ/ger6.png'
import ger7 from '../assets/images/Germ/ger7.png'
import ger8 from '../assets/images/Germ/ger8.png'
import ger9 from '../assets/images/Germ/ger9.png'
import ger10 from '../assets/images/Germ/ger10.png'
import ger11 from '../assets/images/Germ/ger11.png'
import ger12 from '../assets/images/Germ/ger12.png'
import ger13 from '../assets/images/Germ/ger13.png'
import ger14 from '../assets/images/Germ/ger14.png'
import ger15 from '../assets/images/Germ/ger15.png'
import ger16 from '../assets/images/Germ/ger16.png'
import ger17 from '../assets/images/Germ/ger17.png'
import ger18 from '../assets/images/Germ/ger18.png'
import ger19 from '../assets/images/Germ/ger19.png'
import ger20 from '../assets/images/Germ/ger20.png'
import ger21 from '../assets/images/Germ/ger21.png'
import ger22 from '../assets/images/Germ/ger22.png'
import ger23 from '../assets/images/Germ/ger23.png'


const OurWork = () => {
  const data = [
    {
      label: "Alegro-Paris",
      value: "Alegro-Paris",
      images: [
        {
          imageLink: alegro1,
        },
        {
          imageLink: alegro2,
        },

        {
          imageLink: alegro4,
        },
        {
          imageLink: alegro5,
        },
        {
          imageLink: alegro6,
        },

        {
          imageLink: alegro7,
        },
        {
          imageLink: alegro8,
        },
        {
          imageLink: alegro9,
        },
      ],
    },
    {
      label: "Office-Project",
      value: "Office-Project",
      images: [
        {
          imageLink: office1,
        },
        {
          imageLink: office2,
        },
        {
          imageLink: office3,
        },
        {
          imageLink: office4,
        },
        {
          imageLink: office5,
        },
        {
          imageLink: office6,
        },
      ],
    },
    {
      label: "Clothes-boutique",
      value: "Clothes-boutique",
      images: [
        {
          imageLink: clothes1,
        },
        {
          imageLink: clothes2,
        },
        {
          imageLink: clothes3,
        },

        {
          imageLink: clothes5,
        },
        {
          imageLink: clothes7,
        },
        {
          imageLink: clothes8,
        },
        {
          imageLink: clothes6,
        },
      ],
    },
    {
      label: "Coat-store",
      value: "Coat-store",
      images: [
        {
          imageLink: coats1,
        },

        {
          imageLink: coats3,
        },
        {
          imageLink: coats4,
        },
        {
          imageLink: coats5,
        },
        {
          imageLink: coats6,
        },
      ],
    },
    {
      label: "House-Ablon",
      value: "House-Ablon",
      images: [
        {
          imageLink: house1,
        },
        {
          imageLink: house2,
        },
        {
          imageLink: house3,
        },
        {
          imageLink: house4,
        },
      ],
    },
    {
      label: "Interier-Ablon",
      value: "Interier-Ablon",
      images: [
        {
          imageLink: in1,
        },
        {
          imageLink: in2,
        },
        {
          imageLink: in3,
        },
        {
          imageLink: in4,
        },
        {
          imageLink: in5,
        },
        {
          imageLink: in6,
        },
        {
          imageLink: in7,
        },
        {
          imageLink: in8,
        },
        {
          imageLink: in9,
        },
      ],
    },
    {
      label: "Interier-Honfleur",
      value: "Interier-Honfleur",
      images: [
        {
          imageLink: hon1,
        },
        {
          imageLink: hon2,
        },
        {
          imageLink: hon3,
        },
        {
          imageLink: hon4,
        },
        {
          imageLink: hon5,
        },
        {
          imageLink: hon6,
        },
        {
          imageLink: hon7,
        },
        {
          imageLink: hon8,
        },
        {
          imageLink: in9,
        },
      ],
    },
    {
      label: "Hanover-Germany",
      value: "Hanover-Germany",
      images: [
        {
          imageLink: ger1,
        },
        {
          imageLink: ger2,
        },
        {
          imageLink: ger3,
        },
        {
          imageLink: ger4,
        },
        {
          imageLink: ger5,
        },
        {
          imageLink: ger6,
        },
        {
          imageLink: ger7,
        },
        {
          imageLink: ger8,
        },
        {
          imageLink: ger9,
        },
        {
          imageLink: ger10,
        },
        {
          imageLink: ger11,
        },
        {
          imageLink: ger12,
        },
        {
          imageLink: ger13,
        },
        {
          imageLink: ger14,
        },
        {
          imageLink: ger15,
        },
        {
          imageLink: ger16,
        },
        {
          imageLink: ger17,
        },
        {
          imageLink: ger18,
        },
        {
          imageLink: ger19,
        },
        {
          imageLink: ger20,
        },
        {
          imageLink: ger21,
        },
        {
          imageLink: ger22,
        },
        {
          imageLink: ger23,
        },
        
      ],
    },
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="m-8" id="projects">
      <Tabs value={selectedTabIndex} onChange={handleTabChange}>
        <TabsHeader>
          {data.map(({ label }, index) => (
            <Tab
              key={index}
              value={index}
              className={`rounded-sm max-w-sm text-[10px] md:text-[16px] border-[#9E8372] border-[2px] mr-1 ${
                selectedTabIndex === index ? "bg-[#5F5F5F] text-white" : ""
              }`}
              onClick={() => handleTabChange(index)} // Добавил обработчик клика
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody className="grid grid-cols-1 gap-4 ">
          {data.map(({ images }, index) => (
            <TabPanel
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
              key={index}
              value={index}
            >
              {images?.map(({ imageLink }, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    className="h-[200px] w-full md:h-[320px] max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default OurWork;
