// Written by Brian Lins
// This software is available under the MIT license.

function range(first,last) {
// returns an array with the values first through last.
  let x = [];
  for (let i = first; i<=last; i++) {
    x.push(i);
  }
  return x
}

function cumulativeSums(x) {
  // returns the array of cumulative sums of an array x.
  let sums = [];
  sums[0] = x[0];
  for(let i = 1; i < x.length; i++) {
    sums[i] = sums[i-1]+x[i];
  }
  return sums
}

// get the value in an input box from its name
// allows both decimal and fraction inputs
function getVal(input) {
    const varParts = input.split('/');
    if(varParts.length === 1) {
        return Number(varParts[0]);
    } else {
        if(varParts.length === 2) {
            return Number(varParts[0])/Number(varParts[1])
        } else {
            return NaN
        }
    }
}

function binomialDist(N,p) {
  // uses a non-recursive method to compute the probabilities of a binomial distribution.
  // Using logarithms avoids multiplication rounding errors that add up when N gets large.
  const logOdds = Math.log(p/(1-p));
  const logNotP = Math.log(1-p);
  let logDist = [];
  logDist[0] = N*logNotP;
  for(let k = 0; k < N; k++) {
    logDist[k+1] = logDist[k]+logOdds+Math.log(N-k)-Math.log(k+1);
  }
  return logDist.map((x)=>Math.exp(x))
}

function plotBinomialDist(N,p) {
  const y = binomialDist(N,p);
  let cdf = cumulativeSums(y);
    const importanty = y.filter((value) => value > 0.00001);
  const first = y.indexOf(importanty[0]);
  let x = range(first,first+importanty.length-1);
  const importantCDF = x.map((k) => cdf[k]).map(num=>num.toFixed(5));
  const pmfPlot = document.getElementById('histDiv');
  const data = [
    {
      x: x,
      y: importanty,
      text: importantCDF,
      type: 'bar',
      hoverinfo: 'x+y',
      marker: {
        color: x.map(()=>"#1f77b4"),
      },
    },
  ];
  const layout = {
    title: "Binomial Distribution",
    xaxis: {title: "# of Successes"},
    yaxis: {title: "Probability", hoverformat: '.5f'},
    width: 800
  };
  try {
    Plotly.newPlot('histDiv', data, layout);
  } catch (_error) {
  };
  pmfPlot.on('plotly_hover', function(data){
    let newColors = [];
    let text = [];
    let update = {
      marker: {
        color: []
      } 
    };
    if (document.getElementById("myCheck").checked) {
      update.marker.color = data.points[0].fullData.x.map((x) => (x <= data.points[0].x) ? "#ff7f0e" : "#1f77b4");
      update.hoverinfo = 'x+text';
    } else {
      update.marker.color = data.points[0].fullData.x.map((x) => (x === data.points[0].x) ? "#ff7f0e" : "#1f77b4");
      update.hoverinfo = 'x+y';
    };
    Plotly.restyle('histDiv',update);
  });
  pmfPlot.on('plotly_unhover', function(data){
    let update = {
      marker: {
        color: "#1f77b4",
      } 
    };
    Plotly.restyle('histDiv',update);
  });
  return
}

document.getElementById("myButton").onclick=()=> {
    let N = document.getElementById("N").value;
    let p = getVal(document.getElementById("p").value);
    plotBinomialDist(N,p);
    return
}


// Old colors: blue and orangered

// New colors
//     '#1f77b4',  // muted blue
//    '#ff7f0e',  // safety orange
