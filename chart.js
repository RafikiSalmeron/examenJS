google.charts.load("current", {
  packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Año", "Poblacion", {
      role: "style"
    }],
    ["2017", 14252, "color: #41d23e; opacity: 0.5"],
    ["2018", 23360, "color: #41d23e; opacity: 0.8"],
    ["2019", 40421, "color: #41d23e; opacity: 0.3"],
    ["2020", 43500, "color: #41d23e; opacity: 0.9"]
  ]);

  var view = new google.visualization.DataView(data);


  var options = {
    title: "Evolución de la población de Navalcarnero",
    width: 1000,
    height: 500,
    backgroundColor: '#0b54f7',
    animation:{
        "duration": 5000,
        "easing": 'out',
        "startup": true
      }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chartDiv"));
  chart.draw(view, options);
}
