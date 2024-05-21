---
title: Introduction to Voting Theory
author: Brian Lins
institute: Hampden-Sydney College 
date: Tuesday, May 21, 2024
---

\newcommand{\ds}{\displaystyle}
\newcommand{\on}{\operatorname}

<style>
.bordered {
    border: 1px solid black;
    border-collapse: collapse;


    & th {
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
        background-color: lightgray;
        color: black;
    }

    & td {
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
    }
}
</style>


<!--
NOTE: USE THE FOLLOWING COMMAND TO COMPILE THESE SLIDES:
pandoc -s -t slidy day1slides.md -o day1slides.html
-->

# Plurality Method 

The simplest way to pick a winner in an election with several candidates is the **plurality method**: whichever candidate gets the most votes wins. 


* The candidate with the most votes is called the **plurality candidate**. 


* If a candidate gets more than 50% of the votes, then they are a **majority candidate**.  


* **Majority ≠ Plurality.** A majority candidate is always a plurality candidate, but not vice versa.  


# Bad Things About Plurality Method

* **The Spoiler Effect**: A **spoiler candidate** is a candidate who will not win the election, but will change the outcome if they decide to run. 

Spoiler candidates are closely related to:

* **Strategic Voting**: When voters don't vote for their favorite candidate, but instead vote for a candidate they think has a better chance of winning. 

**Exercise.** Can you think of any recent examples of elections with spoiler candidates and/or strategic voting?

# Ranked Ballots

One idea to reduce incentives for strategic voting is to let voters rank all of the candidates using a **ranked ballot**:

<center>
<figure>
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C7237fm3mYLvm6DcbdkLMAHaDz%26pid%3DApi&f=1&ipt=f568a015eec052256a725820b396386205ef52720377f124e871250facec9d8b&ipo=images" width=400></img>
<figcaption>A ranked choice ballot</figcaption>
</figure>
</center>

A popular method to pick the winner of an election using ranked ballots is instant run-off voting (IRV). 


# Instant Run-Off Voting 

<center>
<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/IRV_counting_flowchart.svg" width=500></img>
</figure>
</center>

# Alaska's 2022 Congressional Election

In 2020, Alaska passed a law to use Instant Run-Off Voting to elect the state's one representative to the House of Representatives.  The method was used for the first time in 2022.  The numbers below are not the actual election results, but they are close, and they illustrate what happened.


<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Number of Voters</th></tr>
<tr><th></th><th> 75,000 </th><th> 58,000 </th><th> 28,000 </th><th> 16,000</th></tr>
</thead>
</tbody>
<tr><td>Mary Peltola (D)    </td><td> 1st </td><td> 3rd </td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Sarah Palin (R)     </td><td> 3rd </td><td> 1st </td><td> 2nd </td><td> 3rd </td></tr>
<tr><td>Nick Begich III (R) </td><td> 2nd </td><td> 2nd </td><td> 1st </td><td> 1st </td></tr>
</tbody>
</table>
</center>

About 177,000 people voted. More than 88,500 first place votes would be needed to get a majority.

**Exercise.** Use IRV to find the winner of the election.

**Exercise.** Was there a spoiler candidate in the Alaska election? Who?

# Problems with Instant Run-Off Voting

Here is an example from *Excursions in Modern Mathematics* by Peter Tannenbaum. 

Three cities are competing to be the host city for the Olympic Games.  The final decision is made by a secret vote of the 29 member International Olympic Committee.  Suppose the votes were going to be:

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Number of Voters</th></tr>
<tr><th></th><th> 7 </th><th> 8 </th><th> 10 </th><th> 4 </th></tr>
</thead>
</tbody>
<tr><td>Athens    </td><td> 1st </td><td> 3rd </td><td> 2nd </td><td> 1st </td></tr>
<tr><td>Barcelona </td><td> 2nd </td><td> 1st </td><td> 3rd </td><td> 3rd </td></tr>
<tr><td>Calgary   </td><td> 3rd </td><td> 2nd </td><td> 1st </td><td> 2nd </td></tr>
</tbody>
</table>
</center>

So Calgary will win after Barcelona gets eliminated in the first round.
 
# Problems with Instant Run-Off Voting - con'd

What happens if the 4 voters in the last column switch their votes to help Calgary?

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Number of Voters</th></tr>
<tr><th></th><th> 7 </th><th> 8 </th><th> 10 </th><th> 4 </th></tr>
</thead>
</tbody>
<tr><td>Athens    </td><td> 1st </td><td> 3rd </td><td> 2nd </td><td> <del>1st</del><ins>2nd</ins> </td></tr>
<tr><td>Barcelona </td><td> 2nd </td><td> 1st </td><td> 3rd </td><td> 3rd </td></tr>
<tr><td>Calgary   </td><td> 3rd </td><td> 2nd </td><td> 1st </td><td> <del>2nd</del><ins>1st</ins> </td></tr>
</tbody>
</table>
</center>

