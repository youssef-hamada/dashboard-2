import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { NavBar, Footer, Sidebar, ThemeSettings } from "./components/index";
import {
  Ecommerce,
  Orders,
  Calendar,
  Area,
  Bar,
  ColorMapping,
  Customers,
  ColorPicker,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode == "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  backgroundColor: currentColor,
                  borderRadius: "50%",
                }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? " md:ml-72 " : " flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <NavBar />
              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* dashboard */}
                  <Route path="/" element={<div>Home</div>} />
                  <Route path="/ecommerce" element={<Ecommerce />} />

                  {/* pages */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* Apps */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* charts */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<div>bar</div>} />
                  <Route path="/pie" element={<div>pie</div>} />
                  <Route path="/financial" element={<div>financial</div>} />
                  <Route
                    path="/color-mapping"
                    element={<div>color-mapping</div>}
                  />
                  <Route path="/pyramid" element={<div>pyramid</div>} />
                  <Route path="/stacked" element={<div>stacked</div>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
