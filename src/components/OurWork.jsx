import alegro1 from "../assets/images/Alegro/alegro1.png";
import alegro2 from "../assets/images/Alegro/alegro2.png";
import alegro3 from "../assets/images/Alegro/alegro3.png";
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

import { useState } from 'react';

import office1 from "../assets/images/Office/office1.png";
import office2 from "../assets/images/Office/office2.png";
import office3 from "../assets/images/Office/office3.png";
import office4 from "../assets/images/Office/office4.png";
import office5 from "../assets/images/Office/office5.png";
import office6 from "../assets/images/Office/office6.png";

import clothes1 from "../assets/images/Clothes/clothes1.png";
import clothes2 from "../assets/images/Clothes/clothes2.png";
import clothes3 from "../assets/images/Clothes/clothes3.png";
import clothes4 from "../assets/images/Clothes/clothes4.png";
import clothes5 from "../assets/images/Clothes/clothes5.png";
import clothes6 from "../assets/images/Clothes/clothes6.png";
import clothes7 from "../assets/images/Clothes/clothes7.png";
import clothes8 from "../assets/images/Clothes/clothes8.png";

import coats1 from '../assets/images/Coats/coats1.png'
import coats2 from '../assets/images/Coats/coats2.png'
import coats3 from '../assets/images/Coats/coats3.png'
import coats4 from '../assets/images/Coats/coats4.png'
import coats5 from '../assets/images/Coats/coats5.png'
import coats6 from '../assets/images/Coats/coats1.png'


import house1 from '../assets/images/HouseAbloun/ablo1.png'
import house2 from '../assets/images/HouseAbloun/ablo2.png'
import house3 from '../assets/images/HouseAbloun/ablo3.png'
import house4 from '../assets/images/HouseAbloun/ablo4.png'
import house5 from '../assets/images/HouseAbloun/ablo5.png'
import house6 from '../assets/images/HouseAbloun/ablo1.png'

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
          imageLink: alegro3,
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
          imageLink: clothes4,
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
        {
          imageLink: clothes1,
        },
      ],
    },
    {
      label: "Coast-shop",
      value: "Coast-shop",
      images: [
        {
          imageLink:
          coats1        },
        {
          imageLink:
          coats2        },
        {
          imageLink:
          coats3        },
        {
          imageLink:
          coats4        },
        {
          imageLink:
          coats5        },
          {
            imageLink:
            coats6        },
      ],
    },
    {
      label: "House-Ablon",
      value: "House-Ablon",
      images: [
        {
          imageLink:
          house1        },
        {
          imageLink:
          house2        },
        {
          imageLink:
          house3        },
        {
          imageLink:
          house4        },
        {
          imageLink:
          house5        },
        {
          imageLink:
          house6        },
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
              className={`rounded-sm max-w-sm text-[10px] md:text-[18px] border-[#9E8372] border-[2px] mr-1 ${selectedTabIndex === index ? 'bg-[#5F5F5F] text-white' : ''}`}
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