import React, { Component, Fragment } from 'react'
import './LiveView.scss';
import Graph from '../../components/Base_Graph/Graph';

const axios = require('axios');



class LiveView extends Component {

  constructor(props) {
    super(props);
    let newState = this.state;
    newState.liveCharts = props.liveCharts
    newState.chartsLoaded = true
    this.state = newState ;
  }

  state = {
    liveCharts: {},
    chartsLoaded: false
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.updateLiveCharts();
    }, 3000);
  }

  updateLiveCharts = () => {
    axios.get("http://localhost:4200/liveCharts").then(response => {
      let newState = this.state;
      newState.liveCharts = response.data;
      this.setState(newState);
    });
  }

  getRenderedLiveContent = () => {
    let liveContent =       <div className='live-view-container'>
      <div className="live-header">LIVE REPORT</div>
      <div className="charts-container">
        <div className="left-col">
          <div className="sub-title">TRANSACTIONS-LOCATION RATIO</div>
          <Graph type    = { this.state.liveCharts.visitorsTransactionsData.type }
                 options = { this.state.liveCharts.visitorsTransactionsData.options }
                 data    = { this.state.liveCharts.visitorsTransactionsData.data }
                 height  = { this.state.liveCharts.visitorsTransactionsData.height }/>
        </div>
        <div className="mid-col">
          <div className="sub-title">TRANSACTION PERCENTAGE'S  PER CONTINENT</div>
          <Graph type    = { this.state.liveCharts.transactionsPerContinent.type }
                 options = { this.state.liveCharts.transactionsPerContinent.options }
                 data    = { this.state.liveCharts.transactionsPerContinent.data }
                 height  = { this.state.liveCharts.transactionsPerContinent.height }/>


        </div>
        <div className="right-col">
          <div className="sub-title">LIVE TOP ACCOUNTS</div>
          <Graph type    = { this.state.liveCharts.topAccountsPerMinute.type }
                 options = { this.state.liveCharts.topAccountsPerMinute.options }
                 data    = { this.state.liveCharts.topAccountsPerMinute.data }
                 height  = { this.state.liveCharts.topAccountsPerMinute.height }/>
        </div>
      </div>
    </div>;
    return this.state.chartsLoaded? liveContent: ''
  }

  render() {
    return this.getRenderedLiveContent();
  }
}
export default LiveView;
