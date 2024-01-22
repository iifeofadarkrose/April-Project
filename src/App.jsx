import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Work = React.lazy(() => import("./components/OurWork.jsx"));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/projects"
          element={
            <React.Suspense
              fallback={
                <div
                  className="loader-overlay"
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9999,
                  }}
                >
                  <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#ffffff"
                    ariaLabel="ball-triangle-loading"
                  />
                </div>
              }
            >
              <Work />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
