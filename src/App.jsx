import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import React from "react";

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
            <React.Suspense fallback={<div>Loading...</div>}>
              <Work />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
