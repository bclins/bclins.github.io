---
title: Math 121 - Midterm 2 Suggested Study Problems
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


Here are problems that are similar to the ones you might see on the exam. Be sure to also review old quiz and workshop questions too. 


### Experiments vs. Observational Studies 

Know the difference between explanatory variables, response variables, and lurking variables. Also, make sure that you understand why randomized controlled experiments let you establish cause and effect but observational studies do not.

1. A NY Times article titled *Risks: Smokers Found More Prone to Dementia* states the following: 

> “Researchers analyzed data from 23,123 health plan members who participated in a voluntary exam and
> health behavior survey from 1978 to 1985, when they were 50-60 years old. 23 years later, about 25% of
> the group had dementia, including 1,136 with Alzheimer’s disease and 416 with vascular dementia. After
> adjusting for other factors, the researchers concluded that pack-a-day smokers were 37% more likely than
> nonsmokers to develop dementia, and the risks went up with increased smoking; 44% for one to two packs
> a day; and twice the risk for more than two packs.”

a. Was this an experiment or an observational study?  Why?
b. What are the explanatory and response variables?
c. Based on this study, can we conclude that smoking causes dementia later in life? Explain your reasoning.

2. In a public health study on the effects of consumption of fruits and vegetables
on psychological well-being in young adults, participants were randomly assigned to three groups: (1) diet
as usual, (2) an intervention involving text message reminders to increase their fruits
and vegetable consumption plus a voucher to purchase them, or (3) a fruit and vegetable intervention in
which participants were given two additional daily servings of fresh fruits and vegetables to consume on top
of their normal diet. Participants were asked to take a nightly survey on their smartphones. Participants
were student volunteers at the University of Otago, New Zealand. At the end of the 14-day study, only
participants in the third group showed improvements to their psychological well-being across the 14-days
relative to the other groups.

a. What type of study is this?
a. Identify the explanatory and response variables.
a. Were the individuals in the study a random sample from the population?  
a. Were the individuals randomly assigned to different treatment groups?  
a. Does this study support the claim that giving young adults fresh fruits and vegetables to eat 
can *cause* psychological benefits?

### Probability

1.  If you flip a fair coin 10 times, what is the probability of
    a. getting all tails?
    a. getting all heads?
    a. getting at least one tails?

2. A Pew Research survey asked 2,373 randomly sampled registered voters their political
affiliation (Republican, Democrat, or Independent) and whether or not they identify as swing voters. 35%
of respondents identified as Independent, 23% identified as swing voters, and 11% identified as both. 
    a. Are being Independent and being a swing voter disjoint, i.e. mutually exclusive?
    a. Are being Independent and being a swing voter independent events.  Hint: if they were independent, then you could use the multiplication rule to calculate the probability that someone is both a swing voter and a political Independent. Does the multiplication rule give the correct answer?

3. Data collected at elementary schools in DeKalb County, GA suggest that each
year roughly 25% of students miss exactly one day of school, 15% miss 2 days, and 28% miss 3 or more days
due to sickness.
    a. What is the probability that a student chosen at random doesn’t miss any days of school due to sickness this year?
    a. What is the probability that a student chosen at random misses no more than one day?
    a. What is the probability that a student chosen at random misses at least one day?
    a. If a parent has two kids at a DeKalb County elementary school, what is the probability that neither kid will miss any school? Note any assumption you must make to answer this question.
    a. If a parent has two kids at a DeKalb County elementary school, what is the probability that both kids will miss some school, i.e. at least one day? Note any assumption you make.
 


### Weighted Averages and Expected Value

Expected value (also known as the theoretical average) is the weighted average of the outcomes in a probability model.  Make sure you understand why it is called "expected" and how to calculate it. You should know the Law of Large Numbers too.

1. Andy is always looking for ways to make money fast. Lately, he has been trying to
make money by gambling. Here is the game he is considering playing: The game costs $2 to play. He draws
a card from a deck. If he gets a number card (2-10), he wins nothing. For any face card ( jack, queen or
king), he wins $3. For any ace, he wins $5, and he wins an extra $20 if he draws the ace of clubs.
    a. Create a probability model for this game. 
    b. Draw a probability histogram for the game. 
    c. Find the expected value of the game.

### Random Variables

When we use a letter to represent the numerical outcome of a probability model, that letter is called a random variable. You should be comfortable with the way random variables are used in notation, like $P(X > 5)$ for example. 

1. Suppose $X$ is a $N(500,80)$ random variable.  Find the following.  
    a. $P(X > 540)$
    b. $P(400 < X < 540)$


### Sampling Distributions

Make sure you know the shape, center, and spread for the sampling distributions of the sample mean $\bar{x}$ and the sample proportion $\hat{p}$. Be sure you can describe how they change as the sample size gets larger.

1. Data collected by the Substance Abuse and Mental Health Services Administration (SAMSHA) suggests that 69.7% of 18-20 year olds consumed alcoholic beverages in any given year. Suppose we consider a random sample of fifty 18-20 year olds.
    a. Describe the sampling distribution for the proportion that have consumed alcoholic beverages in the past year.  What is the shape, center, and spread of the distribution. 
    b. Estimate the probability that at least 80% of the individuals in the sample have consumed alcohol in the past year. 

2. ([Exercise 5.1](http://people.hsc.edu/faculty-staff/blins/books/OpenIntroStats4e.pdf#eoce.5.1)) For each of the following situations, state whether the parameter of interest is a mean or a proportion. It may be helpful to examine whether individual responses are numerical or categorical.
    a. In a survey, one hundred college students are asked how many hours per week they spend on the Internet.
    a. In a survey, one hundred college students are asked: “What percentage of the time you spend on the Internet is part of your course work?”
    a. In a survey, one hundred college students are asked whether or not they cited information from Wikipedia in their papers.
    a. In a survey, one hundred college students are asked what percentage of their total weekly spending is on alcoholic beverages.
    a. In a sample of one hundred recent college graduates, it is found that 85 percent expect to get a job within one year of their graduation date.

2. As part of a quality control process for computer chips, an engineer at a factory randomly samples 212 chips during a week of production to test the current rate of chips with severe defects. She finds that 27 of the chips are defective.
    a. What population is under consideration in the data set?
    a. What parameter is being estimated?
    a. What is the best guess estimate for the parameter?
    a. Calculate the standard error 
$$\operatorname{SE}_{\hat{p}} = \sqrt{\frac{\hat{p}(1-\hat{p})}{N}}.$$
    a. The historical rate of defects is 10%. Should the engineer be surprised by the observed rate of defects during the current week?

3. American adults have an average weight of $170$ lbs. with a standard deviation of 40 lbs.  
    a. Describe the sampling distribution for the average weight of a random group of 25 adults. 
    b. Estimate $P(\bar{x} > 180)$ using the normal distribution. 



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
