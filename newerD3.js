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
      var result = [];
      var complete = [];
      var completeAdjusted = [];

      var rows = csvData.split('\n');
      var average = 0;
      var total = 0;

//=======Reformatting to array of objects=========

      for (var i = 0; i < rows.length; i++){
        var total = 0;
        var count = 0;
        var individualRows = rows[i].split(',');

        result.push(individualRows);
      }

      // console.log(result);
      for (var j = 0; j < result.length; j++) {
        var workingData = {
          "location_id" : null,
          "location" : null,
          "location_name" : null,
          "year" : null,
          "age_group_id" : null,
          "age_group" : null,
          "age_start" : null,
          "age_end" : null,
          "sex_id" : null,
          "sex" : null,
          "unit" : null,
          "metric" : null,
          "measure" : null,
          "mean" : null,
          "lower" : null,
          "upper" : null
        };

        if (result[j].length === 16) {
          workingData["location_id"] = result[j][0];
          workingData["location"] = result[j][1];
          workingData["location_name"] = result[j][2];
          workingData["year"] = result[j][3];
          workingData["age_group_id"] = result[j][4];
          workingData["age_group"] = result[j][5];
          workingData["age_start"] = result[j][6];
          workingData["age_end"] = result[j][7];
          workingData["sex_id"] = result[j][8];
          workingData["sex"] = result[j][9];
          workingData["unit"] = result[j][10];
          workingData["metric"] = result[j][11];
          workingData["measure"] = result[j][12];
          workingData["mean"] = result[j][13];
          workingData["lower"] = result[j][14];
          workingData["upper"] = result[j][15];
          complete.push(workingData);
        }

        if (result[j].length === 17) {
          workingData["location_id"] = result[j][0];
          workingData["location"] = result[j][1];
          workingData['location_name'] = result[j][2];
          workingData['year'] = result[j][3];
          workingData['age_group_id'] = result[j][4];
          workingData['age_group'] = result[j][5];
          workingData['age_start'] = result[j][7];
          workingData['age_end'] = result[j][8];
          workingData['sex_id'] = result[j][9];
          workingData['sex'] = result[j][10];
          workingData['unit'] = result[j][11];
          workingData['metric'] = result[j][12];
          workingData['measure'] = result[j][13];
          workingData['mean'] = result[j][14];
          workingData['lower'] = result[j][15];
          workingData['upper'] = result[j][16];
          completeAdjusted.push(workingData);
        }
      }

      var obeseDataCountry = [];
      var obeseDataAge = [];
      var obeseDataSex = [];
      var obeseDataMetric = [];

      // var duplicate = complete.slice(0);
      // console.log(duplicate);

      // for (var k = 0; k < complete.length; k++) {

      //   var counter = 0;

      //   for (var l = 0; l < duplicate.length; l++) {

      //     if (complete[k].location_name == duplicate[l].location_name) {
      //         counter++;
      //         delete duplicate[l];
      //     }
      //   }
      //   if (counter > 0) {
      //     var countryDropDown = new Object();
      //     countryDropDown.value = complete[k].location_name;
      //     countryDropDown.count = counter;
      //     data.push(countryDropDown);
      //   }
      // }


      // console.log(countryDropDown);

      // console.log(complete);
      // // console.log(completeAdjusted[0].mean);
      // var data = [];

      for (var k = 0; k < complete.length; k++) {
        // if (complete[k].location_name == 'Afghanistan') {
        //   console.log(complete[k].location);
        obeseDataCountry.push(complete[k].location_name);
        obeseDataAge.push(complete[k].age_group);
        obeseDataSex.push(complete[k].sex);
        obeseDataMetric.push(complete[k].metric);
        // }
      }
      obeseDataCountry.sort();
      obeseDataAge.sort();
      obeseDataSex.sort();
      obeseDataMetric.sort();

//==============Get unique COUNTRIES to populate dropdown==========================


      var countries = [];
      for (var l = 0; l < obeseDataCountry.length; l++) {
        if (obeseDataCountry[l] === obeseDataCountry[l+1]) {

        } else {
          countries.push(obeseDataCountry[l]);
        }
      }
      console.log(countries);

      var selectCountry = document.getElementById( 'countries' );

      for (var country in countries) {
        selectCountry.add (new Option (countries[country]));
      }

//==============Get unique AGES to populate dropdown==========================

      var ages = [];
      for (var l = 0; l < obeseDataAge.length; l++) {
        if (obeseDataAge[l] === obeseDataAge[l+1]) {

        } else {
          ages.push(obeseDataAge[l]);
        }
      }
      console.log(ages);

      var selectAge = document.getElementById( 'age-group' );

      for (var age in ages) {
        selectAge.add (new Option (ages[age]));
      }

//==============Get unique Sex to populate dropdown==========================

      var sex = [];
      for (var m = 0; m < obeseDataSex.length; m++) {
        if (obeseDataSex[m] === obeseDataSex[m+1]) {

        } else {
          sex.push(obeseDataSex[m]);
        }
      }
      console.log(sex);

      var selectGender = document.getElementById('sex');

      for (var gender in sex) {
        selectGender.add (new Option (sex[gender]));
      }

//==============Get unique Metric to populate dropdown==========================

      var metrics = [];
      for (var n = 0; n < obeseDataMetric.length; n++) {
        if (obeseDataMetric[n] === obeseDataMetric[n+1]) {

        } else {
          metrics.push(obeseDataMetric[n]);
        }
      }
      console.log(metrics);

      var selectMetric = document.getElementById('metric');

      for (var metric in metrics) {
        selectMetric.add (new Option (metrics[metric]));
      }
      // set event handler on button click that takes dropdown info

          // tie function to isolate data specified in each dropdown
          // set up promises to narrow search by country, then age-group, then gender, then mean.



      //obtain year and percentage as final array or csv format

      //graph by year (x-axis) and percentage (y-axis)

      //or figure out a way to plot one array on y, and another on x

    };
  }
});

// var map = new Datamap({element: document.getElementById('container')});