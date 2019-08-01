import React, { Fragment } from 'react'
import './OverviewChart.scss';
import Graph from '../../../components/Base_Graph/Graph'


const OverviewChart = (props) => {
  let linesChart = <Graph type={props.chartsData.type}
                          options={props.chartsData.options}
                          data={props.chartsData.data}
                          height={props.chartsData.height}/> ;

  return (
    <div className='chart-container'>
      {linesChart}
    </div>
  );
}
export default OverviewChart;