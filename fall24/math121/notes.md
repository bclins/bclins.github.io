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

We introduced the **five number summary** and **box-and-whisker plots (boxplots)**.  We also talked about the **interquartile range (IQR)** and how to use the $1.5 \times \text{IQR}$ rule to determine if data is an **outlier**. We did this workshop.

* **Workshop:** [Boxplots](Workshops/Spread2.pdf)


- - -

### Week 2 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 2  |                | Labor Day, no class
Wed, Sep 4  | [2.1.4][2.1.4] | Standard deviation
Fri, Sep 6  | [4.1][4.1]     | Normal distribution

- - - 


### Week 3 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 9  | [4.1.5][4.1.5] | 68-95-99.7 rule
Wed, Sep 11 | [4.1.4][4.1.4] | Normal distribution computations
Fri, Sep 13 | [2.1][2.1], [8.1][8.1] | Scatterplots and correlation

- - -

### Week 4 Notes

#### Tentative Schedule

Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Sep 16  | [8.2][8.2] | Least squares regression introduction
Wed, Sep 18  | [8.2][8.2] | Least squares regression practice
Fri, Sep 20  | [1.3][1.3] | Sampling: populations and samples

- - - 

### Week 5 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 23  | [1.3][1.3] | Bias versus random error
Wed, Sep 25  |            | Review
Fri, Sep 27  |            | **Midterm 1**

- - - 
 


### Week 6 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Sep 30 | [1.4][1.4] | Randomized controlled experiments
Wed, Oct 2  | [3.1][3.1] | Defining probability
Fri, Oct 4  | [3.1][3.1] | Multiplication and addition rules
- - - 

### Week 7 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 7   | [3.4][3.4] | Weighted averages & expected value
Wed, Oct 9   | [7.1][7.1] | Law of large numbers & central limit theorem
Fri, Oct 11  | [7.1][7.1] | Sampling distributions


- - - 

### Week 8 Notes

#### Tentative Schedule

Day  | Section  | Topic
:-----:|:---:|:-----------------------
Mon, Oct 14  |            | Fall break, no class
Wed, Oct 16  | [5.1][5.1] | Sampling distributions for proportions 
Fri, Oct 18  | [5.2][5.2] | Confidence intervals for a proportion 

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
