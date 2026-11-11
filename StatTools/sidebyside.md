---
title: Side by Side Boxplots
css: 
header-includes:
  <script src="https://cdn.plot.ly/plotly-4.2.0.min.js"></script>
---


<form id="myForm">
<textarea id="myArea1" cols="60" rows="10"></textarea>&nbsp;<textarea id="myArea2" cols="60" rows="10"></textarea>
<input type="button" id="myButton" value = "Enter"> <br>
</form>



<div id = 'boxDiv'></div>

<script>
const cleanData = (inputString) => 
  inputString.replace(/^\s\s*/, '').replace(/\s\s*$/, '').split(/[\s,;]+/).map(Number);


let makeBoxplots = (data1,data2) => {
  var trace1 = {
    x: data1,
    type: 'box',
    name: "Group 1",
    marker: {
      color: "blue",
      line: {
        color: "blue",
        width: 1
      }
    }
  };

  var trace2 = {
    x: data2,
    type: 'box',
    name: "Group 2",
    marker: {
      color: "red",
      line: {
        color: "red",
        width: 1
      }
    }
  };
  
  var data = [trace2,trace1];

  var layout = {
    title: 'Title',
    width: 800,
    height: 400, 
    xaxis: {
      title: "Outcome"
    },
    yaxis: {
      title: ""
    },
    legend:{'traceorder':'reversed'}
  };

  try {
    return Plotly.newPlot('boxDiv', data, layout, {editable: true});
  } catch (_error) {}
};

window.onload = () => {
  document.getElementById("myButton").onclick = function() {
    let form = document.getElementById("myForm");
    let data1 = cleanData(form.myArea1.value);
    let data2 = cleanData(form.myArea2.value);
    makeBoxplots(data1,data2);
  }
};


</script>
