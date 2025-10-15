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

\newcommand{\R}{\mathbb{R}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\on}{\operatorname}

## Math 243 - Fall 2025


<ul class="nav">
  <li>[Examples](examples.html)</li>
  <li>[Notes](notes.html)</li>
  <li>[Schedule & Syllabus](index.html)</li>
</ul>

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

### Fri, Sep 5

Today we talked about two important theorems in differential equations. 

<div class="Theorem">
**Existence Theorem.** Suppose that $y' = f(t,y)$ where $f$ is a continuous function in an open rectangle $\{(t,y) :  a < t < b, c < y < d \}$.  For any $(t_0, y_0)$ inside the rectangle, there exists a solution $y(t)$ defined on an open interval around $t_0$ such that $y(t_0) = y_0$.
</div> 

This theorem guarantees that in most circumstances, we are guarantee to have solutions to differential equations.  But there are things to watch out for.  Solutions might blow up in finite time, so they might not be defined on the whole interval $(a,b)$.  

1. Solve the IVP $y' = y^2$ with initial condition $y(0) = 1$.  Notice that the function $f(t,y) = y^2$ is continuous everywhere.  But the solution is not. 




<div class="Theorem">
**Uniqueness Theorem.** Suppose that $y' = f(t,y)$ where both $f$ and its partial derivative $f_y$ are continuous in an open rectangle $\{(t,y) : a < t < b, c < y < d \}$. Then for any $(t_0,y_0)$, there exists a unique solution $y(t)$ defined on an open interval around $t_0$ such that $y(t_0) = y_0$.
</div>

If the partial derivative $f_y$ is not continuous, then we might not get unique solutions.  Here is an example. 

2. Solve the IVP $y' = y^{1/3}$, with $y(0) = 0$ using separation of variables.  Then show that $y(t) = -(\tfrac{2}{3} t)^{3/2}$ and $y(t) = 0$ are also valid solutions of this IVP. 

One very nice consequence of the uniqueness theorem is this important concept:

<div class="Theorem">
**No Crossing Rule.** If $f$ and $f_y$ are both continuous, then solution curves for the differential equation $y' = f(t,y)$ cannot cross. 
</div>

3. In our first homework we solved the IVP $xy' = \sqrt{1-y^2}$, with $y(1) = 0$.  The solution was $y = \sin(\ln(t))$. But if you graph the solution with the slope field, there is something wrong! [SageCell Plot](https://sagecell.sagemath.org/?z=eJxFjssKwyAQRfeB_IOIoFKTJunaLyltMI15wBBTtSX-fcd20VndezkwJyqSiCZv4wWPmLksi0nkJHEOTx9FW6V7J8-xLHZwsQ_gdttPq4VRTIpktlGkbSTmpEjV1h3WusO-WDOaYw1gtzku-vJb_q0sCJ45bOjBDBaCvnIWGVecJREl4zdFHg6cRxU6wMtSecoOIqybADcjIxUKNCq__5KaejtS-QGNMD12&lang=sage&interacts=eJyLjgUAARUAuQ==) 

This illustrates that a formula for a solution to $y' = f(t,y)$ might not apply after we reach a point where $f_y$ is no longer continuous. 

- - - 

### Week 3 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 8  |  [1.4][1.4] | Analyzing Equations Numerically
Wed, Sep 10 |  [1.4][1.4] | Analyzing Equations Numerically - con'd
Fri, Sep 12 |  [1.5][1.5] | First-Order Linear Equations

### Mon, Sep 8

Many ODEs cannot be solved analytically.  That means there is no formula you can write down using standard functions for the solution.  This is true even when the existence and uniqueness theorems apply.  So there might be a solution that doesn't have a solution you can write down.  But you can still approximate the solution using numerical techniques.  

Today we introduced **Euler's method** which is the simplest method to numerically approximate the solution of a first order differential equation. We used it to approximate the solution to 
$$\dfrac{dy}{dt} = \dfrac{y^2}{2} - t \text{ with initial condition } y(-1) = 0.$$ 

```python
from numpy import *
import matplotlib.pyplot as plt

def EulersMethod(f,a,b,h,y0):
    ''' 
    Approximates the solution of y' = f(t, y) on the interval a < t < b with initial 
    condition y(a) = y0 and step size h. 
    Returns two lists, one of t-values and the other of y-values. 
    '''
    t, y = a, y0
    ts, ys = [a], [y0]
    while t < b:
        y = y + f(t,y)*h
        t = t + h
        ts.append(t)
        ys.append(y)
    return ts, ys

f = lambda t,y: y**2 / 2 - t

# h = 1
ts, ys = EulersMethod(f, -1, 5, 1, 0)
plt.plot(ts,ys)
# h = 0.1
ts, ys = EulersMethod(f, -1, 5, 0.1, 0)
plt.plot(ts,ys)
# h = 0.01
ts, ys = EulersMethod(f, -1, 5, 0.01, 0)
plt.plot(ts,ys)
plt.show()
```

Here's the [output for this code](https://sagecell.sagemath.org/?z=eJyNUrFOwzAQ3SPlH57E0CS4Ia3EUsHAwMjCWnVwiSNbcmMrvlLM13NO0lIhIbBk5_Tu_N47X7rBHXCQpGEO3g2EKs_miFFvHVmzr31MEWSAt5RnedaqDs9Hq4bwoki7tuiEFHuhRWzKTZ6B12KxwBQ9eT-4D8N8KoC0QnD2SMb1cB3iAo_oChKIJRhKedOTGt6lhcQDiPceJ5Ms9oYMwxPtm-tbM9LEQpbMEhvIvkUg5RHMp4Ku59JXRcehZ_GTgzWBgmApleRpyTpH9pVuJm3HxzAamzNnDu5nCpJVVpP8aWaE-WJgbCt3AtvY7Cb8pI1VUwPzo6SVLkfcjk3HstLfGeIMceYaCrX0XvVtQeUVxQWNMzqMHc5O0oQ65rLysG8lG44bxKpa4w5rLDFO8AaaK1Z5djH_Y55YrgTuBfhsWIQHX6efoOD6GMozQVP_g4KL_iBp_sXS_EaTgKDdqSi_ANEKxnU=&lang=python&interacts=eJyLjgUAARUAuQ==) and here is a [version with the slope field added](https://sagecell.sagemath.org/?z=eJyNkrFu3DAMhncDfgciHSw7Osc-9JagGTp07NI1yKCL5ZMAWVIkOhf16UvZTnIogjYGLNM_qY-kqDG4Cew8-QR68i4gNGWxWZNAbxwafWx9yhaICN5gWZTFIEf4MRsZ4k-Jyg1s5IIfueKpq2_LAuipqgpW67v3wb1o4skIqCREZ2bUzoIbIVVwByNDDqkGkrJfW5ThWRgQ8A2Q3iOcNSrSNWqSV-yjs4NeMImJmiipA2EHiCg9RP1bgmq30F8S52Ap-dmB0REjp1Qyp8cd5Zmprrwz53a0hKWwzfPKoH5WI5dK2QR9uk0hXoqk3YsHDvepe1j1s9JGrg1sh5KfvDnB9dJ0qhv17kHyIHkupdgK76UdGNYXiDc1bWpYOtwqyRMaiWXEdBwEFZxuITXNHm5gDztYJvgFFEX0ZfFW_F_zhF3P4cCB1o6S0ODbfAnYGs_p-I0Ld1WQQ1W_4rr2E0AK-jfSBWFP8pLafQrb_Yd7ClLajC0L9kJHT6xJRnUKemBG2-jFo2REO_B-X_N35cD3vP9ab-SnWT_LkAG8aw838Skg66_HhUhnXGe1WX8_cK6lXB3pZl1twKjcmdV_AOZb_WU=&lang=python&interacts=eJyLjgUAARUAuQ==). 


