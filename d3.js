"use strict";

$(document).ready(function() {

  //setup file upload
  document.getElementById('selectFile').addEventListener('change', upload, false);

    function upload(e) {
      var data = null;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(evt) {

        var csvData = evt.target.result;
        var labels = ['location_id', 'location', 'location_name', 'year', 'age_group_id', 'age_group', 'age_start', 'age_end', 'sex_id', 'sex', 'unit', 'metric', 'measure', 'mean', 'lower', 'upper'];
        var result = [];

        var rows = csvData.split('\n');
        var average = 0;
        var total = 0;

        for (var i = 0; i < rows.length; i++) {
          var individualRows = rows[i].split(',');

          for (var j = 0; j < individualRows.length; j++) {

            //average of global obesity rates
            if (individualRows[j] == 'prevalence') {
              individualRows[j+1] = +individualRows[j+1];
              total += individualRows[j+1];
            }
          }
        }
        average = total/rows.length;
        console.log(average);
      };
    }
});

var map = new Datamap({
  scope: 'world',
  element: document.getElementById('container'),
  projection: 'mercator',
  fills: {
    defaultFill: "#16677f"

  },
});

// var menu = d3.select('#container').append('select').attr('name', 'country-list');