---
title: Complex Analysis Notes
css: https://bclins.github.io/mockup.css
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
\newcommand{\arg}{\on{arg}}
\newcommand{\Log}{\on{Log}}
\newcommand{\re}{\on{Re}}
\newcommand{\im}{\on{Im}}

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

Today we introduced the complex numbers $\mathbb{C}$ which are a [field](https://en.wikipedia.org/wiki/Field_(mathematics)#Definition).  We defined the **real** and **imaginary** parts of a complex number and also the **absolute value** and **argument** of a complex number.  We did the following examples.

1. Find the real and imaginary parts of $\dfrac{1}{3+4i}$ by rationalizing the denominator. 

2. Factor the polynomial $z^2 + 3iz - 2$.

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

6. Explain why $\dfrac{d}{d \theta} e^{i \theta} = i e^{i \theta}$ makes sense in the context of the velocity of a point moving counterclockwise along the unit circle. 

After introducing $e^{i\theta}$, we discussed the **n-th roots of unity** which are the complex numbers $z$ such that $z^n = 1$.  They are given by the formula 
$$e^{2 \pi i k/ n} \text{ where } k \in \{0, 1, \ldots, n-1\}.$$
<!--A root of unity $z$ is **primitive** if $z^n = 1$, but $z$ is not an m-th root of unity for any $m \in \N$ less than $n$.  -->

7. Find the 3rd roots of 8.

8. Find the 3rd roots of $\left(\frac{\sqrt{2}}{2} + i \frac{\sqrt{2}}{2} \right)$. 

We finished with a discussion of square and cube roots of complex numbers and how they relate to roots of unity. 
We also defined the **complex conjugate** of $z = a+ib$ to be $\bar{z} = a - ib$. 

<!--6. What is $\bar{e^{i \theta}}$? -->

### Fri, Aug 30

We reviewed some of the useful formulas involving complex conjugates including the following:

* $|z|^2 = z \cdot \bar{z}$

* $\bar{z + w} = \bar{z} + \bar{w}$ and $\bar{ z \cdot w} = \bar{z} \cdot \bar{w}$

* $\re(z) = \frac{z+ \bar{z}}{2}$ and $\im(z) = \frac{z - \bar{z}}{2i}$

We also introduced and proved the **triangle inequality** for complex numbers
$$| z + w | \le |z| + |w|.$$

1. Use the triangle inequality to prove the **reverse triangle inequality** 
$$ | z - w | \ge |z| - |w|$$
by introducing a substitution $u = z - w$.

2. If $|z - w| \le \epsilon$, prove that 
$$\left| \frac{1}{z} - \frac{1}{w} \right| \le \frac{\epsilon}{|z| \, |w|}.$$

A **convex combination** of $z, w \in \C$ is any point 
$$ t z + (1-t) w, ~ 0 \le t \le 1.$$
The set of all convex combinations of $z$ and $w$ is a line segment connecting $z$ to $w$, and the formula for the convex combinations is a parametric formula for the line segment.  If you allow any $t \in \R$, then you get an **affine combination** of $z$ and $w$.  The set of all affine combinations of $z$ and $w$ is line passing through $z$ and $w$.  

- - -

### Week 2 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 2  |  | Labor Day, no class
Wed, Sep 4  | [1.4][1.4] | Elementary topology of the plane
Fri, Sep 6  | [1.4][1.4] | Elementary topology of the plane - con'd

### Wed, Sep 4

Let $B_R(z) = \{w \in \C : |z-w| < R\}$ denote the open disk of radius $R$ around $z$.  We used $B_R(z)$ to define **interior** and **boundary** points for a subset of $\C$.  We proved the following trichotomy result

<div class="Theorem"> 
**Theorem.** If $A \subseteq \C$ and $x \in \C$, then exactly one of the following holds.

1. $x$ is an interior point of $A$.
2. $x$ is a boundary point of $A$.
3. $x$ is an interior point of $A^c$ (the complement of $A$). 
</div>

We also defined **open** and **closed** sets, and proved the following theorem. 

<div class="Theorem">
**Theorem.** A set $A \subseteq \C$ is closed if and only if its complement is open. 
</div>

1. If a set is both open and closed, then it can't have any boundary points, since it includes its boundary (because it is closed) but every point is an interior point (because it is open).  Are there any sets with no boundary points? 

<!--
2. Prove the following theorem.

<div class="Theorem">
**Theorem.** The union of any collection of open sets is open and the intersection of a finite collection of open sets is open.  
</div>

3. Find an example to show that the intersection of an infinite collection of open sets isn't always open.
-->

We also defined **bounded** sets.  We finished by talking about **paths** which are continuous functions $\gamma: [a,b] \rightarrow \C$. The range of a path is a subset of $\C$ called a **curve** (note that not all books follow this terminology).  We defined the **derivative of a path**, and discussed how to define a **smooth** path so that it matches our intuition for a curve with no sharp turns.  

2. Why isn't the path $\gamma(t) = t^2 + i t^3$ for $t \in [-1,1]$ smooth?  

A path $\gamma: [a,b] \rightarrow \C$ is **simple** if $\gamma(t_1) \ne \gamma(t_2)$ for all $t_1 \ne t_2$, except possibly at the endpoints $t_1 = a$ and $t_2 = b$. Intuitively, a path is simple if it cannot cross itself, except possibly at the endpoints. A path is **closed** if $\gamma(a) = \gamma(b)$.   

### Fri, Sep 6

A set $A \subseteq \C$ is **path connected** if for any $w, z \in A$, there is a (continuous) path $\gamma: [a,b] \rightarrow A$ such that $\gamma(a) = w$ and $\gamma(b) = z$.  The following theorem seems obvious, but it is actually famously tricky to prove (see <https://en.wikipedia.org/wiki/Jordan_curve_theorem>).   

<div class="Theorem">
**The Jordan Curve Theorem.** The complement of the range of a simple closed curve in $\C$ consists of two disjoint open path connected sets, one of which (the **inside**) is bounded and the other (the **outside**) is not bounded.  
</div>

A **sequence** is a function $s: \N \rightarrow \C$.  We use the notation $s_n$ to mean the same thing as $s(n)$ for sequences.  A sequence $s_n$ **converges** to $L \in \C$ if for every $\epsilon > 0$, there is an $N > 0$ such that $|s_n - L | < \epsilon$ for every $n \ge N$.  Intuitively, this means that for every open disk around $L$, there can only be a finite number of $n$ such that $s_n$ is not in the disk. When a sequence converges, the number it converges to is called its **limit**.  

If we don't know the limit of a sequence, we can still use **Cauchy's criterion** to show that it must converge. A **Cauchy sequence** is a sequence $s_n$ such that for every $\epsilon > 0$, there exists $N > 0$ such that $|s_n - s_m | < \epsilon$ whenever $m, n \ge N$.  

<div class="Theorem">
**Theorem (Cauchy's Criterion).** If $s_n$ is a Cauchy sequence, then it converges to some limit in $\C$.  
</div>

We talked about how the Cauchy criterion applies to sequences of real numbers and the complex numbers, in fact the property that Cauchy sequences converge in a set is known as **completeness** and it is one of the defining properties of the real numbers.  

We used completeness to prove the following theorem about real number sequence:

<div class="Theorem">
**Theorem (Monontone convergence).** If $s_n$ is a sequence of real numbers that is monotone (non-decreasing) and bounded, then it converges.
</div>

We ran out of time, but a related application of completeness is the following result.

<div class="Theorem">
**Theorem.** If $A \subset \C$ and $A^c$ are both nonempty sets, then $A$ has at least one boundary point. 
</div>




- - - 


### Week 3 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 9  | [7.1][7.1] | Sequences and completeness
Wed, Sep 11 | [7.2][7.2] | Series
Fri, Sep 13 |  |

### Mon, Sep 9

The complex numbers are a **metric space** because they have a distance function $d(z,w) = |z-w|$ that satisfies the following properties for all $x, y, z \in C$:

1. **Definiteness** $d(x,x) = 0$
2. **Positivity** $d(x,y) > 0$ if $x \ne y$
3. **Symmetry** $d(x,y) = d(y,x)$
4. **Triangle Inequality** $d(x,z) \le d(x,y) + d(y,z)$

It helps when working with absolute values in $\C$ to remember that $|z-w|$ is the distance between $z$ and $w$. We didn't have time for a proof of the last theorem from Friday, so we worked through a proof using the fact that $\C$ is a complete metric space today. Recall that **complete** means that all Cauchy sequences converge. We proved the theorem by proving the following claims:   

1. Any line segment that connects a point in $A$ to a point in $A^c$ contains a line segment that is half as long and also connects a point in $A$ to a point in $A^c$. 

2. The midpoints of the line segments above form a Cauchy sequence.

3. The limit of the midpoints is a boundary point of $A$. 

This proof definitely doesn't work without assuming completeness.  For example, if $A = \{x \in \mathbb{Q} : x < \pi \}$, then $A$ has no boundary points in $\mathbb{Q}$.  After discussing that example, we talked about infinite series. 

A series of complex numbers $\sum_{k = 0}^\infty a_k$ **converges** if its sequence of partial sums $S_n = \sum_{k = 0}^n a_k$ converges.  It helps to know some example infinite series, so we talked about these three:

* **Zeno's series** $\tfrac{1}{2} + \tfrac{1}{4} + \tfrac{1}{8} + \ldots$. 

* **Grandi's series** $1 - 1 + 1 - 1 + 1 - 1 + \ldots$.

* **Harmonic series** $1 + \tfrac{1}{2} + \tfrac{1}{3} + \tfrac{1}{4} + \ldots$. 

Then we reviewed **geometric series** which are series of the form $\sum_{k = 0}^\infty a r^k$ where $a$ is the first term and $r$ is the common ratio.  We proved:

<div class="Theorem">
**Theorem.** A geometric series $\sum_{k = 0}^\infty a r^k$ converges if and only if $|r| < 1$, and in that case
$$\sum_{k = 0}^\infty a r^k = \frac{a}{1-r}.$$
</div>

<!--
It **converges absolutely** if $\sum_{k = 0}^\infty |a_k|$ converges. 

<div class="Theorem">
**Theorem.** If a series converges absolutely, then it converges.  
</div>

1. Prove this theorem by showing that the partial sums of an absolutely converging series are a Cauchy sequence.  

    a. What is the difference of two partial sums $S_n - S_m$? 

    b. Why is $|S_n - S_m|$ small for all $m, n$ large?


-->

### Wed, Sep 11

Class was canceled since I was out with COVID. 

### Fri, Sep 13

* **Workshop**: [Infinite Series](InfiniteSeries.pdf)




- - -

### Week 4 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 16  | [2.1][2.1] | Limits and continuity
Wed, Sep 18  | [2.2][2.2]	| Differentiability and holomorphicity
Fri, Sep 20  | [2.2][2.3]	| The Cauchy-Riemann equations

### Mon, Sep 16

Today we reviewed the questions from the [infinite series workshop](InfiniteSeries.pdf).  Then we talked about functions $f: \C \rightarrow \C$.  We defined **limits** of functions several ways, and we did the following examples. 

1. $\lim_{z \rightarrow 0} \frac{\bar{z}}{z}$. 

2. [Exercise 2.6](http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#section*.11)

3. Use the $\epsilon-\delta$ definition of limits to prove that if $\lim_{z \rightarrow z_0} f(z) = L \ne 0$ then $\lim_{z \rightarrow z_0} \frac{1}{f(z)} = \frac{1}{L}$.
    <details>Consider 
$$\left| \frac{1}{f(z)} - \frac{1}{L} \right| = \frac{|L - f(z)|} {|L f(z)|}$$
We can use the fact that $f(z) \rightarrow L$ to make the top as small as we want.  We just need to make sure that the bottom doesn't get close to zero at the same time.  The trick is to use the triangle inequality to show that $|f(z)| > |L| - \epsilon$ when $|L - f(z)| < \epsilon$, 
    </details>

4. Use the sequential definition of limits to prove the product rule for limits, i.e., $\lim_{z \rightarrow z_0} f(z) g(z) = (\lim_{z \rightarrow z_0} f(z)) (\lim_{z \rightarrow z_0} g(z) )$. 


### Wed, Sep 18 

We introduced the **complex derivative** for functions $f: D \rightarrow \C$:

$$f'(z) = \lim_{h \rightarrow 0} \frac{f(z+h) - f(z)}{h}.$$

1. Find the derivative of $f(z) = z^2$. 

What does it mean for a function to be differentiable?  For functions $f: \R^n \rightarrow \R^m$, we say that $f$ is differentiable at a vector $x \in \R^n$ if there is a matrix $J$ (called the **Jacobian**) such that 
$$f(x + \Delta x) \approx f(x) + J \Delta x$$
more specifically, 
$$\lim_{\Delta x \rightarrow 0} \frac{f(x + \Delta x) - (f(x) + J \Delta x)}{\|\Delta \|} = 0.$$
The expression $f(x) + J \Delta x$ is an **affine linear approximation** of $f$ near $x$.  


3. Show that multiplication by $a + ib$ is a linear transformation on $\C$ that corresponds to multiplying vectors in $\R^2$ by the matrix 
$$\begin{pmatrix} a & -b \\ b & a \end{pmatrix}.$$
Note that the multiplication by a complex number can rotate and/or scale, but it cannot reflect or skew.  


A complex function $f: \C \rightarrow \C$ can be thought of as a real function $f: \R^2 \rightarrow \R^2$, and $f'(z)$ corresponds to the Jacobian matrix 
$$J = \begin{pmatrix} \partial \re f / \partial x & \partial \re f/ \partial y \\ 
                      \partial \im f / \partial x & \partial \im f/ \partial y \end{pmatrix}$$


4. Observe that if $z = x+iy$, then $z^2 = x^2 - y^2 + 2 x y i$.  Find the Jacobian of the function 
$$f(x,y) = \begin{pmatrix} x^2 - y^2 \\ 2xy \end{pmatrix}$$
and show that it corresponds to the complex number $2z$.

5. Show that the function $f(z) = \bar{z}$ is not complex differentiable.  Explain why that makes sense, even though the corresponding map on $\R^2$, $f(x,y) = \begin{pmatrix} x \\ -y \end{pmatrix}$, does have a Jacobian matrix.  

### Fri, Sep 20 

We introduced the **Cauchy-Riemann equations**.  

<div class="Theorem">
**Theorem.** Suppose $f: D \rightarrow \C$ is complex differentiable at $z_0$, and $f(x+iy) = u(x,y) + i v(x,y)$.  Then 
$f$ satisfies the Cauchy-Riemann equations
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \text{ and } \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}.$$
Conversely, if $f(x+iy) = u(x,y) + i v(x,y)$ and the partial derivatives of $u$ and $v$ are continuous in a disk around $z_0 = x_0 + i y_0$ and satisfy the Cauchy-Riemann equations, then $f$ is complex differentiable at $z_0$.  
</div>

1. $f(z) = e^z$

2. This is [Exercise 2.19](http://people.hsc.edu/faculty-staff/blins/books/complex.pdf#page=38) in the book: Define $f(z) = 0$ if $z$ is on either purely real or purely imaginary, and $f(z) = 1$ otherwise. Show that $f$ satisfies the Cauchy–Riemann equations at $z = 0$, yet $f$ is not differentiable at $z = 0$. Why doesn't this contradict the theorem about a complex function being complex differentiable if and only if it satisfies the Cauchy-Riemann equations?

We say that a function $f$ that is complex differentiable in an open disk around $z_0 \in \C$ is **holomorphic** at $z_0$.

Then we talked about **smooth paths** which are paths that are differentiable.  If $\gamma$ is a smooth path in $\C$ and $f$ is holomorphic at every point on the curve, then the chain rule holds and says that 
$$\frac{d}{dt} f(\gamma(t)) = f'(\gamma(t)) \cdot \gamma'(t).$$

**Idea.** Notice that the angle of the tangent vector gets rotated by the argument of $f'(\gamma(t))$.  If two different smooth curves both intersect at a point $z_0$, and $f$ is holomorphic at $z_0$, then since their tangent vectors are both rotated by the same angle, the angle between the two tangent vectors stays the same. This implies that holomorphic maps are **conformal**, that is they preserve angles between curves.  

3. $f(z) = z^2 / 5$ (see [Complex Grapher](https://people.hsc.edu/faculty-staff/blins/classes/spring23/math444/ComplexGrapher.html))

We also looked at the function $e^z$ on the complex grapher and saw that it was also conformal.  


<!-- SAVE FOR LATER, IT'S EASIER ANYWAY ONCE YOU'VE DEALT WITH INTEGRALS
Then we proved that if $f$ is holomorphic on a path connected open set $G$ and $f'(z) = 0$ everywhere on $G$, then $f$ must be constant. The trick is the use the Mean Value Theorem (MVT) from calculus to prove that $f$ is constant on horizontal and vertical line segments in $G$.  -->



- - - 

### Week 5 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 23  | [3.4][3.4] | Exponential and trigonometric functions 
Wed, Sep 25  | [3.5][3.5] | Logarithms and complex exponentials
Fri, Sep 27  | [3.1][3.1] | Möbius transforms 

### Mon, Sep 23

We started by reviewing the properties of the exponential function including its algebraic properties, domain, range and that it is periodic with period $2\pi i$. Then we introduced the complex natural logarithm which is the inverse of $e^z$.  There is one problem with defining the inverse: $e^z$ is an $\infty$-to-1 function, every $w \in \C \backslash \{0\}$ has infinitely many pre-images.  So we have two options:

1. $\log z$ denotes the multivalued inverse of $e^z$.  It has the form
$$\log z = \ln |z| + i \arg z$$
where $\arg z$ is the multivalued argument function.  

2. $\Log z$ is the **principal branch** of $\log z$.  It is a single valued function of the form
$$\Log z = \ln |z| + i \Arg z$$
where $\Arg z$ is the single valued principal branch of the argument function that takes values in $(-\pi, \pi]$. 

We did the following exercises. 

1. Calculate $\log(1+i)$.

2. If $z = x+iy$ where $x > 0$, then $\Arg z = \arctan(y/x)$.  Calculate the Cauchy-Riemann equations for $\Log z$ to verify that $\Log z$ is complex differentiable when $x > 0$ (in fact it is complex differentiable everywhere except at its branch cut $(-\infty, 0]$).  What is the derivative of $\Log z$?   


### Wed, Sep 25

We looked at the Cauchy-Riemann equations for $\Log z = \tfrac{1}{2} \ln(x^2 + y^2) + i \arctan \left( \tfrac{y}{x} \right)$ again. We also did the following.  

1. Give an example where $\Log(z+w) \ne \Log z + \Log w$.  

We introduced **principle values of a complex power** $z^\alpha = e^{\alpha \Log z}$ for any $\alpha, z \in \C$, with $z \ne 0$. We calculated the following examples. 

2. $i^{1/3}$

3. $(1+i)^{2-i}$  

4. Find all other values of $(1+i)^{2-i}$ in addition to the principal value.  

5. Find all solutions of the equation $e^{1/z} = i$.  

We finished by talking about the reciprocal map $f(z) = \tfrac{1}{z}$.  We looked at how it appears to transform lines & circles into lines and circles.  We'll look at why next time. 


<!--
We used the chain rule to show that 
$$\frac{d}{dz} \Log z = \frac{1}{z}$$
at every point where $\Log z$ is continuous.  This is also true for any other branch of $\log z$ with a different **branch cut**. 

Things to watch out for:

1. Give an example where $\Log(z + w) \neq \Log z + \Log w$ and explain why it can happen. 

2. How does the multivalued logarithm handle your example?  What is $\log(z + w) = \log z + \log w$?

3. How should we define $z^w$ when $z, w \in \C$ and $z \ne 0$?  For example, what does $i^{1/3}$ mean?  Two possible solutions:

    a. We could use the polar form of $z = Re^{i \theta}$ and let $z^w = R e^{i\theta w}$ where $\theta = \Arg z (the principal branch).  

    b. We could use the principal branch of $\Log z$ and let $z^w = e^{w \Log z}$.

    These are actually the same... but be careful... if you don't use the principal branch, you'll get a different answer in most cases (except integer powers).  
-->

<!--
### Fri, Sep 27

discussing to special kinds of transformations: affine transformations $z \mapsto \alpha z + \beta$ and the inversion transformation $z \mapsto \tfrac{1}{z}$.  Both are holomorphic on their domains.  Note that an affine transformation is a rotation & scaling followed by a translation.  Inversion is a little harder to understand, but it helps to know the following theorem:

<div class="Theorem">
**Theorem.** Let $f(z) = \tfrac{1}{z}$.  Then $f$ transforms lines and circles to lines in circles.  Any line or circle that intersects the origin will be transformed to a straight line through the origin (with a hole at the origin).  Any line or circle that does not intersect the origin will be transformed to a circle that does not intersect the origin.  
</div>

The key to the proof is the fact that the solution of the algebraic equation (with real coefficients)
$$a(x^2 + y^2) + b_1 x + b_2 y + c = 0$$
is a circle (possibly degenerate to a point or $\varnothing$) if $a \ne 0$, and it is a line if $a = 0$.  
-->


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
