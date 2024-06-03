---
title: Logarithms
author: Brian Lins
institute: Hampden-Sydney College 
date: Thursday, May 30, 2024
---

\newcommand{\ds}{\displaystyle}
\newcommand{\on}{\operatorname}

<style>
.bordered {
    border: 1px solid black;
    border-collapse: collapse;


    & th {
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
        background-color: lightgray;
        color: black;
    }

    & td {
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
    }
}

.Theorem {
  border-radius: 10px;
  background-color: #eee;
  padding: 5px 10px 5px 10px;
  margin-bottom: 16px;
  border: 1px solid #333;
}
</style>


<!--
NOTE: USE THE FOLLOWING COMMAND TO COMPILE THESE SLIDES:
pandoc -s -t slidy day1slides.md -o day1slides.html
-->

# What Are Logarithms?

**Short Answer:** The base-10 logarithm function just tells you the order of magnitude of a number.  

## Examples

* $\log(100) = 2$
* $\log(1{,}000) = 3$
* $\log(10{,}000) = 4$, etc. 

# What Are Logarithms?

**Longer Answer:** The logarithm function tells you the exact position of where a number belongs on a logarithmic scale. 

## Examples

* $\log(1) = 0$ means that 1 is at position 0 on a log-scale.
* $\log(10) = 1$ means that 10 is one step up on a log-scale. 
* $\log(2) = 0.301$ means that 2 is 30.1% of the way from 1 to 10.  

# History of Logarithms

Logarithms were discovered/invented by John Napier in the early 1600's. 

<center>
<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/John_Napier.jpg" width=280></img>
</figure>
</center>

He published a booked called *Mirifici logarithmorum canonis descriptio* in 1614.  The title literally means "A Description of the Wonderful Rule of Logarithms".  

# Why Are Logarithms Useful?  

Logarithms convert multiplication & division problems into addition & subtraction problems.  

* $\log(ab) = \log(a) + \log(b)$
* $\log(a/b) = \log(a) - \log(b)$

# Addition is Much Easier then Multiplication

Compare these two problems: $1234 + 5678$ versus $1234 \times 5678$. 

# Using a Table of Logarithms

<center>
<figure>
<img src="http://physicsacademy.weebly.com/uploads/4/3/2/3/4323604/9440368.jpg" width=800></img>
</figure>
</center>


# More History of Logarithms

* 1614 Napier published *A Description of the Wonderful Rule of Logarithms*.

* 1617 Henry Briggs published the first base-10 logarithm tables. 

* 1624 Edmund Wingate published *The Use of the Rule of Proportion.* 
He apparently got the idea for the rule of proportion from Edmund Gunter.

* In the early 1630’s, William Oughtred put two wooden rules of proportion together to make the first slide rule.

# Rule of Proportion 

A rule of proportion is just a wooden ruler with markings on a logarithmic scale.  


<center>
<figure>
<img src="https://www.nzeldes.com/HOC/images/Gunter02.jpg" width=960></img>
</figure>
</center>



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
