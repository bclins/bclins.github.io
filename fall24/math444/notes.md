---
title: Complex Analysis Notes
css: https://bclins.github.io/spring24/mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#333; 
    --link-color: #831; 
  }
  </style>
---

\newcommand{\R}{\mathbb{R}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\on}{\operatorname}
\newcommand{\Arg}{\on{Arg}}

## Math 444 - Fall 2024


<center>
Jump to: [Syllabus](index.html), [Week 1](#week-1-notes) , [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes), [Week 15](#week-15-notes)
</center>

### Week 1 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Aug 26 | [1.1][1.1] | Definitions and algebraic properties
Wed, Aug 28 | [1.2][1.2] | From algebra to geometry and back
Fri, Aug 30 | [1.3][1.3] | Geometry of complex numbers

### Mon, Aug 26

Today we introduced the complex numbers $\mathbb{C}$ which are a **field**.  We defined the **real** and **imaginary** parts of a complex number and also the **absolute value** and **argument** of a complex number.  We did the following examples.

1. Find the real and imaginary parts of $\dfrac{1}{3+4i}$ by rationalizing the denominator. 

2. Factor the polynomial $z^2 + 3i - 2$.

3. The polynomial $z^2 + 1$ is irreducible over $\R$, but not over $\C$.  Show this by factoring it over $\C$. 

Later in the course we will use complex analysis to prove one of most important theorems in algebra:

<div class="Theorem">
**The Fundamental Theorem of Algebra.** Every polynomial $p(z)$ with coefficients in $\C$ factors into a product of linear expressions of the form $(az + b)$ where $a, b \in \C$. 
</div>

We finished with a discussion of the **polar form** $z = r (\cos \theta + i \sin \theta)$ of a complex number. 

### Wed, Aug 28

Following [Beck et. al.](https://people.hsc.edu/faculty-staff/blins/books/complex.pdf), we will define 
$$e^{i \theta} := \cos \theta + i \sin \theta.$$
Later, when we define the complex exponential function, we will revisit this definition. For now, we will do some calculations that suggest the definition is a good one.

1. Use the [angle addition formulas](https://en.wikipedia.org/wiki/List_of_trigonometric_identities#Angle_sum_and_difference_identities) to show that 
$$(e^{i \alpha}) (e^{i \beta}) = e^{i (\alpha + \beta)}.$$

2. Simplify $\frac{1}{e^{i \theta}}$. 

3. Calculate $\dfrac{d}{d \theta} e^{i \theta}$.  Hint: Use the definition of $e^{i \theta}$ and treat $i$ like any other constant. 

4. What is $(e^{i \theta})^n$?  

5. What is $\sqrt{i}$? 

We also defined the **complex conjugate** of $z = a+ib$ to be $\bar{z} = a - ib$. 

6. What is $\bar{e^{i \theta}}$? 

We finished by discussing the **n-th roots of unity** which are the complex numbers $z$ such that $z^n = 1$.  They are given by the formula 
$$e^{2 \pi i k/ n} \text{ where } k \in \{0, 1, \ldots, n-1\}.$$
A root of unity $z$ is **primitive** if $z^n = 1$, but $z$ is not an m-th root of unity for any $m \in \N$ less than $n$.  

We finished with a discussion of square and cube roots of complex numbers and how they relate to roots of unity. 


- - -

### Week 2 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 2  |  | Labor Day, no class
Wed, Sep 4  | [1.3][1.3] | Geometry of complex numbers - con'd 
Fri, Sep 6  | [1.4][1.4] | Elementary topology of the plane

- - - 


### Week 3 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 9  | [7.1][7.1] | Sequences and completeness
Wed, Sep 11 | [7.2][7.2] | Series
Fri, Sep 13 | [2.1][2.1] | Limits and continuity

- - -

### Week 4 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 16  | [3.4][3.4] | Exponential and trigonometric functions 
Wed, Sep 18  | [3.5][3.5] | Logarithms and complex exponentials
Fri, Sep 20  | [2.2][2.2]	| Differentiability and holomorphicity


- - - 

### Week 5 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 23  | [2.2][2.3]	| The Cauchy-Riemann equations
Wed, Sep 25  | [3.1][3.1] | Möbius transforms
Fri, Sep 27  | [3.1][3.1] | Möbius transforms - con'd

- - - 
 


### Week 6 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 30 |  | Review
Wed, Oct 2  |  | **Midterm 1**
Fri, Oct 4  | [7.3][7.3] | Power Series
- - - 

### Week 7 Notes

#### Tentative Schedule 

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Oct 7   | [7.4][7.4] | Regions of convergence
Wed, Oct 9   | [4.1][4.1] | Complex integrals
Fri, Oct 11  | [4.3][4.3] | Cauchy's theorem


- - - 

### Week 8 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 14  |  | Fall break, no class
Wed, Oct 16  | [4.4][4.4] | Cauchy's integral formula
Fri, Oct 18  | [5.1][5.1] | Holomorphic implies infinitely differentiable

- - - 

### Week 9 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 21  | [8.1][8.1] | Power series and holomorphic functions
Wed, Oct 23  | [5.3][5.3] | Entire functions & Liouville's theorem
Fri, Oct 25  | [9.1][9.1] | Classification of singularities
- - - 

### Week 10 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 28  | [8.3][8.3] | Laurent series 
Wed, Oct 30  | [9.2][9.2] | Residues       
Fri, Nov 1   | [9.3][9.3] | The argument principle and Rouche's theorem




- - - 

### Week 11 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 4  | [8.2][8.2] | Zeroes of analytic functions
Wed, Nov 6  | [8.2][8.2] | The maximum modulus principle
Fri, Nov 8  |            | Conformal mappings




- - - 

### Week 12 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 11 |            | Riemann mapping theorem
Wed, Nov 13 |  | Review
Fri, Nov 15 |  | **Midterm 2**

- - - 

### Week 13 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 18  | [10.1][10.1] | Applications of the residue theorem
Wed, Nov 20  | [10.2][10.2] | Binomial coefficients
Fri, Nov 22  | [6.1][6.1] | Harmonic functions

- - - 

### Week 14 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Nov 25  |  | Conformal mappings & heat flows
Wed, Nov 27  |  | Thanksgiving break, no class
Fri, Nov 29  |  | Thanksgiving break, no class



- - - 

### Week 15 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Dec 2  | | Fourier transform
Wed, Dec 4  | | The heat equation     
Fri, Dec 6  | | The Dirichlet problem 
Mon, Dec 9  | | Recap & review


- - - 



[1.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.1.1>
[1.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.1.2>
[1.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.1.3>
[1.4]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.1.4>
[1.5]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.1.5>
[2.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.2.1>
[2.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.2.2>
[2.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.2.3>
[2.4]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.2.4>
[3.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.3.1>
[3.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.3.2>
[3.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.3.3>
[3.4]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.3.4>
[3.5]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.3.5>
[4.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.4.1>
[4.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.4.2>
[4.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.4.3>
[4.4]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.4.4>
[5.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.5.1>
[5.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.5.2>
[5.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.5.3>
[5.4]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.5.4>
[6.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.6.1>
[6.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.6.2>
[7.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.7.1>
[7.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.7.2>
[7.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.7.3>
[7.4]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.7.4>
[8.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.8.1>
[8.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.8.2>
[8.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.8.3>
[9.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.9.1>
[9.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.9.2>
[9.3]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.9.3>
[10.1]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.10.1>
[10.2]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section.10.2>

[1e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.7>
[2e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.11>
[3e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.16>
[4e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.26>
[5e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.32>
[6e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.35>
[7e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.38>
[8e]: <http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.40>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
