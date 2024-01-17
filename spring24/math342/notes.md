---
title: Numerical Analysis Notes
css: ../mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#333; 
    --link-color: #069; 
  }
  </style>
---

\newcommand{\ds}{\displaystyle}

## Math 342 - Spring 2024

<center>
Jump to: [Syllabus](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>

### Week 1 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Wed, Jan 17 | [1.2][1.2] | Floating point arithmetic
Fri, Jan 19 | [1.2][1.2] | Significant digits, relative error

#### Wed, Jan 17

We talked about how computers store [floating point numbers](https://en.wikipedia.org/wiki/Floating_point).  Most modern programming languages store floating point numbers using the [IEEE 754 standard](https://en.wikipedia.org/wiki/IEEE_754). 

![](floating_point_layout.svg){ style="width: 700px" }
![](floating_point_math.svg){style="width: 700px"}

In the IEEE 754 standard, a 64-bit floating point number has the form 
$$x = (-1)^s * (1.a_1 a_2 \ldots a_{52})_2 * 2^{e - 1023}$$
where 

* $s$ is the 1-bit sign,
* $a_1 a_2 \ldots a_{52}$ is the 52-bit mantissa, and
* $e$ is the 11-bit exponent which ranges from 0 to 2047. Only 1 to 2046 are used for regular floating point numbers, $e=0$ is reserved for zero and [subnormal numbers](https://en.wikipedia.org/wiki/Subnormal_number), and $e=2047$ is reserved for infinity and NaN ("not a number"). 

To understand floating point numbers, we also reviewed [binary numbers](https://en.wikipedia.org/wiki/Binary_numeral_system), [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation), and [logarithmic scales](https://en.wikipedia.org/wiki/Logarithmic_scale ).

We did the following exercises in class:

1. Convert (10110)<sub>2</sub> to decimal. (<https://youtu.be/a2FpnU9Mm3E>)

2. Convert 35 to binary. (<https://youtu.be/gGiEu7QTi68>)

3. What are the largest and smallest 64-bit floating point numbers that can be stored?  

4. In Python, compute `2.0**1024` and `2**1024`.  Why do you get different results?

5. In Python, compare `2.0**1024` with `2.0**(-1024)` and `2.0**(-1070)`. What do you notice? 

<!--
6. What number has mantissa (1011)<sub>2</sub> and exponent (110)<sub>2</sub>? 
-->

#### Fri, Jan 19



- - -

### Week 2 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 22 |            | Taylor's theorem
Wed, Jan 24 |            | Taylor's theorem - con'd
Fri, Jan 26 |            | The Babylonian algorithm

- - -

### Week 3 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 29 | [2.1][2.1] | Bisection method
Wed, Jan 31 | [2.3][2.3] | Newton's method
Fri, Feb 2 | [2.4][2.4] | Rates of convergence

- - -

### Week 4 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 5 | [2.4][2.4] | Rates of convergence - con'd
Wed, Feb 7 | [2.5][2.5] | Secant method
Fri, Feb 9 | [2.2][2.2] | Fixed point iteration

- - -

### Week 5 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 12 | | Systems of linear equations
Wed, Feb 14 | | LU decomposition
Fri, Feb 16 | | Matrix norms

- - -

### Week 6 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 19 | | Condition numbers
Wed, Feb 21 | | Review
Fri, Feb 23 | | **Midterm 1** 

- - -

### Week 7 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 26 | [3.1][3.1] | Polynomial interpolation, Lagrange form 
Wed, Feb 28 | [3.2][3.2] | Newton's divided differences
Fri, Mar 1 | [3.2][3.2] | Divided differences - con'd

- - -

### Week 8 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 4 | [3.3][3.3] | Interpolation error
Wed, Mar 6 | [3.3][3.3] | Interpolation error - con'd
Fri, Mar 8 | [3.4][3.4] | Chebyshev polynomials

- - -

### Week 9 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 18 | [5.1][5.1] | Newton-Cotes formulas
Wed, Mar 20 | [5.1][5.1] | Newton-Cotes formulas - con'd
Fri, Mar 22 | [5.4][5.4] | Gaussian quadrature

- - -

### Week 10 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 25 | [5.4][5.4] | Gaussian quadrature - con'd
Wed, Mar 27 | [5.6][5.6] | Monte carlo integration
Fri, Mar 29 | [4.1][4.1] | Numerical differentiation

- - -

### Week 11 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 1 | | Discrete least squares regression
Wed, Apr 3 | | Discrete least squares - con'd
Fri, Apr 5 | | Continuous least squares

- - -

### Week 12 Notes
 
Day  | Section  | Topic
:---:|:---:|:--------------
Mon, Apr 8 | &nbsp; | [Orthogonal functions](https://en.wikipedia.org/wiki/Orthogonal_functions), [Gram-Schmidt](https://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process) 
Wed, Apr 10 | | Review
Fri, Apr 12 | | **Midterm 2**

- - -

### Week 13 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 15 | [6.1][6.1] | Euler's method
Wed, Apr 17 | | Existence & uniqueness of solutions
Fri, Apr 19 | [6.1][6.1] | Euler's method error

- - -

### Week 14 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 22 | [6.4][6.4] | Runge-Kutta methods
Wed, Apr 24 | [6.4][6.4] | Runge-Kutta methods - con'd
Fri, Apr 26 | [6.5][6.5] | Systems of ODEs
Mon, Apr 29 | | Review



- - - 

[1.2]: <https://www.brianheinold.net/numerical/numerical_book.html#section:introductory_material:floatingpoint_arithmetic>
[2.1]: <https://www.brianheinold.net/numerical/numerical_book.html#section:solving_equations_numerically:the_bisection_method>
[2.2]: <https://www.brianheinold.net/numerical/numerical_book.html#section:solving_equations_numerically:fixed_point_iteration>
[2.3]: <https://www.brianheinold.net/numerical/numerical_book.html#section:solving_equations_numerically:newtons_method>
[2.4]: <https://www.brianheinold.net/numerical/numerical_book.html#section:solving_equations_numerically:rates_of_convergence>
[2.5]: <https://www.brianheinold.net/numerical/numerical_book.html#section:solving_equations_numerically:the_secant_method>
[3.1]: <https://www.brianheinold.net/numerical/numerical_book.html#section:interpolation:the_lagrange_form> 
[3.2]: <https://www.brianheinold.net/numerical/numerical_book.html#section:interpolation:newtons_divided_differences>
[3.3]: <https://www.brianheinold.net/numerical/numerical_book.html#section:interpolation:problems_with_interpolation>
[3.4]: <https://www.brianheinold.net/numerical/numerical_book.html#section:interpolation:chebyshev_polynomials>
[4.1]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_differentiation:basics_of_numerical_differentiation>
[5.1]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_integration:newtoncotes_formulas>
[5.2]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_integration:the_iterative_trapezoid_rule>
[5.4]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_integration:gaussian_quadrature>
[5.6]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_integration:improper_and_multidimensional_integrals>
[6.1]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_methods_for_differential_equations:eulers_method>
[6.4]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_methods_for_differential_equations:rungekutta_methods>
[6.5]: <https://www.brianheinold.net/numerical/numerical_book.html#section:numerical_methods_for_differential_equations:systems_of_odes>




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
