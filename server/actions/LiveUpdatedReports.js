
const RED_SLICES_COLORS =  [
  {color: '#F65336'},
  {color: '#D6351E'},
  {color: '#D0301A'},
  {color: '#9C0000'},
  {color: '#650000'}
]

module.exports = {
  getVisitorsTransactionsData: function () {
    let minTransaction = 50;
    let maxTransaction = 150;

    let minVisitors = 130;
    let maxVisitors = 200;

    let options = {
      animation: {
        startup: true,
        duration: 1000
      },
      legend: {
        position: 'bottom',
        textStyle: {
          color: 'white',
          fontSize: 12
        }
      },
      backgroundColor: '#2f323a',
      vAxis: {
        title: 'Transaction (in thousands)',
        textStyle: {color: 'white'},
        titleTextStyle: {
          color: '#f63003',
          fontSize: 14
        }
      },
      hAxis: {
        title: 'Hour',
        textStyle: {color: 'white'},
        titleTextStyle: {
          color: '#f63003',
          fontSize: 14
        }
      },
      series: {
        0: {
          type: 'bars',
          color: '#37b9b9',
        },
        1: {
          type: 'line'
        }
      }
    };
    let data = [
      [
        'Hour',
        'Site visits',
        'Transactions'
      ],
      ['Europe', parseInt(Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors), parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['Asia', parseInt(Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors), parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['North America', parseInt(Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors), parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['South America', parseInt(Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors), parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['Australia and New Zealand', parseInt(Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors), parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
    ];
    let height='auto';
    let type="ComboChart";

    return {
      options: options,
      data: data,
      height: height,
      type: type,
    }
  },

  getTransactionsPerContinent: function() {

    let minTransaction = 20;
    let maxTransaction = 80;

    let height = 'auto';
    let type = "PieChart";
    let options= {
      slices: RED_SLICES_COLORS,
      backgroundColor: '#2f323a',
      pieHole:0.2,
      legend: {
        textStyle: {
          color: 'white',
          fontSize: 14
        }
      }
    };
    let data=[
      ['Continent', 'Transactions per minute'],
      ['Europe', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['Asia', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['North America', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['South America', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
      ['Australia and New Zealand', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction)],
    ];

    return {
      options: options,
      data: data,
      height: height,
      type: type,
    }
  },

  getTopAccountsPerMinute: function(){

    let minTransaction = 2000;
    let maxTransaction = 6000;

    let height='auto';
    let type="BarChart";
    let data=[
      ['Account', 'Transactions per minute',  { role: "style" }],
      ['Account A', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account B', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account C', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account D', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account E', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account F', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account G', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account H', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
      ['Account I', parseInt(Math.floor(Math.random() * (maxTransaction - minTransaction + 1)) + minTransaction), '#37b9b9'],
    ];

    data = data.sort(function(a,b) {
      return  b[1] - a[1];
    });

    let options={
      animation: {
        startup: true,
        duration: 1000
      },
      legend: {position: 'none' },
      backgroundColor: '#2f323a',
      vAxis: {
        title: 'Account',
        textStyle: {color: 'white'},
        titleTextStyle: {
          color: '#f63003',
          fontSize: 10
        }
      },
      hAxis: {
        title: 'Transactions (per minute)',
        textStyle: {color: 'white'},
        titleTextStyle: {
          color: '#f63003',
          fontSize: 14
        }
      },
    }

    return {
      options: options,
      data: data,
      height: height,
      type: type,
    }
  }
}