import React, { Fragment, Component } from 'react'
import './AlternateChart.scss';
import Graph from '../../components/Base_Graph/Graph';
import FormControl from '@material-ui/core/FormControl/FormControl'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//Alternate chart - draw chart depend on the selected month in the select box
class AlternateChart extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    monthName: this.props.report[0].Month,
    monthPresented: this.props.report[0]
  };

  //draw the Chart pie
  handleTotalPieChart = (monthlyReport) => {
    let monthlyReportArray = Object.entries(monthlyReport);
    monthlyReportArray.forEach(dept => {
      if(dept[0] !== 'Month') {
        dept[1] = parseInt(dept[1]);
      }
    });

    let options= {
      slices: this.props.slicesColors,
      backgroundColor: '#2f323a',
      is3D: true,
      legend: {
        position: window.innerWidth > 400 ?  '' : 'bottom',
        textStyle: {
          color: 'white',
          fontSize: 16
        }
      }
    };

    return <Graph type    = {'PieChart' }
                  options = { options }
                  data    = { monthlyReportArray }
                  height  = { '30em' }
    />
  }

  handleChange = (selectedMonth) => {
    let newSelectedMonthIndex = this.props.report.findIndex(tempMonth => tempMonth.Month === selectedMonth);
    this.setState({
      monthName: selectedMonth,
      monthPresented: this.props.report[newSelectedMonthIndex]
    });
  };

  dropdownOptions = this.props.report.map((month, index) => {
    if(month.Month !== 'TOTAL') {
      return <MenuItem  key={index} value={month.Month}>{month.Month}</MenuItem>
    }
  });

  render()  {
    return (
      <Fragment>
        <div className="title">
          <span>INCOMING PER DEPARTMENT BY MONTH</span>
        </div>
        <div className="select-container">
          <FormControl>
            <Select value={this.state.monthName} onChange={event => this.handleChange(event.target.value)}>
              {this.dropdownOptions}
            </Select>
          </FormControl>
        </div>
        <div className="chart-container">
          {this.handleTotalPieChart(this.state.monthPresented)}
        </div>
      </Fragment>
    );
  }
}
export default AlternateChart;