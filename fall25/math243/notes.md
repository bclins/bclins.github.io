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

- -  -


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
