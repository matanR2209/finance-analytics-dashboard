import React, { Fragment } from 'react'
import './BottomCharts.scss';
import MainBottomChart from './Main_Bottom_Chart/MainBottomChart'

import AlternateChart from '../../../containers/Alternate_Chart/AlternateChart'

const BottomCharts = (props) => {
  return (
    <Fragment>
      <div className="bottom-main-chart">
        <MainBottomChart chartsData = {props.chartsData} slicesColors = { props.chartsData.slices }/>
      </div>
      <div className="bottom-alter-chart">
      <AlternateChart report = {props.report} slicesColors = { props.chartsData.slices }/>
      </div>
    </Fragment>
  );
}
export default BottomCharts;