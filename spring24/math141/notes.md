---
title: Calculus I Notes
css: ../mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
---

\newcommand{\ds}{\displaystyle}

## Math 141 - Spring 2024

<center>
Jump to: [Syllabus](index.html), [Week 1](#week-1-notes) , [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>

### Week 1 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Wed, Jan 17 | [1.1][1.1] | Review of functions
Thu, Jan 18 | [1.2][1.2] | Basic classes of functions 
Fri, Jan 19 | [1.2][1.2] | Basic classes of functions - con'd

#### Wed, Jan 17

Today we reviewed functions and function notation.  We talked about how $f(x)$ looks like $f$ multiplied by $x$, but it really means something completely different! We also talked about the following important functions (and their graphs) that you should have memorized:

1. **Linear functions** $f(x) = mx+b$.

2. **The square function** $f(x) = x^2$. 

3. **The positive square-root function** $f(x) = \sqrt{x} = x^{1/2}$. 

4. **The reciprocal function** $f(x) = \dfrac{1}{x}$.

5. **The 1-dimensional distance function** $f(x) = |x-a|$. 

We reviewed the definitions of **domain**, **range**, and **function composition**. We did the following examples in class. 

1. Let $f(x) = \dfrac{4}{x+2}$ and $g(x) = \dfrac{1}{x}$. Find the domain of $f(g(x))$. (<https://youtu.be/PNzHrPebKOw>)

2. Two poles are connected by a wire that also connects to the ground between the poles. Find a formula for the length of the wire as a function of $x$ and determine the domain. 

<center>
<img src="https://openstax.org/apps/archive/20231109.173216/resources/b552f9631ff58624c44af7691ed7dae547f26758" width=300></img>
</center>

We didn't have time for this exercise, but it is also a good example of how to construct a function. 

3. A rectangular piece of cardboard is 10 inches by 8 inches.  If we cut squares of length $x$ out of the four corners, then we can fold the sides up to make a box.  Find a formula for the volume of the box as a function of $x$ and determine the domain. (<https://youtu.be/UvTYc5Wqu8w>)

<!--
4. The function $f(x) = \sqrt{R^2 - x^2}$ has a graph that is a semicircle.  What is the domain & range of this function?
-->

<!--
#### Thu, Jan 18

Review linear functions and introduce piecewise function w/ the income tax example.

#### Fri, Jan 19

Review polynomial functions.


-->

#### Thu, Jan 18

Today we started with the wire between two poles example from yesterday.  Then we focused on linear functions. We reviewed **slope-intercept form** and did the following examples in class.

1. Find the formula to convert Celsius temperatures to Fahrenheit.

2. Find a formula for the line through $(4,9)$ and $(6,1)$. (<https://youtu.be/LtpXvUCrgrM>)


As of 2023-24, the US Income Tax brackets for individuals earning up to \$95,375 are:

<center>

| Taxable Income | Rate |
| :---: | :---: |
| \$0 to \$11,000 | 10% |
| \$11,000 to \$44,725 | 12% |
| \$44,725 to \$99,375 | 22% |

</center>

3. Express income tax owed as a function of income for individuals earning up to \$44,725.  

Here is another good example that we didn't do in class:

4. Find the slope and intercepts of $3x+5y = 15$. (<https://youtu.be/SOwh-Wk7Cq0>)

#### Fri, Jan 19

Today we talked about **polynomial functions and equations**.  We briefly reviewed how to factor polynomials and we solved the following problems. 

1. Suppose $f(x) = x^2$ and $g(x) = 5x-6$.  Find the $x$-values where these two functions intersect. <!-- Also what does the function $f(x)-g(x)$ represent?-->

<!--2. Where does the line $y = 3x+2$ intersect the parabola $y = -4x^2 + 6$? (<https://youtu.be/JkMTthGWHUs>)-->

2. Solve $x + \dfrac{8}{x} = 6$. (<https://youtu.be/1fR_9ke5-n8?t=112>)

<!--4. Solve $\dfrac{x}{x+5} - \dfrac{5}{x-5} = \dfrac{14}{(x+5)(x-5)}$. (<https://youtu.be/1fR_9ke5-n8?t=519>)-->

3. Solve $\dfrac{x^2}{4} = \dfrac{2x}{x-6}$.  

In the last example, you should get to $x(x^2 - 6x - 8) = 0$.  Unfortunately there aren't integer factors of $-8$ that add up to $-6$.  So you need to use the **quadratic formula** 
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
to find all of the solutions.  You do not need to memorize the quadratic formula (it will be on the formula sheet on exams and you can look it up when you are doing your homework if needed). 

- - -

### Week 2 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 22 | [1.3][1.3] | Trigonometric functions
Wed, Jan 24 | [1.3][1.3] | Trigonometric functions
Thu, Jan 25 | | Review
Fri, Jan 26 | [2.1][2.1] | A preview of calculus

#### Mon, Jan 22

Today we did a review of some basic trigonometry. We talked about the things you should memorize which include:

* $\pi$ radians is 180 degrees.
* The definitions of sine, cosine, and tangent ([SOH-CAH-TOA](https://mathworld.wolfram.com/SOHCAHTOA.html)).  
* The graphs of $\sin(x)$ and $\cos(x)$. 

We did the following exercises. 

1. Convert $\tfrac{-\pi}{3}$ radians to degrees. (<https://youtu.be/z0-1gBy1ykE>)

2. Convert $150^\circ$ to radians. (<https://youtu.be/O3jvUZ8wvZs>)

3. Find the values of $\cos \theta, \sin \theta, \tan \theta, \sec \theta, \csc \theta,$ and $\cot \theta$ for the angle $\theta$ shown below.  

<center>
<svg width=250 height=200>
<path d="M 25 175 H 225 V 25 Z" stroke="black" fill="transparent" stroke-width="2"/>
<path d="M 210 175 V 160 H 225" stroke="black" fill="transparent" stroke-width="1"/>
<g font-size="24">
<text x="60" y="170">θ</text>
<text x="233" y="110">3</text>
<text x="125" y="200">4</text>
</g>
</svg>
</center>

3. Find $\sin(\tfrac{4\pi}{3})$. Hint: use the [formula sheet](formulaSheet.pdf).

4. Find $\cot(-\tfrac{2\pi}{3})$ (<https://youtu.be/KaS3P1a7GE8>)

5. Find $\sec(3 \pi)$

6. Find all solutions to $\cos x = 0$. 

7. Solve $2 \cos x + 1 = 0$. (<https://youtu.be/j7c2I_fwamc>)

8. A 1000 meter long driveway in the mountains has a $10^\circ$ grade.  How much elevation do you gain when you drive up the driveway?  


#### Wed, Jan 24

Today we looked at some more trigonometry examples.  We did the following:

1. The radius of the Earth is about 4000 miles.  Farmville has a Latitude of 37.3$^\circ$.  How far is Farmville from the the equator?  


2. A lighthouse is 25 meters above sea level.  A boat measures the angle of elevation of the light to be $\theta$.  How far is the boat away from the base of the lighthouse as a function of $\theta$? 

3. Prove the **Law of Sines** (for any triangle, the following formula is true): (<https://youtu.be/APNkWrD-U1k>)

$$ \frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

<center>
![](https://www.mathsisfun.com/algebra/images/triangle-sides-angles.svg)
</center>

4. Simplify $\sec \theta \sin \theta \cos \theta$. (<https://youtu.be/-s44LcIPaPU>)

5. Simplify $\tan^2 x - \sec^2 x$ as much as possible. (<https://youtu.be/0QuB4HOI3J8>)

6. Find all solutions of $\dfrac{\sin^2 x}{1-\cos x} - 1 = 0$ in the interval $[0,2\pi)$. 

7. Find all solutions of $2\sin \theta = \tan \theta$ on $[0,2\pi)$. (<https://youtu.be/vVR91JqJEMQ>)


#### Thu, Jan 25

Today we went over [homework 2](HW2.pdf).  We also did the following additional exercise in class.

1. Solve $\sin^2 \theta = \frac{3}{4}$.  

#### Fri, Jan 26

Today we started talking about limits.  We began with this example:

<center>
<a href="https://www.desmos.com/calculator/wmiwqa3ibb"><img src="polygons.png" width=300></img></a>
</center>

1. What is the area of a regular $n$-gon inscribed in the unit circle?  

2. What happens to the area as the number of sides gets bigger and bigger?  

A **sequence** is a special kind of function which has domain equal to the natural numbers $\mathbb{N} = \{1,2,3,\ldots\}$. We say that an interval $(a,b)$ **eventually contains** a sequence $s(n)$ if there is a number $N$ such that $a < s(n) < b$ for all $n \ge N$. If every interval $(a,b)$ that contains $L$ eventually contains $s(n)$, then we say that $s(n)$ **converges** to the **limit** $L$. This can be written as:
$$\lim_{n \rightarrow \infty} s(n) = L.$$

We finished by looking at another example of a limit.  Galileo was the first person to observe that the distance traveled by an object that is dropped from a great height is roughly $d = 4.9t^2$ meters (when $t$ is the time in seconds after the object was dropped).  The average velocity of a falling object is 
$$v_{\text{average}} = \frac{d(t_2) - d(t_1)}{t_2 - t_1}.$$

3. Use Desmos to find the average velocity over the following time intervals: 
    a. $[2,3]$ 
    b. $[2,2.1]$
    c. $[2,2.01]$
    d. $[2,2.001]$

4. Use the previous answers to estimate the velocity at the instant when the object has been falling for 2 seconds. 

These two examples, the area of a circle and the instantaneous velocity of a falling object, are both limits. Next week, we'll look at how to work systematically with limits. 


- - -

### Week 3 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 29 | [2.2][2.2] | Limit of a function
Wed, Jan 31 | [2.3][2.3] | Limit laws
Thu, Feb 1 | | Review
Fri, Feb 2 | [2.4][2.4] | Continuity

#### Mon, Jan 29

Today we defined limits for functions.  We say that the **limit** of $f(x)$ as $x$ approaches $a$ is $L$ and write
$$\lim_{x \rightarrow a} f(x) = L$$ 
if every sequence $x(n)$ that converges to $a$ (but never equals $a$) has $\lim_{n \rightarrow \infty} f(x(n)) = L$.

We looked at two examples on Desmos where a function is not defined but its limit is:

1. $\lim_{x \rightarrow 1} \dfrac{x^3 - 1}{x-1}$.

2. $\lim_{x \rightarrow 0} \dfrac{\sqrt{x^2 + 9} - 3}{x^2}$.

Both of these are examples of hole discontinuities.  We also saw three other common types of discontinuities:

3. (Pole discontinuity) $f(x) = \dfrac{1}{x}$ at $x = 0$. 

4. (Jump discontinuity) $\operatorname{sign}(x) = \begin{cases} \dfrac{|x|}{x} & \text{ if } x \ne 0 \\ 0 & \text{ if } x = 0 \end{cases}$. 

5. (Oscillation discontinuity) $f(x) = \sin(1/x)$ at $x=0$. 

In all three of these cases, the limit at the point of interest does not exist.  But there are also one-sided limits which do exist. For example, the one sided limit as $x$ approaches $0$ from above is in example 3 is:
$$\lim_{x \rightarrow 0^+} \dfrac{1}{x} = +\infty$$
and the one-sided limit as $x$ approaches $0$ from below in number 4 is:
$$\lim_{x \rightarrow 0^-} \operatorname{sign}(x) = -1.$$
You mostly just need an intuitive understanding that a limit is the $y$-value that the graph is heading towards, not the actual $y$-value at the point. 

We did the following two examples of finding limits graphically:

6. [Two limit examples from Kahn Academy.](https://youtu.be/mols6pMKrto)

We finished by talking about another example of a limit:

$$\lim_{n \rightarrow \infty} (1+r)^n = e^r.$$

#### Wed, Jan 31

Today we talked about using algebra to find limits. We did the following examples. 

1. $\lim_{x \rightarrow -3} \dfrac{x^2 + 3x}{x^2 - x - 12}$. (<https://youtu.be/xSlfO2xZDAQ>)

2. $\lim_{x \rightarrow 2} \dfrac{2x^2 - 3x + 1}{x^3 + 4}$. 

3. $\lim_{x \rightarrow -4} \dfrac{\frac{1}{4} + \frac{1}{x}}{4+x}$. (<https://youtu.be/AVOietFdB0c>)

4. Find $\lim_{x \rightarrow 5^-} \dfrac{3}{x-5} ~~ \text{ and } ~~ \lim_{x \rightarrow 5^+} \dfrac{3}{x-5}$. (<https://youtu.be/bV0RTtywt4g>)

At this point, defined continuous functions.  A function $f(x)$ is **continuous** at $x = a$ if $\lim_{x \rightarrow a} f(x) = f(a)$.  Intuitively, a function is continuous if you can draw it without lifting your pencil. Most simple functions (including all linear functions and $\sin(x)$ and $\cos(x)$) are continuous at every real number. It turns out that every function constructed from other continuous functions using the operations of addition, subtraction, multiplication, division, powers, and function composition are always continuous at every point in their domains.  The only functions you need to worry about are piecewise functions. 

5. $\lim_{x \rightarrow 4} f(x)$ where $f(x) = \begin{cases} \frac{x+2}{x-1} & \text{ for } x \le 4 \\ \sqrt{x} & \text{ for } x > 4.\end{cases}$ (<https://youtu.be/2xdh0yKopB8>)

- - -

### Week 4 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 5 | [3.1][3.1] | Defining derivatives
Wed, Feb 7 | [3.2][3.2] | The derivative function
Thu, Feb 8 | | Review
Fri, Feb 9 | [3.3][3.3] | Differentiation rules

- - -

### Week 5 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 12 | [3.3][3.3] | The product and quotient rules
Wed, Feb 14 | [3.4][3.4] | Derivatives as rates of change
Thu, Feb 15 | | Review
Fri, Feb 16 | | **Midterm 1**

- - -

### Week 6 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 19 | [3.5][3.5] | Derivatives of trigonometric functions
Wed, Feb 21 | [3.6][3.6] | The chain rule
Thu, Feb 22 | | Review
Fri, Feb 23 | [3.6][3.6] | The chain rule - con'd

- - -

### Week 7 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 26 | [3.8][3.8] | Implicit differentiation
Wed, Feb 28 | [3.8][3.8] | Implicit differentiation - con'd
Thu, Feb 29 | | Review
Fri, Mar 1 | [4.1] | Related rates

- - -

### Week 8 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 4 | [4.2][4.2] | Linear approximations
Wed, Mar 6 | [4.2][4.2] | Differentials
Thu, Mar 7 | | Review
Fri, Mar 8 | [4.3][4.3] | Maxima & minima

- - -

### Week 9 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 18 | [4.3][4.3] | Maxima & minima - con'd
Wed, Mar 20 | | Review
Thu, Mar 21 | | **Midterm 2**
Fri, Mar 22 | [4.4][4.4] | The mean value theorem

- - -

### Week 10 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 25 | [4.5][4.5] | Derivatives and the shape of a graph
Wed, Mar 27 | [4.5][4.5] | Concavity
Thu, Mar 28 | | Review
Fri, Mar 29 | [4.6][4.6] | Applied optimization

- - -

### Week 11 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 1 | [4.7][4.7] | Limits at infinity and asymptotes
Wed, Apr 3 | [4.8][4.8] | L'Hospital's rule
Thu, Apr 4 | | Review
Fri, Apr 5 | [4.9][4.9] | Newton's method

- - -

### Week 12 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 8 | [4.10][4.10] | Antiderivatives - con'd
Wed, Apr 10 | [4.10][4.10] | Antiderivatives - con'd
Thu, Apr 11 | | Review
Fri, Apr 12 | [5.1][5.1] | Approximating area

- - -

### Week 13 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 15 | [5.2][5.2] | The definite integral
Wed, Apr 17 | [5.3][5.3] | Evaluating definite integrals
Thu, Apr 18 | | Review
Fri, Apr 19 | | **Midterm 3**

- - -

### Week 14 Notes
 
Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 22 | [5.4][5.4] | Integration formulas
Wed, Apr 24 | [5.5][5.5] | Substitution
Thu, Apr 25 | | Review
Fri, Apr 26 | [5.5][5.5] | Substitution - con'd 
Mon, Apr 29 | | Recap & review



- - - 

[1.1]: <https://openstax.org/books/calculus-volume-1/pages/1-1-review-of-functions>
[1.2]: <https://openstax.org/books/calculus-volume-1/pages/1-2-basic-classes-of-functions>
[1.3]: <https://openstax.org/books/calculus-volume-1/pages/1-3-trigonometric-functions>
[1.4]: <https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions>
[2.1]: <https://openstax.org/books/calculus-volume-1/pages/2-1-a-preview-of-calculus>
[2.2]: <https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function>
[2.3]: <https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws>
[2.4]: <https://openstax.org/books/calculus-volume-1/pages/2-4-continuity>
[2.5]: <https://openstax.org/books/calculus-volume-1/pages/2-5-the-precise-definition-of-a-limit>
[3.1]: <https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative>
[3.2]: <https://openstax.org/books/calculus-volume-1/pages/3-2-the-derivative-as-a-function>
[3.3]: <https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules>
[3.4]: <https://openstax.org/books/calculus-volume-1/pages/3-4-derivatives-as-rates-of-change>
[3.5]: <https://openstax.org/books/calculus-volume-1/pages/3-5-derivatives-of-trigonometric-functions>
[3.6]: <https://openstax.org/books/calculus-volume-1/pages/3-6-the-chain-rule>
[3.7]: <https://openstax.org/books/calculus-volume-1/pages/3-7-derivatives-of-inverse-functions>
[3.8]: <https://openstax.org/books/calculus-volume-1/pages/3-8-implicit-differentiation>
[4.1]: <https://openstax.org/books/calculus-volume-1/pages/4-1-related-rates>
[4.2]: <https://openstax.org/books/calculus-volume-1/pages/4-2-linear-approximations-and-differentials>
[4.3]: <https://openstax.org/books/calculus-volume-1/pages/4-3-maxima-and-minima>
[4.4]: <https://openstax.org/books/calculus-volume-1/pages/4-4-the-mean-value-theorem>
[4.5]: <https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph>
[4.6]: <https://openstax.org/books/calculus-volume-1/pages/4-6-limits-at-infinity-and-asymptotes>
[4.7]: <https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems>
[4.8]: <https://openstax.org/books/calculus-volume-1/pages/4-8-lhopitals-rule>
[4.9]: <https://openstax.org/books/calculus-volume-1/pages/4-9-newtons-method>
[4.10]: <https://openstax.org/books/calculus-volume-1/pages/4-10-antiderivatives>
[5.1]: <https://openstax.org/books/calculus-volume-1/pages/5-1-approximating-areas>
[5.2]: <https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral>
[5.3]: <https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus>
[5.4]: <https://openstax.org/books/calculus-volume-1/pages/5-4-integration-formulas-and-the-net-change-theorem>
[5.5]: <https://openstax.org/books/calculus-volume-1/pages/5-5-substitution>

<!--
OLD PDF LINKS:
[1.1]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=16>
[1.2]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=42>
[1.3]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=70>
[2.1]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=132>
[2.2]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=143>
[2.3]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=168>
[2.4]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=187>
[3.1]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=222>
[3.2]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=240>
[3.3]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=255>
[3.4]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=274>
[3.5]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=285>
[3.6]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=295>
[3.7]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=307>
[3.8]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=317>
[3.9]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=327>
[4.1]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=350>
[4.2]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=362>
[4.3]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=374>
[4.4]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=387>
[4.5]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=398>
[4.6]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=415>
[4.7]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=447>
[4.8]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=462>
[4.9]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=480>
[4.10]:<http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=493>
[5.1]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=516>
[5.2]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=537>
[5.3]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=557>
[5.4]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=574>
[5.5]: <http://people.hsc.edu/faculty-staff/blins/books/Calculus1.pdf#page=592>
-->







<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
