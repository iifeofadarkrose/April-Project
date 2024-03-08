import { useState } from "react";
import { Tabs, TabsBody, TabPanel } from "@material-tailwind/react";
import LazyLoad from "react-lazyload";
import { BallTriangle } from "react-loader-spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

import cha1 from "../assets/images/Chal/cha1.jpg";
import cha2 from "../assets/images/Chal/cha2.jpg";
import cha3 from "../assets/images/Chal/cha3.jpg";
import cha4 from "../assets/images/Chal/cha4.jpg";
import cha5 from "../assets/images/Chal/cha5.jpg";
import cha6 from "../assets/images/Chal/cha6.jpg";
import cha7 from "../assets/images/Chal/cha7.jpg";

import cac1 from "../assets/images/Cact/cac1.jpg";
import cac2 from "../assets/images/Cact/cac2.jpg";
import cac3 from "../assets/images/Cact/cac3.jpg";
import cac4 from "../assets/images/Cact/cac4.jpg";

import inter1 from "../assets/images/Inter22/inter1.jpg";
import inter2 from "../assets/images/Inter22/inter2.jpg";
import inter3 from "../assets/images/Inter22/inter3.jpg";
import inter4 from "../assets/images/Inter22/inter4.jpg";
import inter5 from "../assets/images/Inter22/inter5.jpg";
import inter6 from "../assets/images/Inter22/inter6.jpg";
import inter7 from "../assets/images/Inter22/inter7.jpg";
import inter8 from "../assets/images/Inter22/inter8.jpg";
import inter9 from "../assets/images/Inter22/inter9.jpg";
import inter10 from "../assets/images/Inter22/inter10.jpg";
import inter11 from "../assets/images/Inter22/inter11.jpg";
import inter12 from "../assets/images/Inter22/inter12.jpg";

import wh1 from "../assets/images/wh/wh1.jpg";
import wh2 from "../assets/images/wh/wh2.jpg";

import pr1 from "../assets/images/Priv/pr1.jpg";
import pr2 from "../assets/images/Priv/pr2.jpg";
import pr3 from "../assets/images/Priv/pr3.jpg";
import pr4 from "../assets/images/Priv/pr4.jpg";
import pr5 from "../assets/images/Priv/pr5.jpg";
import pr6 from "../assets/images/Priv/pr6.jpg";
import pr7 from "../assets/images/Priv/pr7.jpg";
import pr8 from "../assets/images/Priv/pr8.jpg";
import pr9 from "../assets/images/Priv/pr9.jpg";
import pr10 from "../assets/images/Priv/pr10.jpg";

import pri1 from "../assets/images/pr2/pri1.png";
import pri2 from "../assets/images/pr2/pri2.png";
import pri3 from "../assets/images/pr2/pri3.png";
import pri4 from "../assets/images/pr2/pri4.png";
import pri5 from "../assets/images/pr2/pri5.png";
import pri6 from "../assets/images/pr2/pri6.png";
import pri7 from "../assets/images/pr2/pri7.png";
import pri8 from "../assets/images/pr2/pri8.png";
import pri9 from "../assets/images/pr2/pri9.png";
import pri10 from "../assets/images/pr2/pri10.png";
import pri11 from "../assets/images/pr2/pri11.png";
import pri12 from "../assets/images/pr2/pri12.png";
import pri13 from "../assets/images/pr2/pri13.png";
import pri14 from "../assets/images/pr2/pri14.png";

import mi1 from '../assets/images/michel/mi1.png'
import mi2 from '../assets/images/michel/mi2.png'
import mi3 from '../assets/images/michel/mi3.png'
import mi4 from '../assets/images/michel/mi4.png'
import mi5 from '../assets/images/michel/mi5.png'
import mi6 from '../assets/images/michel/mi6.png'
import mi7 from '../assets/images/michel/mi7.png'
import mi8 from '../assets/images/michel/mi8.png'
import mi9 from '../assets/images/michel/mi9.png'
import mi10 from '../assets/images/michel/mi10.png'
import mi11 from '../assets/images/michel/mi11.png'
import mi12 from '../assets/images/michel/mi12.png'
import mi13 from '../assets/images/michel/mi13.png'
import mi14 from '../assets/images/michel/mi14.png'
import mi15 from '../assets/images/michel/mi15.png'
import mi16 from '../assets/images/michel/mi16.png'
import mi17 from '../assets/images/michel/mi17.png'


