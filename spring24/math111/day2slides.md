---
title: Fairness Criteria
author: Brian Lins
institute: Hampden-Sydney College 
date: Wednesday, May 22, 2024
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

.Theorem {
  border-radius: 10px;
  background-color: #eee;
  padding: 5px 10px 5px 10px;
  margin-bottom: 16px;
  border: 1px solid #333;
}
</style>


<!--
NOTE: USE THE FOLLOWING COMMAND TO COMPILE THESE SLIDES:
pandoc -s -t slidy day1slides.md -o day1slides.html
-->

# Problems with Borda Count

Jean Charles Borda proposed the Borda count method in 1770.  It has the advantage that spoiler candidates are much less likely to be a problem. But Nicholas de Condorcet was very critical of the Borda count method.  

<center>
<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Jean_Charles_Borda.jpg" width=300></img> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anonymous_-_Portrait_de_Marie_Jean_Antoine_Nicolas_de_Caritat%2C_marquis_de_Condorcet_%281743-1794%29%2C_philosophe%2C_math%C3%A9maticien_et_homme_politique._-_P1668_-_Mus%C3%A9e_Carnavalet.jpg/440px-thumbnail.jpg" width=300></img>
<figcaption>Jean Charles Borda (left) and Nicholas de Condorcet (right)</figcaption> 
</figure>
</center>


# Condorcet's Criterion

<center>
<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anonymous_-_Portrait_de_Marie_Jean_Antoine_Nicolas_de_Caritat%2C_marquis_de_Condorcet_%281743-1794%29%2C_philosophe%2C_math%C3%A9maticien_et_homme_politique._-_P1668_-_Mus%C3%A9e_Carnavalet.jpg/440px-thumbnail.jpg" width=300></img>
</figure>
</center>


According to Condorcet, if a candidate would beat all the others in head-to-head match-ups, then they should win the election.  


A candidate that would beat every other candidate in a one-on-one run-off is called a **Condorcet candidate**.
Not every election has a Condorcet candidate, but when there is it seems reasonable that they should win.

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

# Condorcet Methods

It is easy to make a voting method that passes the Condorcet criteria.  Just check for a Condorcet candidate by checking every pairwise comparison.  

<center>
<img src="condorcet.png" width=900></img>
</center>


# Checking for a Condorcet Candidate

With 5 candidates, there are 10 possible pairwise match-ups.  That could take a long time to check.  Save time by only checking match-ups until every candidate has lost one (or you find a Condorcet candidate).

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 33 </th><th> 30 </th><th> 25 </th><th> 20</th> <th> 18 </th></tr>
</thead>
</tbody>
<tr><td>Italian</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td></tr>
<tr><td>Mexican</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td></tr>
<tr><td>Thai</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td></tr>
<tr><td>Chinese</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td></tr>
<tr><td>Indian</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td></tr>
</tbody>
</table>
</center>

# Mexican vs. Italian

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 33 </th><th> 30 </th><th> 25 </th><th> 20</th> <th> 18 </th></tr>
</thead>
</tbody>
<tr style="background-color:lightblue"><td>Italian</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Mexican</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td></tr>
<tr><td>Thai</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td></tr>
<tr><td>Chinese</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td></tr>
<tr><td>Indian</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td></tr>
</tbody>
</table>
</center>

Mexican wins.

# Mexican vs. Thai

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 33 </th><th> 30 </th><th> 25 </th><th> 20</th> <th> 18 </th></tr>
</thead>
</tbody>
<tr><td>Italian</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Mexican</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Thai</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td></tr>
<tr><td>Chinese</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td></tr>
<tr><td>Indian</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td></tr>
</tbody>
</table>
</center>

Mexican wins.

# Mexican vs. Chinese

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 33 </th><th> 30 </th><th> 25 </th><th> 20</th> <th> 18 </th></tr>
</thead>
</tbody>
<tr><td>Italian</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Mexican</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td></tr>
<tr><td>Thai</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Chinese</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td></tr>
<tr><td>Indian</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td></tr>
</tbody>
</table>
</center>

Chinese wins.

# Chinese vs. Indian

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 33 </th><th> 30 </th><th> 25 </th><th> 20</th> <th> 18 </th></tr>
</thead>
</tbody>
<tr><td>Italian</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td></tr>
<tr><td>Mexican</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td></tr>
<tr><td>Thai</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Chinese</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Indian</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td></tr>
</tbody>
</table>
</center>

Chinese wins.

# Chinese vs. Italian

