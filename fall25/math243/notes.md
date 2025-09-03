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
Jump to: [Math 243 homepage](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
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

3. Which of the following differential equations are separable? (<https://youtu.be/6vUjGgI8Dso>)

    a. $xy' + y = 3$    
    b. $2x + 2y + 2y' - 1 = 0$
    c. $y' = (x^2+x)(y^2+y)$ 
    d. $x \dfrac{dy}{dx} + y \dfrac{dy}{dx} = x$

We finished with this example:

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

### Fri, Aug 29

Today we talked about **slope fields**.  

1. Sketch the slope field for $\dfrac{dy}{dx} = x - y$. (<https://youtu.be/24pxJ1DuWR8>) 

Here is a [slope field grapher tool](https://people.hsc.edu/faculty-staff/blins/classes/fall23/math142/SlopeFields.html) that I made a few years ago. You can also use Sage to plot slope fields. Here is an example from the book, with color added. 

<figure>
```python
t, y = var('t, y')
f(t, y) = y^2/2 - t
plot_slope_field(f, (t, -1, 5), (y, -5, 10), headaxislength=3, headlength=3, 
    axes_labels=['$t$','$y(t)$'], color = "blue")
```
<figcaption>[Open example in SageCell](https://sagecell.sagemath.org/?z=eJxFjsEKgzAQRO-C_7BIIAlEWi0e8yWllVjXKiyNmG0xf9-VHjqnN485DDvI4OETNqNZWNuymMxBVnS-t6cWauCyWClynyiu2E8L0mgmB8eubhx0VjgLdw6as5QZwxj2JRG-njz7y8_8W1mAJOyYegoDUvJXrVhpp1U2bJW-OXhEipt8qAZ6Y2W_bmUvVA==&lang=sage&interacts=eJyLjgUAARUAuQ==)</figcaption>
</figure>



2. Consider the logistic equation with harvesting. 
$$\dfrac{dP}{dt} = k P \left(1 - \dfrac{P}{N} \right) - h$$
where $h$ is a number of rabbits that are harvested each year. 

    a. If $k = 1$, $N = 8$, and $h = 1.5$, then what are the values of $P$ where $\dfrac{dP}{dt} = 0$? [Slope field](https://sagecell.sagemath.org/?z=eJxFjt2KwjAQhe8DeYeDFJLI-FN3F7zpK_gCIiW1qSnNNtJEsW_vqBfO1Xe-mQOTCTMq3O2kVWZWRoqBcCB41iVhTyjXf1JI0enXgWE9YMmtJXSJFcMGB8PgpbiGmOsU4tXVXe9CqzvCq7Ul7H4N8_zmcsvsnW3to0_BjZfsq5-P-SYpwGMfLtXBNi6k6qiKXED_xzH7ZBSpYuaYfbwlO7YJscNkm6bPvDwRzjHEib9dNOHmFuYJHnNAEA==&lang=sage&interacts=eJyLjgUAARUAuQ==) 
    b. Graph the function 
$$y =k x \left(1 - \dfrac{x}{N} \right) - h.$$
    Where does the graph cross the x-axis?  Is the slope positive or negative at those crossing points?
     
The logistic equation (with or without harvesting) is **autonomous** which means that the rate of change $\dfrac{dP}{dt}$ does not depend on time, just on $P$.  An **equilibrium solution** for an autonomous differential equation is a solution where $y'(t) = 0$ for all $t$.  

3. In the logistic equation above, what happens to the equilibrium solutions when the rate of harvesting is increased to $h = 2$ and then to $h = 2.5$?  What happens to the slope field? What does that mean about the population of rabbits?  

<!--An equilibrium solution $y_0$ for $y' = f(y)$ is **stable** if $f'(y_0) < 0$ and it is **unstable** if $f'(y_0) > 0$.  

3. How could you modify the logistic equation equation so that you get a realistic non-autonomous model for rabbits in a field?  Why might the rate of change in the population of rabbits change with respect to time?  
-->


- - - 

### Week 2 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 1  |             | Labor day - no class
Wed, Sep 3  |  [1.7][1.7] | Bifurcations
Fri, Sep 5  |  [1.6][1.6] | Existence and Uniqueness of Solutions

### Wed, Sep 3

Last time we talked about equilibrium solutions of autonomous equations.  An equilibrium $y_0$ for $y' = f(y)$ is **stable** (also known as a **sink** or **attactor**) if any solution with initial value close to $y_0$ converges to $y_0$ as $t \rightarrow \infty$. An equilibrium is **unstable** (also known as a **source** or **repeller**) if all solutions move away from $y_0$ as $t \rightarrow \infty$. 


1. Consider the ODE $y' = y(y-2)(y+3)$.  What are the equilibria for this ODE?  Which are stable and which are unstable?

One way to quickly analyze whether equilibria are stable or unstable is to graph $f(y)$.  If $y_0$ is an equilibrium solution and $f'(y_0) < 0$, then $y_0$ is stable, and if $f'(y_0) > 0$, then $y_0$ is unstable.  
<center>
<iframe src="https://www.desmos.com/calculator/7xmuwyicde?embed" width="400" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
</center>

2. What would happen to the number of equilibrium solutions if we replaced $y(y-2)(y+3)$ by $y(y-2)(y+3) + 5$?


We talked about the **phase line** for an autonomous ODE.  

2. Draw different phase lines for the logistic equation with harvesting parameters $h = 0, 1.5, 2, 2.5$
$$y' = y \left( 1 - \frac{y}{8} \right) - h$$ 


Suppose that $y' = f_\lambda(y)$ is a family of differential equations that depends on a parameter $\lambda$.  A **bifurcation point** is a value of the parameter where the number of equilibrium solutions changes.  A **bifurcation diagram** is a graph that shows how the phase lines change as the value of a parameter changes. 

3. Draw a bifurcation diagram for the differential equation $y' = \lambda y - y^2$ showing the phase lines when $\lambda = -1, 0,$ and $1$. 

You can use Desmos to help with the previous problem.  Using $x$ to represent $\lambda$, you can graph the region where $dy/dt$ is positive in blue and the region where $dy/dt$ is negative in red.  Then it is easier to draw the phase lines in the bifurcation diagram. 

<center>
<iframe src="https://www.desmos.com/calculator/m8ez8hc9is?embed" width="400" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
</center>

<!--
6. Describe the phase line portraits for $y' = y - \lambda \sin y$.  How do they change as $\lambda$ changes?  How many values of $\lambda$ are bifurcation points? 
-->

- - - 

### Week 3 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 8  |  [1.4][1.4] | Analyzing Equations Numerically
Wed, Sep 10 |  [1.4][1.4] | Analyzing Equations Numerically - con'd
Fri, Sep 12 |  [1.5][1.5] | First-Order Linear Equations








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

[1.1]:  <https://runestone.academy/ns/books/published/odeproject/firstlook01.html>
[1.2]:  <https://runestone.academy/ns/books/published/odeproject/firstlook02.html>
[1.3]:  <https://runestone.academy/ns/books/published/odeproject/firstlook03.html>
[1.4]:  <https://runestone.academy/ns/books/published/odeproject/firstlook04.html>
[1.5]:  <https://runestone.academy/ns/books/published/odeproject/firstlook05.html>
[1.6]:  <https://runestone.academy/ns/books/published/odeproject/firstlook06.html>
[1.7]:  <https://runestone.academy/ns/books/published/odeproject/firstlook07.html>
[1.8]:  <https://runestone.academy/ns/books/published/odeproject/firstlook08.html>
[2.1]:  <https://runestone.academy/ns/books/published/odeproject/systems01.html>
[2.2]:  <https://runestone.academy/ns/books/published/odeproject/systems02.html>
[2.3]:  <https://runestone.academy/ns/books/published/odeproject/systems03.html>
[2.4]:  <https://runestone.academy/ns/books/published/odeproject/systems04.html>
[2.5]:  <https://runestone.academy/ns/books/published/odeproject/systems05.html>
[3.1]:  <https://runestone.academy/ns/books/published/odeproject/linear01.html>
[3.2]:  <https://runestone.academy/ns/books/published/odeproject/linear02.html>
[3.3]:  <https://runestone.academy/ns/books/published/odeproject/linear03.html>
[3.4]:  <https://runestone.academy/ns/books/published/odeproject/linear04.html>
[3.5]:  <https://runestone.academy/ns/books/published/odeproject/linear05.html>
[3.6]:  <https://runestone.academy/ns/books/published/odeproject/linear06.html>
[3.7]:  <https://runestone.academy/ns/books/published/odeproject/linear07.html>
[3.8]:  <https://runestone.academy/ns/books/published/odeproject/linear08.html>
[3.9]:  <https://runestone.academy/ns/books/published/odeproject/linear09.html>
[3.10]: <https://runestone.academy/ns/books/published/odeproject/linear10.html>
[4.1]:  <https://runestone.academy/ns/books/published/odeproject/secondorder01.html>
[4.2]:  <https://runestone.academy/ns/books/published/odeproject/secondorder02.html>
[4.3]:  <https://runestone.academy/ns/books/published/odeproject/secondorder03.html>
[4.4]:  <https://runestone.academy/ns/books/published/odeproject/secondorder04.html>
[4.5]:  <https://runestone.academy/ns/books/published/odeproject/secondorder05.html>
[5.1]:  <https://runestone.academy/ns/books/published/odeproject/nonlinear01.html>
[5.2]:  <https://runestone.academy/ns/books/published/odeproject/nonlinear02.html>
[5.3]:  <https://runestone.academy/ns/books/published/odeproject/nonlinear03.html>
[5.4]:  <https://runestone.academy/ns/books/published/odeproject/nonlinear04.html>
[5.5]:  <https://runestone.academy/ns/books/published/odeproject/nonlinear05.html>
[6.1]:  <https://runestone.academy/ns/books/published/odeproject/laplace01.html>
[6.2]:  <https://runestone.academy/ns/books/published/odeproject/laplace02.html>
[6.3]:  <https://runestone.academy/ns/books/published/odeproject/laplace03.html>
[6.4]:  <https://runestone.academy/ns/books/published/odeproject/laplace04.html>
[6.5]:  <https://runestone.academy/ns/books/published/odeproject/laplace05.html>






<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
