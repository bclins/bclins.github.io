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
\newcommand{\Var}{\operatorname{Var}}

## Math 222 - Spring 2026

<ul class="nav">
  <li>[Examples](examples.html)</li>
  <li>[Index](index.html)</li>
  <li>[Notes](notes.html)</li>
  <li>[Software & Tables](http://people.hsc.edu/faculty-staff/blins/StatsTools/)</li>
</ul>


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
Wed, Jan 28 | [4.1][4.1] | Normal distribution
Fri, Jan 30 | [3.4][3.4] | Random variables

### Wed, Jan 28

Class was canceled today because I had a doctor's appointment.  But I recommended that everyone watch the following video and then complete a workshop about the R functions `pnorm`, `qnorm`, and `rnorm`. 

* **Video:** <https://youtu.be/qLBmYfAVUdg>
* **Workshop:** [Normal distribution calculations with R](NormalCalculations.pdf)


### Fri, Jan 30

Today we talked about **random variables** and **probability distributions**. We talked about some example probability distributions:

* Flip a coin until you get a tail.  Let $X$ represent the number of flips needed. (**geometric distribution**)

* About 1 meteorite bigger than 1000 kg hits the Earth every year.  The time until the next meteorite hits the Earth has probability density function $f(t) = e^{-t}$. (**exponential distribution**) 

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
-->

- - -

### Week 4 Notes  

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Feb 2 | [3.4][3.4] | Random variables - con'd
Wed, Feb 4 | [4.3][4.3] | Binomial distribution
Fri, Feb 6 | [5.1][5.1] | Point estimates and error
 
### Mon, Feb 2

<div class="Theorem">
#### Definition (Variance and Standard Deviation).

For a random variable $X$ with expected value $\mu$, the variance of $X$ is 
$$\on{Var}(X) = E((X-\mu)^2).$$
The **standard deviation** of $X$ (denoted $\sigma$) is the square root of the variance. 
</div>

We did these examples in class.

1. Find the variance and standard deviation when you roll a 6-sided die. 

<!--    <details>
    Since every outcome is equally likely, you can use the R command `mean((1:6 - 3.5)^2)`. 
    </details>-->

2. [Exercise 3.34(a)](https://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#eoce.3.34)

Here is an extra example from Kahn academy that we did not do in class. 

3. Suppose a random variable $X$ has the following probability model. 

    <table class="bordered">
    <tr><td>$X$</td><td> 0 </td><td> 1 </td><td> 2 </td><td> 3 </td><td> 4</td></tr>
    <tr><td>$P(X)$</td><td> 0.1</td><td>0.15</td><td>0.4</td><td>0.25</td><td>0.1</td></tr>
    </table>

    a. Find the expected value of $X$. (<https://youtu.be/qafPcWNUiM8>)
    b. Find the variance and standard deviation of $X$. (<https://youtu.be/2egl_5c8i-g>)

<div class="Theorem">
#### Properties of Expected Value and Variance

Expected value is **linear** which means that for any two random variables $X$ and $Y$ and any constant $c$, these two properties hold:

1. $E(X + Y) = E(X) + E(Y)$ (**additivity**)
2. $E(cX) = c E(X)$ (**constant multiples**)

Variance is not linear.  Instead it has these properties:

1. $\on{Var}(X + Y) = \on{Var}(X) + \on{Var}(Y)$ if $X$ and $Y$ are independent.
2. $\on{Var}(cX) = c^2 \on{Var}(X)$
</div>


4. A single six-sided die has expected value $\mu = 3.5$ and standard deviation $\sigma = 1.7078$.  What is the mean and standard deviation if you roll two dice and add them?  


5. [Exercise 3.34(b)](https://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#eoce.3.34)

### Wed, Feb 4

<div class="Theorem">
**Binomial distribution.** If $X$ is the total number of successes in $n$ independent trials, each with probability $p$ of a success, then $X$ has a binomial distribution, denoted $\on{Binom}(n,p)$ for short. This distribution has

* Probability mass function (PMF):
$$P(X = k) = \frac{n!}{k! (n-k)!} p^k (1-p)^k.$$
* Expected value $\mu = np$.
* Variance $\sigma^2 = np(1-p)$.
</div>

1. If you play roulette and bet $1 on black, you have an 18/38 chance of winning $2.  If you bet on a number like 7, then you have a 1/38 chance of winning $36.  Both bets have the same expected value μ = $0.947.  What are the variances for both bets?  

We used this [binomial distribution plotting tool](https://people.hsc.edu/faculty-staff/blins/StatsTools/binomialPlotter2.html) to compare the distributions if you make these two bets 100 times.  In one case we get something that looks roughly like a bell curve, in the other case we get something that is definitely skewed to the right.  

2. In the 1954 polio vaccine trials there were 244 polio cases, but only 82 actually had polio.  Use the binomial distribution to compute the probability that 82 or fewer fair coin tosses out of 244 come up heads.  This can model the p-value under the hypothesis that the polio vaccine does not work.  Use the `pbinom(x, n, p)` function in R. 

Sometimes the assumption that the trials are independent is not justified.  

3. Suppose you want to find the percent of Hampden-Sydney students who are left handed.  So you interview a random sample of 50 students (out of the population of about 900 HSC students).  Why aren't these observations independent?  

The correct probability distribution to model the example above is called the **hypergeometric distribution**.  As long as the population is much larger than the sample, we typically do not need to worry about the trials not being independent. 

We finished by discussing the normal approximation of a binomial distribution.  When $n$ is large enough so that both $np \ge 10$ and $n(1-p) \ge 10$, then $\on{Binom}(n, p)$ is approximately normal with mean $np$ and standard deviation $\sqrt{n p (1-p)}$.  

<!--
We didn't get to this last exercise:

4. How well does the normal approximation do to estimate the $P(X \le 82)$ when $X \sim \on{Binom}(244, 0.5)$? 
-->

### Fri, Feb 6

<div class="Theorem">
#### The Central Limit Theorem

Suppose that $X_1, X_2, \ldots, X_n$ are independent random variables that all have the same probability distribution.  If $n$ is large, then the total $X_1 + X_2 + \ldots + X_n$ has an approximately normal distribution.
</div>

1. If each $X_i$ has mean $\mu$ and standard deviation $\sigma$, then what is the mean and the standard deviation of the total?  

2. In Dungeons and Dragons, you calculate the damage from a fireball spell by rolling 8 six-sided dice and adding up the results.  This has an approximately normal distribution.  What is the mean and standard deviation of this distribution.  (Recall that the mean and standard deviation of a single six-sided die is $\mu = 3.5$ and $\sigma = 1.7078$).  

We looked at a [graph of the distribution](https://people.hsc.edu/faculty-staff/blins/StatsTools/dice.html) from the previous example to see that it is indeed approximately normal. 

3. Use the normal approximation to estimate the probability of doing more than 35 points of damage with a fireball spell. 

When you use a normal approximation to estimate discrete probabilities, it is recommended to use a **continuity correction** (see [Section 4.3.3](https://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.4.3.3)).  To estimate $P(X \le k)$, calculate $P(X < k + 0.5)$ using the normal approximation (and likewise, to estimate $P(X \ge k)$, compute $P(X > k - 0.5)$ using the normal approximation).  

An important special case of the central limit theorem is the normal approximation of the binomial distribution, which has mean $\mu = np$ and standard deviation $\sigma = \sqrt{np(1-p)}$.  

4. About 7\% of the US population has type O-negative blood (universal donors).  If a hospital has 700 patients, use the normal approximation to estimate the probability that more than 60 have type O-negative blood.  Compare your answer with the result if you use the `pbinom(x, n, p)` function. 

We finished by talking about the difference between the distribution of the total versus the distribution of the proportion of patients who are O-negative.  The standard deviation of the sample proportion $\hat{p}$ is 
$$\sigma_{\hat{p}} = \sqrt{ \frac{p (1-p)}{n} }.$$


- - - 

### Week 5 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 9  | [5.2][5.2] | Confidence intervals for a proportion
Wed, Feb 11 |            | Review
Fri, Feb 13 |            | **Midterm 1**

### Mon, Feb 9

Today we talked about confidence intervals for a proportion.  

<div class="Theorem">
**Sampling Distribution for a Sample Proportion.** In a SRS of size $n$ from a large population, the sample proportion $\hat{p}$ is random, so it has a probability distribution with the following features.  

* **Shape.** The distribution gets more normal as the sample size $n$ increases. 
* **Center.** The expected value of $\hat{p}$ is the same as the population proportion $p$. 
* **Spread.** The standard deviation of $\hat{p}$ is 
$$\sigma_{\hat{p}} = \sqrt{\frac{p (1-p)}{n}}.$$
</div>

In practice, we usually don't know the population proportion $p$.  Instead we can use the sample proportion $\hat{p}$ to calculate the **standard error** of $\hat{p}$:
$$SE_{\hat{p}} =  \sqrt{\frac{\hat{p} (1-\hat{p})}{n}}.$$

1. This year, 34 out of 72 students in my statistics classes were born in Virginia.  What is the sample proportion $\hat{p}$ and the standard error?  

If the sample size is large enough, then there is a 95% chance that $\hat{p}$ will be within about two standard deviations of $p$. So if we know $\hat{p}$ and we assume that the standard error is close to the standard deviation for $\hat{p}$, then we can make a confidence interval for the location of the parameter $p$. 

<div class = "Theorem"> 
**Confidence Interval for a Proportion.**  This works well if the sample size $n$ is very large.  

$$\hat{p} \pm z^* \sqrt{\frac{\hat{p} ( 1- \hat{p})}{n}}.$$
</div>

You can use the R command `qnorm((1 - p) / 2)` to find the critical z-value ($z^*$) when you want a specific **confidence level** $p$. 

2. Use the data above to make a 95% confidence interval for the proportion of all HSC students born in VA. 

After that, we talked about the `prop.test()` function in R which can make a confidence interval (among other things).  

* **Example**: Confidence intervals for proportions with R ([Rmd](pConfidenceIntervals.Rmd), [html](pConfidenceIntervals.html))

Notice that the `prop.test()` confidence interval is not the same as what we got using the formula above. Instead of using the formula above, R uses something called a [Wilson score confidence interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Wilson_score_interval_with_continuity_correction) with continuity correction.  The idea is to solve for the two points $p$ where
$$p - \hat{p} = \pm z^* \sqrt{\frac{p(1-p)}{n}}.$$
If you add in the continuity correction, this pretty much guarantees that there is at least a 95% chance (or whatever other confidence level you want) that the interval contains the true population parameter.  The Wilson method confidence intervals are fairly trustworthy even with relatively small samples and small numbers of successes/failures.  

### Wed, Feb 11

Today we went over the [midterm 1 review problems](midterm1review.pdf) (the [solutions](midterm1reviewSolutions.pdf) are also available now).  We also did some additional practice problems including these.

1. If you draw a random card from a deck of 52 playing cards, what is the probability that you draw an ace or a heart?   

2. Suppose you need knee surgery. There is an 11% that the surgery fails. There is a 4% chance of getting an infection. And there is a 3% chance of both infection and the surgery failing.  What is the probability that the surgery succeeds without infection?  

3. In the Wimbledon tennis tournament, serving players are more likely to win a point. A server has two chances to serve the ball. There is a 59% chance that the first serve is in, and if it is, then the server has a 73% chance of winning the point.  If the first serve is out, then they have an 86% of getting the second serve in, and in that case they have a 59% chance of winning the point. But if the second serve is out, then the server automatically loses the point.  

    a. Make a tree diagram for this situation.
    b. Find the probability that the serving player wins the point.
    c. Find the conditional probability that 1st serve was in, if the server wins the point.

- - - 

### Week 6 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 16 | [5.3][5.3] | Hypothesis tests for a proportion
Wed, Feb 18 | [6.2][6.2] | Difference in two proportions 
Fri, Feb 20 | [6.2][6.2] | Difference in two proportions - con'd 

              

- - - 


### Week 7 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Feb 23 | [6.3][6.3] | Chi-squared goodness of fit test
Wed, Feb 25 | [6.4][6.4] | Chi-squared test for association
Fri, Feb 27 | [7.1][7.1] | One-sample means with t-distribution
             

- - - 

### Week 8 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 2 | [7.2][7.2] | Paired data
Wed, Mar 4 | [7.3][7.3] | Difference of two means
Fri, Mar 6 | [7.4][7.4] | Power calculations
            

- - - 

### Week 9 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 16 | [7.5][7.5] | Comparing many means with ANOVA
Wed, Mar 18 |            | Review  
Fri, Mar 20 |            | **Midterm 2**


- - - 

### Week 10 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 23 | [7.5][7.5] | ANOVA - con'd
Wed, Mar 25 | [8.2][8.2] | Least squares regression
Fri, Mar 27 | [9.1][9.1] | Introduction to multiple regression


- - - 

### Week 11 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Mar 30 | [9.2][9.2] | Model selection
Wed, Apr 1  | [9.3][9.3] | Checking model conditions
Fri, Apr 3  | [9.3][9.3] | Checking model conditions - con'd


- - - 

### Week 12 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 6  |  [9.5][9.5] | Introduction to logistic regression
Wed, Apr 8  |  [9.5][9.5] | Logistic regression - con'd     
Fri, Apr 10 |       | Hypothesis testing with randomization                 


- - - 

### Week 13 Notes

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Apr 13 |            | Confidence intervals with bootstrapping
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
