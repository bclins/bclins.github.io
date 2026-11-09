
const mean = numberArray => numberArray.reduce((a,b) => a+b) / numberArray.length;

const variance = (numberArray) => {
  if (numberArray.length > 1) {
    let m = mean(numberArray);
    return numberArray.map(x => (x-m)**2).reduce((a,b)=>a+b) / (numberArray.length - 1);
  } else {
    return 0;
  }
};

const truncate = (n,decimals) => Math.round(n*10**decimals)/10**decimals;

const cleanData = (inputString) => 
  inputString.replace(/^\s\s*/, '').replace(/\s\s*$/, '').split(/[\s,;]+/).map(Number);

const printFiveNumbers = (inputString) => {
    let originalData = cleanData(inputString);
    let sortedData = originalData.slice().sort((a, b) => a-b);
    makeHistogram(sortedData);
    makeBoxplot(sortedData);
    document.getElementById("sortedData").innerHTML = `<h3>Sorted Data</h3><p style="font-family: monospace;" >${sortedData.join(", ")}</p>`;
    document.getElementById("standardData").innerHTML = `<h3>Data Summary</h3><table><tr><th>&nbsp;&nbsp;&nbsp;&nbsp;n&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;x̄&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;&nbsp;&nbsp;&nbsp;</th></tr><tr><td>${sortedData.length}</td><td>${truncate(mean(sortedData),4)}</td><td>${truncate(Math.sqrt(variance(sortedData)),4)}</td></tr></table>`;
  };

let makeHistogram = (sortedData) => {
    var data, layout;
    data = [
      {
        x: sortedData,
        type: 'histogram',
        marker: {
          //color: "rgba(127,127,127,0.65)", // "rgba(100, 100, 250, 0.7)", <-- old color
          color: "rgba(0,0,255,0.5)", 
          line: {
            //color: "rgba(127, 127, 127, 1)",
            color: "blue",
            width: 2
          }
        }
      }
    ];
    layout = {
      title: "Histogram of Your Data",
      xaxis: {
        title: "Outcome"
      },
      yaxis: {
        title: "Frequency"
      },
      width: 800
    };
    try {
      return Plotly.newPlot('histDiv', data, layout);
    } catch (_error) {}
  };

let makeBoxplot = (sortedData) => {
  var trace1 = {
    x: sortedData,
    type: 'box',
    name: '',
    marker: {
      // color: "#7f7f7f",
      color: "green",
      line: {
        //color: "rgba(0, 0, 0, 1)",
        color: "green",
        width: 1
      }
    }

  };

  var data = [trace1];

  var layout = {
    title: 'Box Plot of Your Data',
    width: 800,
    height: 300, 
    xaxis: {
      title: "Outcome"
    },
    yaxis: {
      title: ""
    },
  };

  try {
    return Plotly.newPlot('boxDiv', data, layout, {editable: true});
  } catch (_error) {}
};

document.getElementById("myButton").onclick = function() {
  var form;
  form = document.getElementById("myForm");
  printFiveNumbers(form.myArea.value);
};

window.onload = () => {
  // This adds the ability to pass data via the URL bar. Just add something like `?data=1,2,3` to the URL.
  let params = new URLSearchParams(location.search);
  let data = params.get("data");
  if (data) {
    document.getElementById("myForm").myArea.value = data;  
    printFiveNumbers(data);
  }
}

