// Carry-out the Chi-squared test for association.

function range(n) {
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(i);  
  }
  return output; 
}

// Each of these functions assumes that A is an array of rows, and each row is an array.
const toTable = (arr) => {
    // convert an array into a table
    return "<table>"+arr.map((row) => `<tr> ${row.map((entry) => `<td> ${entry.toFixed(4)} </td>`).join('')} </tr>`).join(' ')+"</table>";
}

const expCounts = (obs) => {
  const r = obs.length;
  const c = obs[0].length;
  const rowSums = obs.map((row) => row.reduce((a,b)=>Number(a)+Number(b)));
  const colSums = range(c).map((i) => obs.map((row) => row[i]).reduce((a,b)=>Number(a)+Number(b)));
  const total = rowSums.reduce((a,b)=>a+b);
  return range(r).map((i) => range(c).map((j) => rowSums[i]*colSums[j]/total));
}


const chisq = (obs) => {
  const exp = expCounts(obs);
  const r = obs.length;
  const c = obs[0].length;
  let total = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      total += (obs[i][j]-exp[i][j])**2/exp[i][j];
    }
  }
  return total;
}

const chisqTerms = (obs) => {
  const exp = expCounts(obs);
  const r = obs.length;
  const c = obs[0].length;
  return range(r).map((i) => range(c).map((j) => (obs[i][j]-exp[i][j])**2/exp[i][j]));
}

const getMatrix = (inputString) => {
    // Remove spaces around plus and minus signs
    inputString = inputString.replace(/\s+\+\s+/g,'+').replace(/\s+\-\s+/g,'-');
    // Replace brackets and ampersands with whitespace
    inputString = inputString.replace(/[\[\]\&]+/g,' ');
    // Replace double backslash with semicolons
    inputString = inputString.replace(/\\\\/g,';');
    // Trim extra newlines and whitespace from beginning and end of the input string.
    inputString = inputString.replace(/^[\n\r\s]*/, '').replace(/[\n\r\s]*$/, '');
    // Separate rows by carriage returns, semicolons, and newlines; and then split each row into an array by whitespace, commas, and semicolons. 
    return inputString.split(/[\n\r;]\s*/).map((row) => (row.replace(/^\s\s*/, '').replace(/\s\s*$/, '').split(/[\s,]+/) ));
}

const checkMatrix = (matrix) => {
    // prints a warning if all rows of the matrix are not the same length
    const r = matrix.length;
    const c = matrix[0].length;
    let allRowsSame = true;
    for (i = 1; i < r; i++) {
        if (matrix[i].length != c) {
            allRowsSame = false;
        }
    }
    if (!allRowsSame) {
        document.getElementById("errorSpace").innerHTML = "<strong>Warning:</strong> not all rows are the same length. <br>";
        for (i = 0; i < r; i++) {
            document.getElementById("errorSpace").innerHTML += `<em>Row ${i+1} has ${matrix[i].length} elements </em><br>`;
        }
    } else {
        document.getElementById("errorSpace").innerHTML = ""
    }
    return;
}

window.onload = () => {
    document.getElementById("myButton").onclick = () => {
        const form = document.getElementById("myForm");
        const matrix = getMatrix(form.myArea.value);
        // checkMatrix(matrix);
        console.log(matrix);
        document.getElementById("results").innerHTML = `<h3>Results</h3><p style="font-size: 18px">χ² = ${chisq(matrix).toFixed(4)}</p>`;
        document.getElementById("results").innerHTML += "<h4>Expected Counts</h4>";
        document.getElementById("results").innerHTML += toTable(expCounts(matrix));
        document.getElementById("results").innerHTML += "<h4>Chi-Squared Terms (Oᵢⱼ-Eᵢⱼ)²/Eᵢⱼ</h4>";
        document.getElementById("results").innerHTML += toTable(chisqTerms(matrix));
        document.getElementById("results").innerHTML += "<br><br><br><br><br><br><br><br><br><br>";
        return;
    }
    return;
}

