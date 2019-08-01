import React, { Component, Fragment } from 'react'
import classes from './App.scss';

import BottomCharts from '../../Layout/Content/Bottom_Charts/BottomCharts'
import OverviewChart from '../../Layout/Content/Overview_Chart/OverviewChart'
import SideCharts from '../../Layout/Side_Bar/SideCharts/SideCharts'
import LiveView from '../Live_View/LiveView'

const axios = require('axios');

class App extends Component {
  state = {
    report: [],
    chartsData: {},
    liveCarts: {},
    isReportLoaded: false
  }

  componentDidMount = () => {
    //Fetch data from the server
    axios.get("http://localhost:4200/").then(response => {
      let newState = this.state;
      newState.report = response.data.report;
      newState.chartsData = response.data.chartsData;
      newState.liveCarts = response.data.liveChartsData;
      newState.isReportLoaded = true;
      this.setState(newState);
    });
  }

  render() {
    let content = <div className="layout">
      <div className="side-charts">
        <SideCharts chartsData={ this.state.chartsData.sideCharts } />
      </div>
      <div className="content">
        <div className="live-view-charts">
          <LiveView liveCharts = { this.state.liveCarts }/>
        </div>
        <div className="overview-chart">
          <div className='top-chart-title'>YEARLY SUMMARIZE BY DEPARTMENTS AND MONTHS</div>
          <OverviewChart chartsData={ this.state.chartsData.overviewChart } />
        </div>
        <div className="bottom-charts">
          <BottomCharts chartsData={ this.state.chartsData.bottomCharts} report={ this.state.report }/>
        </div>
      </div>
    </div>;

    const displayedContent = this.state.isReportLoaded? content: '';

    return (
      <Fragment>
        <div className="header">
          FINANCE APP PERFORMANCE | OVERVIEW AND LIVE PREFORMANCE DASHBOARD
        </div>
        {displayedContent}
      </Fragment>
    );
  }
}

export default App;
