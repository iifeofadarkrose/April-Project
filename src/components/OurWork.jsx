import { useState } from "react";
import { Tabs, TabsBody, TabPanel } from "@material-tailwind/react";
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

const OurWork = () => {
  const projects = [
    {
      name: "Alegro Paris",
      images: [
        alegro12,
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
      ],
      translationKey: "alegro-paris",
    },
    {
      name: "House Ablon",
      images: [house1, house2, house3, house4],
      translationKey: "house-ablon",
    },
    {
      name: "Interior Ablon",
      images: [in1, in2, in3, in4, in5, in6, in7, in8, in9],
      translationKey: "interior-ablon",
    },
    {
      name: "Honfleur",
      images: [hon5, hon6, hon7, hon8],
      translationKey: "honfleur",
    },
    {
      name: "Residential",
      images: [re1, re2, re3, re4, re5],
      translationKey: "residential",
    },
    {
      name: "Flat Design",
      images: [fl1, fl2, fl3, fl4, fl5, fl6, fl7, fl8],
      translationKey: "flat-design",
    },
    {
      name: "Office Project",
      images: [office1, office2, office3, office4, office5, office6],
      translationKey: "office-project",
    },
    {
      name: "German House",
      images: [
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
      translationKey: "german-house",
    },
    {
      name: "Clothes Boutique",
      images: [
        clothes1,
        clothes2,
        clothes3,
        clothes5,
        clothes6,
        clothes7,
        clothes8,
      ],
      translationKey: "clothes-boutique",
    },
    {
      name: "Coat Store",
      images: [coats1, coats3, coats4, coats5, coats6],
      translationKey: "coat-store",
    },

    {
      name: "Green Home",
      images: [
        green24,
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
       
        green25,
      ],
      translationKey: "green-home",
    },
    {
      name: "Beach House",
      images: [bea1, bea2, bea3, bea4, bea5],
      translationKey: "beach-house",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackButtonClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="m-8" id="projects">
      {!selectedProject ? (
        <Tabs value={0}>
          <TabsBody className="grid grid-cols-1 gap-4">
            <TabPanel value={0} className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {projects.map((project, index) => (
                <LazyLoad key={index} height={200} offset={100}>
                  <div className="flex flex-col items-center relative">
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
                      className="h-[200px] w-[320px] md:w-[600px] md:h-[200px] lg:h-[400px] rounded-lg object-cover object-center cursor-pointer hover:border-2 hover:border-gray-700"
                      src={project.images[0]}
                      alt={project.name}
                      loading="lazy"
                      onClick={() => handleImageClick(project)}
                    />
                    <div className="bg-black bg-opacity-50 md:text-2xl text-white absolute bottom-0 left-0 right-0 py-1 text-center">
                      {project.name}
                    </div>
                  </div>
                </LazyLoad>
              ))}
            </TabPanel>
          </TabsBody>
        </Tabs>
      ) : (
        <div>
          <button onClick={handleBackButtonClick} className="bg-[#D9D9D9] text-black px-4 py-2 rounded-lg mb-4 border border-sm border-black">Back</button>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {selectedProject.images.map((image, index) => (
              <LazyLoad key={index} height={200} offset={100}>
                <div className="flex flex-col items-center relative">
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
                    className="h-[200px] w-[320px] md:w-[600px] md:h-[200px] lg:h-[400px] rounded-lg object-cover object-center cursor-pointer hover:border-2 hover:border-gray-700"
                    src={image}
                    alt={`image-${index}`}
                    loading="lazy"
                    onClick={() => handleImageClick(selectedProject)}
                  />
                </div>
              </LazyLoad>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWork;
