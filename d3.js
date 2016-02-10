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

        console.log(csvData);
      }
    }
})

var map = new Datamap({element: document.getElementById('container')});