So far, only Chinese hasn't lost, but that changes if you compare it with Italian.

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 33 </th><th> 30 </th><th> 25 </th><th> 20</th> <th> 18 </th></tr>
</thead>
</tbody>
<tr style="background-color:lightblue"><td>Italian</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td></tr>
<tr><td>Mexican</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td></tr>
<tr><td>Thai</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td></tr>
<tr style="background-color:lightblue"><td>Chinese</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 1st &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 4th &nbsp; &nbsp;</td></tr>
<tr><td>Indian</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 2nd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 3rd &nbsp; &nbsp;</td><td>&nbsp; &nbsp; 5th &nbsp; &nbsp;</td></tr>
</tbody>
</table>
</center>

So there is no Condorcet candidate, since every restaurant loses at least one match-up. 

# What Makes a Voting Method Fair?

So far, we have seen some features that an ideal voting system would have:

* **Condorcet Criterion** - A Condorcet candidate should win, if there is one.

* **Monotonicity Criterion** - Ranking a candidate highly should never cause a candidate to lose.


* **No Spoilers Criterion** - A third party candidate who won't win shouldn't change the outcome.


# Arrow's Impossibility Theorem 

Unfortunately, even though we can find methods that satisfy some of the fairness criteria, it is impossible to satisfy them all.  This is a consequence of a famous theorem that was proved by the economist Kenneth Arrow in 1951

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Kenneth_Arrow%2C_Stanford_University.jpg" width=300></img>
</center>

# What is Impossible?

Here is one version of Arrow's theorem (there are other more complicated versions that say more).

<div class="Theorem">
**Arrow's Impossibility Theorem.** No voting method can satisfy both the Condorcet criterion and the no spoilers criterion when there are 3 or more candidates. 
</div>

<br>

<div class="incremental">
#### Important:

Every voting method either (i) sometimes has spoiler candidates or (ii) sometimes fails to elect a Condorcet candidate. But usually those bad things don't happen. 
</div>

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


# A Cycle of Preferences

In the last example $A$ beats $B$ and $B$ beats $C$, but $C$ beats $A$.  

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Three-part_cycle_diagram.png" width=500></img>
</center>


**Exercise.** Why is it impossible for a Condorcet method to pick a winner of this election without one of the losers being a spoiler candidate?  


# Important to Understand


* Every voting method sometimes has spoiler candidates or sometimes fails to elect a Condorcet candidate. 

* That doesn't mean that all voting methods are bad or always have problems.  

* Most methods work pretty well most of the time.  




# The Story So Far

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="3">Fairness Criterion</th></tr>
<tr><th></th><th> Condorcet </th><th> Monotonicity </th><th> No Spoilers </th></tr>
</thead>
</tbody>
<tr><td> Plurality method    </td><td> <span style="color:red">✘</span>   </td><td> <span style="color:green">✔</span> </td><td><span style="color:red">✘</span>   </td></tr>
<tr><td> Instant run-off voting</td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td></tr>
 <tr><td> Borda count   </td><td> <span style="color:red">✘</span>   </td><td><span style="color:green">✔</span>   </td><td><span style="color:red">✘</span> </td> </tr>
<tr><td> Condorcet methods* </td><td> <span style="color:green">✔ </span></td><td> <span style="color:green">✔</span>/<span style="color:red">✘</span>* </td>  <td><span style="color:red">✘ </span></td></tr>
</tbody>
</table>
</center>

*There are actually several Condorcet methods, not all satisfy the Monotonicity criterion. <!--*--> 

# Approval Voting

It would be nice to have a method that doesn't have spoiler candidates. Several voting methods have that property including one very simple method.  


<center>
<img src="https://assets.nationbuilder.com/unifiedprimary/pages/593/attachments/original/1686072669/Approval_Ballot__Standard__Blue__2_Columns__04_17_23.png?1686072669" width = 400></img>
</center>

# Approval Voting Example

The preference table below does not have enough information to figure out the approval voting winner.  Why not?

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


# Approval Voting Example

Suppose that the first 13 voters split into two groups.  Ten of them are okay with chocolate and vanilla, but 3 only like chocolate.  Then that column could split into:

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="4">Number of Voters</th></tr>
<tr><th></th><th> 13 </th><th> 6 </th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td style="background-color:lightblue"> 1st </td><td> 3rd </td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Vanilla      </td><td style="background-color:lightblue"> 2nd </td><td> 2nd </td><td> 1st </td><td> 1st </td></tr>
<tr><td>Strawberry   </td><td style="background-color:lightblue"> 3rd </td><td> 1st </td><td> 2nd </td><td> 3rd </td></tr>
</tbody>
</table>
</center>


# Approval Voting Example

Suppose that the first 13 voters split into two groups.  Ten of them are okay with chocolate and vanilla, but 3 only like chocolate.  Then that column could split into:

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 10 </th><th> 3 </th><th>6</th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td>✔</td><td>✔</td><td> 3rd </td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Vanilla      </td><td>✔</td><td> </td><td> 2nd </td><td> 1st </td><td> 1st </td></tr>
<tr><td>Strawberry   </td><td> </td><td> </td><td> 1st </td><td> 2nd </td><td> 3rd </td></tr>
</tbody>
</table>
</center>

