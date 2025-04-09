import React from "react";
import {
  SparklineComponent, // Correct: "SparkLine" not "Sparkline"
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({
  // Renamed to match component (optional)
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) => {
  return (
    <SparklineComponent // Correct component name
      id={id}
      height={height}
      width={width}
      lineWidth={2} // camelCase, not "LineWidth"
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: { visible: true },
      }}
      markerSettings={{ visible: ["All"], size: 2, fill: currentColor }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine; // Export renamed component
