"use strict";

//maybe try an on-enter event handler that runs a main function with button click, and embedded functions within functions
//e.g. function onClick(){

              //get everything from a country
//           function country() {

                //refine by ageGroup
//             function ageGroup(){

                  //refine by gender
//               function gender(){

                    //get only percentage of interest
//                 function percentage(){

//                 }
//               }
//             }
//           }
// }

//array only needs to include three letter country code, country name, year, age group, sex, mean obesity





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
        var averageObese = 0;
        var averageOverweight = 0;
        var totalObese = 0;
        var totalOverweight = 0;
        var countObese = 0;
        var countOverweight = 0;

        for (var i = 0; i < rows.length; i++) {
          var individualRows = rows[i].split(',');
          console.log(rows);

          for (var j = 0; j < individualRows.length; j++) {

            //average of global obesity rates for all ages without age-standardized rows
            if (individualRows[6] !== 'age-standardized' && individualRows[j] == 'obese') {
              individualRows[j+2] = +individualRows[j+2];
              totalObese += individualRows[j+2];
              countObese++;
            }
            if (individualRows[6] !== 'age-standardized' && individualRows[j] == 'overweight') {
              individualRows[j+2] = +individualRows[j+2];
              totalOverweight += individualRows[j+2];
              countOverweight++;
            }

          }
        }
        averageObese = totalObese/countObese;
        averageOverweight = totalOverweight/countOverweight;
        console.log(averageObese, averageOverweight);
      };
    }
});

var map = new Datamap({
  scope: 'world',
  element: document.getElementById('container'),
  projection: 'mercator',
  fills: {
    defaultFill: "#16677f",
    selectedCountry: "black"
  },
    data: {
    AFG: { fillKey: "selectedCountry" },
    AGO: { fillKey: "selectedCountry" },
    ALB: { fillKey: "selectedCountry" },
    AND: { fillKey: "selectedCountry" },
    ARE: { fillKey: "selectedCountry" },
    ARG: { fillKey: "selectedCountry" },
    ARM: { fillKey: "selectedCountry" },
  }
});

// var menu = d3.select('#container').append('select').attr('name', 'country-list');