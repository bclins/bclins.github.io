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
\newcommand{\R}{\mathbb{R}}

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

Today we talked about significant digits.  Here is a [quick video on how these work](https://youtu.be/l2yuDvwYq5g). Then we defined absolute and relative error:

<div class="Theorem">
Let $x^*$ be an approximation of $x \in \R$.  <!-- ^* -->

* The **absolute error** is $|x^* - x|$. 
* The **relative error** is $\dfrac{|x^*-x|}{|x|}$. 
</div>

The base-10 logarithm of the relative error is approximately the number of significant digits, so you can think of significant digits as a measure of relative error.  Keep in mind these rules:

1. When you add/subtract numbers, the last common digit that is significant for both numbers is the last significant digit of the answer. 
2. When you multiply/divide two numbers, the result has significant digits equal to the minimum number of significant digits of the two inputs. 

Intuitively, addition & subtraction "play nice" with absolute error while multiplication and division "play nice" with relative error.  This can lead to problems:

1. **Catastrophic cancellation.** When you subtract two numbers of roughly the same size, the relative error can get much worse.  For example, both 53.76 and 53.74 have 4 significant digits, but 
$$53.76 - 53.74 = 0.02$$ 
only has 1 significant digit.  

2. **Useless precision.** If you add two numbers with very different magnitudes, then having a very low relative error in the smaller one will not be useful.  

We finished by looking at how you can sometimes re-write algorithms on a computer to avoid overflow/underflow issues.  Stirling's formula is an approximation for $n!$ which has a relative error that gets smaller as $n$ increases.  

We used the `math` library in Python to test **Stirling's formula**, which is the following approximation 
$$n! \approx \sqrt{2 \pi n} \frac{n^n}{e^n}.$$

```python
import math
n = 100
print(float(math.factorial(n)))
f = lambda n: math.sqrt(2*math.pi*n)*n**n/math.exp(n)
print(f(n))
```

Our formula worked well until $n=143$, then we got an overflow error.  The problem was that $n^n$ got too big to convert to a floating point number.  But you can prevent the overflow error by adjusting the formula slightly to. 

```python
n = 143
f = lambda n: math.sqrt(2*math.pi*n)*(n/math.exp(1))**n
print(f(n))
```

- - -

### Week 2 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 22 |            | Taylor's theorem
Wed, Jan 24 |            | Taylor's theorem - con'd
Fri, Jan 26 |            | The Babylonian algorithm

#### Mon, Jan 22

Today we reviewed Taylor series.  We recalled the following important Maclaurin series (which are Taylor series with center $c = 0$):

* $\ds e^x = \sum_{n=0}^\infty \dfrac{x^n}{n!}$
* $\ds \sin(x) = \sum_{n=0}^\infty \dfrac{(-1)^n \, x^{2n+1}}{(2n+1)!}$
* $\ds \cos(x) = \sum_{n=0}^\infty \dfrac{(-1)^n \, x^{2n}}{(2n)!}$
* $\ds \dfrac{1}{1-x} = \sum_{n = 0}^\infty x^n$
* $\ds \ln(1+x) = \sum_{n = 0}^\infty \dfrac{(-1)^n \, x^{n+1}}{n+1}$

The we did the following workshop in class. 

* Workshop: [Taylor series](Workshops/TaylorSeries.pdf)

#### Wed, Jan 24

Today we reviewed some theorems that we will need throughout the course.  The first is probably the most important theorem in numerical analysis since it lets us estimate error when using Taylor series approximations.  

<div class="Theorem">
**Taylor's Theorem.** Let $f$ be a function that has $(n+1)$ derivatives in the interval between $x$ and $c$.  Then there exists a $z$ strictly inside the interval from $x$ to $c$ such that 
$$f(x) - P_n(x) = \frac{f^{(n+1)}(z)}{(n+1)!} (x-c)^{n+1}$$
where $P_n$ is the $n$th degree Taylor polynomial for $f$ centered at $c$. 
</div>

A special case of Taylor's theorem is when $n = 0$. Then you get the Mean Value Theorem (MVT):

<div class="Theorem">
**Mean Value Theorem.** Let $f$ be a function that is differentiable in the interval between $a$ and $b$.  Then there exists a $c$ strictly inside the interval from $a$ to $b$ such that 
$$f'(c) = \frac{f(b) - f(a)}{b-a}.$$
</div>

The proof of both the Mean Value Theorem and Taylor's Theorem comes from looking at an even simpler theorem called Rolle's theorem. 

<div class="Theorem">
**Rolle's Theorem.** Let $f$ be a function that is differentiable in the interval between $a$ and $b$ and suppose that $f(a) = f(b)$.  Then there exists a $c$ strictly inside the interval from $a$ to $b$ such that $f'(c) = 0.$
</div>

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/RTCalc.svg" width = 300></img>
</center>

We briefly sketched an intuitive proof of Rolle's theorem using the [Extreme Value Theorem](https://en.wikipedia.org/wiki/Extreme_value_theorem) from calculus, but the details of that proof are not really that important.  

We did the following exercises in class. 

1. Use Taylor's theorem to estimate the error in using the 20th degree Maclaurin series to estimate $\sin(4\pi)$. 

2. Use Taylor's theorem to estimate the error in using the 20th degree Maclaurin series to estimate $e^6$.  

We finished with a proof that the number $e$ is irrational. First we temporarily assumed that $e$ is a reduced fraction $\tfrac{m}{n}$.  Then we calculated the worst remainder for the $n$th degree Maclaurin polynomial for $e^x$ at $x = 1$. We did the following exercises that lead to a contradiction:

3. Show that $n!(e - P_n(1))$ must be an integer. 

4. Use Taylor's theorem to show that $n! R_n(1)$ must be strictly between 0 and 1. 




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
