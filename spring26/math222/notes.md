---
title: Statistical Methods Notes
css: https://bclins.github.io/mockup.css
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

\newcommand{\on}{\operatorname}

## Math 222 - Spring 2026

<!--
<ul class="nav">
  <li>[Class Notes](notes.html)</li>
  <li>[Schedule & Syllabus](index.html)</li>
  <li>[Software & Tables](http://people.hsc.edu/faculty-staff/blins/StatsTools/)</li>
</ul>
-->


<center>
Jump to: [Math 222 homepage](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>
 
### Week 1 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Jan 12 |  | Working with R and Rstudio
Wed, Jan 14 | [1.3][1.3]     | Sampling principles and strategies
Fri, Jan 16 | [1.4][1.4]     | Experiments

### Mon, Jan 12

Today we went over the course syllabus and talked about making R-markdown files in Rstudio. We started the following lab in class, I recommend finishing the second half on your own. I also recommend [installing Rstudio](https://posit.co/download/rstudio-desktop/) on your own laptop (it's free).  

* **Lab:** [Working with R and Rstudio](https://htmlpreview.github.io/?https://github.com/andrewpbray/oiLabs-base-R/blob/master/intro_to_r/intro_to_r.html)
              

### Wed, Jan 14

Today we reviewed **populations** and **samples**.  We started with a famous example of a bad sample.

* **Slides:** [Literary Digest election poll 1936](https://people.hsc.edu/faculty-staff/blins/StatsExamples/samplingPresentation.pdf)

Then we reviewed population **parameters**, sample **statistics**, and **sampling frames**.  The difference between a sample statistic and a population parameter is called the **sample error**.  
There are two sources of sample error: 

1. **Bias.** Can be caused by a non-representative sample (**sample bias**) or by measurement errors, non-response, or biased questions (**non-sample bias**). The only way to avoid sample bias is a **simple random sample (SRS)** from the whole population.

2. **Random error.** This is non-systematic error.  It tends to get smaller with larger samples. 

To summarize:
$$\text{Statistics} = \text{Parameters} + \underbrace{\text{Bias } + \text{ Random error}}_\text{Sample error}.$$

We finished with this workshop. 

* **Workshop:** [Sampling](BasicSampling.pdf)

### Fri, Jan 16

If you find an association between an **explanatory** variable and a **response** variable in an **observational study**, then you can't say for sure that the explanatory variable is the cause. We say that **correlation is not causation** because there might be **lurking** variables that are **confounders**, that is, they are associated with both the explanatory and response variables and so you can tell what is the true cause.  

It turns out that **randomized experiments** can prove cause and effect because **random assignment** to treatment groups controls all **lurking variables**.  We also talked about **blocking** and **double-blind** experiments.  

* **Example:** [1954 polio vaccine trials](https://people.hsc.edu/faculty-staff/blins/StatsExamples/polioTrials.html)

* **Workshop:** [Experiments](Experiments.pdf)

We finished by simulating the results of the polio vaccine trials to see if they might just be a random fluke.  We wrote this R code in class:

```r
results = c()
trials <- 1000
for (x in 1:trials) {
  simulated.result <- sample(c(0,1), size = 244, replace = TRUE)
  percent <- sum(simulated.result) / 244
  results <- c(results, percent)
}
hist(results)
sum(results < 0.336) / trials
```


- - -

### Week 2 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Jan 19 |                | Martin Luther King day - no class
Wed, Jan 21 | [2.1][2.1]     | Examining numerical data
Fri, Jan 23 | [3.2][3.2]     | Conditional probability

### Wed, Jan 21

Today we did a lab about using R to visualize data.

* **Lab:** High Bridge half marathon ([Rmd](HighBridge.txt), [html](HighBridge.html))

You should be able to open this file in your browser, then hit CTRL-A and CTRL-C to select it and copy it so that you can paste it into Rstudio as an R-markdown document. 

We had a little trouble with R-markdown on the lab computers.  <!--While that is getting fixed, here is a [Jupyter notebook version](HighBridge.ipynb) of today's lab that you should be able to open with GoogleColab. -->

### Fri, Jan 23

Last time we talked about how to visualize data with R.  Here are two quick summaries of how to make plots in R:

* **Example**: [Basic plots with R](BasicPlots.html)
* **Example**: [Facier plots with ggplot2](GGplots.html)

After that, we started talking about probability.  We review some of the basic rules.  

<div class="Theorem">
#### Probability Rules

1. **Addition Rule** 
$$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B).$$
2. **Multiplication Rule** 
$$P(A \text{ and } B) = P(A) \cdot P(B \, | \, A).$$
</div>

The notation $P(B \, |\, A)$ means "the probability of B given that A happened".  Two events $A$ and $B$ are **independent** if the probability of $A$ does not depend on whether or not $B$ happens.  We did the following examples.  

1. If you shuffle a deck of 52 playing cards and then draw two, what is the probability that the second card is an ace if the first card is?  

We also talked about **tree diagrams** (see [subsection 3.2.7 from the book](https://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.3.2.7)) and how to use them to compute probabilities. 

2. Based on a study of women in the United States and Germany, there is an 0.8% chance that a woman in her forties has breast cancer.  Mammograms are 90% accurate at detecting breast cancer if someone has it.  They are also 93% accurate at not detecting cancer in people who don't have it.  If a woman in her forties tests positive for cancer on a mammogram screening, what is the probability that she actually has breast cancer? 

3. 5% of men are color blind, but only 0.25% of women are.  Find $P( \text{male} \, | \, \text{color-blind})$.  

- - - 

### Week 3 Notes

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Jan 26 |            | Class canceled (snow) 
Wed, Jan 28 | [3.4][3.4] | Random variables
Fri, Jan 30 | [4.1][4.1] | Normal distribution

### Wed, Jan 28

Class was canceled today because I had a doctor's appointment.  But I recommended that everyone watch the following video and then complete a workshop about the R functions `pnorm`, `qnorm`, and `rnorm`. 

* **Video:** <https://youtu.be/qLBmYfAVUdg>
* **Workshop:** [Normal distribution calculations with R](NormalCalculations.pdf)


### Fri, Jan 30

Today we talked about **random variables** and **probability distributions**. We talked about some example probability distributions:

* Flip a coin until you get a tail.  Let $X$ represent the number of flips needed. (**geometric distribution**)

* About 1 meteorite bigger than 1000 kg hits the Earth every year.  The time until the next meteorite hits the Earth has probability density function $f(t) = 10 e^{-t}$. (**exponential distribution**) 

We talked about the difference between **continuous** and **discrete** probability distributions.  Then we introduced **expected value**.  

<div class="Theorem">
#### Definition (Expected Value).

If $X$ is a discrete random variable, then the expected value of $X$ is
$$E(X) = \sum_{k} k P(X = k).$$
If $X$ is a continuous random variable with probability density function $f(x)$, then the expected value of $X$ is
$$E(X) = \int_{-\infty}^{\infty} x f(x) \, dx.$$
</div>

We did the following example.

1. In roulette, if you bet $1 on black, there is an 18/38 probability that you win $2, and a 20/38 chance that you lose (and win nothing).  What is the expected amount of money you will win? 

We finished by talking about what we mean when we say something is "expected".

<div class="Theorem">
#### Law of Large Numbers

If you repeat a random experiment many times, then the average outcome tends to get close to the expected value.
</div>

<!--
3 students were late and 3 were absent, so I did not get far today. 

We did the following examples.  

1. Find the expected length of time until the next big meteorite hits. 


3. Suppose that 1 out of 10 boxes of cereal have a prize.  What is the expected number of boxes you would need to buy before you get a prize?  

After we talked about expected value, we introduced the **variance**. 

<div class="Theorem">
#### Definition (Variance and Standard Deviation).

For a random variable $X$ with expected value $\mu$, the variance of $X$ is 
$$\on{Var}(X) = E((X-\mu)^2).$$
The **standard deviation** of $X$ is the square root of the variance. 
</div>

4. Find the variance when you roll a 6-sided die. 

<div class="Theorem">
#### Properties of Expected Value and Variance

Expected value is **linear** which means that for any two random variables $X$ and $Y$ and any constant $c$, these two properties hold:

1. **Additivity.** $E(X + Y) = E(X) + E(Y)$
2. **Constant multiples.** $E(cX) = c E(X)$

Variance is not linear.  Instead:

1. $\on{Var}(X + Y) = \on{Var}(X) + \on{Var}(Y)$ if $X$ and $Y$ are independent.
2. $\on{Var}(cX) = |c|^2 \on{Var}(X)$
</div>


5. A single six-sided die has expected value $\mu = 3.5$ and variance $\sigma^2 = 2.91667$.  What is the mean and variance if you roll two dice and add them?  
-->

- - -

### Week 4 Notes  

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Feb 2 | [4.3][4.3] | Binomial distribution
Wed, Feb 4 | [5.1][5.1] | Point estimates and error
Fri, Feb 6 | [5.2][5.2] | Confidence intervals for a proportion
 

- - - 

### Week 5 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 9  | [5.3][5.3] | Hypothesis tests for a proportion
Wed, Feb 11 |            | Review
Fri, Feb 13 |            | **Midterm 1**


- - - 

### Week 6 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 16 | [6.2][6.2] | Difference in two proportions
Wed, Feb 18 | [6.3][6.3] | Chi-squared goodness of fit test
Fri, Feb 20 | [6.4][6.4] | Chi-squared test for association


- - - 


### Week 7 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 23 | [7.1][7.1] | One-sample means with t-distribution
Wed, Feb 25 | [7.2][7.2] | Paired data
Fri, Feb 27 | [7.3][7.3] | Difference of two means


- - - 

### Week 8 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 2 | [7.4][7.4] | Power calculations
Wed, Mar 4 | [7.5][7.5] | Comparing many means with ANOVA
Fri, Mar 6 | [7.5][7.5] | ANOVA - con'd


- - - 

### Week 9 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 16 | [7.5][7.5] | ANOVA - con'd
Wed, Mar 18 |            | Review  
Fri, Mar 20 |            | **Midterm 2**


- - - 

### Week 10 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 23 | [8.2][8.2] | Least squares regression
Wed, Mar 25 | [9.1][9.1] | Introduction to multiple regression
Fri, Mar 27 | [9.2][9.2] | Model selection


- - - 

### Week 11 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 30 | [9.3][9.3] | Checking model conditions
Wed, Apr 1  | [9.3][9.3] | Checking model conditions - con'd
Fri, Apr 3  | [9.5][9.5] | Introduction to logistic regression


- - - 

### Week 12 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 6  |  [9.5][9.5] | Logistic regression - con'd     
Wed, Apr 8  |       | Hypothesis testing with randomization            
Fri, Apr 10 |       | Confidence intervals with bootstrapping


- - - 

### Week 13 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 13 |            | Bootstrapping continued
Wed, Apr 15 |            | Review
Fri, Apr 17 |            | **Midterm 3**


- - - 

### Week 14 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 20 |    | Introduction to Bayesian methods
Wed, Apr 22 |    | Credible intervals for proportions
Fri, Apr 24 |    | Bayesian inference 
Mon, Apr 27 |  | Last day, recap & review


- - - 



[1.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.1.2>
[1.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.1.3>
[1.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.1.4>
[2.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.2.1>
[2.1.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.2.1.1>
[2.1.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.2.1.3>
[2.1.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.2.1.4>
[2.1.5]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.2.1.5>
[2.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.2.2>
[2.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.2.3>
[3.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.3.1>
[3.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.3.2>
[3.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.3.4>
[3.5]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.3.5>
[4.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.4.1>
[4.1.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.4.1.4>
[4.1.5]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.4.1.5>
[4.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.4.3>
[5.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.5.1>
[5.1.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.5.1.3>
[5.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.5.2>
[5.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.5.3>
[5.3.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.5.3.3>
[6.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.6.1>
[6.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.6.2>
[6.2.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.6.2.3>
[6.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.6.3>
[6.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.6.4>
[7.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.7.1>
[7.1.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.7.1.4>
[7.1.5]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.7.1.5>
[7.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.7.2>
[7.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.7.3>
[7.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.7.4>
[7.5]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.7.5>
[8.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.8.1>
[8.1.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.8.1.4>
[8.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.8.2>
[8.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.8.4>
[9.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.9.1>
[9.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.9.2>
[9.3]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.9.3>
[9.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.9.4>
[9.5]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.9.5>
[Wk01]: <>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
