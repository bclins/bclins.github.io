---
title: Advanced Topics in CS Notes
css: ../mockup.css
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

\newcommand{\ds}{\displaystyle}
\newcommand{\R}{\mathbb{R}}

## Computer Science 480 - Spring 2024

<center>
Jump to: [Syllabus](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>

### Week 1 Notes

Day    | Topic
:---:|:---------
Wed, Jan 17 | Markov chains & matrices
Fri, Jan 19 | Examples of Markov chains

#### Wed, Jan 17

<!--
Today we introduced some simple examples of Markov chains.  We also reviewed matrix multiplication.  We also defined **probability vectors** and the **dot product** (which is also known as the **inner product**).  We talked about the geometric meaning of the dot product of two vectors. We did the following examples in class. 
-->

Today we reviewed vectors and matrices.  Recall that a **vector** is all three of the following things:

1. A list of $n$ numbers.
2. A point in $n$-dimensional space.
3. An arrow indicating a length and a direction. 

We denote the set of all real number vectors with $n$ entries by $\R^n$. Recall that the **length** of a vector (also known as the **norm**) is:
$$\|v\| = \sqrt{v_1^2 + v_2^2 + \ldots + v_n^2 }.$$

We also talked about how to multiply vectors by constants (**scalar multiplication**) and how to calculate the **dot product** (see this [Kahn academy video](https://youtu.be/WNuIhXo39_k) for example).   We stated (without proof) the fact that for any two vectors $v, w \in \R^n$, 
$$ v \cdot w = \|v\| \, \|w\| \, \cos \theta$$
where $\theta$ is the angle between the vectors $v$ and $w$.  We finished our review of vectors by saying that two vectors $v, w$ are **orthogonal** when $v \cdot w = 0$.  Then the **orthogonal complement** of a single vector $v \in \R^n$ is the set
$$v^\perp = \{w \in \R^n \, : \, v \cdot w = 0 \}.$$
If $v$ is a nonzero vector, then $v^\perp$ is an $(n-1)$-dimensional hyperspace inside of $\R^n$.  

After reviewing vectors we reviewed matrices and how to [multiply matrices](https://youtu.be/OMA2Mwo0aZg).  We did the following example in class:

1. Multiply $\begin{pmatrix} 1 & 2 & 3 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 0 \\ 1 & -1 \end{pmatrix}$.

We finished by talking briefly about this problem from [Introduction to Probability by Grinstead & Snell](https://math.dartmouth.edu/~prob/prob/prob.pdf):

2. The Land of Oz is blessed by many things, but not by good weather. They never have two nice days
in a row. If they have a nice day, they are just as likely to have snow as rain the
next day. If they have snow or rain, they have an even chance of having the same
the next day. If there is change from snow or rain, only half of the time is this a
change to a nice day.


- - -

### Week 2 Notes
 
Day    | Topic
:---:|:---------
Mon, Jan 22 | Transient and recurring states
Wed, Jan 24 | Random walks 
Fri, Jan 26 | Birth-death cycles

- - -

### Week 3 Notes
 
Day    | Topic
:---:|:---------
Mon, Jan 29 | Least squares regression 
Wed, Jan 31 | Least squares regression - con'd
Fri, Feb 2 | Logistic regression

- - -

### Week 4 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 5 | Loss functions & gradient descent
Wed, Feb 7 | Linear classification
Fri, Feb 9 | Linear classification - con'd 

- - -

### Week 5 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 12 |
Wed, Feb 14 |
Fri, Feb 16 |

- - -

### Week 6 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 19 | Review
Wed, Feb 21 | **Midterm 1**
Fri, Feb 23 | 

- - -

### Week 7 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 26 |
Wed, Feb 28 |
Fri, Mar 1 | 

- - -

### Week 8 Notes
 
Day    | Topic
:---:|:---------
Mon, Mar 4 |
Wed, Mar 6 |
Fri, Mar 8 |

- - -

### Week 9 Notes
 
Day    | Topic
:---:|:---------
Mon, Mar 18 |
Wed, Mar 20 |
Fri, Mar 22 |

- - -

### Week 10 Notes
 
Day    | Topic
:---:|:---------
Mon, Mar 25 |
Wed, Mar 27 |
Fri, Mar 29 |

- - -

### Week 11 Notes
 
Day    | Topic
:---:|:---------
Mon, Apr 1 |
Wed, Apr 3 |
Fri, Apr 5 |

- - -

### Week 12 Notes
 
Day    | Topic
:---:|:--------------
Mon, Apr 8 | 
Wed, Apr 10 |
Fri, Apr 12 |

- - -

### Week 13 Notes
 
Day    | Topic
:---:|:---------
Mon, Apr 15 |
Wed, Apr 17 |
Fri, Apr 19 |

- - -

### Week 14 Notes
 
Day    | Topic
:---:|:---------
Mon, Apr 22 | 
Wed, Apr 24 | 
Fri, Apr 26 | 
Mon, Apr 29 | 



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
