---
title: Differential Equations Notes
css: https://bclins.github.io/mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#000; 
    --link-color: #00e; 
  }
  </style>
---

## Math 243 - Fall 2025

<center>
Jump to: [Math 243 homepage](index.html), [Week 1](#week-1-notes) , [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>
 
### Week 1 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Aug 25 |  [1.1][1.1] | Modeling with Differential Equations
Wed, Aug 27 |  [1.2][1.2] | Separable Differential Equations
Fri, Aug 29 |  [1.3][1.3] | Geometric and Quantitative Analysis

### Mon, Aug 25

We talked about some examples of differential equations. 

1. **Exponential Growth/Decay.** The rate of change in a variable $y$ with respect to time $t$ is proportional to $y$ itself. 
$$\dfrac{dy}{dt} = k y.$$
    a. Check that $y(t) = Ce^{kt}$ is a solution. 
    b. Find the constant $C$ which satisfies the **initial value problem** with **initial condition** $y(0) = 1000$. 


We talked about **dependent** and **independent** variables, the **order** of a differential equation and how to tell if a function is a **solution** of a differential equation.  We also talked about **initial conditions**.

2. **Spring-Mass Model.** The force $F$ of a mass $m$ at the end of a spring can be modeled by **Hooke's Law** which says $F = -k x$ where $x$ is the displacement of the spring from its rest position. 
$$m\dfrac{d^2 x}{dt^2} = -kx.$$

    a. Show that $x = \sin t$ and $x = \cos t$ are two different solutions of the spring equation when $m = k = 1$. 
    b. How would the solutions change if $m$ and $k$ were not both equal to 1?  How would the oscillation of the spring change if the mass was twice as heavy?  
    c. How would the spring equation change if there was also a linear drag force $F = -b \frac{dx}{dt}$?  What if there is a non-linear drag force $F = -b \left(\frac{dx}{dt}\right)^2$?

The last question led to a discussion of **linear** versus **non-linear** differential equations.  It's usually much harder to solve non-linear equations!  We will also study **systems** of differential equations, like the following.  

3. **Rabbits and Foxes.** Suppose there are $R$ rabbits and $F$ foxes in an ecosystem.  The rabbit population would grow exponentially, except for the foxes which prey on the rabbits.  The fox population would decay exponentially if there wasn't food to eat, but as long as they can catch enough rabbits, it will grow.  The number of rabbits that are eaten by foxes is proportional to the product $RF$.  
\begin{align*} 
\dfrac{dR}{dt} &= a R - b RF \\
\dfrac{dF}{dt} &= -c R + d RF 
\end{align*}
    
Here is a graph showing these equations as a vector field (with constants $a = 3, b = 4, c = 1, d= 2$).  

<center>
<img src="rabbitsfoxes.png"></img>
</center>

4. **Logistic Growth.** $\dfrac{dP}{dt} = kP \left( 1 - \dfrac{P}{N} \right)$ where $k$ is a proportionality constant and $N$ is the carrying capacity.  
    
    a. Under what circumstances does the population $P$ stop changing in this model?
    b. What are the units for the constants $k$ and $N$? 
    c. Suppose that we use the logistic growth equation to model a population of rabbits in a region.  What if we introduce a predator that always consumes $b$ rabbits per year.  How would that change the differential equation above?  

### Wed, Aug 27

Today we talked about **separable equations**.  We solved the following examples. 

<!--1. Solve $\dfrac{dy}{dx} = - \dfrac{x}{y}$. (<https://youtu.be/8Amgakx5aII>)-->

1. Solve $\dfrac{dy}{dx} = - x^2 y$. 

2. Solve $xy^2 y' = x+1$. (<https://youtu.be/1_Q4kndQrtk>)

Not every differential equation is separable.  For example:
$$\frac{dy}{dx} = x-y$$
is not separable.
<!--3. Sketch the slope field for $\dfrac{dy}{dx} = x - y$. (<https://youtu.be/24pxJ1DuWR8>) -->

3. Which of the following differential equations are separable? (<https://youtu.be/6vUjGgI8Dso>)

    a. $xy' + y = 3$    
    b. $2x + 2y + 2y' - 1 = 0$
    c. $y' = (x^2+x)(y^2+y)$ 
    d. $x \dfrac{dy}{dx} + y \dfrac{dy}{dx} = x$


Here is a [slope field grapher tool](https://people.hsc.edu/faculty-staff/blins/classes/fall23/math142/SlopeFields.html) that I made a few years ago.  We finished with this example:

4. **Newton's Law of Cooling.** The temperature of a small object changes at a rate proportional to the difference between the object's temperature and its surroundings.  

    a. Express Newton's Law of Cooling as a differential equation.  
    b. Is that differential equation separable? 

<!--4. Show that $y = C e^{-x} + x - 1$ is a solution to $y' = x-y$ for any $C$. 

5. Show that $y = C e^{-x} + x - 1$ is a solution to $y' = x-y$ for any $C$. Then solve the initial value problem with initial condition $y(0) = 2$.
-->

5. **Mixing Problem.** Salty water containing 0.02 kg of salt per liter is flowing into a mixing tank at a rate of 10 L/min.  At the same time, water is draining from the tank at 10 L/min.  

    a. Write a differential equation to model how the amount of salt in the tank changes with respect to time.  
    b. Solve the differential equation if the amound of salt in the tank is initially 15 kg. (<https://youtu.be/aFfAz9wnoyY>)

We didn't get to this last example in class, but it is a good practice problem. 

6. $\dfrac{dy}{dx} = \dfrac{4 \sin x}{3 y^2}$ with initial condition $y(0) = 2$. (<https://youtu.be/cc3qtMBdQlE>)


- - - 

### Week 2 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 1  |             | Labor day - no class
Wed, Sep 3  |  [1.4][1.4] | Analyzing Equations Numerically
Fri, Sep 5  |  [1.4][1.4] | Analyzing Equations Numerically - con'd

- - - 

### Week 3 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 8  |  [1.5][1.5] | First-Order Linear Equations
Wed, Sep 10 |  [1.6][1.6] | Existence and Uniqueness of Solutions
Fri, Sep 12 |  [1.7][1.7] | Bifurcations

- - -

### Week 4 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 15 |  [2.1][2.1] | Modeling with Systems            
Wed, Sep 17 |  [2.2][2.2] | The Geometry of Systems 
Fri, Sep 19 |  [2.2][2.2] | The Geometry of Systems - con'd

- - - 

### Week 5 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 22 |  [2.3][2.3] | Numerical Techniques for Systems                     
Wed, Sep 24 |  [2.4][2.4] | Solving System Analytically   
Fri, Sep 26 |  [2.4][2.4] | Solving System Analytically - con'd

- - - 
 
### Week 6 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 29 |             | Review 
Wed, Oct 1  |             | **Midterm 1**
Fri, Oct 3  |  [3.1][3.1] | Linear Algebra in a Nutshell                        

- - - 

### Week 7 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 6  |  [3.2][3.2] | Planar Systems
Wed, Oct 8  |  [3.2][3.2] | Planar Systems - con'd
Fri, Oct 10 |  [3.3][3.3] | Phase Plane Analysis of Linear Systems             

- - - 

### Week 8 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 13 |             | Fall break - no class
Wed, Oct 15 |  [3.4][3.4] | Complex Eigenvalues                              
Fri, Oct 17 |  [3.5][3.5] | Repeated Eigenvalues                        


- - - 

### Week 9 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 20 |  [3.6][3.6] | Changing Coordinates                     
Wed, Oct 22 |  [3.7][3.7] | The Trace-Determinant Plane      
Fri, Oct 24 |  [3.7][3.7] | The Trace-Determinant Plane - con'd               

- - - 

### Week 10 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 27 |             | Review        
Wed, Oct 29 |             | **Midterm 2**
Fri, Oct 31 |  [3.8][3.8] | Linear Systems in Higher Dimensions 

- - - 

### Week 11 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 3  |  [3.9][3.9] | The Matrix Exponential 
Wed, Nov 5  |  [4.1][4.1] | Homogeneous Linear Equations                         
Fri, Nov 7  |  [4.2][4.2] | Forcing                                              

- - - 

### Week 12 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 10 |  [4.3][4.3] | Sinusoidal Forcing                                             
Wed, Nov 12 |  [4.4][4.4] | Forcing and Resonance                                
Fri, Nov 14 |  [5.1][5.1] | Linearization  

- - - 

### Week 13 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 17 |  [5.1][5.1] | Linearization - con'd
Wed, Nov 19 |             | Review              
Fri, Nov 21 |             | **Midterm 3** 
Mon, Nov 23 |  [6.1][6.1] | The Laplace Transform                   

- - - 

### Week 14 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Dec 1  |  [6.1][6.1] | The Laplace Transform - con'd                  
Wed, Dec 3  |  [6.2][6.2] | Solving Initial Value Problems        
Fri, Dec 5  |  [6.2][6.2] | Solving Initial Value Problems - con'd
Mon, Dec 8  |             | Recap & review                        

- - - 

[1.1]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook01.html>
[1.2]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook02.html>
[1.3]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook03.html>
[1.4]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook04.html>
[1.5]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook05.html>
[1.6]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook06.html>
[1.7]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook07.html>
[1.8]: <https://judsonbooks.org/odeproject/odeproject-html/firstlook08.html>
[2.1]: <https://judsonbooks.org/odeproject/odeproject-html/systems01.html>
[2.2]: <https://judsonbooks.org/odeproject/odeproject-html/systems02.html>
[2.3]: <https://judsonbooks.org/odeproject/odeproject-html/systems03.html>
[2.4]: <https://judsonbooks.org/odeproject/odeproject-html/systems04.html>
[2.5]: <https://judsonbooks.org/odeproject/odeproject-html/systems05.html>
[3.1]: <https://judsonbooks.org/odeproject/odeproject-html/linear01.html>
[3.2]: <https://judsonbooks.org/odeproject/odeproject-html/linear02.html>
[3.3]: <https://judsonbooks.org/odeproject/odeproject-html/linear03.html>
[3.4]: <https://judsonbooks.org/odeproject/odeproject-html/linear04.html>
[3.5]: <https://judsonbooks.org/odeproject/odeproject-html/linear05.html>
[3.6]: <https://judsonbooks.org/odeproject/odeproject-html/linear06.html>
[3.7]: <https://judsonbooks.org/odeproject/odeproject-html/linear07.html>
[3.8]: <https://judsonbooks.org/odeproject/odeproject-html/linear08.html>
[3.9]: <https://judsonbooks.org/odeproject/odeproject-html/linear09.html>
[3.10]: <https://judsonbooks.org/odeproject/odeproject-html/linear10.html>
[4.1]: <https://judsonbooks.org/odeproject/odeproject-html/secondorder01.html>
[4.2]: <https://judsonbooks.org/odeproject/odeproject-html/secondorder02.html>
[4.3]: <https://judsonbooks.org/odeproject/odeproject-html/secondorder03.html>
[4.4]: <https://judsonbooks.org/odeproject/odeproject-html/secondorder04.html>
[4.5]: <https://judsonbooks.org/odeproject/odeproject-html/secondorder05.html>
[5.1]: <https://judsonbooks.org/odeproject/odeproject-html/nonlinear01.html>
[5.2]: <https://judsonbooks.org/odeproject/odeproject-html/nonlinear02.html>
[5.3]: <https://judsonbooks.org/odeproject/odeproject-html/nonlinear03.html>
[5.4]: <https://judsonbooks.org/odeproject/odeproject-html/nonlinear04.html>
[5.5]: <https://judsonbooks.org/odeproject/odeproject-html/nonlinear05.html>
[6.1]: <https://judsonbooks.org/odeproject/odeproject-html/laplace01.html>
[6.2]: <https://judsonbooks.org/odeproject/odeproject-html/laplace02.html>
[6.3]: <https://judsonbooks.org/odeproject/odeproject-html/laplace03.html>
[6.4]: <https://judsonbooks.org/odeproject/odeproject-html/laplace04.html>
[6.5]: <https://judsonbooks.org/odeproject/odeproject-html/laplace05.html>






<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
