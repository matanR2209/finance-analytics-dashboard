import React, { Fragment } from 'react'
import './MainBottomChart.scss';
import Graph from '../../../../components/Base_Graph/Graph'


const MainBottomChart = (props) => {

  let options= {
    slices: props.chartsData.slices,
    pieHole: 0.2,
    backgroundColor: '#2f323a',
    legend: {
      position: window.innerWidth > 400 ?  '' : 'bottom',
      textStyle: {
        color: 'white',
        fontSize: 16
      }
    }
  };
  let totalPieChart = <Graph type    = { props.chartsData.type }
                             options = { options }
                             data    = { props.chartsData.data }
                             height  = { props.chartsData.height }/>;

  return (
    <Fragment>
      <div className='title'>
        YEARLY INCOMING PER DEPARTMENT
      </div>
      {totalPieChart}
    </Fragment>
  );
}
export default MainBottomChart;