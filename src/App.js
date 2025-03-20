import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ backgroundColor: "#2c3e50", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">no sidebar</div>
          )}

          <div
            className={`dark:bg-main-dark bg-main-bg min-h-screen w-full ${
              activeMenu ? " md:ml-72 " : " flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark navbar w-full ">
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* dashboard */}
              <Route path="/" element={<div>Home</div>} />
              <Route path="/about" element={<div>About</div>} />

              {/* pages */}
              <Route path="/orders" element={<div>orders</div>} />
              <Route path="/employees" element={<div>employees</div>} />
              <Route path="/customers" element={<div>customers</div>} />

              {/* Apps */}
              <Route path="/kanban" element={<div>kanban</div>} />
              <Route path="/editor" element={<div>editor</div>} />
              <Route path="/calender" element={<div>calender</div>} />
              <Route path="/color-picker" element={<div>color-picker</div>} />

              {/* charts */}
              <Route path="/line" element={<div>line</div>} />
              <Route path="/area" element={<div>area</div>} />
              <Route path="/bar" element={<div>bar</div>} />
              <Route path="/pie" element={<div>pie</div>} />
              <Route path="/financial" element={<div>financial</div>} />
              <Route path="/color-mapping" element={<div>color-mapping</div>} />
              <Route path="/pyramid" element={<div>pyramid</div>} />
              <Route path="/stacked" element={<div>stacked</div>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