# Approval Voting Example

The next group of voters might split evenly into two groups, one that approves their top two flavors, and one that only wants their top choice.  

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="5">Number of Voters</th></tr>
<tr><th></th><th> 10 </th><th> 3 </th><th>6</th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td>✔</td><td>✔</td><td style="background-color:lightblue"> 3rd </td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Vanilla      </td><td>✔</td><td> </td><td style="background-color:lightblue"> 2nd </td><td> 1st </td><td> 1st </td></tr>
<tr><td>Strawberry   </td><td> </td><td> </td><td style="background-color:lightblue"> 1st </td><td> 2nd </td><td> 3rd </td></tr>
</tbody>
</table>
</center>

# Approval Voting Example

The next group of voters might split evenly into two groups, one that approves their top two flavors, and one that only wants their top choice.  

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="6">Number of Voters</th></tr>
<tr><th></th><th> 10 </th><th> 3 </th><th>3</th><th>3</th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td>✔</td><td>✔</td><td></td><td></td><td> 3rd </td><td> 2nd </td></tr>
<tr><td>Vanilla      </td><td>✔</td><td> </td><td>✔</td><td> </td><td> 1st </td><td> 1st </td></tr>
<tr><td>Strawberry   </td><td> </td><td> </td><td>✔</td><td>✔</td><td> 2nd </td><td> 3rd </td></tr>
</tbody>
</table>
</center>

# Approval Voting Example

The next 5 voters all like every flavor about equally; and the one guy at the end only approves of vanilla.  

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="6">Number of Voters</th></tr>
<tr><th></th><th> 10 </th><th> 3 </th><th>3</th><th>3</th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td>✔</td><td>✔</td><td></td><td></td>  <td style="background-color:lightblue"> 3rd </td><td style="background-color:pink"> 2nd </td></tr>
<tr><td>Vanilla      </td><td>✔</td><td> </td><td>✔</td><td> </td><td style="background-color:lightblue"> 1st </td><td style="background-color:pink"> 1st </td></tr>
<tr><td>Strawberry   </td><td> </td><td> </td><td>✔</td><td>✔</td><td style="background-color:lightblue"> 2nd </td><td style="background-color:pink"> 3rd </td></tr>
</tbody>
</table>
</center>

# Approval Voting Example

The next 5 voters all like every flavor about equally; and the one guy at the end only approves of vanilla.  

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="6">Number of Voters</th></tr>
<tr><th></th><th> 10 </th><th> 3 </th><th>3</th><th>3</th><th> 5 </th><th> 1</th></tr>
</thead>
</tbody>
<tr><td>Chocolate    </td><td>✔</td><td>✔</td><td></td><td></td>  <td>✔</td><td></td></tr>
<tr><td>Vanilla      </td><td>✔</td><td> </td><td>✔</td><td> </td><td>✔</td><td>✔</td></tr>
<tr><td>Strawberry   </td><td> </td><td> </td><td>✔</td><td>✔</td><td>✔</td><td></td></tr>
</tbody>
</table>
</center>


<div class="incremental">
#### Exercise.

Which flavor wins this election using approval voting?
</div>

# The Story with Approval Voting


<!--
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
-->

<center>
<table class="bordered">
<thead>
<tr><th></th><th colspan="3">Fairness Criterion</th></tr>
<tr><th></th><th> Condorcet </th><th> Monotonicity </th><th> No Spoilers </th></tr>
</thead>
</tbody>
<tr><td> Plurality method    </td><td> <span style="color:red">✘</span>   </td><td> <span style="color:green">✔</span> </td><td><span style="color:red">✘</span>   </td></tr>
<tr><td> Instant run-off voting</td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td><td><span style="color:red">✘</span>   </td></tr>
 <tr><td> Borda count   </td><td> <span style="color:red">✘</span>   </td><td><span style="color:green">✔</span>   </td><td><span style="color:red">✘</span> </td> </tr>
<tr><td> Condorcet methods </td><td> <span style="color:green">✔ </span></td><td> <span style="color:green">✔</span>* </td>  <td><span style="color:red">✘ </span></td></tr>
<tr><td> Approval voting </td><td> <span style="color:red">✘ </span></td><td> <span style="color:green">✔</span></td>  <td><span style="color:green">✔ </span></td></tr>
</tbody>
</table>
</center>


<!--
# Voting Methods Today

* [FairVote.org](https://fairvote.org/) - is an advocacy group that pushes for the adoption of instant runnoff voting. 

* [STARvoting.org](https://www.starvoting.org/) - is another advocacy group that pushes for adoption of STAR voting which is a method that combines some of the features of Borda count, approval voting, and IRV. 
-->




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
