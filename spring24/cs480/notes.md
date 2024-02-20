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
\newcommand{\on}{\operatorname}
\newcommand{\R}{\mathbb{R}}

## Computer Science 480 - Spring 2024

<center>
Jump to: [Syllabus](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>

### Week 1 Notes

Day    | Topic
:---:|:---------
Wed, Jan 17 | Vectors and matrices
Fri, Jan 19 | Markov chains

### Wed, Jan 17

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

<center>
<img src="Oz.png"></img> 
</center>

### Fri, Jan 19

Today we looked in more detail at the Land of Oz Markov chain from last time. We started by defining the following terminology.

A **Markov chain** is a model with stages where the next state is randomly determined based only on the current state. A Markov with $n$ states can be described by a **transition matrix** $Q$ which has entries $Q_{ij}$ equal to the probability that the next state will be $j$ if the current state is $i$.  In the Land of Oz example, if the states Nice, Rain, Snow correspond to the row/column numbers 0, 1, 2, respectively, then the transition matrix is 
$$Q = \begin{pmatrix} 0 & 0.5 & 0.5 \\ 0.25 & 0.5 & 0.25 \\ 0.25 & 0.25 & 0.5 \end{pmatrix}$$



A **probability vector** is a vector with nonnegative entries that add up to 1.  You can use probability vectors to model your knowledge about the current state in a Markov chain.  For example, if it were raining today in the Land of Oz, then you could use the probability vector $v = (0, 1, 0)$ to indicated that we are 100\% sure that we are in the middle state (raining). If you multiply $vQ$, then you get the probability row vector representing the probabilities for the states the next day. Here is how to use matrices in the Python using the `numpy` library. 

```python
import numpy as np

Q = np.matrix("0 0.5 0.5; 0.25 0.5 0.25; 0.25 0.25 0.5")
v = np.matrix("0 1 0")
print(v * Q)
```

1. Suppose that today is a nice day.  What is the probability vector that describes how the weather might be the day after tomorrow? 

2. What will the weather be like after 1 week if today is nice?  What about if today is rainy or snowy?  How much difference does the weather today make after 1 week? You can answer this last problem by computing $Q^7$.  

We finished with this additional example which is [problem 5.7.12 in Introduction to Finite Mathematics](https://math.dartmouth.edu/~doyle/docs/finite/fm2/scan/5.pdf#page=64) by Kemeny, Snell, Thompson.  

3. A professor tries not to be late too often.  On days when he is late, he is 90% sure to arrive on time the next day.  When he is on time, there is a 30% chance he will be late the next day.  How often is this professor late in the long run?

<!-- To calculate repeated matrix multiplications, it helps to use the [numpy matrix power function](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html). For example, continuing the code above, we can compute 
```python 
print(np.linalg.matrix_power(Q,7))
```
-->


- - -

### Week 2 Notes
 
Day    | Topic
:---:|:---------
Mon, Jan 22 | Examples of Markov chains
Wed, Jan 24 | Stationary distributions
Fri, Jan 26 | Random text generation

### Mon, Jan 22

Today we did the following workshop about Markov chains. 

* Workshop: [Markov chains](Workshops/MarkovChains.pdf) 

### Wed, Jan 24

Today we talked about some of the features we've seen in Markov chains. Recall that you can think of a Markov chain as a weighted directed graph where the total weight of all the edges leaving a vertex must add up to 1 (the weights correspond to probabilities).  

In all of the examples we've considered so far, we have looked for the final long run probabilities for the states after many transitions.  

**Definition.** A probability vector $w$ is a **stationary distribution** for a Markov chain with transition matrix $Q$ if 
$$wQ = w.$$

In all of the examples we've looked at, 
$$\lim_{k \rightarrow \infty} v Q^k$$ 
exists and is a stationary distribution for any initial probability vector $v$. But this doesn't always happen for Markov chains. 

1. Find a simple Markov chain and an initial probability vector $v$ such that $\lim_{k \rightarrow \infty} v Q^k$ does not converge.  

To better understand the long-run behavior of Markov chains, we need to review strongly connected components of a directed graph (digraph for short).  

**Definition.** A digraph is **strongly connected** if you can find a path from any start vertex $i$ to any other end vertex $j$. A **strongly connected component** of a graph is a set of vertices such that (i) you can travel from any one vertex in the set to any other, and (ii) you cannot returns to the set if you leave it. Strongly connected components are also known as **classes** and they partition the vertices of a directed graph. A class is **final** if there are no edges that leave the class. 

<center>
<img src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/Scc-1.svg" width = 300></img>
</center>
In the digraph above, there is one final class $\{f,g\}$ and two other non-final classes.

<div class="Theorem">
**Theorem (Perron-Frobenius).** A Markov chain always has a stationary distribution. The stationary distribution is unique if and only if the Markov chain has only one final class. 
</div>

We did not prove this theorem, but we did apply it to the following question.

2. Which of the Markov chains that we've considered (the Land of Oz, the Tardy Professor, the Gambler's Ruin problem, and the Coupon Collector's problem) has a unique stationary distribution?  For the one(s) that don't have a unique stationary distribution, describe two different stationary distributions. 

3. Does the Markov chain that doesn't converge from Q1 today have a unique stationary distribution?  How can you tell?  Can you find it? 

Another important is question is to have criteria for when $\lim_{k \rightarrow \infty} vQ^k$ converges. 

**Definition.** A Markov chain with transition matrix $Q$ is **regular** if there is a power $k$ such that $Q^k$ has all positive entries.  

<div class="Theorem">
**Theorem.** A regular Markov chain with transition matrix $Q$ always has a unique stationary distribution $w$ and for any initial probability vector $v$, 
$$\lim_{k \rightarrow \infty} v Q^k = w.$$
</div>

We finished class by talking about how the Google PageRank algorithm uses the stationary distribution of a simple regular Markov chain to rank websites.  The algorithm starts by imagining a random web surfer who clicks on links completely randomly to visit new website.  You can imagine the internet as a giant directed graph and this websurfer can be modeled with an $N$ state Markov chain where $N$ is the number of websites on the internet.  Unfortunately the $N$-by-$N$ transition matrix might not be regular, so the PageRank algorithm creates a new regular Markov chain by using the following algorithm:

* 85% of the time, the random websurfer picks a new website by randomly clicking a link. 
* 15% of the time, the random websurfer picks any one of the $N$ websites on the internet (all equally likely). 

The 85/15 percent split was chosen because the resulting regular Markov chain converges relatively quickly (it still takes days for the computation to update), but it still settles on a stationary distribution where more popular websites are visited more than less popular websites.  


### Fri, Jan 26

Today we wrote a program to randomly generate text based on a source text using a Markov chain.  

* **Workshop**: [Random text generator](Workshops/RandomTextGenerator.pdf)

Here are some [example source texts](sourceTexts.html) you can use.  You can also search online for other good examples if you want. When you are finished, you should have a program that can generate random nonsense like this:

> In the beginning when God created the great sea monsters and every winged bird of every kind on earth that bear fruit with the seed in it." And it was good. And there was morning, the second day. And God saw that it was good. Then God said, "Let there be lights in the dome and separated the waters that were gathered together he called Night. And there was evening and there was morning, the fourth day. And God saw that the light Day, and the waters bring forth living creatures of every kind, and everything that has the breath of life, I have given you every plant yielding seed of every kind, and trees of every kind bearing fruit with the seed in it. 



- - -

### Week 3 Notes
 
Day    | Topic
:---:|:---------
Mon, Jan 29 | Least squares regression 
Wed, Jan 31 | Least squares regression - con'd
Fri, Feb 2 | Logistic regression

### Mon, Jan 29

Today we started talking about linear regression.  We started with the simplest case where you want to predict a response variable ($y$) using a single explanatory variable ($x$).  Based on the observed $x$ and $y$ values, you want to find the best fit trend-line.  We judge how good a trend-line fits the data by calculating the sum of squared deviations between the predicted $y$-values (denoted $\hat{y}_i$) and the actual $y$-values ($y_i$) at each $x_i$.  
$$\text{Sum of squared error} = \sum_{i = 1}^n (\hat{y}_i - y_i)^2.$$
We'll see later that minimizing the sum of squared error has some nice properties.  We looked at the following example. <!--_-->  

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("http://people.hsc.edu/faculty-staff/blins/classes/spring18/math222/data/bac.csv")
print(df)
x = np.array(df.Beers)
y = np.array(df.BAC)
plt.xlabel("Beers")
plt.ylabel("BAC")
plt.plot(x,y,"o")
```

<center>
<img src="beersBAC.png" width = 400></img>
</center>

The least squares regression line will have a formula 
$$\hat{y} = b_0 + b_1 x$$
where $b_0$ is the $y$-intercept and $b_1$ is the slope.  You can find these two numbers by using the **normal equation**

<!--
1. [Beers and BAC](http://people.hsc.edu/faculty-staff/blins/classes/spring18/math222/data/bac.csv)
2. [Marriage ages](http://people.hsc.edu/faculty-staff/blins/StatsExamples/marriageAges.xls) 
3. [Midterm exam grades](http://people.hsc.edu/faculty-staff/blins/StatsExamples/MidtermRegression.xlsx)
-->

$$X^T X \beta = X^T y$$
where $\beta = \begin{pmatrix} b_0 \\ b_1 \end{pmatrix}$ is a column vector with the intercept and slope that we want to find, $y = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\y_n\end{pmatrix}$ is the column vector with the $y$-values from the data, and 
$$X = \begin{pmatrix} 
1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_n 
\end{pmatrix}$$
is an $n$-by-2 matrix will all 1's in its first column and the $x$-values from the data in its second column. The notation $X^T$ means that **transpose** of the matrix $X$, which is the matrix you get if you switch all columns of $X$ to rows:
$$X^T = \begin{pmatrix} 
1 & 1 & \ldots & 1 \\
x_1 & x_2 & \ldots & x_n  
\end{pmatrix}.$$
One way to solve the normal equations is to multiply both sides by the inverse of the matrix $(X^T X)$:  
$$\beta = (X^T X)^{-1} X^T y.$$
The **inverse** of a matrix $M$ is denoted $M^{-1}$.  You can only find the inverse of square matrices (same number of rows & columns). Even then, not every square matrix has an inverse, but this formula almost always works for least squares regression.  I only gave a vague explanation in class of why the normal equations work.  But we did use Python to compute the normal equations for the example above: 

```python
X = np.matrix([[1.0 for i in range(len(x))],list(x)]).T
beta = (X.T*X).I*X.T * np.matrix(y).T
print(beta) # [[-0.0127006 ], [ 0.01796376]]
```

Notice that if `A` is a numpy matrix, then `A.T` is its transpose, and `A.I` is its inverse (if one exists). 
The entries of $\beta$ are the intercept followed by the slope, so the least squares regression line for predicting blood alcohol content from the number of beers someone drinks is:
$$\hat{y} = -0.01270 + 0.01796 x.$$

In addition, we can tell from the slope that each extra beer someone drinks tends to increase their BAC by 0.018 points.

### Wed, Jan 31

Today we continued looking at least squares regression.  We covered these additional facts about the least squares regression line 
$$\hat{y} = b_0 + b_1 x$$
when there is only one explanatory variable ($x$). 

* The slope is $b_1 = R \dfrac{s_y}{s_x}$ and
* The line always passes through the point $(\bar{x}, \bar{y})$, which lets you find the $y$-intercept.

Here $\bar{x}$ and $\bar{y}$ denote the average $x$ and $y$-values respectively, $s_x$ and $s_y$ are the standard deviations of the $x$ and $y$-values, and $R$ is the correlation coefficient.  We defined these quantities using the norm (length) and dot products.

$$s_x = \frac{\|x - \bar{x}\mathbf{1} \| }{\sqrt{n-1}},  ~~~~~ s_y = \frac{ \|y - \bar{y}\mathbf{1} \| }{\sqrt{n-1}}, ~~~~~ R = \frac{x - \bar{x}\mathbf{1}}{\|x - \bar{x}\mathbf{1} \|} \cdot \frac{y - \bar{y}\mathbf{1}}{\|y - \bar{y}\mathbf{1} \|}$$

We used a spreadsheet to investigate these examples. 

1. [Marriage ages](http://people.hsc.edu/faculty-staff/blins/StatsExamples/marriageAges.xls) 
2. [Midterm exam grades](http://people.hsc.edu/faculty-staff/blins/StatsExamples/MidtermRegression.xlsx)
3. [Lightning fatalities](http://people.hsc.edu/faculty-staff/blins/statsexamples/Lightning.xlsx)

In the USA, there has been a striking decline in the number of people killed by lightning every year. The trend is strong, but it isn't really a linear trend.  So we used the normal equations to find a best fit quadratic polynomial
$$\hat{y} = b_0 + b_1 x + b_2 x^2.$$
Here is how to do this with numpy. 

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_excel("http://people.hsc.edu/faculty-staff/blins/StatsExamples/Lightning.xlsx")
x = np.array(df.year)
y = np.array(df.deaths)

# You can use a list comprehension to enter the matrix X.
X = np.matrix([[xi**k for k in range(3)] for xi in list(x)])
beta = (X.T*X).I*X.T * np.matrix(y).T
print(beta) # [[5.61778330e+04], [-5.42074197e+01], [ 1.30717749e-02]]

years = np.array(range(1960,2021))
plt.xlabel("Year")
plt.ylabel("Fatalities")
plt.plot(x,y,"o") + plt.plot(years,56177.8 - 54.207*years + 0.01307*years**2,linestyle="-")
```

<center>
<img src = "lightning.png" width=400></img>
</center>

<!--
An even better approximation might look for a power law relationship $\hat{y} = C x^\alpha$.  We'll consider that next time. 
-->

### Fri, Feb 2

Today we did this workshop. 

* **Workshop:** [Least squares regression](Workshops/Regression.pdf)

Here is the Python code to download the two datasets:



```python
import numpy as np
import pandas as pd

df = pd.read_excel("https://people.hsc.edu/faculty-staff/blins/classes/spring23/math121/halfmarathon.xlsx")
genders = list(df.Gender)
ages = list(df.Age)
minutes = list(df.Minutes)

df2 = pd.read_excel("http://people.hsc.edu/faculty-staff/blins/StatsExamples/Lightning.xlsx")
years = np.array(df2.year)
deaths = np.array(df2.deaths)
logDeaths = np.log(deaths) # notice that functions work elementwise on np.arrays.

```


- - -

### Week 4 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 5 | Linear classifiers
Wed, Feb 7 | Loss functions & gradient descent
Fri, Feb 9 | Stochastic gradient descent

### Mon, Feb 5

Last time we saw came up with a model to predict a runner's race time based on their age and gender.  Our model had the form
$$\hat{y} = b_0 + b_1 x_1 + b_2 x_2$$
where $\hat{y}$ is the predicted race time in minutes, $x_1$ is the runner's age, and $x_2$ is an indicator variable which is 0 for men and 1 for women.  An **indicator variable** is a numerical variable that is 1 if a Boolean condition is true and 0 otherwise.  We can re-write our model using a dot product as:
$$\hat{y} = [b_0, b_1, b_2] \cdot [1, x_1, x_2].$$ <!-- The weight vector was [84.24795527  0.97029783 21.00086375] -->
In this formula, the vector $[b_0, b_1, b_2]$ is called the **weight vector** and $[1, x_1, x_2]$ is called the **feature vector**. Each runner has a different feature vector, but you use the same weight vector for every runner to make a prediction about their race time.   

If we use age and race time to predict gender using least squares, then we get this formula:
$$\text{predicted gender} = 0.0694 - 0.0112 \, \text{age} + 0.00705 \, \text{race_time}.$$
We could use the number $\tfrac{1}{2}$ as a dividing line to separate runners who we would predict are female vs. runners we would predict are male.  This is a simple example of a linear classifier.  A **linear classifier** is a rule that uses a weight vector $w$ and a feature vector $x$ and a threshold $\theta$ to decide how to classify data.  You make a prediction based on whether the dot product $w \cdot x$ is greater than or less than the decision threshold $\theta$.  If we treated men as $-1$ instead of $0$, then we could use the threshold $\theta = 0$, which is a more common choice for linear classification. 

<center>
<img src="runners.png" width = 400></img>
</center>

We were able to draw a picture of the line the separates individuals we would predict are women from individuals we would predict are men in the scatter plot for runners.  If we had more than two variables, then we wouldn't be able to draw a picture. And instead of a dividing line, we would get a dividing hyperplane to separate our predictions. But we could still use the same idea. 

Using least squares regression to find our weight vector probably isn't the best choice since the goal of least squared error isn't really what we want.  What we really want is the smallest zero-one error.  **Zero-one error** is the error you get if you add a one for every prediction that is incorrect and a zero for every correct prediction.  Both least squares error and zero-one error are examples of **loss functions** which measure how accurate our predictions are.  

We finished by outlining where we are going in the next few classes.  We are going to look at how to minimize different loss functions over the space of all possible weight vectors (called the **weight space**).  We talked about how precise formulas for the optimal weight vector don't always exist, but we can use a general technique called **gradient descent** that works for many different loss functions. 


### Wed, Feb 7

We talked about gradient descent today.  For a multivariable function $f: \R^n \rightarrow \R$, the **gradient** of $f$ at a point $\mathbf{x} = (x_1, \ldots, x_n)$ is the vector 
$$\nabla f = \left( \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n} \right).$$
We calculated the gradient for these examples. Here is a video that [explains partial derivatives](https://youtu.be/AXqhWeUEtQU). 

1. $f(x,y) = x^2 + y^2$ (<https://youtu.be/_-02ze7tf08>)

2. $f(x,y) = x^4 + y^4 + (x-1)^2 + y$ 

The important thing to understand about $\nabla f$ is that it always points in the direction of steepest increase. This idea leads inspires **gradient descent** which is a simple algorithm to find the minimum of a multivariable function.  

<div class="Theorem">
**Gradient Descent Algorithm.** To find the minimum of $f:\R^n \rightarrow \R$,

1. Start with an initial guess for the minimum $\mathbf{x}$ and a fixed (small) step size $\eta$. 
2. Find the gradient of $f$ at $\mathbf{x}$, $\nabla f(\mathbf{x})$.
3. Replace $\mathbf{x}$ by $\mathbf{x}- \eta \, \nabla f(\mathbf{x})$. 
4. Repeat steps 2 & 3 until your gradient vector is very close to 0. 
</div>

Here is the code I wrote in class to implement this algorithm for example 2 above. 

```python
import numpy as np

# Step 1 initialize initial guess x and step size eta.
x = np.array([0,0])
eta = 0.1
for i in range(20):
    # step 2 calculate gradient
    gradient = np.array([4*x[0]**3+2*x[0]-2, 4*x[1]**3+1])
    # step 3 use the gradient to update x
    x = x - eta*gradient
    print(x, gradient)
```

You have to be careful when you pick the step size $\eta$ (eta).  If it is too big, the algorithm will not converge. If it is too small, the algorithm will be very slow.  

3. Try the code above with different values of $\eta$. What happens if $\eta = 0.5$?  What about $\eta = 0.01$?

4. What will happen if you use gradient descent on a function like this one which has more than one local min?
$$f(x) = x^4 + y^4 - 3xy$$

5. Find the gradient of the following sum of squared error loss function. Then use gradient descent to find the vector $\mathbf{w}$ with the minimum loss. 
$$L(\mathbf{w}) = (\mathbf{w} \cdot [1, 0] - 1)^2 + (\mathbf{w} \cdot [1,1] - 1)^2 + (\mathbf{w} \cdot [1,2] -4)^2$$

### Fri, Feb 9

Today we did this workshop in class:

* **Workshop:** [Gradient descent](Workshops/GradientDescent.pdf)

As part of the workshop, we introduced the stochastic gradient descent algorithm which tends to be an effective way to get gradient descent to converge more quickly. 


<div class="Theorem">
**Stochastic Gradient Descent Algorithm.** Let $L(\mathbf{w}) = \sum_{i = 1}^n L_i(\mathbf{w})$ be a sum of simpler loss functions $L_i(\mathbf{w})$. To minimize the total loss $L(\mathbf{w})$,

1. Start with an initial guess for the minimum $\mathbf{w}$ and a fixed (small) step size $\eta$. 
2. Randomly choose $i \in \{1, \ldots, n\}$.
3. Find the gradient of $L_i$ at $\mathbf{w}$, $\nabla L_i(\mathbf{w})$.
4. Replace $\mathbf{w}$ by $\mathbf{w}- \eta \, \nabla L_i(\mathbf{w})$. 
5. Repeat steps 2 - 4 until your gradient vectors are very close to 0. 
</div>




- - -

### Week 5 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 12 | Hinge Loss
Wed, Feb 14 | Logistic regression 
Fri, Feb 16 | Nonlinear classification

### Mon, Feb 12

In the workshop last time, we had to calculate the gradient of a function of the form $\mathbf{w} \mapsto (\mathbf{w} \cdot \mathbf{x} - y)^2$.  This is a composition of the one variable function $f(u) = (u - y)^2$ with the dot product $\mathbf{x} \cdot \mathbf{w}$.  In general, we have the following nice lemma which is one special case of the chain rule.

<div class="Theorem"> 
**Lemma.** If $f: \R \rightarrow \R$ is differentiable, and $L(\mathbf{w}) = f(\mathbf{x} \cdot \mathbf{w})$, then 
$$\nabla L(\mathbf{w}) = f'(\mathbf{x} \cdot \mathbf{w}) \mathbf{x}.$$
</div>

Today we looked at linear classification and talked about some of the different loss functions that we could use.  We used the lemma above to help find the gradients for gradient descent. First we introduced the following terminology. 

Suppose that we want to train a linear classifier.  For each individual observed we have a feature vector $X_i$ and a category $y_i$ which is either $+1$ or $-1$.  Our goal is to find the best weight vector $\mathbf{w}$ so for any observed feature vector $X_i$, the sign of $X_i \cdot \mathbf{w}$ does the best possible job of predicting the corresponding value of $y_i$.  We call the number $X_i \cdot \mathbf{w}$ the **score** of the prediction.  If we multiply the score times the correct value of $y_i$, then we will get a positive number if the prediction is correct and a negative number if our prediction is wrong.  We call this number the **margin** and 
$$\text{margin}_i =  y_i \, (X_i \cdot \mathbf{w}).$$ 

The hinge loss function is a function of the margin that is
$$L_\text{hinge} (\mathbf{w}) = \begin{cases}
1 - \text{margin} & \text{ if } \text{margin } < 1 \\
0 & \text{ if } \text{margin } \ge 1 
\end{cases}$$

1. Show that for each pair $X_i$ and $y_i$, the gradient of the hinge loss is 
$$\nabla L_\text{hinge} (\mathbf{w}) = \begin{cases} -y_i X_i & \text{ if } \text{ margin} < 1\\ 0 & \text{ otherwise}. \end{cases}$$

2. Express the zero-one loss function as a function of the margin.  Why won't gradient descent work with zero-one loss?

3. We also looked at the absolute error loss function:
$$L(w) = |\text{margin} - 1|$$ 
and we calculated the gradient of that when $y$ is $+1$ and $-1$.  

With both hinge loss and absolute error loss, the gradient vectors don't get small when we get close to the minimum, so we have to adjust the gradient descent algorithm slightly to use a step size that gets smaller after each step.  


<div class="Theorem">
**Gradient Descent Algorithm (with Variable Step Size).** To find the minimum of $f:\R^n \rightarrow \R$,

1. Start with an initial guess for the minimum $\mathbf{x}$, a (small) step size $\eta$, and $k = 1$. 
2. Find the gradient of $f$ at $\mathbf{x}$, $\nabla f(\mathbf{x})$.
3. Replace $\mathbf{x}$ by $\mathbf{x}- \tfrac{\eta}{\sqrt{k}} \, \nabla f(\mathbf{x})$. 
4. Increment $k$.
5. Repeat steps 2 - 4 until your function $f$ stops getting smaller. 
</div>


<!--
Today we talked about using sum of absolute error instead of sum of squared error to do regression.  Although sum of squares regression is more common, there are some advantages to using sum of absolute error instead. 

1. Absolute error regression isn't affected as much by outliers. 
2. In problems where the data is sparse with lots of variables, absolute error regression is more likely come up with simpler models where some unimportant variables have coefficients equal to zero.  

We can use gradient descent to minimize the total absolute error in our predictions.  

1. What is the gradient of $L_{\mathbf{x},y}(\mathbf{w}) = |\mathbf{x} \cdot \mathbf{w} - y|$ when $\mathbf{x}$ is a feature vector, $\mathbf{w}$ is the weight vector, and $y$ is the correct output? 

-->


### Wed, Feb 14

Today we talked about logistic regression which is one of the most common ways to find a linear classifier.  In a logistic regression model the score $\mathbf{w} \cdot \mathbf{x}$ is interpreted as the log-odds of a success.  

Recall that the probability of any event is a number $p$ between 0 and 1.  Sometimes in probability we talk about the odds of an event happening instead of the probability.  The **odds** of an event is given by the formula 
$$\text{odds} = \frac{p}{1-p}.$$
For example, if an event has probability $p = 2/3$, then the odds are $2$ (we usually say 2 to 1 odds).  You can also easily convert from odds back to probability by computing 
$$p = \frac{\text{odds}}{\text{odds} + 1}.$$
Unlike probabilities, odds can be bigger than 1.  In logistic regression, we are looking for a model of the form
$$\log (\text{odds}) = w_0  + w_1 x_1 + \ldots + w_n x_n = \mathbf{w} \cdot \mathbf{x}.$$
For example, we came up with a very simple logistic regression model to predict whether someone is male or female based on their height:
$$\log(\text{odds}_\text{male}) = 0.5 (\text{height}) - 33,$$
where height is measured in inches.
We based this model on guessing the odds that someone is male or female at a couple different heights, and then guessing a simple linear trend for the log-odd. 

1. Find the log-odds, the odds, and the probability that this model would give for someone who is 67 inches tall to be male. 

2. If we randomly selected 3 people, with heights 64, 69, and 72 inches respectively, what is the probability (according to the model) that the 64 inch tall person is female and the other two are male?  We call this number the **likelihood** of that event. 

We guessed the slope $0.5$ and y-intercept $-33$ in our model.  Those probably aren't the best possible coefficients.  In logistic regression, we want the model that results in the highest likelihood of the actual data happening.  We showed in class that the best coefficients $\mathbf{w}$ happen when we minimize the **logistic loss function** which is the same as the negative logarithm of the likelihood function.

$$L(w) = \sum_{i : y_i \text{ is a success} } -\log (p_i) + \sum_{i : y_i \text{ is a failure}} - \log(1-p_i)$$

where $p_i = \dfrac{e^{\mathbf{w} X_i}}{e^{\mathbf{w} X_i} + 1}$ is the probability of a "success" predicted by the model. 
<!--
We evaluate the model based on the probability that the observed results would happen if the model was true.  For each $y_i$, the predicted probability of $y_i$ being 1 is
$$p_i = \frac{e^{\mathbf{w} \cdot X_i} }{e^{\mathbf{w} \cdot X_i} + 1}$$
and if $y_i$ is $-1$, then the predicted probability for that event is 
$$ 1- p_i = \frac{1 }{e^{\mathbf{w} \cdot X_i} + 1}$$
Instead of multiplying these probabilities together, we add the logarithms to get the log-likelihood function:
$$\operatorname{LLF} = \sum_{i:\, y_i =1} \log( p_i) + \sum_{i: \, y_i = -1} \log (1 - p_i)$$
We can convert this into a loss function by making it negative. Each individual term in the loss function can be expressed as:
$$L_i(\mathbf{w}) = -(1+y_i) \log (p_i) - (1 - y_{i}) \log (1-p_i)$$
The simplest case turns out to be when $y_i = -1$, because then the loss function is 
$$L_i(\mathbf{w}) = \log(1+e^{\mathbf{w} \cdot X_i})$$
which has gradient
$$\nabla L_i(\mathbf{w}) = \frac{e^{\mathbf{w} \cdot X_i}}{1+e^{\mathbf{w} \cdot X_i}} X_i = p_i X_i$$
-->
We also noted that the gradient of the terms in the logistic loss function are
$$\nabla L_i (\mathbf{w}) = \begin{cases} -(1-p_i) X_i & \text{ if } y_i \text{ is a success} \\ p_i X_i & \text{ if } y_i \text{ is a failure}. \end{cases}$$
So you can use (stochastic) gradient descent to find the best coefficients in a logistic regression model.

We looked at this example:

* **Example:** [Predictors of success in calculus](https://people.hsc.edu/faculty-staff/blins/predictors.html)


### Fri, Feb 16

Today we talked about using linear classifiers to do nonlinear classification.  The idea is that you can classify points $\mathbf{x} \in \R^n$ based on a **feature extractor function** $\phi(\mathbf{x})$ instead of on the raw values of $\mathbf{x}$.  We used the example of finding the best circle to separate points inside from points outside.  You can do this by using the feature extractor function 
$$\phi(\mathbf{x}) = (1, x_1, x_2, x_1^2 + x_2^2)$$
and then finding the best parameters $\mathbf{w}$ for the linear classifier
$$\on{sign}(\mathbf{w} \cdot \phi(\mathbf{x})).$$
Even though the classifier is a nonlinear function of the data $\mathbf{x}$ it is still a linear function of the parameters $\mathbf{w}$, so you can still use the same gradient descent techniques we've already discussed. 

We also talked about the dangers of complex models with lots of parameters and complicated feature extractors.  These models tend to **overfit** the data, which means they predict the test data very well, but then fail on real world data.  

We finished by starting this workshop. 

* **Workshop:** [Linear classifiers](Workshops/LinearClassifiers.pdf)



- - - 

### Week 6 Notes
 
Day    | Topic
:---:|:---------
Mon, Feb 19 | Review
Wed, Feb 21 | **Midterm 1**
Fri, Feb 23 | 

### Mon, Feb 19

Went over what you should know going in to the midterm on Wednesday.  Make sure you know all of the terms in **bold** and how to do any of the indicated calculations by hand. 

#### Markov chains
  
* How to represent **Markov chains** with graphs and **transition matrices**.
* How to multiply transition matrices, find powers of matrices. How to interpret **probability vectors** and update them using the transition matrix.
* Know what a **stationary distribution** is for a Markov chain. 
* Know how to find the **classes** of a Markov chain graph. 
* Know the **Perron-Frobenius theorem** and the definition of a **final class**.
* Know the difference between **absorbing** and **transient** states.
* Know what a **regular** Markov chain is. 

#### Regression 

* Be able to use a regression model 
$$\hat{y} = b_0 + b_1 x_1 + \ldots + b_n x_n$$
to make predictions $\hat{y}$ about a variable $y$ based on the values of $\mathbf{x}$.  
* Understand different **loss functions**.  
* Know how to find the **least squares error** $\|\hat{y} - y\|^2$. 
* Be aware of the **normal equations** for finding the least squares error solution of $X \beta = y$. 

#### Linear Classification 

* Understand linear classification models of the form $\hat{y} = \on{sign}(\mathbf{w} \cdot \mathbf{x})$. 
* Be comfortable using a **feature extractor function** $\phi$ to do simple nonlinear classification tasks using a model of the form 
$$\hat{y} = \on{sign}(\mathbf{w} \cdot \phi(\mathbf{x})).$$

#### Gradient Descent

* Know the definition of the **gradient** $\nabla f$ of a function $f$. 
* Be able to calculate gradients of simple (polynomial) functions.
* Be able to calculate the gradient of functions of the form $L(\mathbf{w}) = f(\mathbf{w} \cdot \mathbf{x})$. 
* Understand the **gradient descent algorithm.**
* Understand the hyperparameters $\eta$ (step size) and $n$ (number of iterations) in the gradient descent algorithm. 
* Know the following loss functions: **squared error**, **absolute error**, **hinge loss**, and **zero-one loss**.

#### Logistic Regression

* Be able to interpret models of the form 
$$\log(\text{odds}) = \mathbf{w} \cdot \mathbf{x}.$$
* Be able to convert from log-odds to odds and from odds to probability and vice versa. 


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
