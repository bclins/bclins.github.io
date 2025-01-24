---
title: Calculus for Business & Economics Notes
css: https://bclins.github.io/mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#622; 
    --link-color: #A32; 
  }
  </style>
---

## Math 140 - Spring 2025

<center>
Jump to: [Math 140 Homepage](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>

### Week 1 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Jan 13  |  | Expressions and equations
Wed, Jan 15  | [1.1][1.1]  | Functions & graphs
Fri, Jan 17  | [1.2][1.2]  | Combining functions

### Mon, Jan 13

Today we introduced the course syllabus. Then we looked at how to solve the following equations algebraically. 

1. Solve $5-2x = -5$. (<https://youtu.be/7GShZYevLGU>)


1. Solve $\sqrt{3x + 1} = 4$. (<https://youtu.be/0gicD4STzpg>)

1. Solve $\dfrac{x}{x-1} = 3$. 

After we solved these equations, we also talked about the geometric interpretation of the solutions as places on a graph where a function has a certain y-value. 

4. Graph the line $y = 5 - 2x$ and check where it crosses the line $y = -5$. 

5. Graph the function $y = \sqrt{3x + 1}$. 

### Wed, Jan 15

To make it easier to graph functions, it helps to know some basic graphs.  Here are six you should memorize.

<table cellpadding="20px">
<tr><td>
<svg width="240" height="240" viewBox="-5 -5 10 10">
<!-- x & y axes -->
<g stroke="black" stroke-width="0.025">
 <line x1="-5" y1="0" x2="5" y2="0"/>
 <line x1="0" y1="-5" x2="0" y2="5"/>
</g>
<!-- Axes labels -->
 <g font-size="0.5" font-style="italic">
 <text x="4.4" y="0.6">x</text>
 <text x="-0.6" y="-4.4">y</text>
 </g>
<!-- Axes arrow tips -->
 <polygon points="5,0 4.5,0.15 4.5,-0.15"/>
 <polygon points="0,-5 0.15,-4.5 -0.15,-4.5"/>
<!-- Graph of function -->
<g transform="scale(1,-1)">
  <line x1="-5" y1="-3" x2="5" y2="2" stroke="blue" stroke-width="0.05"/>
</g>
<!-- Function label -->
 <g font-size="0.5" font-style="italic" fill="blue">
 <text x="1.5" y="-3.5">y = mx+b</text>
 </g>
</svg>
</td>

<td>
<svg width="240" height="240" viewBox="-5 -5 10 10">
<!-- x & y axes -->
<g stroke="black" stroke-width="0.025">
 <line x1="-5" y1="0" x2="5" y2="0"/>
 <line x1="0" y1="-5" x2="0" y2="5"/>
</g>
<!-- Axes labels -->
 <g font-size="0.5" font-style="italic">
 <text x="4.4" y="0.6">x</text>
 <text x="-0.6" y="-4.4">y</text>
 </g>
<!-- Axes arrow tips -->
 <polygon points="5,0 4.5,0.15 4.5,-0.15"/>
 <polygon points="0,-5 0.15,-4.5 -0.15,-4.5"/>
<!-- Graph of function -->
<g transform="scale(1,-1)">
<line x1="-5" y1="2" x2="5" y2="2" stroke="blue" stroke-width="0.05"/>
</g>
<!-- Function label -->
 <g font-size="0.5" font-style="italic" fill="blue">
 <text x="1.5" y="-3.5">y = c</text>
 </g>
</svg>
</td>

<td>
<svg width="240" height="240" viewBox="-5 -5 10 10">
<!-- x & y axes -->
<g stroke="black" stroke-width="0.025">
 <line x1="-5" y1="0" x2="5" y2="0"/>
 <line x1="0" y1="-5" x2="0" y2="5"/>
</g>
<!-- Axes labels -->
 <g font-size="0.5" font-style="italic">
 <text x="4.4" y="0.6">x</text>
 <text x="-0.6" y="-4.4">y</text>
 </g>
<!-- Axes arrow tips -->
 <polygon points="5,0 4.5,0.15 4.5,-0.15"/>
 <polygon points="0,-5 0.15,-4.5 -0.15,-4.5"/>
<!-- Function label -->
 <g font-size="0.5" font-style="italic" fill="blue">
 <text x="2.5" y="-3.5">y = x²</text>
 </g>
<!-- Graph of function -->
<g transform="scale(1,-1)">
  <polyline points="-2.00,4.0000 -1.96,3.8416 -1.92,3.6864 -1.88,3.5344 -1.84,3.3856 -1.80,3.2400 -1.76,3.0976 -1.72,2.9584 -1.68,2.8224 -1.64,2.6896 -1.60,2.5600 -1.56,2.4336 -1.52,2.3104 -1.48,2.1904 -1.44,2.0736 -1.40,1.9600 -1.36,1.8496 -1.32,1.7424 -1.28,1.6384 -1.24,1.5376 -1.20,1.4400 -1.16,1.3456 -1.12,1.2544 -1.08,1.1664 -1.04,1.0816 -1.00,1.0000 -0.96,0.9216 -0.92,0.8464 -0.88,0.7744 -0.84,0.7056 -0.80,0.6400 -0.76,0.5776 -0.72,0.5184 -0.68,0.4624 -0.64,0.4096 -0.60,0.3600 -0.56,0.3136 -0.52,0.2704 -0.48,0.2304 -0.44,0.1936 -0.40,0.1600 -0.36,0.1296 -0.32,0.1024 -0.28,0.0784 -0.24,0.0576 -0.20,0.0400 -0.16,0.0256 -0.12,0.0144 -0.08,0.0064 -0.04,0.0016 0.00,0.0000 0.04,0.0016 0.08,0.0064 0.12,0.0144 0.16,0.0256 0.20,0.0400 0.24,0.0576 0.28,0.0784 0.32,0.1024 0.36,0.1296 0.40,0.1600 0.44,0.1936 0.48,0.2304 0.52,0.2704 0.56,0.3136 0.60,0.3600 0.64,0.4096 0.68,0.4624 0.72,0.5184 0.76,0.5776 0.80,0.6400 0.84,0.7056 0.88,0.7744 0.92,0.8464 0.96,0.9216 1.00,1.0000 1.04,1.0816 1.08,1.1664 1.12,1.2544 1.16,1.3456 1.20,1.4400 1.24,1.5376 1.28,1.6384 1.32,1.7424 1.36,1.8496 1.40,1.9600 1.44,2.0736 1.48,2.1904 1.52,2.3104 1.56,2.4336 1.60,2.5600 1.64,2.6896 1.68,2.8224 1.72,2.9584 1.76,3.0976 1.80,3.2400 1.84,3.3856 1.88,3.5344 1.92,3.6864 1.96,3.8416 2.00,4.0000" fill="none" stroke="blue" stroke-width="0.05" /></svg>
</g>
</svg>
</td></tr>


<tr><td>
<svg width="240" height="240" viewBox="-5 -5 10 10">
<!-- x & y axes -->
<g stroke="black" stroke-width="0.025">
 <line x1="-5" y1="0" x2="5" y2="0"/>
 <line x1="0" y1="-5" x2="0" y2="5"/>
</g>
<!-- Axes labels -->
 <g font-size="0.5" font-style="italic">
 <text x="4.4" y="0.6">x</text>
 <text x="-0.6" y="-4.4">y</text>
 </g>
<!-- Axes arrow tips -->
 <polygon points="5,0 4.5,0.15 4.5,-0.15"/>
 <polygon points="0,-5 0.15,-4.5 -0.15,-4.5"/>
<!-- Function label -->
 <g font-size="0.5" font-style="italic" fill="blue">
 <text x="1.5" y="-3.5">y = |x|</text>
 </g>
<!-- Graph of function -->
<g transform="scale(1,-1)">
  <polyline points="-4,4 0,0 4,4" fill="none" stroke="blue" stroke-width="0.05"/>
</g>
</svg>
</td>

<td>
<svg width="240" height="240" viewBox="-5 -5 10 10">
<!-- x & y axes -->
<g stroke="black" stroke-width="0.025">
 <line x1="-5" y1="0" x2="5" y2="0"/>
 <line x1="0" y1="-5" x2="0" y2="5"/>
</g>
<!-- Axes labels -->
 <g font-size="0.5" font-style="italic">
 <text x="4.4" y="0.6">x</text>
 <text x="-0.6" y="-4.4">y</text>
 </g>
<!-- Axes arrow tips -->
 <polygon points="5,0 4.5,0.15 4.5,-0.15"/>
 <polygon points="0,-5 0.15,-4.5 -0.15,-4.5"/>
<!-- Function label -->
 <g font-size="0.5" font-style="italic" fill="blue">
 <text x="2.5" y="-3.5">y = 1/x</text>
 </g>
<!-- Graph of function -->
<g transform="scale(1,-1)">
<polyline points=" 0.25,4.000 0.30,3.333 0.35,2.857 0.40,2.500 0.45,2.222 0.50,2.000 0.55,1.818 0.60,1.667 0.65,1.538 0.70,1.429 0.75,1.333 0.80,1.250 0.85,1.176 0.90,1.111 0.95,1.053 1.00,1.000 1.05,0.952 1.10,0.909 1.15,0.870 1.20,0.833 1.25,0.800 1.30,0.769 1.35,0.741 1.40,0.714 1.45,0.690 1.50,0.667 1.55,0.645 1.60,0.625 1.65,0.606 1.70,0.588 1.75,0.571 1.80,0.556 1.85,0.541 1.90,0.526 1.95,0.513 2.00,0.500 2.05,0.488 2.10,0.476 2.15,0.465 2.20,0.455 2.25,0.444 2.30,0.435 2.35,0.426 2.40,0.417 2.45,0.408 2.50,0.400 2.55,0.392 2.60,0.385 2.65,0.377 2.70,0.370 2.75,0.364 2.80,0.357 2.85,0.351 2.90,0.345 2.95,0.339 3.00,0.333 3.05,0.328 3.10,0.323 3.15,0.317 3.20,0.313 3.25,0.308 3.30,0.303 3.35,0.299 3.40,0.294 3.45,0.290 3.50,0.286 3.55,0.282 3.60,0.278 3.65,0.274 3.70,0.270 3.75,0.267 3.80,0.263 3.85,0.260 3.90,0.256 3.95,0.253 4.00,0.250 4.05,0.247 4.10,0.244 4.15,0.241 4.20,0.238 4.25,0.235 4.30,0.233 4.35,0.230 4.40,0.227 4.45,0.225 4.50,0.222 4.55,0.220 4.60,0.217 4.65,0.215 4.70,0.213 4.75,0.211 4.80,0.208 4.85,0.206 4.90,0.204 4.95,0.202" fill="none" stroke="blue" stroke-width="0.05"/>
<polyline points="-5.00,-0.200 -4.95,-0.202 -4.90,-0.204 -4.85,-0.206 -4.80,-0.208 -4.75,-0.211 -4.70,-0.213 -4.65,-0.215 -4.60,-0.217 -4.55,-0.220 -4.50,-0.222 -4.45,-0.225 -4.40,-0.227 -4.35,-0.230 -4.30,-0.233 -4.25,-0.235 -4.20,-0.238 -4.15,-0.241 -4.10,-0.244 -4.05,-0.247 -4.00,-0.250 -3.95,-0.253 -3.90,-0.256 -3.85,-0.260 -3.80,-0.263 -3.75,-0.267 -3.70,-0.270 -3.65,-0.274 -3.60,-0.278 -3.55,-0.282 -3.50,-0.286 -3.45,-0.290 -3.40,-0.294 -3.35,-0.299 -3.30,-0.303 -3.25,-0.308 -3.20,-0.313 -3.15,-0.317 -3.10,-0.323 -3.05,-0.328 -3.00,-0.333 -2.95,-0.339 -2.90,-0.345 -2.85,-0.351 -2.80,-0.357 -2.75,-0.364 -2.70,-0.370 -2.65,-0.377 -2.60,-0.385 -2.55,-0.392 -2.50,-0.400 -2.45,-0.408 -2.40,-0.417 -2.35,-0.426 -2.30,-0.435 -2.25,-0.444 -2.20,-0.455 -2.15,-0.465 -2.10,-0.476 -2.05,-0.488 -2.00,-0.500 -1.95,-0.513 -1.90,-0.526 -1.85,-0.541 -1.80,-0.556 -1.75,-0.571 -1.70,-0.588 -1.65,-0.606 -1.60,-0.625 -1.55,-0.645 -1.50,-0.667 -1.45,-0.690 -1.40,-0.714 -1.35,-0.741 -1.30,-0.769 -1.25,-0.800 -1.20,-0.833 -1.15,-0.870 -1.10,-0.909 -1.05,-0.952 -1.00,-1.000 -0.95,-1.053 -0.90,-1.111 -0.85,-1.176 -0.80,-1.250 -0.75,-1.333 -0.70,-1.429 -0.65,-1.538 -0.60,-1.667 -0.55,-1.818 -0.50,-2.000 -0.45,-2.222 -0.40,-2.500 -0.35,-2.857 -0.30,-3.333 -0.25,-4.000" fill="none" stroke="blue" stroke-width="0.05"/>
</g>
</svg>
</td>

<td>
<svg width="240" height="240" viewBox="-5 -5 10 10">
<!-- x & y axes -->
<g stroke="black" stroke-width="0.025">
 <line x1="-5" y1="0" x2="5" y2="0"/>
 <line x1="0" y1="-5" x2="0" y2="5"/>
</g>
<!-- Axes labels -->
 <g font-size="0.5" font-style="italic">
 <text x="4.4" y="0.6">x</text>
 <text x="-0.6" y="-4.4">y</text>
 </g>
<!-- Axes arrow tips -->
 <polygon points="5,0 4.5,0.15 4.5,-0.15"/>
 <polygon points="0,-5 0.15,-4.5 -0.15,-4.5"/>
<!-- Function label -->
 <g font-size="0.5" font-style="italic" fill="blue">
 <text x="2.5" y="-2.5">y = √x</text>
 </g>
<!-- Graph of function -->
<g transform="scale(1,-1)">
  <polyline points="0.00,0.000 0.05,0.224 0.10,0.316 0.15,0.387 0.20,0.447 0.25,0.500 0.30,0.548 0.35,0.592 0.40,0.632 0.45,0.671 0.50,0.707 0.55,0.742 0.60,0.775 0.65,0.806 0.70,0.837 0.75,0.866 0.80,0.894 0.85,0.922 0.90,0.949 0.95,0.975 1.00,1.000 1.05,1.025 1.10,1.049 1.15,1.072 1.20,1.095 1.25,1.118 1.30,1.140 1.35,1.162 1.40,1.183 1.45,1.204 1.50,1.225 1.55,1.245 1.60,1.265 1.65,1.285 1.70,1.304 1.75,1.323 1.80,1.342 1.85,1.360 1.90,1.378 1.95,1.396 2.00,1.414 2.05,1.432 2.10,1.449 2.15,1.466 2.20,1.483 2.25,1.500 2.30,1.517 2.35,1.533 2.40,1.549 2.45,1.565 2.50,1.581 2.55,1.597 2.60,1.612 2.65,1.628 2.70,1.643 2.75,1.658 2.80,1.673 2.85,1.688 2.90,1.703 2.95,1.718 3.00,1.732 3.05,1.746 3.10,1.761 3.15,1.775 3.20,1.789 3.25,1.803 3.30,1.817 3.35,1.830 3.40,1.844 3.45,1.857 3.50,1.871 3.55,1.884 3.60,1.897 3.65,1.910 3.70,1.924 3.75,1.936 3.80,1.949 3.85,1.962 3.90,1.975 3.95,1.987 4.00,2.000 4.05,2.012 4.10,2.025 4.15,2.037 4.20,2.049 4.25,2.062 4.30,2.074 4.35,2.086 4.40,2.098 4.45,2.110 4.50,2.121 4.55,2.133 4.60,2.145 4.65,2.156 4.70,2.168 4.75,2.179 4.80,2.191 4.85,2.202 4.90,2.214 4.95,2.225" fill="none" stroke="blue" stroke-width="0.05" /></svg>
</g>
</svg>
</td></tr>
</table>

We used these examples to help graph the following in class:

1. $y = 5|x|$

2. $y = x^2 + 3$ (<https://youtu.be/tfF_-Db8iSA?t=2658>)

3. $y = \dfrac{1}{x-2}$ (<https://youtu.be/tfF_-Db8iSA?t=3391>)

<!--4. $y = |x-4|$

5. $y = -x^2$-->

4. $y = \sqrt{4 - x}$


After those graphs, we talked about function notation.  Both $y = x^2$ and $f(x) = x^2$ to mean the same thing.  But the notation $f(x) = x^2$ emphasizes that $f$ is a function of the $x$ variable.  Be careful not to confuse function notation $f(5)$ with multiplication $(2)(5) = 10$.  Even though the notation looks the same, they are not the same!  

We did these examples. 

<!--7. Suppose that the cost for a business to manufacture $x$ watering pails is $C(x)$.  Explain in words what the equation $C(5{,}000) = 6{,}000$ means. (Move to homework) -->

5. If $f(x) = x^2$ and $g(x) = x+5$, find $f(g(4))$ and $g(g(4))$.  

6. Find $3 f(2) + 4 g(-1)$.

7. The quantity of gasoline $Q$ sold by a gas station is a function of the price $p$ that the owner sets.  Here is a graph of the function $Q = Q(p)$. 

    <center>
    ![](https://people.hsc.edu/faculty-staff/blins/classes/spring21/math140/Notes/week1a.svg)
    </center>

    a. Use the graph above to find $Q(3)$.
    b. Solve $Q(p) = 3000$ for $p$.   
    c. If $Q(5) = 600$, explain in English what that means. 


8. The function $f(x) = \frac{1}{2}(x + \frac{2}{x})$ can be used to approximate $\sqrt{2}$.  Calculate $f(2)$ and $f(f(2))$.  

<!--
10. The number of large animals that can be supported by a square kilometer of land is a function $N(m)$ that depends on the average mass ($m$) in kilograms of the animals. If $N(50) = 5$, what does that mean in words?  

11. If $C(p)$ is the amount of carbon monoxide in the air, measured in parts per million (ppm), as a function of the number of residents $p$ in a town (measured in thousands of people).  If the population of the town is growing so that $p(t) = 10 + 0.1 t^2$ where $t$ is the number of years from now, then find the formula for a function that will predict the amount of carbon monoxide in the air $t$ years from now. 
-->

### Fri, Jan 17

We started talking about different ways you can combine functions.  We did the following exercises.

1. Use the graph below to compute $g(f(-5))$. (<https://youtu.be/oORnGaJp1pk>)

<center>
<img src="functionComposition.png" width = 400></img>
</center>

2. ([Exercise 1.2# 29](https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#page=28)) The function $D(p)$ gives the number of items that will be demanded when the price is $p$. The
production cost, $C(x)$ is the cost of producing $x$ items. To determine the cost of production
when the price is $6, you would do which of the following?

    a. Evaluate $D(C(6))$
    b. Evaluate $C(D(6))$
    c. Solve $D(C(x)) = 6$
    d. Solve $C(D(p)) = 6$ 

3. Continuing the previous problem, profit is revenue minus cost, and revenue is price times quantity sold.  Using the functions $C$ and $D$, write down formulas for revenue and for profit. 

After we talked about function composition, we switched to a quick review of linear functions. You need to know these formulas for linear functions:

* **Slope-Intercept Form** $y = mx + b$
* **Point-Slope Form** $y-y_0 = m(x - x_0)$

You also need to understand slope very well:

* **Slope** $m = \dfrac{\text{rise}}{\text{run}} = \dfrac{\Delta y}{\Delta x} = \dfrac{ y_2 - y_1}{x_2 - x_1}$

4. A line passes through $(-1, 6)$ and $(5, -4)$.  Find an equation for the line. (<https://youtu.be/XMJ72mtMn4>) 



### Week 2 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Jan 20  |  | MLK day - no class
Wed, Jan 22  | [1.3][1.3]  | Linear functions
Fri, Jan 24  | [1.3][1.3]  | Slope


### Wed, Jan 22 

Today we talked about linear equation word problems. 

1. Someone is hiking up a mountain.  They start at an elevation of 1200 meters and climb at a constant rate.  After 4 hours, they are at an elevation of 1700 meters. Find a formula for their elevation $y$ as a function of the time $x$ in hours since they started hiking. (<https://youtu.be/hBpI9IfmMKg>)

2. Find a formula to convert Celsius to Fahrenheit.

3. Find a formula to convert Fahrenheit to Celsius.

<!--
4. Find an equation for the line passing through $(-1,4)$ and $(3,-4)$.
-->

4. Find the slope and $y$ intercept of the equation $5x-2y = 8$. (<https://youtu.be/voN3PBPEy2A>)

5. Joe imports coffee.  He can import arabica beans for $6 per pound and he can import robusta beans for $5 per pound.  Suppose he spends $1500 to import $x$ pounds of arabica beans and $y$ pounds of robusta beans.  

    a. Find an equation that relates $x$ and $y$.
    b. What is the $x$-intercept for this equation, and what does it mean?
    c. What is the $y$-intercept for this equation, and what does it mean?
    d. What is the slope of this equation, and what does it mean?

<!--
5. Find a formula for a line with slope 2 passing through $(2,5)$.  

6. $\dfrac{x+3}{4} = 3$

7. $\dfrac{3}{x} - 5 = \dfrac{2}{x}$

8. Pressure underwater (measured in ATMs) is a linear function of the depth $x$ in meters given by $P = \frac{1}{10}x+1$.  What is the slope and what are its units?

9. The Virginia state income tax for people making over $17,000 is $T = 720 + 0.0575 (I - 17000)$.  Graph this linear function.  What is the slope?  What does the input variable $I$ represent?  What about the output variable $T$?
-->

6. The Virginia state income tax for people making over $17,000 is $720 plus 5.75% of all income over $17,000. Find a formula for the tax owed $y$ as a function of income $x$. 

### Fri, Jan 24

1. Solve the system of equations below. (<https://youtu.be/FgX3gLDDlzI>)

$$ y = 2x$$
$$3x + y = 30$$

2. Solve the system of equations below. (<https://youtu.be/cblHUeq3bkE>)

$$3x + 6y = 12$$
$$5x - 8y = 2$$

3. Suppose that the quantity of beef supplied ($Q_S$) and demanded ($Q_D$) are given by the following functions of price.  Find the equilibrium price and quantity. (<https://youtu.be/9n-xMt-Sj3A>)

$$Q_S = -40 + 30P$$
$$Q_D = 180 - 25P$$

4. Leo has 4 more keys than Haley on his keychain.  Together they have 18 keys total.  How many keys does Haley have? (<https://youtu.be/2EcUlgR5ksY>)

5. Solve the system of equations

$$y = \dfrac{6}{x}$$
$$y = 2 - \dfrac{5}{x}$$


### Week 3 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Jan 27  | [1.3][1.3]  | Systems of linear equations
Wed, Jan 29  | [1.4][1.4]  | Exponents
Fri, Jan 31  | [1.4][1.4]  | Exponents - con’d

### Week 4 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 3  | [1.5][1.5]  | Quadratics
Wed, Feb 5  | [1.6][1.6]  | Polynomial functions
Fri, Feb 7  | [1.6][1.6]  | Polynomial functions - con'd

### Week 5 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 10  | [1.6][1.6]  | Rational functions
Wed, Feb 12  |  | Review
Fri, Feb 14  |  | Midterm 1

### Week 6 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 17  | [1.7][1.7]  | Exponential functions
Wed, Feb 19  | [1.7][1.7]  | Exponential functions - con’d
Fri, Feb 21  | [1.8][1.8]  | Logarithmic functions

### Week 7 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 24  | [1.8][1.8]  | Logarithmic functions - con’d
Wed, Feb 26  | [2.2][2.2]  | The derivative
Fri, Feb 28  | [2.2][2.2]  | The derivative as a function

### Week 8 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 3  | [2.3][2.3]  | The power & sum rule for derivatives
Wed, Mar 5  | [2.3][2.3]  | Derivatives of logarithms and exponentials
Fri, Mar 7  | [2.3][2.3]  | Applications of derivatives

### Week 9 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 17  | [2.4][2.4]  | Product rule
Wed, Mar 19  | [2.4][2.4]  | Quotient rule
Fri, Mar 21  | [2.5][2.5]  | Chain rule

### Week 10 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 24  | [2.5][2.5]  | Chain rule - con’d
Wed, Mar 26  |  | Review
Fri, Mar 28  |  | Midterm 2

### Week 11 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 31  | [2.7][2.7]  | Optimization
Wed, Apr 2  | [2.7][2.7]  | Optimization - con’d
Fri, Apr 4  | [2.9][2.9]  | Applied optimization

### Week 12 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 7  | [2.10][2.10]  | Other applications
Wed, Apr 9  | [4.1][4.1]  | Functions of two variables
Fri, Apr 11  | [4.2][4.2]  | Partial derivatives

### Week 13 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 14  | [4.2][4.2]  | Partial derivatives - con’d
Wed, Apr 16  |  | Review
Fri, Apr 18  |  | Midterm 3

### Week 14 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 21  | [4.3][4.3]  | Multivariable optimization
Wed, Apr 23  | [4.3][4.3]  | Multivariable optimization - con’d
Fri, Apr 25  |  | Constrained optimization
Mon, Apr 28  |  | Constrained optimization - con’d 


[1.1]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A51%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C680%2C0%5D>
[1.2]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A184%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[1.3]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A266%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[1.4]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A320%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[1.5]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A326%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[1.6]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A358%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[1.7]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A390%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[1.8]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A424%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.2]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A504%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.3]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A587%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.4]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A635%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.5]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A652%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.6]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A674%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.7]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A700%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.9]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A784%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[2.10]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A815%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[4.1]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A1149%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C680%2C0%5D>
[4.2]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A1309%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>
[4.3]: <https://people.hsc.edu/faculty-staff/blins/books/AppliedCalculusCalawayHoffmanLippman.pdf#%5B%7B%22num%22%3A1339%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C70%2C720%2C0%5D>



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
