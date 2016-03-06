"use strict";

$(document).ready(function() {

  document.getElementById('selectFile').addEventListener('change', upload, false);

  function upload(evt) {

    var data = null;
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {

      var csvData = event.target.result;

      var labels = ['location_id', 'location', 'location_name', 'year', 'age_group_id', 'age_group', 'age_start', 'age_end', 'sex_id', 'sex', 'unit', 'metric', 'measure', 'mean', 'lower', 'upper'];

      var result = [];

      var year = [];
      var age = [];
      var country = [];
      var gender = [];
      var mean = [];
      var complete = [];


      var rows = csvData.split('\n');
      var average = 0;
      var total = 0;

      for (var i = 0; i < rows.length; i++){

        var total = 0;
        var count = 0;
        var individualRows = rows[i].split(',');

        result.push(individualRows);
      }

      for (var j = 0; j < result.length; j++) {
        if (result[j].length == 16) {

          if (result[j][3] == 1997){
          // if (result[j][2] == 'Albania') {
            if (result[j][5] == '25 to 29 yrs') {
              if (result[j][9] == 'male') {
                if (result[j][11] == 'obese') {

                  //convert strings to integers
                  result[j][3] = +result[j][3];
                  result[j][13] = +result[j][13];

                  year.push(result[j][3]);
                  age.push(result[j][5]);
                  country.push(result[j][2]);
                  gender.push(result[j][9]);
                  mean.push(result[j][13]);
                  complete.push(result[j][3]);
                  complete.push(result[j][5]);
                  complete.push(result[j][2]);
                  complete.push(result[j][9]);
                  complete.push(result[j][13]);
                }
              }
            }
          }

          // }
        }
      }
      console.log(age);
      console.log(year);
      console.log(mean);
      console.log(country);
      console.log(complete);

      var height = 500,
          width = 715,
          barWidth = 25,
          barOffset = 5;

      var yScale = d3.scale.linear()
              .domain([0.0, 0.25])
              .range([0, height]);



      d3.select('#bar-chart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'blue')
        .selectAll('rect').data(mean)
        .enter().append('rect')
          .style({'fill': 'yellow', 'stroke': 'gold', 'stroke-width': '1'})
          .attr('width', barWidth)
          .attr('height', function (data) {
              return yScale(data);
          })
          .attr('x', function (data, i) {
              return i * (barWidth + barOffset);
          })
          .attr('y', function (data) {
              return height - yScale(data);

          });
      //iterate through array to pare down by country

      //refine by age

      //refine by sex

      //refine by metric

      //obtain year and percentage as final array or csv format

      //graph by year (x-axis) and percentage (y-axis)

      //or figure out a way to plot one array on y, and another on x

    };
  }
});

var map = new Datamap({element: document.getElementById('container')});