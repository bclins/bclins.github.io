---
title: Math & Society Notes
css: ../mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
---

\newcommand{\ds}{\displaystyle}
\newcommand{\on}{\operatorname}

## Math 111 - Summer 2024

Quick Links: [Syllabus](index.html)

<center>
<table class='bordered'>
<thead> 
<tr><th>Week</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr>
</thead>
<tbody>
<tr><td>1</td><td></td><td> [Day 1](#day-1-notes) </td><td> [Day 2](#day-2-notes) </td><td> [Day 3](#day-3-notes) </td><td> [Day 4](#day-4-notes) </td></tr> 
<tr><td>2</td><td></td><td>[Day 5](#day-5-notes)</td><td> [Day 6](#day-6-notes) </td><td>[Day 7](#day-7-notes)</td><td> [Day 8](#day-8-notes)</td></tr>
<tr><td>3</td><td>[Day 9](#day-9-notes)<td>[Day 10](#day-10-notes)</td><td> [Day 11](#day-11-notes) </td><td>[Day 12](#day-12-notes)</td><td> [Day 13](#day-13-notes)</td></tr>
<tr><td>4</td><td>[Day 14](#day-14-notes)<td>[Day 15](#day-15-notes)</td><td> [Day 16](#day-16-notes) </td><td>[Day 17](#day-17-notes)</td><td> [Day 18](#day-18-notes)</td></tr>
<tr><td>2</td><td>[Day 19](#day-19-notes)</td><td> [Day 20](#day-20-notes) </td><td></td><td></td><td></td></tr>
</tbody>
</table>
</center>

### Day 1 Notes

#### Tue, May 21

Today we introduced voting methods.  See these slides for details. 

* **Slides:** [Introduction to Voting Theory](day1slides.html)

We also did these two workshops in class. 

* **Workshop:** [Plurality & Instant Run-Off Voting](Workshops/InstantRunoff.pdf)

* **Workshop:** [Borda Count](Workshops/BordaCount.pdf)


### Day 2 Notes

Today we talked about fairness criteria that voting methods should have.  

* **Slides:** [Fairness Criteria](day2slides.html)

We also did this workshop in class.

* **Workshop:** [Fairness Criteria](Workshops/FairnessCriteria.pdf)

In addition to the slides & workshop, we also talked about (and proved) the [Median Voter Theorem](https://en.wikipedia.org/wiki/Median_voter_theorem).  We finished by talking about recent advocacy to promote ranked choice voting (another name for IRV) and STAR voting (which will not be on the test).  

* **Video:** [STAR Voting](https://youtu.be/3-mOeUXAkV0)

It is something to pay attention to in the future, because there will always be a push for better voting methods than plurality voting.  

### Day 3 Notes

Today we talked about **weighted voting systems**.  We did this workshop:

* **Workshop:** [Banzhaf power](Workshops/BanzhafPower.pdf)

Before the workshop, we started with this example. Suppose a school is run by a committee with the principal who has 3 votes, the vice principal who has 2 votes, and three teachers who each have 1 votes.  A motion requires 5 votes to pass.  

We can use the shorthand notation [5: 3, 2, 1, 1, 1] to represent this weighted voting system.  The first number is the vote **threshold** needed to pass a motion, and the other numbers are the **weights** which are the number of votes controlled by each voter.  Often the voters in a weighted voting system are called **players**.  

A **winning coalition** is a subset of the players who have enough votes to pass a motion.  A player is **critical** in a winning coalition if the coalition would not have enough votes without that player. 

1. List the winning coalitions in the weighted voting system above.  

2. Circle the critical players in each winning coalition.

The **Banzhaf power index** is a way to measure how much power each player in a weighted voting system has.  

<div class="Theorem">
#### Banzhaf Power Index 

To find the Banzhaf power for each player,

1. List the winning coalitions and circle the critical players in each coalition.
2. The power for each player is the fraction:
$$\frac{\text{Number of times the player is circled}}{\text{Total number of circles}}.$$
</div>

3. Calculate the Banzhaf power indices for the principal, vice principal, and each teacher in the example above. 

[John Banzhaf]() was a lawyer in the 1960s who discovered the power index when he was investigating a case involving Nassua County, NY.  The districts in Nassau county had a weighted voting system where the weights were:

* Hempstead 1 had 9 votes
* Hempstead 2 had 9 votes
* North Hempstead had 7 votes
* Oyster Bay had 3 votes
* Glen Cove had 1 vote
* Long Beach had 1 vote

To reach the threshold of 16 votes to pass a motion, it required at least two of the bigger districts.  But it never mattered what the three smaller districts did.  So the three smaller districts had no power in the elections.  

A player with no power is called a **dummy**.  A player with enough power to pass a motion all by themselves is called a **dictator**.  Sometimes a player can block any motion by themselves.  Then we say they have **veto power.**

4. Can you come up with a weighted voting system $[t : p_1, p_2, p_3, p_4]$ where all four players have veto power?

Banzhaf power can illustrate some surprising things about weighted voting systems.  For example, the weights might be very different from the real amount of power each player has.

5. Suppose a country has a parliament with 200 seats.  The seats are divided between three parties that always vote together as blocs.  The red party has 99 seats, the blue party has 98 seats, and the green party has 3 seats.  Surprisingly when you calculate the Banzhaf power, the green party has the same amount of power as the red and blue parties even though it has much fewer seats. 

Sometimes you can calculate the Banzhaf power indices without having any numbers for the weights and threshold.  We did the following example. 

6. At one college, promotion decisions are made by a committee of four faculty and the dean.  The four faculty each vote, and if there is a tie, then the dean is the tie breaker.  Calculate the Banzhaf power for each faculty member and for the dean.  

If you want to play with more weighted voting examples, Professor Koether made a [Banzhaf power calculator](https://people.hsc.edu/faculty-staff/robbk/Math111/Power/) which you can try.   


### Day 4 Notes

Today we talked about **the spherical Earth theory**.  Actually, we talked about solving **proportion equations**, but most of the examples we did were related to the fact that the Earth is a sphere.  We also talked about the evidence the ancient Greeks used to deduce that the Earth is a sphere.

* **Workshop:** [Eratosthenes measures the Earth](Workshops/EratosthenesEarth.pdf)

After that, we talked about using the same ideas to find Latitude & Longitude.

* **Slides:** [Longitude presentation](https://people.hsc.edu/faculty-staff/blins/classes/fall10/math111/LongitudePresentation.pdf)

We finished by talking about a useful technique to solve word problems involving unit conversions called **factor-label method**, also known as **dimensional analysis**. Here is a [video explaining the technique](https://youtu.be/d_WfCwJW0Og) (I didn't make the video, but it is a pretty good explanation.

We did this example in class:

1. The international space station ISS orbits the Earth every 90 minutes.  The orbit of the space station is 250 miles above the Earth's surface.  How fast does the ISS move in miles per hour?  

Then we finished with this workshop:

* **Workshops:** [Factors & Units](Workshops/FactorsUnits.pdf)


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