import { useTranslation } from "react-i18next";
const OurWork = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackButtonClick = () => {
    setSelectedProject(null);
  };

  const { t } = useTranslation("translation");
  const projects = [
    {
      name: "Interior of the apartment. Photo 2022",
      images: [cha1, cha2, cha3, cha4, cha5, cha6, cha7],
      translationKey: "Chal",
    },
    {
      name: "Cactus branch in Paris. Photo 2024",
      images: [cac1, cac2, cac3, cac4],
      translationKey: "Cactus",
    },
    {
      name: "Interior design. Photo 2022",
      images: [
        inter1,
        inter2,
        inter3,
        inter4,
        inter5,
        inter6,
        inter7,
        inter8,
        inter9,
        inter10,
        inter11,
        inter12,
      ],
      translationKey: "Inter22",
    },
    {
      name: "Interior design for restaurant Allegro. Paris. 2023",
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
      additionalImages:[mi1,mi2,mi3,mi4,mi5,mi6,mi7,mi8,mi9,mi10,mi11,mi12,mi13,mi14,mi15,mi16,mi17]
    },
    {
      name: "Interior Ablon",
      images: [in1, in2, in3, in4, in5, in6, in7, in8, in9],
      translationKey: "interior-ablon",
    },
    {
      name: "Honfleur",
      images: [hon5, hon6, hon7, hon8],
      translationKey: "interier-honfleur",
    },
    {
      name: "Interior design for restaurant in Honfleur. France. 2023",
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
      translationKey: "hanover-germany",
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
    {
      name: "Exterior of the facade of a private house in Hanover. German. 2023",
      images: [wh1, wh2],
      translationKey: "wh",
    },
    {
      name: "The interior of a private home. Sidney. Australi. 2022",
      images: [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10],
      translationKey: "pr",
    },
    {
      name: "The interior of a private home. 2022",
      images: [
        pri1,
        pri2,
        pri3,
        pri4,
        pri5,
        pri6,
        pri7,
        pri8,
        pri9,
        pri10,
        pri11,
        pri12,
        pri13,
        pri14,
      ],
      translationKey: "pri",
    },
  ];

  return (
    <div className="m-8" id="projects">
      {!selectedProject ? (
        <Tabs value={0}>
          <TabsBody className="grid grid-cols-1 gap-4">
            <TabPanel
              value={0}
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
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
                      className="transition duration-500 ease-in-out grayscale hover:grayscale-0 filter h-[200px] w-[320px] md:w-[600px] md:h-[200px] lg:h-[400px] rounded-lg object-cover object-center cursor-pointer hover:border-2 hover:border-gray-700"
                      src={project.images[0]}
                      alt={project.name}
                      loading="lazy"
                      onClick={() => handleImageClick(project)}
                    />
                    <div className="bg-black bg-opacity-50 md:text-2xl text-white absolute bottom-0 left-0 right-0 py-1 text-center">
                      {t(project.translationKey)}
                    </div>
                  </div>
                </LazyLoad>
              ))}
            </TabPanel>
          </TabsBody>
        </Tabs>
      ) : (
        <div>
          <button
            onClick={handleBackButtonClick}
            className="bg-[#D9D9D9] text-black px-4 py-2 rounded-lg mb-4 border border-sm border-black"
          >
            Back
          </button>
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
          {selectedProject &&
            selectedProject.additionalImages &&
            selectedProject.additionalImages.length > 0 && (
              <Slider dots centerMode centerPadding="50px" slidesToShow={3} responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                }
              ]}>
                {selectedProject.additionalImages.map((image, index) => (
                  <div className="my-8" key={index}>
                    <img
                      className="h-[200px] w-[320px] md:w-[600px] md:h-[200px] lg:h-[400px] rounded-lg object-cover object-center cursor-pointer hover:border-2 hover:border-gray-700"
                      src={image}
                      alt={`image-${index}`}
                      loading="lazy"
                      onClick={() => openModal(image)}
                    />
                  </div>
                ))}
              </Slider>
            )}
        </div>
      )}

       {/* Модальное окно */}
       {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClickOutside}>
          <div className="bg-white p-4 rounded-lg relative">
            <span className="absolute top-1 right-1 cursor-pointer text-xl border-1 lg:text-3xl border-2 rounded-full border-black px-2" onClick={closeModal}>Х</span>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWork;
