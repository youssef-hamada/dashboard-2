import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center ">
        <div id="preview" />
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-10 md:space-y-0 md:space-x-20 w-full">
          {/* <div className="mx-4">
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
            />
          </div> */}
          <div className="mx-4">
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