Now Athens gets eliminated in the first round and Barcelona wins.

That's really weird!  

# Monotonicity Criteria

In a fair voting method, when one or more voters change their vote to help a candidate, it should not cause that candidate to lose.  

Instant run-off voting fails the monotonicity criterion.  

Note: In math, the word **monotone** means that when the inputs increase, then the outputs also increase.  For voting that means that if a voter tries to help a candidate, it should actually help.  Some people argue that run-off voting is a very bad system because it is not monotone.  


# Better Methods

In the late 1700's, two French mathematicians got interested in this problem and tried to come up with better systems to run elections.  

<center>
<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Jean_Charles_Borda.jpg" width=300></img> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anonymous_-_Portrait_de_Marie_Jean_Antoine_Nicolas_de_Caritat%2C_marquis_de_Condorcet_%281743-1794%29%2C_philosophe%2C_math%C3%A9maticien_et_homme_politique._-_P1668_-_Mus%C3%A9e_Carnavalet.jpg/440px-thumbnail.jpg" width=300></img>
<figcaption>Jean Charles Borda (left) and Nicholas de Condorcet (right)</figcaption> 
</figure>
</center>

# Borda Count Method

In the Borda count method, candidates get points from each ranked ballot.  If there are $n$ candidates running, then the first place candidate gets $n$ points, second place gets $n-1$, on down to the last candidate who only get 1 point.  Then the winner of the election is the candidate with the most points. 

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Number of Voters</th></tr>
<tr><th></th><th> 10 </th><th> 20 </th><th> 30 </th><th> 5 </th></tr>
</thead>
</tbody>
<tr><td>Candidate A </td><td> 1st <span style="color:red">(3)</span></td><td> 2nd <span style="color:red">(2)</span> </td><td> 3rd <span style="color:red">(1)</span> </td><td> 3rd <span style="color:red">(1)</span></td></tr>
<tr><td>Candidate B </td><td> 2nd <span style="color:red">(2)</span></td><td> 1st <span style="color:red">(3)</span> </td><td> 2nd <span style="color:red">(2)</span> </td><td> 1st <span style="color:red">(3)</span></td></tr>
<tr><td>Candidate C </td><td> 3rd <span style="color:red">(1)</span></td><td> 3rd <span style="color:red">(1)</span> </td><td> 1st <span style="color:red">(3)</span> </td><td> 2nd <span style="color:red">(2)</span></td></tr>
</tbody>
</table>
</center>

In the table above, the points are shown in red.  Each column represents one possible ranking of the candidates, and the number of voters who picked that ranking is shown at the top of the column. 

**Exercise.** Find the winner using Borda count.

<!--
It is easy to figure out the total number of points each candidate gets from the preference matrix.  Just multiply the points in each entry by the number of voters in the column and then add up the rows to get the totals for each candidate. 

* Candidate A gets $10(3) + 20(2) + 30(1) + 5(1) = 105$ points. 

* Candidate B gets $10(2) + 20(3) + 30(2) + 5(3) = 155$ points.

* Candidate C gets $10(1)+20(1) + 3(30) + 5(2) = 130$ points.  

So candidate B wins with the most points.  
-->

# Problems with Borda Count

Jean Charles Borda proposed this method in 1770.  It has the advantage that spoiler candidates are much less likely to be a problem. But Nicholas de Condorcet was very critical of the Borda count method.  

### Condorcet's Criterion

A **Condorcet candidate** is a candidate who would beat all other candidates in a one-on-one run-off (i.e., a Condorcet candidate would win a round robin tournament).  Not every election has a Condorcet candidate, but when one exists, Nicholas de Condorcet argued that they should win the election.  This is known as the **Condorcet criterion** and it is one feature that a good voting method should have.  


# Borda Count Fails the Condorcet Criterion

In fact, Borda count doesn't even always elect the majority candidate!  Suppose 25 kids vote on the best ice cream flavor.

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Number of Voters</th></tr>
<tr><th></th><th> 13 </th><th> 6 </th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td> 1st </td><td> 3rd </td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Vanilla      </td><td> 2nd </td><td> 2nd </td><td> 1st </td><td> 1st </td></tr>
<tr><td>Strawberry   </td><td> 3rd </td><td> 1st </td><td> 2nd </td><td> 3rd </td></tr>
</tbody>
</table>
</center>

**Exercise.** Is there a Condorcet candidate? Why?

**Exercise.** What flavor does Borda count pick?


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