<!--

We wrote a program to implement Euler's method in Python to help solve this differential equation which you might recognize as one potential solution to Problem 8 from Homework #2: 

$$\dfrac{dy}{dt} = y \left( 1 - \dfrac{y}{N(t)} \right) \text{ where } N(t) = 8 - 4 \cos (\tfrac{2\pi}{12} t)$$

Here is the [slope field for this differential equation](https://sagecell.sagemath.org/?z=eJxFjk0KgzAQhfeCdxgkkB8iGttFN16hFyhFosZWGBoxaTG374QuOqv3vvctJmpI0MPH7oJHylyWxVVESewCNZzV5IPo1LY2plORxkVkLe9JCVOnJtvEN_RxCOg3Nyyrw1ksGrLaajCdpJw01EZD11J5OjvbYw3oXo_47E8_8m9lAXT2cGFAOzoM_Y2zyLjmLDF-1zB59Dv9UI34dpX8AjMhNfM=&lang=sage&interacts=eJyLjgUAARUAuQ==).


```python
from math import *
import matplotlib.pyplot as plt

def EulersMethod(f,a,b,h,y0):
    # Returns two lists, one of t-values and the other of y-values. 
    t, y = a, y0
    ts, ys = [a], [y0]
    while t < b:
      y = y + f(t,y)*h
      t = t + h
      ts.append(t)
      ys.append(y)
    return ts, ys

N = lambda t: 8 - 4 * cos(2*pi/12 * t)
f = lambda t,y: y * (1 - y / N(t))

# h = 1
ts, ys = EulersMethod(f,0,12,1,4)
plt.plot(ts,ys)
# h = 0.1
ts, ys = EulersMethod(f,0,12,0.1,4)
plt.plot(ts,ys)
# h = 0.01
ts, ys = EulersMethod(f,0,12,0.01,4)
plt.plot(ts,ys)
plt.show()
```

Here's the [output for this code](https://sagecell.sagemath.org/?z=eJyFkTFvwyAQhXdL_g9PymK7xMFRhihqxo7N0DXKgGssLGFjmUsj_n2PxkmrSm0Y4Ph49-6AdnI9ekUGXT-6iVCkyRwxHa0j29XlGGIE5TFaSpM0aXSLl7PVk3_VZFyTtUKJWhgRZL5LE_BY4E3TeRo86OJgO09ewA0argUtP5Q9aw81NCDDjKcpnoT5pMTVhQQC9lC8yJmwTfDMjuokcAzydOUX01kNwjPquQNw6tMebUYi5IW5QYrwe-dLNY56aDLK72l3FmY2fV1lrh0f4MANWNXXjQLtsMUSGxR4dz5bF2O3qta8i4btD50IO-6oQFaxPGCFA9fMo9sChnVVmtwv9-txpajWohIbVvMPlPE3MtYGn9-SZfkonRX_G8jHDvIPiwi8cZcs_wQKxKL_&lang=python&interacts=eJyLjgUAARUAuQ==) and here is a [version with the slope field added](https://sagecell.sagemath.org/?z=eJyFkkFvozAQhe9I_Ien9mKoSwCl1SraHPfYHnqtejDBBCSDXds063_fcULTqqpSDuB5M_PNs01n9YhpHk3AMBptPfI0WVaj8EZpr4amMCGuIByM8mmSJq3s8G9W0roH6Xvdso4L3vCehzLbpAnoucaT9LOdHPxBQw3OOw49SegO_vZNqFk6iKmF70mjl42ZsGQKnCieI2ALQZ9yUQgTHGnP4oXjOZQvJ_3QD0rC4y-axQGo9WaLjnkesrz_EH0UPyNXCGPk1DKfndvOWlg0e9zKMjsewCMZUGJsWgG_wR_cYo0cO-1YnZthVdUURWD3pY6HDTnKwSoqD1jhkWZmkcb-k0OqHKXr93ZomRomZ8ROspJXNa_XGT8r66hU97GRLqN4nYc3aSOAl8Xdyr1az6qb7kjM8zqLan4Kf0jutNJ2e9XQkV8R8Bo9uajS5HzI3y75aKfi62V4_CsY1Qb3QdpbKadPVFn8BqOKCzgr26-w8ndaeQmnrZj2x53GvOv1gWXv0bTZAg==&lang=python&interacts=eJyLjgUAARUAuQ==). 
-->

After demonstrating how to implement Euler's method in code, we talked about some simpler questions that we can answer with pencil & paper. 
 
1. Suppose that we want to solve $\dfrac{dy}{dx} = x - y$ with initial condition $y(0) = 2$.  Make a table showing the first three steps using Euler's method with step size $h = 1$.  

Euler's method is only an approximation, so there is a gap between the actual y-value at $t = b$ and the Euler's method approximation.  That gap is the error in Euler's method. There are two sources of error. 

* **Discretization Error** - caused by using a discrete approximation to a continuously changing quantity. 
* **Rounding Error** - caused by using a computer that can't represent small decimal places accurately.  

As $h$ gets smaller, the discretization error gets smaller, but the rounding error gets worse.  
A worst case upper bound for the error is: 
$$\text{Error} \le \dfrac{e^{L(b-a)} - 1}{L} \left( \dfrac{Mh}{2} + \dfrac{\delta}{h} \right)$$
where $L = \max \left| \frac{\partial f(t,y)}{\partial y} \right|$, $M = \max |y''(t)|$, and $\delta$ is the smallest floating point number our computer can accurately represent. 
Using the standard base-64 floating point numbers, $\delta \approx 10^{-16}$. In practice, Euler's method tends to get more accurate as $h$ gets smaller until around $h \approx 10^{-7}$.  After that point the rounding error gets worse and there is no advantage to shrinking $h$ further. 

<!--
<div class="Theorem">
**Euler's Method Error.** If we use Euler's method with a step size $h$ to approximate the solution of $y' = f(t,y)$ on an interval $[a,b]$, then there are constants $C_1$ and $C_2$ depending on the length of the interval $(b-a)$, the partial derivative $f_y$ and the second derivative $y''$  such that 
$$\text{Error} \le C_1 h + \dfrac{C_2 \delta}{h}$$
where $\delta$ is the smallest floating point number our computer can accurately represent. ($\delta \approx 10^{-16}$ using standard base-64 floating point numbers).

At first, the error decreases as $h$ gets smaller, but eventually the $\frac{\delta}{h}$ term (which comes from computer rounding errors) gets very large, so there are limits to how accurate you can get.
</div>

<div class="Theorem">
**Euler's Method Error.** If we use Euler's method with a step size $h$ to approximate the solution of $y' = f(t,y)$ on an interval $[a,b]$, then
$$\text{Error} \le \dfrac{e^{L(b-a)} - 1}{L} \left( \dfrac{Mh}{2} + \dfrac{\delta}{h} \right)$$
where $L = \max \left| \frac{\partial f(t,y)}{\partial y} \right|$, $M = \max |y''(t)|$, and $\delta$ is the smallest floating point number our computer can accurately represent. 

At first, the error decreases as $h$ gets smaller, but eventually the $\frac{\delta}{h}$ term (which comes from computer rounding errors) gets very large, so there are limits to how accurate you can get.
</div>

-->

### Wed, Sep 10

Today I announced [Project 1](Project1.pdf) which is due next Wednesday.  I've been posting Python & Sage code examples, but if you would rather use Octave/Matlab, here are some [Octave code examples](octave.html).

**Runge-Kutta methods** are a family of methods to solve ODEs numerically.  Euler's method is a first order Runge-Kutta method, which means that the discretization error for Euler's method is $O(h^1)$ which means that the error is less than a constant times $h$ to the first power. 

Better Runge-Kutta methods have higher order error bounds.  For example, RK4 is a popular method with fourth order error $O(h^4)$.  Another Runge-Kutta method is the **midpoint method** also known as RK2 which has second order error. 

<div class="Theorem">
**Midpoint Method (RK2).** Algorithm to approximate the solution of the initial value problem $y'(t) = f(t, y)$ on the interval $[a, b]$ with initial condition $y(a) = y_0$.

1. Choose a step size $h$ and initialize variables $t = a$ and $y = y_0$. 
2. Repeat the following two steps while $t < b$:
    a. Update $y = y + f(t + \tfrac{1}{2}h, y + \tfrac{1}{2} h f(t,y))$,
    b. Update $t = t + h$.
</div>

<center>
<img src="RungeKutta4.png" width = 500></img>
</center>

In RK2 the slope used to calculate the next point from a point $P_1$ is the slope at the midpoint between $P_1$ and the Euler's method next step. In RK4, the slope used is a weighted average of the slopes at $P_1$, $P_2$, $P_3$, and $P_4$ shown in the diagram above. Specifically, it is 1/6 of the slopes at $P_1$ and $P_4$ plus 1/3 of the slopes at $P_2$ and $P_3$.  

There are even higher order Runge-Kutta methods, but there is a trade-off between increasing the order and increasing complexity. 

After we talked about Runge-Kutta methods, we introduced the **integrating factors method** for solving first order linear ODEs
$$y'(t) + f(t) y = g(t).$$
The key idea is that if $F(t)$ is an antiderivative of $f(t)$, then $e^{F(t)}$ is an **integrating factor** for the ODE.  Since 
$$\dfrac{d}{dt} \left( e^{F(t)} y(t) \right) = e^{F(t)} y'(t) + e^{F(t)} f(t) y(t)$$
by the product rule, we can re-write the ODE as:
$$\dfrac{d}{dt} \left( e^{F(t)} y(t) \right) = e^{F(t)} g(t).$$
Then just integrate both sides to find the solution.  

1. $\dfrac{dy}{dt} + \dfrac{y}{t} = 3t$

2. $\dfrac{dy}{dx} + 2y = 3$


<!--
Today, we'll derive the RK2 method, also known as the **midpoint method** which is a second order Runge-Kutta method.  

The idea of 2nd order Runge-Kutta is to look for constants $\alpha, \beta$ such that the solution $y(t)$ for a differential equation $y' = f(t, y)$ satisfies

$$y(t+h) = y(t) + f(t + \alpha h, y(t) + \beta h) h + O(h^3).$$

It's not obvious that you'll be able to find these constants, but it turns out that you can by using Taylor's theorem which says that:  

$$y(t+h) = y(t) + y'(t) h + y''(t) \dfrac{h^2}{2} + O(h^3).$$

The actual formula for the last term is $y'''(\xi) \dfrac{h^3}{6}$ where $t \le \xi \le t+h$, but as long as we assume that the 3rd derivative of the solution is bounded in the interval of interest, it is safe to say that the remainder term is $O(h^3)$.  

You need $f(t + \alpha h, y(t) + \beta h) \approx y'(t) + \tfrac{1}{2} y''(t) h$.  

Here are the ingredients we need:

1. Use the chain rule for multivariable functions to compute the derivative 
$$y''(t) = \dfrac{d}{dt} f(t, y(t)).$$ 

2. Use Taylor's theorem for multivariable functions to show that 
$$f(t + \alpha h, y + \beta h) = f(t, y) + \alpha h f_t(t,y) + \beta h f_y(t,y) + O(h^2).$$

Then match the like terms to show that $\alpha = \tfrac{1}{2}$ and $\beta = \tfrac{1}{2}f(t,y)$ works. This gives us the **Midpoint Method** also known as **RK2**.

<div class="Theorem">
**Midpoint Method (RK2).** Algorithm to approximate the solution of the initial value problem $y'(t) = f(t, y)$ on the interval $[a, b]$ with initial condition $y(a) = y_0$.

1. Choose a step size $h$ and initialize variables $t = a$ and $y = y_0$. 
2. Repeat the following two steps while $t < b$:
    a. Update $y = y + f(t + \tfrac{1}{2}h, y + \tfrac{1}{2} h f(t,y))$,
    b. Update $t = t + h$.
</div>
-->

### Fri, Sep 12

Today we looked at more examples of linear first order ODEs. 

1. Suppose that a 200 gallon tank initially contains a 100 gallons of a saltwater solution at a concentration of 1 gram of salt per gallon. We start adding 5 gallons of saltwater per minute with a concentration of 2 grams per gallon. Meanwhile we let out 3 gallons per minute of well-mixed water from the tank.  

a. Write down an IVP to model this situation using $y$ to represent the amount of salt in the tank. 

b. Use integrating factors to solve the IVP. (<https://youtu.be/b5QWC2DA5l4>) <!-- There is a small error in the video where they say C = -10,000, but actually C = -100,000. -->

Sometimes it can be faster to use a guess-and-check method instead of integrating factors to solve linear ODEs.  Here is an example.  Consider the first order linear ODE:
$$\dfrac{dy}{dx} + 4y = e^{-x}.$$
You might guess that there is a constant $A$ such that $y(t) = Ae^{-x}$ is a solution of this differential equation.  This is true!  

2. Find the constant $A$ by substituting $y = Ae^{-x}$ into the differential equation $y' + 4y = e^{-x}$. 

So $y(t) = \tfrac{1}{3} e^{-x}$ is one particular solution for this ODE.  To get all of the solutions, we need some theory:


<div class="Theorem">
A first order linear differential equation is **homogeneous** if it can be put into the form
$$\dfrac{dy}{dt} + f(t) y = 0.$$
Any **inhomogeneous** equation 
$$\dfrac{dy}{dt} + f(t) y = g(t)$$
has a general solution $y(t) = y_p(t) + C y_h(t)$ where

* $y_p$ is any **particular solution** of the inhomogeneous equation, and
* $C y_h$ is the general solution of the homogeneous equation.
</div>


3. Solve the homogeneous ODE $y' + 4y = 0$, then find the general solution of $y' + 4y = e^{-x}$ by combining the homogeneous solutions with the particular solution we found above. 


<!--

We didn't have time for this next example, so we'll do it next week: 
$$\dfrac{dy}{dt} + 2y = \cos t.$$
If you know that waves can be modeled by equations of the form $A \sin t + B \cos t$, then you might guess that the solution $y(t)$ might have this form.  Then 
$$y'(t) = A \cos t - B \sin t$$  
and
$$y' + 2y = (2A - B) \sin t + (2B + A) \cos t.$$
So we can find a solution to the ODE by solving the system of equations
\begin{align*}
2A - B &= 0 \\
A + 2B &= 1 
\end{align*}
The solution is $A = \tfrac{1}{5}$, $B = \tfrac{2}{5}$ which means that $y(t) = \tfrac{1}{5} \sin t + \tfrac{2}{5} \cos t$ is one solution to the ODE. 
-->

- -  -


### Week 4 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 15 |  [2.1][2.1] | Modeling with Systems            
Wed, Sep 17 |  [2.2][2.2] | The Geometry of Systems 
Fri, Sep 19 |  [2.4][2.4] | Solving Systems Analytically

### Mon, Sep 15

Consider the inhomogeneous linear ODE: 
$$\dfrac{dy}{dt} + 2y = \cos t.$$
If you know that waves can be modeled by equations of the form $A \sin t + B \cos t$, then you might guess that the solution $y(t)$ might have this form.  Then substituting into the equation, we get
$$\underbrace{A \cos t - B \sin t}_{y'} + \underbrace{2A \sin t + 2B \cos t}_{2y} = \cos t.$$  
By combining like terms, we get a system of equations
\begin{align*}
A + 2B &= 1 \\
2A - B &= 0. 
\end{align*}
The solution is $A = \tfrac{1}{5}$, $B = \tfrac{2}{5}$ which means that $y(t) = \tfrac{1}{5} \sin t + \tfrac{2}{5} \cos t$ is one solution to the ODE. 

1. What is the corresponding homogeneous equation, and what is its solution?

2. What is the general solution to $y' + 2y = \cos t$?

3. Why is the method of integrating factors harder here?

After that, we introduced **systems of differential equations.**  We started with this simple model of a predator-prey system with rabbits $R$ and foxes $F$:

\begin{align*}
\dfrac{dR}{dt} &= 2R - RF \\
\dfrac{dF}{dt} &= -5F + RF 
\end{align*}

4. Find an equilibrium solution where both $dR/dt$ and $dF/dt$ are zero.

A graph of the vector field defined by a system of two differential equations is called a **phase plane**.  Solution curves are parametric functions $R(t)$ and $F(t)$ that follow the vector field in the phase plane.  

<figure>
<img src = "rabbitsfoxes2.png" width = 600></img>
<figcaption style="text-align: center">**Figure:** Example phase plane (<a href="https://sagecell.sagemath.org/?z=eJxtjUFuwyAQRfdI3GHkFRDq2pbSRaVsc4DeABLsIA2BAE7h9rVbt4ra7p7e_zN_jN7BdXahgnXBxwyCko2cygF9RqvbUFcClSBgpoSSEQ6AyumzgiKhvsIgCjxBEZWS6Xe22CXbrxklrMjKl4Yz6TJFe2Zorymok2Gd7Ds5dFw-mBfZD5xTssy2t9neTVzv5fj55TndYmZfLMQAO5geuGt7Lqf_irs_tZNHHw-Nxtk021pBpQ2y5k1pbXP61nXTR1_Mj0wX_874ByNQYjg=&lang=python&interacts=eJyLjgUAARUAuQ==">Python</a>, <a href="https://sagecell.sagemath.org/?z=eJxNkMFqwzAMhu-BvMN_KU26NEsD3WXsulPZyq5jAzdWE4Nrp7abOX36KU0HM0iyPiTrlxfYd8ITei0MgaI49ZqgDN6bIAZKkzT5jAXGL7zgRL5rnZKZVsb3oqGsKrBhq6u8wH_4xLzO8-epXUZurctVxBqxXI0M5choveUEDzPDfKb6Bd6sOwmtroTQEYRz9sfjaB0aa7zygUyAJtOGDpmQkiSqstogWIjBKgmpBuWVNTiMuJKzeZrseKA_u5DJWH7XPFWOc5w6J503lezKR-z-FLK7p5OqvbYBXtuecFSkJS5emRbnixrIpckcs-mvCn6IjWNVbnNeazFd4Buhyc_7wPN6aRK1OJDOlh_icFDBL1npeEevNtINiKg8gmq78Au5zHxa&lang=octave&interacts=eJyLjgUAARUAuQ==">Octave</a>)</figcaption>
</figure>

#### Converting a 2nd order equation to a system of equations

According to Hooke's law the force of a spring is 
$$m \dfrac{d^2 x}{dt^2} = - k x$$
or equivalently
$$\dfrac{d^2 x}{dt^2} + \dfrac{k}{m} x = 0.$$
This is a homogeneous 2nd order linear differential equation.  

We can convert a second order ODE to a first order system of equations by using an extra variable equal to the first derivative $v = x'$.  Then $x'' = v'$, so we get the system:

\begin{align*}
\dfrac{dv}{dt} + \dfrac{k}{m} x &= 0 \\
\dfrac{dx}{dt} - v &= 0.
\end{align*}

5. Convert the 2nd order equation $y'' + y' + 4y = \sin t$ into a 1st order system of equations.

### Wed, Sep 17

<!--
A system of differential equations can be written in vector form. If $\mathbf{x} = (x_1, \ldots, x_n)$ is a vector in $\R^n$ and $F = (f_1, \ldots, f_n)$ is a vector-valued function where each component is a function $f_i(t,x_1, \ldots, x_n)$, then the system

\begin{align*} 
\dfrac{dx_1}{dt} &= f_1(t, x_1, \ldots, x_n) \\
\dfrac{dx_2}{dt} &= f_2(t, x_1, \ldots, x_n) \\
 & \vdots \\
\dfrac{dx_n}{dt} &= f_n(t, x_1, \ldots, x_n) 
\end{align*}

can be written more concisely as:

$$\dfrac{d\mathbf{x}}{dt} = F(t, \mathbf{x}).$$
-->

Today we looked at more examples of systems of ODEs.  

Suppose that we have two species that compete for resources and their populations $x$ and $y$ satisfy 

\begin{align*}
\dfrac{dx}{dt} = x(1-x) - \alpha xy \\
\dfrac{dy}{dt} = y(1-y) - \alpha xy \\
\end{align*}

1. Plot the phase plane for this system when $\alpha = 2$ and when $\alpha = \tfrac{1}{2}$ ([Python](https://sagecell.sagemath.org/?z=eJxtjsGKwyAQQO-C_zDkpNZmTY6FfIxpTSqM1arZ1b9v0k2h7PY0j8djZqboHdwWFypYF3zMICjZyekc0Ge0YxvqRqATBMyUUKJhgJ6SaR2o3XjRUCTUExTBumPhcAQtiqiUzH-LuhX1raCEFbmKAZxJ1znaC0N7S0GfDVOya5XsFZf_Fadkfaa9L_bbxG2FnJ6LvtI9ZvbLQvRwgPmNVauU6ricP7WHT-XZo49DM-Jimv1mQT0aZE15ibqL-hLp6n8YfwBQ-2Qo&lang=python&interacts=eJyLjgUAARUAuQ==)). Describe the difference between the equilibrium solutions of the two systems.  

Later in chapter 3 we will learn how to classify different types of equilibrium solutions on the phase plane using linear algebra.  For now, here is a preview of some of the types of equilibria.  

<figure>
<img src= "https://upload.wikimedia.org/wikipedia/commons/3/3b/Stability_Diagram.png" width = 600></img>
<figcaption style="text-align:center">**Figure:** Types of equilibria for 2D-systems. (Source: [Wikipedia](https://en.wikipedia.org/wiki/Stability_theory))</figcaption>
</figure>

A simple model used to understand epidemics is the SIR-model, which stands for Susceptible-Infected-Recovered. The idea is that a disease will spread from people who are infected to people who are still susceptible.  After infected people recover, they are usually immune to the disease, at least for a little while.  In the system below, $S(t)$ is the percent of the population that is still susceptible, $I(t)$ is the percent that are currently infected, and $R(t)$ is the percent of the population that are recovered.  The constants $\alpha$ and $\beta$ are the transmission rate and recovery rate, respectively. 

\begin{align*}
\dfrac{dS}{dt} &= -\alpha SI \\ 
\dfrac{dI}{dt} &= \alpha SI - \beta I \\ 
\dfrac{dR}{dt} &= \beta I
\end{align*}

2. Under what circumstances is the number of infected people increasing?  

3. If we introduce a vaccine, what effect might that have on the model?  

4. What if the disease is fatal for some people?  How would you change the model to account for that? Hint: You could have a constant $\gamma$ that represents the fatality rate, i.e., the proportion of the infected population that die each day.  

5. If you divide $dI/dt$ by $dS/dt$, you get the differential equation 
$$\dfrac{dI}{dS} = -1 + \dfrac{\beta}{\alpha} \dfrac{1}{S}.$$
Solve this differential equation with initial condition $S = 1$ and $I = 0$.   

Here is a [plot showing the solution](https://sagecell.sagemath.org/?z=eJxtUEtuwyAU3CNxhydvAoQ42NlVygG67gkgxh8JAsF2C7cvJG4VtVm9Yd5oZnh9cBauq_UJJutdWIBhtCErF2_cYiZV-1QQyBm8WTDCSMIZWoxUHg1GfR5GWtVJiBzSGxwkiyxhNPxd3Hk4gCpbjEjkiWaN1fM4hKkjZrrOXl40EbypBW8F5f8pilGuUd_W6VOHYsH7u9FxvoWFPDBjLexheMKiFkI0lA-vtPtXyoszLpwrZVZdbZnRSKUNqT5-iLQR74XAKJYP_xau24Y3_CTyany6RL5PzDHqKIGBcTma5mfzMCyHzl1gzOzWYBd0t9vy5tF9EfoNpZl7qA==&lang=python&interacts=eJyLjgUAARUAuQ==) superimposed on the direction field (for $S$ and $I$ only).

### Fri, Sep 19

Today we talked about **decoupled systems** and **partially coupled systems.**

A system of equations 
\begin{align*} 
\dfrac{dx}{dt} &= f(x) \\
\dfrac{dy}{dt} &= g(y) \\
\end{align*}
is called **decoupled** since the $x$-variable doesn't depend on $y$, and the $y$-variable doesn't depend on $x$.  You can solve the differential equations in a decouple system separately.  


A system of equations 
\begin{align*} 
\dfrac{dx}{dt} &= f(x, y) \\
\dfrac{dy}{dt} &= g(y) \\
\end{align*}
is **partially coupled**.  You can solve for $y(t)$ first, and then substitute into the first equation to create a single variable differential equation for $x(t)$.  

1. Solve the system 
\begin{align*}
x' &= -x - y \\
y' &= -3y \\
\end{align*}

2. Solve the system 
\begin{align*}
x' &= 2x + y^2 \\
y' &= -y \\
\end{align*}
with initial conditions $x(0) = 3$ and $y(0) = 2$. (<https://youtu.be/sJ3CuM-QmOk>)

Here is a [Desmos graph](https://www.desmos.com/calculator/j9usdeagpv) showing the solutions to the last problem as different parametric curves.


<!-- Another partially couple example we didn't have time for is: x'' + 2x' = 0. -->

- - - 

### Week 5 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 22 |  [2.3][2.3] | Numerical Techniques for Systems                     
Wed, Sep 24 |  [C1][C1] | Complex Numbers and Differential Equations
Fri, Sep 26 |  [C2][C2] | Solving System Analytically - con'd

### Mon, Sep 22

Today we introduced Euler's method for systems of differential equations equations.  

1. We started by implementing Euler's method for the system of rabbits and foxes: 
\begin{align*}
\dfrac{dR}{dt} &= 2R - RF \\
\dfrac{dF}{dt} &= -5F + RF 
\end{align*}

We started with an initial condition $(R_0, F_0) = (2,1)$.  
<figure>
<img src = "rabbitsfoxes3.png" width = 600></img>
<figcaption style="text-align: center">**Figure:** Two-dimensional Euler's method example (<a href="https://sagecell.sagemath.org/?z=eJxtUj2PnDAQ7VfiP4y2WcM5nJdom5O2y6VLk_Z0hVkbsGRszjYXnF-fMR8bdFoaHm_em_Hz0Djbgxn7IYLqB-sCFNlhRT0Pg7ZBq7ocYkLAPQw6ZIfsIGQDr6OWzv-SobOi-kEaCi2FjoKhMDEKkeUv2QHwOZ1OC5gdJw_97IHGOhDTswhwhYZMaMmBGwEiLly7cOVi7kB5CJ0EH-QAXv2VC282HmPU0oFtZoVfqhObW0Z8OTnLlFFBcQ03awQia_yXU6ahOH3JsFIesUfybWLvFN4ie18KKYLCluC4aSUxW-R9H3iCrljzJSp9rtF2Yl_yYZBGkGnHxju7aZ0MozPrgf4L004aHKZ5Xws-j36BqmTFBN9gKmJ2aL9WkcXaBTUxue8RH66VlYydKVwYw1upKJzz5MEQuLIr7tN3rVOCaGX8wG-SMHq-0O8sp3uG0YrlaMR_qPwY1ad0qQFt5jbP_sMFsuCiqPCW2h1O89k5p-0j7dMj5c1q667HWo_yuM6cNK-lJsffvK5V8BsdV_qnneSdTP87wTuJfuvkpNiKvrN_SP4PriPkJw==&lang=python&interacts=eJyLjgUAARUAuQ==">Python</a>)</figcaption>
</figure>

2. A more realistic model for the rabbits & foxes might be if the rabbits growth was constrained by a carrying capacity of 10 thousand rabbits (logistic growth), in the absence of foxes.  How would this change the differential equation above?  

3. Now use Euler's method to investigate the long-run behavior of the rabbits & foxes with this new model. What changes?  

Now talk about the equation for a pendulum:
$$\dfrac{d^2 \theta}{d t^2}  = - \dfrac{g}{L} \sin \theta.$$

4. Re-write this 2nd order ODE as a system of 1st order equations.  

Typically in introductory physics, you find an approximate solution of this equation by assuming that the angle $\theta$ stays small and so $\sin \theta \approx \theta$.  But we can use Euler's method instead to generate solutions numerically ([Python](https://sagecell.sagemath.org/?z=eJyVU8Fu3CAUvFvyPzztZbFDvOyqySHSHiq1x35BlANrsI2EgQBOTb--gO1kle4htQ8eD_Nm3jO4s3oENY0mgBiNth7qsljRSL2R2ktxaUxICKgDI31ZlAXjHfycJLfuF_eDZqcfqMPQYxgwKAwzwRBI9VQWEK_9fr-AXLF3MOYa6LQFNh-YhzN0aI4lFVDFgIWF6xeuWYoHEA78wMF5bsCJP3zh1cbHMS7cgu6ywi2rM8mWIT4szzKhhBdUQqsVi0gr96nLFBrTlxlWykXsIvk8kxcMz4G8LAtpBBEtwVLVc6S2ka994A6Gep0vUel1He1K7BpqDFcMzVdseGc3reV-smpt6EOY9qSLYZKOF0Zz9BOEsug_c_dOqByR7thE_OTnuB9u6K1gSArlDG05un_AD_hEKvwPE0vjGWheJ_HGbTLAXbY5uFfr0YLr-hSn7K8waQghxwr3t7R3t5Stltqedxc58d2aOUt64RLtvqteckD5qzNBlas2RfhQTJJaeONSt8IHQKvy4Hib1WXxvqc3z3Fq44jhMTaDwYjDY6TWkPQroFgd3Nak5ew_PI8km36rv2ibFt2gf6PqLxvdByU=&lang=python&interacts=eJyLjgUAARUAuQ==)).

### Wed, Sep 24

Today we introduced **complex numbers** and talked about how they can arise in differential equations.  

<div class="Theorem">
A **complex number** is an expression $z = a + b i$ where $a, b$ are real numbers and $i$ has the property that $i^2 = -1$.  

* The **real-part** of $z$ is $\on{Re}(z) = a$ and the **imaginary part** is $\on{Im}(z) = b$.  

* The **absolute value** $|z| = \sqrt{a^2 + b^2 }$. 

* The **complex conjugate** of $z$ is $\overline{z} = a - ib$. 
</div>

1. Calculate $(-2 + 2i)(3+2i)$. 

2. Show that for any complex number $z \cdot \overline{z} = |z|^2$. 

<div class="Theorem">
**Euler's Formula.** 
$$e^{i t } = \cos t + i \sin t$$
</div>

A **complex-valued function** is a function $z(t) = x(t) + i y(t)$ where both $x(t)$ and $y(t)$ are real-valued functions.  You can integrate and differentiate complex-valued functions by integrating/differentiating the real and imaginary parts.  

3. Show that $z(t) = \cos t + i \sin t$ is a solution of the differential equation $\dfrac{dz}{dt} = i z$.  

<div class="Theorem"> 
**Polar Form.** Any complex number $z$ can be expressed as $z = re^{i \theta}$, where 
$r = |z|$ and $\theta$ is an angle called the **argument** of $z$. 
</div>

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Complex_number_illustration_modarg.svg/1920px-Complex_number_illustration_modarg.svg.png" width = 300></img>
<figcaption style="text-align: center">**Figure:** Polar form. (Source: <a href="https://en.wikipedia.org/wiki/Complex_number">Wikipedia</a>)
</center> 

4. Convert  $\sqrt{2} + \sqrt{2}i$ and $1 + \sqrt{3} i$ to polar form, then multiply them by applying the formula 
$$e^{i \alpha} e^{i \beta} = e^{i (\alpha + \beta)}.$$

5. Solve the differential equation $z' + z = i$. 

6. Show that $e^{it}$ is a solution for the differential equation $y'' + y = 0$. Hint: The chain rule applies to complex-valued functions, so $\frac{d}{dt} e^{it} = i e^{it}$. 

### Fri, Sep 26

Today we talked about homogeneous second order linear differential equations with constant coefficients.  

$$ ay'' + b y' + c = 0.$$

These equations are used to model simple harmonic oscillators such as a spring where the total force depends on a spring force $-k x$ and a friction or damping force $-b x'$:  

$$m \dfrac{d^2 x}{dt^2} = - b \dfrac{dx}{dt} - k x.$$


1. Show that $e^{\lambda t}$ is a solution of $ay'' + by' + cy$ if and only if $\lambda$ is a root of the **characteristic polynomial** $ax^2 + bx + c$.  


<div class="Theorem"> 
**General Solution of a 2nd Order Homogeneous Linear Differential Equation**.

**Theorem.** If $f(t)$ and $g(t)$ are linearly independent solutions of 
$$a y'' + by' + c = 0,$$
then the general solution is 
$$y(t) = C_1 f(t) + C_2 g(t).$$
</div>

Using the language of linear algebra, we can describe the result above several ways:

* $f$ and $g$ are a **basis** for the set of general solutions.
* $f$ and $g$ **span** the set of all general solutions.
* Every solution is a **linear combination** of $f$ and $g$. 


<!-- 
<div class="Theorem"> 
**General Solution of a 2nd Order Homogeneous Linear Differential Equation**.

If the polynomial $ax^2 + bx + c$ has two roots $\lambda_1 \ne \lambda_2$, then the general solution of 
$$a y'' + by' + c = 0$$
is the set of all linear combinations (i.e., the span) of the functions $e^{\lambda_1 t}$ and $e^{\lambda_2 t}$.  That is, all functions of the form
$$y(t) = C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t}.$$
</div>
-->

We applied the theorem above to the following two examples:

2. Find the general solution to $y'' + 3y' + 2y = 0$.  (<https://youtu.be/Pxc7VIgr5kc?t=241>)


3. Find the general solution of $y'' + 2 y' + 2 y = 0$. Hint: Use the quadratic formula. 

<!--
4. Suppose that $y'(0) = 2$ and $y(0) = 2$.  Find the particular solution of $y'' + 2y' + 2y = 0$ that satisfies these initial conditions.  

We did the last problem two ways:

**Hard Way** (Using complex numbers): The general solution is 
$$y(t) = C_1 e^{(-1 + 2i)t} + C_2 e^{(-1+2i)t}$$
so 
$$y'(t) = C_1 (-1 + 2i) e^{(-1 + 2i)t} + C_2 (-1 - 2i)e^{(-1+2i)t}$$
by the chain rule.  When you plug in $t = 0$, you get a system of equations:
$$C_1 + C_2 = 2$$
$$C_1(-1 + 2i) + C_2(-1-2i) = 2$$
You solve this just like any other system of equations, and you get $C_1 = 1 - i$ and $C_2 = 1 + i$.  

So the particular solution is 
$$y(t) = (1-i) e^{(-1 +2i) t} + (1+i) e^{(-1 - 2i)t}.$$
That's not very nice.  

There is an easier way, which is based on the following idea:

A more general version of the previous result is the following.

<div class="Theorem">
**Theorem.** If $f(t)$ and $g(t)$ are linearly independent solutions of $ay'' + by' + cy = 0$, then $f$ and $g$ are a basis for the set of all solutions of the differential equation.  In other words, all other solutions have the form
$$C_1 f(t) + C_2 g(t).$$
</div>

**Easier Way** (Find a different basis): If the roots are complex numbers $\alpha \pm i \beta$.  Then both $e^{\alpha t} \cos(\beta t)$ and $e^{\alpha t} \sin(\beta t)$ are real-valued solutions.  All other solutions are linear combinations of these two.  So there must be constants $C_1, C_2$ such that 
$$y(t) = C_1 e^{\alpha t} \cos(\beta t) + e^{\alpha t} \sin(\beta t).$$

5. Find the constants $C_1$ and $C_2$ that satisfy $y(0) = 2$ and $y'(0) = 2$ in the example above. 

-->

- - - 
 
### Week 6 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 29 |             | Review 
Wed, Oct 1  |             | **Midterm 1**
Fri, Oct 3  |  [3.1][3.1] | Linear Algebra in a Nutshell                        

### Mon, Sep 29

We talked about the [midterm 1 review problems](midterm1review.pdf).  We also looked at this example:

1. Find the general solution of the differential equation $y' + 3y = t + 1$ using the guess & check method. Hint: A good guess for the particular solution is that $y$ is a linear function, so $y(t) = A t + B$ for some constants $A$ and $B$. 

### Fri, Oct 3

Today we talked about **homogeneous linear systems** of differential equations.  These can be expressed using a matrix.  For example, if $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$, then the system of differential equations
$$\dfrac{dx_1}{dt} = a x_1 + b x_2 $$
$$\dfrac{dx_2}{dt} = c x_1 + d x_2 $$
can be re-written as 
$$\dfrac{d \mathbf{x}}{dt} = A \mathbf{x} \text{ where } A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}.$$
It turns out that the eigenvectors and eigenvalues of $A$ tell you a lot about the solutions of the system.  We did these exercises in class.

1. Find the characteristic polynomial and eigenvalues of the matrix $A = \begin{bmatrix} 3 & 5 \\ 2 & 6 \end{bmatrix}.$

2. Show that $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$ is an eigenvector for $A$.  What is its eigenvalue?

3. Find an eigenvector for $A$ corresponding to the eigenvalue $\lambda = 1$ by finding the null space of $A - \lambda I$. 

After those examples, we did a workshop.

* **Workshop**: [Linear Algebra Review](LinearAlgebraReview.pdf)

We also talked about how to calculate the eigenvectors of a matrix using a computer.  In Python, the `sympy` library lets you calculate the eigenvectors of a matrix exactly when possible. You can also do this in Octave if you load the `symbolic` package. 

<figure>
```python
from sympy import *

A = Matrix([[3,5],[2,6]])
'''
The .eigenvects() method returns a list of tuples containing: 
1. an eigenvalue, 
2. its multiplicity (how many times it is a root), and
3. a list of corresponding eigenvectors. 
'''
pretty_print(A.eigenvects())
```
<figcaption style="text-align:center">**Figure:** Finding exact eigenpairs. (<a href="https://sagecell.sagemath.org/?z=eJxdzbEKwjAUheE9kHc44NKCOCi6iEOhjyBdSodrco3BNFeSVPDtjR0dzwc_5_V0CEIW-TPfJHijVYfLbzXjAccz9jhNrVZabXB9MIyEZY4ZcscASoxSkb3j-GZTJGVQtCtaT04iBXAsyfOa9H8JhYXzTqtx2KKf6m_lpmu_tD0vSg==&lang=octave&interacts=eJyLjgUAARUAuQ==">Octave</a>, <a href="https://sagecell.sagemath.org/?z=eJxVj7FqwzAURXeB_uFutosQNKEdChnyAd26GVOErcQPLD0hPSfV31elpbTrHc4595I5oNSQKigkzoIHrbQ644RXJ5k--nE8mqfJjAfzPE2DVl3XafW2elhPVx9vfpbSDwheVl6Qvew5FjhsVAR8gexp8wUzR3EUKV5foNWjhYv4Brht96ZtBwuSgrBvQmmjmaSiX_mO4GKFUGgUEtAXPDPLYBpj0epo_9hmztmXxHFpJvwWci4WP-2pNUp9T5mi9Od_L4ZPzwNYMg==&lang=sage&interacts=eJyLjgUAARUAuQ==">Python</a>)</figcaption>
</figure>


- - - 

### Week 7 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 6  |  [3.2][3.2] | Planar Systems
Wed, Oct 8  |  [3.2][3.2] | Planar Systems - con'd
Fri, Oct 10 |  [3.3][3.3] | Phase Plane Analysis of Linear Systems             

### Mon, Oct 6

Today we talked about how to solve a homogeneous linear system $\dfrac{dx}{dt} = Ax$ using the eigenvectors and eigenvalues of $A$ when the eigenvalues are all real with no repeats.  We did the following examples:

1. Show that $x(t) = e^{8t} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ is a solution to the linear system $\dfrac{dx}{dt} = \begin{bmatrix} 3 & 5 \\ 2 & 6 \end{bmatrix} x$. 

<div class="Theorem"> 
**Solutions of Homogeneous Linear Systems.**

**Fact.** If $\mathbf{v}$ is an eigenvector of $A$ with eigenvalue $\lambda$, then $\mathbf{x}(t) = e^{\lambda t} \mathbf{v}$ is a **straight-line solution** for the linear system $\mathbf{x}' = A\mathbf{x}$. 

**Fact 2.** The general solution of a planar system $\mathbf{x}' = A \mathbf{x}$ with distinct real eigenvalues $\lambda_1, \lambda_2$ and corresponding eigenvectors $\mathbf{v}_1, \mathbf{v}_2$ is
$$C_1 e^{\lambda_1 t} \mathbf{v}_1 + C_2 e^{\lambda_2 t} \mathbf{v}_2.$$
</div>

We used these facts to find the general solutions for the following systems. 

2. $\dfrac{dx}{dt} = \begin{bmatrix} 3 & 5 \\ 2 & 6 \end{bmatrix} x$. 

3. $\dfrac{dx}{dt} = \begin{bmatrix} 1 & 2 \\ 4 & 3 \end{bmatrix} x$. (<https://youtu.be/DWzq_jMPRgc>)

We also talked about how to graph the solutions.  

<figure>
<img src="straightlineSolutions.png" width=600></img>
<figcaption style="text-align:center">**Figure:** Straight-line solutions for $\dfrac{dx}{dt} = \begin{bmatrix} 3 & 5 \\ 2 & 6 \end{bmatrix} x$. (<a href="https://sagecell.sagemath.org/?z=eJx1UstugzAQvCPxDyt6gcRJgIqqqpRbH5fceoxycIIDlmzs2Ibiv68dnLRqUoTk2dnd2dXYRyU4dD2XFiiXQhmYxVFAHBvJhGF0v5TWI8AaJDNxBOGLowf4tNoQHkdHWAPDfF9jGBHYF3hc5rMR5lC508ZR8zdfhvzTlPdar1SRg6Gig3dKWB1H6Yhs5ho50W2jaJ0y2mmJDyRdVKhCZZ6hGyaLI7fk8tTTgSgvgI5nmZU-KZNOeDYr3eTmF86XeZ4XGWru1c7vVR4EE2qd7FlPkjBzZHhPWJqMF8IGwnri7BYx8KGwbGFDOTX6Uka53x-qq9BEVKHtjTakG7AbpVcTdj4JpeEoFJiWXG9hcrhAwerSeeeC5zga3DH4cOvnlDsEW8cUu0l_WuksZBSmTWsWG9q5SLDe34fb0_j7u3pd5Mj9ZVjXP47UPR0Yim3upAMsdheTFKkT5NuJNpaRdVJj3Trupr_86S9_9cteSUb-k5hEdCu-0uwbOTbRdQ==&lang=python&interacts=eJyLjgUAARUAuQ==">Python</a>)
</figcaption>
</figure>

We finished with the following question:

4. The zero vector is always an equilibrium solution of $x' = Ax$.  Under what conditions will there be other equilibrium solutions?  


### Wed, Oct 8

Last time we talked about how to find general solutions for linear systems.  Today we talked about how to find specific solutions that satisfy an initial condition. Before that, we answered this question:

1. Under what circumstances does $x' = A x$ have more than one equilibrium solution? 

    <details>
    Any time that zero is an eigenvalue of $A$ (i.e., the null space of $A$ is non-trivial), all of the eigenvectors corresponding to zero (i.e., the vectors in the null space) will be equilibrium points. It helps to know following theorem:
    <div class="Theorem">
    **Invertible Matrix Theorem.** For an n-by-n matrix $A$, the following are equivalent.
    1. $A$ is invertible.
    2. $\det A \ne 0$. 
    3. The columns of $A$ are linearly independent. 
    4. The rows of $A$ are linearly independent.
    5. The null space of $A$ is $\{0\}$.
    6. Zero is not an eigenvalue of $A$.
    </div>
    </details>

After that, we talked about the classification of equilibria for linear systems.  

<div class="Theorem"> 
**Types of Equilibria for Planar Systems with Real Eigenvalues.**

1. If both eigenvalues are positive, then the origin is a **source** (unstable). 
2. If both eigenvalues are negative, then the origin is a **sink** (stable). 
3. If one eigenvalue is positive and the other is negative, the origin is a **saddle** equilibrium.
</div>

Then we solved the following initial value problems. 

2. Find the solution to $\dfrac{dx}{dt} = \begin{bmatrix} 3 & 5 \\ 2 & 6 \end{bmatrix} x$ that satisfies $x(0) = \begin{bmatrix} 7 \\ 0 \end{bmatrix}.$


2. Find the solution to $\dfrac{dx}{dt} = \begin{bmatrix} 1 & 2 \\ 4 & 3 \end{bmatrix} x$ that satisfies $x(0) = \begin{bmatrix} 5 \\ 4 \end{bmatrix}.$ 

We used row reduction to solve these initial value problems. Here's a video with a similar exercise (<https://youtu.be/Mnz-S-RvpDw>) if you want a different take. Octave makes this kind of matrix computation very easy.  

```octave
pkg load symbolic
A = sym([3 5; 2 6])

# The columns of V are the eigenvectors and the diagonal entries of D are the eigenvalues.
[V, D] = eig(A)

# The backslash operator A \ b solves the matrix equation Ax = b. 
V \ [7;0]
```



<!-- 
4. Find the solution to $\dfrac{dx}{dt} = \begin{bmatrix} 2 & -3 \\ -3 & 2 \end{bmatrix} x$ that satisfies $x(0) = \begin{bmatrix} 4 \\ 2 \end{bmatrix}.$ 

-->

### Fri, Oct 10

Today we talked about systems with complex eigenvalues.  We started by looking at three different [direction fields](https://sagecell.sagemath.org/?z=eJx1UjtvgzAQ3pH4Dye6GGIokGaJlIG26tZM3aIoMsEQSwYc46T439c8klpK6-n8vXy6cynbGppLLTSwWrRSQeA65QB22gI_iZKsxyAkVUofhGSNcp2ZrIkSvFWc5ZHQQwWkA8GNwHUKWkLBJD0q1jaHklFeoMxfuw6YU8IGOKnzgoDJ1msoeUsUynYxhnjvQwA9LGwwGUE9uav_3Mlf7sRyT_4neL81Bh9DYxM8ZJnkmnanSrICcdZ0ghwpCld4hdPYxw-IPzm3xtadpUIl6rH2gyA171e3ehaZuUTnC7tSORB4kj6j7SKO4jhOfDw7bOjY8lZuvJxfqGfF9JzklCOvt0E9g9oGu1P7jea762Smz2mhaDdMNd1j2IXLodgb0atNhymG5cibAYaT4M0WGH418i933mz9YeOuM_4Z5H2dKFBW0UYQJjsgkq69OzsWvz8MZdEovZqwDvn-D9EEwb8=&lang=python&interacts=eJyLjgUAARUAuQ==){target="_blank"} for the following three matrices:

$$A= \begin{bmatrix} 0 & 2 \\ -3 & 2 \end{bmatrix} ~~~~~~ B = \begin{bmatrix} -2 & 3 \\ -1 & -2 \end{bmatrix} ~~~~~~ C = \begin{bmatrix} 2 & 5 \\ -4 & -2 \end{bmatrix}$$

<figure>
<img src="SpiralSinksSources.png" width = 600></img>
<figcaption style="text-align: center">**Figure:** Spiral sources, spiral sinks, and centers.</figcaption>
</figure>


<div class="Theorem"> 
**Types of Equilibria for Planar Systems with Complex Eigenvalues.**

Suppose $x' = Ax$ is a planar system with complex eigenvalues $\alpha \pm \beta i$.

1. If $\alpha$ is positive, then the origin is a **spiral source** (unstable). 
1. If $\alpha$ is negative, then the origin is a **spiral sink** (stable). 
1. If $\alpha$ is zero, then the origin is a **center** equilibrium and the solutions are periodic.
</div>

We talked about why this is true using Euler's formula
$$e^{\alpha t \pm i \beta t} = e^{\alpha t} ( \cos (\beta t) \pm i \sin (\beta t) ).$$

It is still true that the general solution is 
$$x(t) = C_1 e^{\lambda_1 t} v_1 + C_2 e^{\lambda_2 t} v_2$$
but the coefficients are typically complex numbers and we only want real solutions. Next time we'll discuss a better way to find the real-valued solutions.

- - - 

### Week 8 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 13 |             | Fall break - no class
Wed, Oct 15 |  [3.4][3.4] | Complex Eigenvalues                              
Fri, Oct 17 |  [3.5][3.5] | Repeated Eigenvalues                        

### Wed, Oct 15

Last time we talked about planar systems with complex eigenvalues.  We haven't seen how to find nice solutions for those systems yet.  Here is the key idea we need:

<div class="Theorem">
**Solutions for Systems with Complex Eigenvalues.**

**Fact.** If $x(t)$ is a complex solution to a real linear system $x' = Ax$, then both the real and imaginary parts of $x(t)$ are real solutions for the system.  

**Fact 2.** If $x(t)$ is a complex solution of a planar system $x' = Ax$ where the real-part $x_{\text{real}}(t)$ and the imaginary-part $x_\text{imag}(t)$ are linearly independent when $t=0$, then the general solution is 
$$C_1 x_\text{real}(t) + C_2 x_\text{imag}(t).$$
</div>

Here's how to use these facts to find the general real-valued solution:

* **Step 1.** Find an eigenvector $v$ and its corresponding eigenvalue $\lambda = \alpha + i \beta$. 
Then 
$$x(t) = e^{\lambda t} v$$
is one complex solution for the system.  

* **Step 2.** Use Euler's formula to convert 
$$e^{\lambda t} =  e^{\alpha t} (\cos (\beta t) + i \sin (\beta t)).$$ 

* **Step 3.** Expand $x(t)$ to find the real and imaginary parts. 

We used this approach to find the general (real) solutions for the following planar systems. 

1. $\dfrac{dx}{dt} = \begin{bmatrix} -2 & 3 \\ -1 & -2 \end{bmatrix} x$

2. Suppose a planar system $x' = Ax$ has an eigenvector $\begin{bmatrix} 1 \\ 4 - 3i \end{bmatrix}$ with corresponding eigenvalue $1 - 4i$.  What is the general solution for the system?  

3. Find a solution for the previous example with initial condition $x(0) = \begin{bmatrix} 2 \\ -6 \end{bmatrix}$. 

4. $\dfrac{dx}{dt} = \begin{bmatrix} 1 & -1 \\ 4 & 1 \end{bmatrix} x$ (<https://youtu.be/j-qvdT8nSnw>)

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
[C1]: <https://mathbooks.unl.edu/DifferentialEquations/firstlook08.html>
[C2]: <https://mathbooks.unl.edu/DifferentialEquations/secondorder01.html>




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
