const SLICES_COLORS =  [
  {color: '#37B9B9'},
  {color: '#45CAB3'},
  {color: '#68DAA5'},
  {color: '#93E792'},
  {color: '#C4F17F'},
  {color: '#F9F871'},
  {color: '#B8E067'},
  {color: '#78C664'},
  {color: '#2FAB63'},
  {color: '#007160'},
]

module.exports = {
  createOverviewChart: function( report ) {

    let linesChart = [];
    let valuesArray = Object.keys(report[0]);
    linesChart.push(valuesArray);
    report.forEach((section, index) => {
      let valuesArray = Object.values(section);
      linesChart.push(valuesArray);
    });

    //Remove total
    linesChart.pop();

    linesChart.forEach((month, index) => {
      if(index === 0) {
        return;
      }
      month.forEach((value, i) => {
        if (i === 0) {
          return;
        }
        month[i] = parseInt(value);
      });
    });
    let options= {
      animation: {
        startup: true,
        duration: 2000
      },
      hAxis: {
        title: 'Month',
        textStyle: {color: 'white'},
        titleTextStyle: {
          color: '#f63003'
        }
      },
      vAxis: {
        title: 'Income',
        textStyle: {color: 'white'},
        titleTextStyle: {
          color: '#f63003'
        }
      },
      backgroundColor: '#2f323a',
      legend: {
        textStyle: {
          color: 'white',
          fontSize: 12
        }
      }
    }
    let type = 'LineChart';
    let height = '28em';

    return {
      data: linesChart,
      options: options,
      type: type,
      height: height
    }

  },

  createBottomSectionCharts: function(report) {
    let slice

    let total = report[report.length -1];
    let totalArray = Object.keys(total).map((key) => {
      if(key !== 'Month') {
        return [(key), parseInt(total[key])];
      }
    });
    //remove month
    totalArray.shift();
    totalArray.unshift(['Section', 'value'])

    return {
      type: 'PieChart',
      slices: SLICES_COLORS,
      data: totalArray,
      height: '28em',
    }
  },

  createSideCharts: function( report ) {
    let options= {
      animation: {
        startup: true,
        duration: 4000
      },
      hAxis: {
        title: 'Month',
        titleTextStyle: {
          color: 'white'
        },
      },
      vAxis: {
        title: 'Income',
        titleTextStyle: {
          color: 'white'
        }
      },
      backgroundColor: '#2f323a',
      legend: {
        textStyle: {
          color: 'white',
        }
      }
    }

    let departmentsArray = Object.keys(report[0]);

    departmentsArray.forEach((deptName, index) => {
      if ( deptName !== 'Month' && deptName !== 'TOTAL') {
        departmentsArray[index] = {
          departmentName: deptName,
          values: []
        }
      }
    });

    //Remove month and total from the departments array
    let monthIndex = departmentsArray.indexOf('Month');
    departmentsArray.splice(monthIndex, 1);

    report.forEach((month, index) => {
      let selectedMonth = month.Month;
      let monthValues = Object.entries(month);
      monthValues.forEach( value => {
        let dept = value[0];
        let deptVal = value[1];
        let departmentsArrayIndex = departmentsArray.findIndex(tempDept => tempDept.departmentName === dept);
        if (departmentsArrayIndex !== -1) {
          departmentsArray[departmentsArrayIndex].values.push([selectedMonth, deptVal]);
        }
      })
    });

    return {
      type: 'ColumnChart',
      options: options,
      data: departmentsArray,
      height: '6.25em',
    }
  }
}