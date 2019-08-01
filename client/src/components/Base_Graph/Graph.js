import { Chart } from "react-google-charts";
import * as React from "react";


//Base graph - implements React google charts.
const BaseChart = (props) => {
  const loader =(<div className="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>);

  return (
    <Chart
      chartType={props.type}
      data={props.data}
      options={props.options}
      height={props.height}
      width="100%"
    />
  );
};

export default BaseChart;
