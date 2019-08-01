import React, { Fragment } from 'react'
import './SideCharts.scss';
import Graph from '../../../components/Base_Graph/Graph'


const SideCharts = (props) => {
  const charts = props.chartsData.data.map( (tempDepartment, index) => {
    let data = [
      ["Element", "Value", { role: "style" }]
    ]
    //Remove the total section
    tempDepartment.values.pop();
    tempDepartment.values.forEach((value) => {
      value[1] = parseInt(value[1]);
      value.push('#37b9b9')
      data.push(value)
    });

    //set location of legend on client side - depends on screen sie ( adjust for mobile )
    props.chartsData.options.legend.position = window.innerWidth > 400 ?  '' : 'bottom';

    return <div key={index}>
      <div className='chartName'>{tempDepartment.departmentName}</div>
      <div className="small-chart-container">
        <Graph
          options = { props.chartsData.options }
          type    = { props.chartsData.type }
          height  = { props.chartsData.height }
          data    = { data }
        />
      </div>
    </div>

  });

  return (
    <Fragment>
      <div className="side-charts-title">TRENDS PER DEPARTMENT</div>
      {charts}
    </Fragment>
  );
}
export default SideCharts;