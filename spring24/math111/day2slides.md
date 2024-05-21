---
title: Fairness Criteria
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

# What Makes a Voting Method Fair?

So far, we have seen some features that an ideal voting system would have:

* **Monotonicity Criterion** - A voter should never cause their preferred candidate to lose by ranking them highly.

* **Condorcet Criterion** - If a candidate would beat all other candidates in one-on-one elections, then that candidate should win.

* **No Spoilers Criterion** - The outcome of the election should not change based on whether or not a candidate who won't win runs.

# Condorcet Methods

There are lots of different Condorcet voting methods.  The basic idea is to check if there is a Condorcet candidate.  If there is one, they win the election.  If not, then use any other method to pick the winner.  

# Arrow's Impossibility Theorem 

Unfortunately, even though we can find methods that satisfy some of the fairness criteria, it is impossible to satisfy them all.  This is a consequence of a famous theorem that was proved by the economist Kenneth Arrow in 1951

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Kenneth_Arrow%2C_Stanford_University.jpg" width=300></img>
</center>

# What is Impossible?

Here is one version of Arrow's theorem (there are other more complicated versions that say a lot more).

**Theorem.** No voting method can satisfy both the Condorcet criterion and the no spoilers criterion when there are 3 or more candidates. 

# Why is it Impossible?

Consider an election with three front runner candidates (assume any other candidates are ranked lower by all of the voters and so don't matter) and just 9 voters. 

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="3">Number of Voters</th></tr>
<tr><th></th><th> 4 </th><th> 3 </th><th> 2 </th></tr>
</thead>
</tbody>
<tr><td>Candidate A  </td><td> 1st </td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Candidate B  </td><td> 2nd </td><td> 1st </td><td> 3rd </td></tr>
<tr><td>Candidate C  </td><td> 3rd </td><td> 2nd </td><td> 1st </td></tr>
</tbody>
</table>
</center>

**Exercise.** Show that there is no Condorcet candidate.  Why not? 

**Exercise.** Why is it impossible for a Condorcet method to pick a winner of this election without one of the losers being a spoiler candidate?  

# Important to Understand

Just because every voting method sometimes either has spoiler candidates or fails to elect a Condorcet candidate doesn't mean that all voting methods are bad.  Usually, most methods work pretty well most of the time.  But none are 100% perfect.  


# The Story So Far

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Voting Method</th></tr>
<tr><th></th><th> Plurality </th><th> IRV </th><th> Borda </th><th>Condorcet*</th></tr>
</thead>
</tbody>
<tr><td> Condorcet Criterion    </td><td> <span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:green">✔</span>   </td></tr>
<tr><td> Monotonicity Criterion </td><td> <span style="color:green">✔ </span></td><td><span style="color:red">✘ </span></td>  <td><span style="color:green">✔ </span></td><td><span style="color:green">✔</span>*</td></tr>
<tr><td> No Spoiler Criterion   </td><td> <span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td></tr>
</tbody>
</table>
</center>

*There are actually several Condorcet methods, not all satisfy the Monotonicity criterion.  

# Approval Voting

It would be nice to have a method that doesn't have spoiler candidates. Several voting methods have that property including one very simple method.  


<center>
<img src="https://assets.nationbuilder.com/unifiedprimary/pages/593/attachments/original/1686072669/Approval_Ballot__Standard__Blue__2_Columns__04_17_23.png?1686072669" width = 400></img>
</center>

# The Story with Approval Voting


<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Voting Method</th></tr>
<tr><th></th><th> Plurality </th><th> IRV </th><th> Borda </th><th>Condorcet</th><th>Approval</th></tr>
</thead>
</tbody>
<tr><td> Condorcet Criterion    </td><td> <span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:green">✔</span>   </td><td> <span style="color:red">✘</span>   </td></tr>
<tr><td> Monotonicity Criterion </td><td> <span style="color:green">✔ </span></td><td><span style="color:red">✘ </span></td>  <td><span style="color:green">✔ </span></td><td><span style="color:green">✔</span></td><td><span style="color:green">✔</span></td></tr>
<tr><td> No Spoiler Criterion   </td><td> <span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:green">✔</span></td></tr>
</tbody>
</table>
</center>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
