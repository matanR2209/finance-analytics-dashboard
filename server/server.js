const express = require('express');
const liveUpdates = require('./actions/LiveUpdatedReports');
const staticReports = require('./actions/staticReports');

const summaryReport = require('./assets/summaryReport.json');

var app = express();
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  let chartsData = {
    overviewChart: staticReports.createOverviewChart(summaryReport),
    bottomCharts: staticReports.createBottomSectionCharts( summaryReport ),
    sideCharts: staticReports.createSideCharts ( summaryReport ),
  }

  let liveChartsData = {
    visitorsTransactionsData: liveUpdates.getVisitorsTransactionsData(),
    transactionsPerContinent: liveUpdates.getTransactionsPerContinent(),
    topAccountsPerMinute    : liveUpdates.getTopAccountsPerMinute()
  }

  res.send({
    report: summaryReport,
    chartsData: chartsData,
    liveChartsData: liveChartsData
  })
});


app.get('/liveCharts', (req, res) => {
  let liveChartsData = {
    visitorsTransactionsData: liveUpdates.getVisitorsTransactionsData(),
    transactionsPerContinent: liveUpdates.getTransactionsPerContinent(),
    topAccountsPerMinute    : liveUpdates.getTopAccountsPerMinute()
  }
  res.send(liveChartsData);
});

app.listen(process.env.PORT || 4200);

