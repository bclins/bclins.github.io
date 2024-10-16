---
title: Statistics Notes
css: https://bclins.github.io/mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#333; 
    --link-color: #069; 
  }
  </style>
---

## Math 121 - Fall 2024

<ul class="nav">
  <li>[Class Notes](notes.html)</li>
  <li>[Schedule & Syllabus](index.html)</li>
  <li>[Software & Tables](http://people.hsc.edu/faculty-staff/blins/StatsTools/)</li>
</ul>


<center>
Jump to: [Syllabus](index.html), [Week 1](#week-1-notes) , [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes), [Week 15](#week-15-notes)
</center>

### Week 1 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Aug 26 | [1.2][1.2]     | Data tables, variables, and individuals
Wed, Aug 28 | [2.1.3][2.1.3] | Histograms & skew
Fri, Aug 30 | [2.1.5][2.1.5] | Boxplots

### Mon, Aug 26

Today we covered **data tables**, **individuals**, and **variables**. We also talked about the difference between **categorical** and **quantitative** variables.  

* **Example:** [Class Data](http://people.hsc.edu/faculty-staff/blins/StatsExamples/ClassDataFall24.xlsx)

1. We looked at a case of a nurse who was accused of killing patients at the hospital where she worked for 18 months.  One piece of evidence against her was that 40 patients died during the shifts when she worked, but only 34 died during shifts when she wasn't working.  If this evidence came from a date table, what would be the most natural individuals (rows) & variables (columns) for that table?


* **Example:** [Accident Fatalities by State](http://people.hsc.edu/faculty-staff/blins/StatsExamples/accident_fatalities_states.xlsx) ([source: CDC](https://www.cdc.gov/nchs/pressroom/sosmap/accident_mortality/accident.htm))

2. In the data table in the example above, who or what are the individuals? What are the variables and which are quantitative and which are categorical?

3. If we want to compare states to see which are safer, why is it better to compare the rates instead of the total fatalities?  

4. What is wrong with this student's answer to the previous question?

> Rates are better because they are more precise and easier to understand.

I like this incorrect answer because it is a perfect example of [bullshit](https://en.wikipedia.org/wiki/Bullshit#Harry_Frankfurt's_concept).  This student doesn't know the answer so they are trying to write something that sounds good and earns partial credit.  Try to avoid writing bullshit.  If you catch yourself writing B.S. on one of my quizzes or tests, then you can be sure that you a missing a really simple idea and you should see if you can figure out what it is.  

### Wed, Aug 28 

We talked about how to summarize quantitative data. We started by reviewing the **mean** and **median**. We saw how to find the average in Excel, and we talked about how to find the position of the median in a long list of numbers (assuming they are sorted). 

Then we used the class data we collected last time to introduce **histograms** and **stem-and-leaf plots** (also known as **stemplots**). We also talked about how to tell if data is **skewed left** or **skewed right**. One important concept is that the median is not affected by skew, but the average is pulled in the direction of the skew, so the average will be bigger than the median when the data is skewed right. 

Until recently, Excel did not have an easy way to make histograms, but Google Sheets does.  If you need to make a histogram, I recommend using Google Sheets or this [histogram plotter tool](https://people.hsc.edu/faculty-staff/blins/StatsTools/boxplotsHistograms.html). 

* **Example:** [US Household Income (2010)](https://upload.wikimedia.org/wikipedia/commons/0/0d/Distribution_of_Annual_Household_Income_in_the_United_States_2010.png)

1. Which is greater, the mean or the median household income?

2. Can you think of a distribution that is skewed left?  

3. Why isn't [this bar graph](https://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.2.2.5) from the book a histogram?

We finished with this in-class workshop.

* **Workshop:** [Histograms & stemplots](Workshops/Histograms.pdf)

### Fri, Aug 30

We introduced the **five number summary** and **box-and-whisker plots (boxplots)**.  We also talked about the **interquartile range (IQR)** and how to use the $1.5 \times \text{IQR}$ rule to determine if data is an **outlier**. 

* **Workshop:** [Boxplots](Workshops/Spread2.pdf)


- - -

### Week 2 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 2  |                | Labor Day, no class
Wed, Sep 4  | [2.1.4][2.1.4] | Standard deviation
Fri, Sep 6  | [4.1][4.1]     | Normal distribution

### Wed, Sep 4

Today we talked about **robust** statistics such as the median and IQR that are not affected by outliers and skew. We also introduced the **standard deviation**.  We did one example of a standard deviation calculation by hand, but you won't ever have to do that again in this class.  Instead, we just use software to find standard deviation for us.  We looked at how to find standard deviation in Excel using the `=stdev()` function. 

We finished by looking at some examples of histograms that have a shape that looks roughly like a bell.  This is a very common pattern in nature that is called the normal distribution.

* **Example:** [Heights of men in the USA](http://people.hsc.edu/faculty-staff/blins/StatsExamples/cdcHeights.html)
* **Example:** [Annual rainfall in Farmville, VA](http://people.hsc.edu/faculty-staff/blins/StatsExamples/rainfall.html)

The **normal distribution** is a mathematical model for data with a histogram that is shaped like a bell.  The model has the following features:

1. It is symmetric (left & right tails are same size)
2. The mean ($\mu$) is the same as the median. 
3. It has two inflection points (the two steepest points on the curve)
4. The distance from the mean to either inflection point is the standard deviation ($\sigma$).  
5. The two numbers $\mu$ and $\sigma$ completely describe the model.

The normal distribution is a theoretical model that doesn't have to perfectly match the data to be useful. We use Greek letters $\mu$ and $\sigma$ for the theoretical mean and standard deviation of the normal distribution to distinguish them from the sample mean $\bar{x}$ and standard deviation $s$ of our data which probably won't follow the theoretical model perfectly. 

### Fri, Sep 6

We talked about **z-values** and the [68-95-99.7 rule](http://people.hsc.edu/faculty-staff/blins/StatsExamples/NormalDistributionEmpiricalRule.pdf). 

1. The average high temperature in Anchorage, AK in January is 21 degrees Fahrenheit, with standard deviation 10. The average high temperature in Honolulu, HI in January is 80°F with σ = 8°F. In which city would it be more unusual to have a high temperature of 57°F in January?

* **Workshop:** [Normal distributions](http://people.hsc.edu/faculty-staff/blins/StatsExamples/NormalDist.pdf)






- - - 


### Week 3 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 9  | [4.1.5][4.1.5] | 68-95-99.7 rule
Wed, Sep 11 | [4.1.4][4.1.4] | Normal distribution computations
Fri, Sep 13 | [2.1][2.1], [8.1][8.1] | Scatterplots and correlation

### Mon, Sep 9

We reviewed some of the exercise from the workshop last Friday.  Then we introduced how to find percentages on a normal distribution for locations that aren't exactly 1, 2, or 3 standard deviations away from the mean. I strongly recommend downloading the [Probability Distributions app](https://homepage.divms.uiowa.edu/~mbognar/applets/normal.html) ([android version](https://play.google.com/store/apps/details?id=com.mbognar.probdist), [iOS version](https://itunes.apple.com/us/app/probability-distributions/id889106396))  for your phone.  We did the following examples. 

1. SAT verbal scores are roughly normally distributed with mean μ = 500, and σ = 100.  Estimate the percentile of a student with a 560 verbal score. 

2. What percent of years will Farmville get between 40 and 50 inches of rain?

3. How much rain would Farmville get in a top 10% year?  

4. Estimate the percent of men who are between 6 feet and 6'5" tall.  

5. How tall are men in the 75-th percentile? 

### Wed, Sep 11

There was no class since I was out with COVID.  Instead, there was this workshop to complete on your own.  

**Workshop:** [Normal distributions 2](https://people.hsc.edu/faculty-staff/blins/StatsExamples/NormalDist2.pdf)



- - -

### Week 4 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 16  | [8.2][8.2] | Least squares regression introduction
Wed, Sep 18  | [8.2][8.2] | Least squares regression practice
Fri, Sep 20  | [1.3][1.3] | Sampling: populations and samples


### Mon, Sep 16

We introduced **scatterplots** and **correlation coefficients** with these examples:

* [Example R values](http://people.hsc.edu/faculty-staff/blins/StatsExamples/correlationExamples.pdf).
* Height vs. Weight
* [Marriage ages](http://people.hsc.edu/faculty-staff/blins/StatsExamples/marriageAges.xls)
* [Guess the correlation](https://www.geogebra.org/m/KE6JfuF9)

1. What would the correlation between husband and wife ages be in a country where every man married a woman exactly 10 years older? What if every man married a woman exactly half his age?  

Important concept: correlation does not change if you change the units or apply a simple linear transformation to the axes.  Correlation just measures the strength of the linear trend in the scatterplot.  

We finished by talking about **explanatory** and **response** variables and how *correlation doesn't mean causation*!

### Wed, Sep 18

We talked about **least squares regression**.  The least squares regression line has these features:

1. **Slope** $m = R \frac{s_y}{s_x}$
2. **Point** $(\bar{x}, \bar{y})$
3. **y-Intercept** $b = \bar{y} - m \bar{x}$

You won't have to calculate the correlation $R$ or the standard deviations $s_y$ and $s_x$, but you might have to use them to find the formula for a regression line. 

We looked at these examples:

* [Blood Alcohol Content vs. Number of Beers](http://people.hsc.edu/faculty-staff/blins/StatsExamples/bac.xlsx)
* [Marriage ages](http://people.hsc.edu/faculty-staff/blins/StatsExamples/marriageAges.xls)
* [Midterm exam grades](http://people.hsc.edu/faculty-staff/blins/StatsExamples/MidtermRegression.xlsx)

Keep in mind that regression lines have two important applications. 

1. **Make predictions** about average y-values at different x-values.
2. The slope is the **rate of change**. 

### Fri, Sep 20

After the quiz, we talked about the **coefficient of determination** $R^2$ which represents the percent of the variability in the $y$-values that follow the tend, the remaining $1-R^2$ is the percent of the varibility that is above and below the trend line.  

* **Workshop**: [Lightning fatalities](http://people.hsc.edu/faculty-staff/blins/StatsExamples/LightningRegression.pdf)

- - - 

### Week 5 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 23  | [1.3][1.3] | Bias versus random error
Wed, Sep 25  |            | Review
Fri, Sep 27  |            | **Midterm 1**

### Mon, Sep 23

We talked about the difference between **samples** and **populations**.  The central problem of statistics is to use sample **statistics** to answer questions about population **parameters**. 

We looked at an example of sampling from the Gettysburg address, and we talked about the **central problem of statistics**: How can you answer questions about the population using samples?  

The reason this is hard is because sample statistics usually don't match the true population parameter.  There are two reasons why:

* **Bias**: systematic error (each source has error in a particular direction) 
* **Random error**: non-systematic error

We looked at this case study:

* [Gallup polling & sample bias](https://people.hsc.edu/faculty-staff/blins/StatsExamples/samplingPresentation.pdf)

#### Important Concepts.

1. You can avoid/reduce random error by choosing a large sample.

2. Large samples don't reduce bias.

3. The only sure way to avoid bias is a **simple random sample**.

### Wed, Sep 25

We started with this workshop (just the front page).  

* **Workshop**: [Random error versus bias](http://people.hsc.edu/faculty-staff/blins/StatsExamples/BiasRandomError.pdf)

Then we talked about the [review problems for the midterm](midterm1review.html) on Friday.  

- - - 
 


### Week 6 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 30 | [1.4][1.4] | Randomized controlled experiments
Wed, Oct 2  | [3.1][3.1] | Defining probability
Fri, Oct 4  | [3.1][3.1] | Multiplication and addition rules

### Mon, Sep 30

Recall that **correlation is not causation**. The only way to prove that one (explanatory) variable is the cause of a response is to use a **randomized controlled experiment**. We looked at these examples. 

1. A study try to determine whether cellphones cause brain cancer.  The researchers interviewed 469 brain cancer patients about their cellphone use between 1994 and 1998.  They also interviewed 469 other hospital patients (without brain cancer) who had the same ages, genders, and races as the brain cancer patients.  

    a. What was the explanatory variable?
    b. What was the response variable?
    c. Which variables were controlled?
    d. Was this an **experiment** or an **observational study**?
    e. Are there any possible **lurking variables**?

2. In 1954, the polio vaccine trials were one of the largest randomized controlled experiments ever conducted.  [Here were the results](https://people.hsc.edu/faculty-staff/blins/StatsExamples/polioTrials.html). 

    a. What was the explanatory variable?
    b. What was the response variable?
    c. This was an experiment because it had a **treatment variable**.  What was that?
    c. Which variables were controlled?
    d. Why don't we have to worry about lurking variables?  


We talked about why the polio vaccine trials were **double blind** and what that means.      

3. Do [magnetic bracelets](https://www.amazon.com/Bracelets-Adjustable-3000Gauss-Arthritis-Migraines/dp/B07QX2WYNS/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.S8qvWGHSHwQxRHG2yFf2gzEQVauNBaVky2_BHvgF4meM3f1vAL530i8oTdhNSTUc7Mk9pmXKIb6gSUWeQyil2KfiSsmqNf5SQ0zMkWv7o0oZU3uT21FKwIksTTCfs88gp8BLdzg6cY0V7bQ8SlHDqhi-SQ_1-uglO24g-WsO58e4ZqKvUFMJ3j0K2uRtmhTzd4MUWnwQyDq_wU8xDx789RUzuuU8yXZIh1WGygjZzbf7BDnEfdzRHkBnM5wzhbOm7gqhM3v8uY2JXvNRTP5E27YfvxroISSg6Alk4xM9jUY.5faFTIRYYwhnDzFp856CUR1u82Z7yQOvFbweRcKk9tg&dib_tag=se&hvadid=409961555257&hvdev=c&hvlocphy=1027155&hvnetw=g&hvqmt=e&hvrand=12006179576662034532&hvtargid=kwd-20439822&hydadcr=24657_11410751&keywords=magnetic+bracelets&qid=1727463369&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1) work to help with arthritis pain?

    a. What is the explanatory variable?
    b. What is the response variable?
    c. How hard would it be to design a randomized controlled experiment to answer the question above? 
    
We finished by talking about **anecdotal evidence**. 


### Wed, Oct 2

Today we introduced **probability models** which always have two parts:

1. A list of possible outcomes called a **sample space**.
2. A **probability function** $P(E)$ that gives the probability for any subset $E$ of the sample space.  

A subset of the sample space is called an **event**.  We already intuitively know lots of probability models, for example we described the following probability models:

1. Flip a coin.

2. Roll a six-sided die.

3. If you roll a six-sided die, what is $P(\text{result is even})?$

4. The proportion of people in the US with each of the four blood types is shown in the table below.

    Type | O | A | B | AB
    :---|:---:|:---:|:---:|:---:
    Proportion | 0.45 | 0.40 | 0.11 | ?

    What is $P(\text{Type AB})?$


* **Workshop**: [Probability distributions](https://people.hsc.edu/faculty-staff/blins/StatsExamples/ProbabilityDistributions.pdf)


### Fri, Oct 4

We talked about the **addition** and **multiplication rules** for **disjoint** and **independent** events.  

1. If you shuffle a deck of 52 playing cards, and then draw one card, what is $P(\text{Ace})$?
2. If you shuffle a deck of 52 playing cards, and then draw one card, what is $P(\text{Heart})$?
3. Is the event that you get an Ace and the event that you get a Heart disjoint?  Are they independent?  
4. What if you draw the top two cards from the deck.  Are the events $A = \text{First card is an ace}$ and $B = \text{Second card is an ace}$ independent? 


* **Workshop**: [Basic probability rules](http://people.hsc.edu/faculty-staff/blins/StatsExamples/BasicProbabilityRules2.pdf)


- - - 

### Week 7 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 7   | [3.4][3.4] | Weighted averages & expected value
Wed, Oct 9   | [3.4][3.4] | Random variables
Fri, Oct 11  | [7.1][7.1] | Sampling distributions

### Mon, Oct 7

Today we talked about **weighted averages**. To find a weighted average:

1. Multiply each number by its weight.
2. Add the results.

We did an two examples. 

1. Calculate the final grade of a student who gets an 80 quiz average, 72 midterm average, 95 project average, and an 89 on the final exam. 

2. Eleven nursing students graduated from a nursing program.  Four students completed the program in 3 years, four took 4 years, two took 5 years, and one student took 6 years to graduate.  Express the average time to complete the program as a weighted average. 


We also talked about **expected value** (also known as the **theoretical average**) which is the weighted average of the outcomes in a probability model, using the probabilities as the weights. 

* **Workshop:** [Expected value & weighted averages](http://people.hsc.edu/faculty-staff/blins/StatsExamples/ExpectedValue.pdf)

We finished by talking about the **Law of Large Numbers** which says: when you repeat a random experiment many times, the sample mean tends to get closer to the theoretical average.

### Wed, Oct 9

A **random variable** is a probability model where the outcome are numbers. We often use a capital letter like $X$ or $Y$ to represent a random variable.  We use the shorthand $E(X)$ to represent the expected value of a random variable.  Recall that the expected value (also known as the theoretical average) is the weighted average of the possible outcomes weighted by their probabilities.  

A probability histogram shows the **probability distribution** of a random variable. Every probability distribution can be described in terms of the following three things:

1. **Shape** - is it shaped like a bell, or skewed, or something even more complicated?
2. **Center** - the theoretical average $\mu$ (i.e., the expected value)
3. **Spread** - the theoretical standard deviation $\sigma$


In the game roulette there is a wheel with 38 slots.  The slots numbered 1 through 36 are split equally between black and red slots.  The other two slots are 0 and 00 which are green.  When you spin the wheel, you can bet that the ball will land in a specific slot or a specific color.  If you bet $1, and the ball lands on the specific number you picked, then you win $36.  

1. Find the expected value of your bet.  

2. Draw a probability histogram for this situation. 

3. Describe the shape of the distribution. 

4. What does the law of large numbers predict will happen if you play many games of roulette?

We also looked at what happens if you bet \$1 on a color like black.  Then you win \$2 if it lands on black.  It turns out that the expected value is the same, but the distribution has a different shape (more skewed) and much larger spread ($\sigma = \$0.9986$ for betting on a number versus $\sigma = \$5.763$ if you bet on black). 

We finished by talking about the trade-off between risk ($\sigma$) versus expected returns ($\mu$) when investing. We also looked at what happens if you play a lot of games of roulette using [this app](https://people.hsc.edu/faculty-staff/blins/StatsTools/binomialPlotter2.html).


### Fri, Oct 11

Suppose we are trying to study a large population with mean $\mu$ and standard deviation $\sigma$. If we take a random sample, the sample mean $\bar{x}$ is a random variable and its probability distribution is called the **sampling distribution** of $\bar{x}$.  Assuming that the population is large and our sample is a simple random sample, the sampling distribution always has the following features:

<div class="Theorem">
**Sampling Distribution of $\bar{x}$.**

1. **Shape**: gets more normal as the sample size $N$ gets larger.
2. **Center**: the theoretical average of $\bar{x}$ is the true population mean $\mu$. 
3. **Spread**: the theoretical standard deviation of $\bar{x}$ gets smaller as $N$ gets bigger. In fact: 
$$\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{N}}.$$
</div>

Examples of sampling distributions.

* [Gettysburg Address words](https://people.hsc.edu/faculty-staff/blins/StatsExamples/GettysburgSamplingDistribution.html)
* [Weights of adults](http://people.hsc.edu/faculty-staff/blins/StatsExamples/InteractiveSamplingDistribution.html)
* [NFL kickoffs](http://people.hsc.edu/faculty-staff/blins/StatsExamples/InteractiveSamplingDistribution2.html)

<!-- 1. Every week in the Fall there are about 15 NFL games.  In each game, there are about 13 kickoffs, on average.  So we can estimate that there might be about 200 kickoffs in one week of NFL games.  Those 200 kickoffs would be a reasonably random sample of all NFL kickoffs.  Describe the sampling distribution of the average kickoff distance.  -->

1. The average American weighs $\mu = 170$ lbs. with a standard deviation of $\sigma = 40$ lbs.  If a commuter plan is designed to seat 22 passengers, what is the probability that the combined weight of the passengers would be greater than $4{,}000$ lbs?  




- - - 

### Week 8 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 14  |            | Fall break, no class
Wed, Oct 16  | [5.1][5.1] | Sampling distributions for proportions 
Fri, Oct 18  | [5.2][5.2] | Confidence intervals for a proportion 


### Wed, Oct 16

We started with this warm-up problem which is a review of the things we talked about last week. 

1. Before state lotteries, mobsters used to run illegal lotteries called the numbers game in many cities.  It cost 1 dollar to buy a numbers game lottery ticket and players could pick any three digit number from 000 to 999.  If their number was picked, they would win \$600.  
    a. What is the expected value of a numbers ticket?  
    b. The standard deviation for a numbers ticket was $\sigma = \$18.96$.  If someone played the numbers game every day (350 days per year) for 40 years, that would be 14,000 games.  Describe the sampling distribution for this person's average winnings per game. Is it possible they win more than \$1 per game?   
    c. The mobster Casper Holstein took as many as 150,000 bets per week.  How likely would it be for the mob to have a bad week where they lost money?  

Then we talked about **sample proportions** which are denoted $\hat{p}$.  In a SRS from a large population, $\hat{p}$ is random with **sampling distribution** that has the following features. 


<div class="Theorem">
**Sampling Distribution of $\hat{p}$.**

1. **Shape**: gets more normal as the sample size $N$ gets larger.
2. **Center**: the theoretical average of $\hat{p}$ is the true population proportion $p$.
3. **Spread**: the theoretical standard deviation of $\hat{p}$ gets smaller as $N$ gets bigger. 
$$\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{N}}.$$
</div>

We did the following exercises in class. 

1. In our class, 13 out of 28 students were born in VA.  Is $\frac{13}{28}$ a statistic or a parameter?  Should you denote it as $p$ or $\hat{p}$?  

2. Assuming that the true proportion of all HSC students that were born in VA is 50%, describe the sampling distribution for $\hat{p}_\text{VA}$ in a random sample of $N = 25$ students. 

3. About one third of American households have a pet cat.  If you randomly select $N = 50$ households, describe the sampling distribution for the proportion that have a pet cat.  

4. According to a 2006 study of 80,000 households, 31.6% have a pet cat.  Is 31.6% a statistic or a parameter?  Would it be better to use the symbol $\hat{p}$ or $p$ to represent it?  


- - - 

### Week 9 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 21  | [5.2][5.2] | Confidence intervals for a proportion - con'd
Wed, Oct 23  |            | Review
Fri, Oct 25  |            | **Midterm 2**

- - - 

### Week 10 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 28  | [5.3][5.3] | Hypothesis testing for a proportion
Wed, Oct 30  | [6.1][6.1] | Inference for a single proportion
Fri, Nov 1   | [5.3.3][5.3.3] | Decision errors



- - - 

### Week 11 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 4  | [6.2][6.2]     | Difference of two proportions (hypothesis tests)
Wed, Nov 6  | [6.2.3][6.2.3] | Difference of two proportions (confidence intervals)
Fri, Nov 8  | [6.2][6.2]     | Difference of two proportions - con'd




- - - 

### Week 12 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 11 | [7.1][7.1]     | Introducing the t-distribution
Wed, Nov 13 | [7.1.4][7.1.4] | One sample t-confidence intervals
Fri, Nov 15 | [7.1.5][7.1.5] | One sample t-tests

- - - 

### Week 13 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Nov 18  | [7.2][7.2] | Paired data 
Wed, Nov 20  |            | Review
Fri, Nov 22  |            | **Midterm 3**
- - - 

### Week 14 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Nov 25  | [7.3][7.3] | Difference of two means 
Wed, Nov 27  |  | Thanksgiving break, no class
Fri, Nov 29  |  | Thanksgiving break, no class



- - - 

### Week 15 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Dec 2  | [7.3][7.3] | Difference of two means - con'd 
Wed, Dec 4  |            | Choosing the right inference technique
Fri, Dec 6  | [7.4][7.4] | Statistical power
Mon, Dec 9  |  | Last day, recap & review


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
[8.1]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.8.1>
[8.1.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#subsection.8.1.4>
[8.2]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.8.2>
[8.4]: <http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#section.8.4>
[Wk01]: <>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
