"use strict";

$(document).ready(function() {

  document.getElementById('txtFileUpload').addEventListener('change', upload, false);

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
      var metric = [];
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

          // if (result[j][3] == 1997){
          if (result[j][2] == 'Albania') {
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
                  metric.push(result[j][13]);
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
      console.log(metric);
      console.log(country);
      console.log(complete);


      //iterate through array to pare down by country

      //refine by age

      //refine by sex

      //refine by metric

      //obtain year and percentage as final array or csv format

      //graph by year (x-axis) and percentage (y-axis)

    };
  }
});

var map = new Datamap({element: document.getElementById('container')});