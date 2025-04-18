---
title: Theory of Computing
css: https://bclins.github.io/mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#000; 
    --link-color: #00e; 


  }

  body {
    text-align: left;
  } 
  </style>
---

\newcommand{\N}{\mathbb{N}}
\newcommand{\Q}{\mathbb{Q}}

## Computer Science 461 - Spring 2025

<center>
Jump to: [CS 461 Homepage](index.html), [Week 1](#week-1-notes), [Week 2](#week-2-notes), [Week 3](#week-3-notes), [Week 4](#week-4-notes), [Week 5](#week-5-notes), [Week 6](#week-6-notes), [Week 7](#week-7-notes), [Week 8](#week-8-notes), [Week 9](#week-9-notes), [Week 10](#week-10-notes), [Week 11](#week-11-notes), [Week 12](#week-12-notes), [Week 13](#week-13-notes), [Week 14](#week-14-notes)
</center>

### Week 1 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 13 | [1.3][1.3] | Proof techniques
Wed, Jan 15 | [2.1 - 2.2](https://introtcs.org/public/lec_02_representation.html#defining-representations) | Notation & encodings
Fri, Jan 17 | [3.1 - 3.7](https://introtcs.org/public/lec_03_computation.html#defining-computation) | Boolean circuits

#### Mon, Jan 13

Today we talked about proof techniques, particularly proof by induction.  We looked at these two examples:

1. Prove that if a set $A$ has $n$ elements, then $A$ has $2^n$ subsets.  

The second example had to do with the famous **Tower's of Hanoi puzzle**( see <https://youtu.be/SMleU0oeGLg>).

2. Use induction to prove that it is always possible to move the disks from one peg to another by moving one disk at a time without breaking the rules.  

You can also translate many induction arguments into recursive algorithms.

3. Write a Python function `sublists(A)` that inputs a list `A` and returns a list containing every sublist of `A`.  

    <details>
    We did this in class and we came up with something like this:

    ```python
    def sublists(A):
        if len(A) == 0:
            return [A]
        last = A[-1]
        B = A[0:-1]
        sublists_without_last = sublists(other_elements)
        sublists_with_last = [s + [last] for s in sublists_without_last]
        return sublists_without_last + sublists_with_last
    ```
    </details>

4. Suppose you have three stack variables (implemented as Python lists):

    ```python
    stack1 = [10 - k for k in range(10)]
    stack2 = []
    stack3 = []
    ```

    Write a function `move_disks(n, start_stack, temp_stack, final_stack)` that recursively moves n disks from the `start_stack` to the `final stack`.  

#### Wed, Jan 15

Today we reviewed mathematical notation, including some new notation we will be using. We defined **alphabets** which are sets of symbols we can use to represent things.  The most common alphabet in computer science is the binary alphabet $\Sigma = \{0, 1\}$. We use the notation $\Sigma^*$ to denote the set of all possible finite length strings constructed from $\Sigma$. 

A set $S$ can be **represented** or **encoded** using an alphabet $\Sigma$ if there is a 1-to-1 function $E: S \rightarrow \Sigma^*$. 

<div class="Theorem">
**Theorem.** Any countable set $S$ can be encoded with a 1-to-1 function $E:S \rightarrow \{0,1\}^*$. 
</div>

We discussed specific encodings such as how to encode the integers $\mathbb{Z}$ and the rationals $\mathbb{Q}$. 

* **Example:** [ASCII characters](https://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg)

We also observed another fact: 

<div class="Theorem"> 
**Theorem.** If we can encode a set $S$ using $\Sigma$, then we can encode tuples in $S$ using $\Sigma$.  
</div>

At the end we considered the set $\{0,1\}^\infty = \{f : f : \N \rightarrow \{0,1\} \}$ which you can think of as the set of all infinitely long strings of zeros and ones.  We finished by proving 

<div class="Theorem">
**Theorem.** There is no one-to-one function from $\{0,1\}^\infty$ into $\{0,1\}^*$.  <!--*-->
</div>

A corollary of this theorem is that $\{0,1\}^\infty$ is uncountable.  


#### Fri, Jan 17

We talked about **Boolean circuits** which are formed by AND, OR, and NOT gates. These can be used to implement any **Boolean expression** formed by the $\wedge$ (AND), $\vee$ (OR), and $\neg$ (NOT) operators. 

<center>
<figure>
<img src="https://imgs.xkcd.com/comics/logic_gates.png"></img>
<figcaption><a href="https://xkcd.com/2497/">XKCD 2497</a></figcaption>
</figure>
</center>

1. Write a Boolean expression that takes three Boolean inputs, $x, y, z$ and returns `true` if $x, y, z$ are all the same, and `false` otherwise. 

2. Show that you can construct the function IF x THEN y ELSE z for any Boolean inputs x, y, z using AND, OR, and NOT gates.  

    <details>
    $$(x \wedge y) \vee (\neg x \wedge z)$$
    </details>

3. Use mathematical induction (and the previous result) to prove the following:

<div class="Theorem">
**Theorem.** Every function $f:\{0,1\}^n \rightarrow \{0,1\}$ can be represented by a Boolean circuit.   
</div>

We say that the Boolean operations ($\wedge$, $\vee$, $\neg$) are a **universal set of operations** since every Boolean function on $\{0,1\}^n$ can be constructed using those operations.  

We finished by talking about how the NAND operation is universal all by itself.  Using just NAND gates, you can construct any Boolean function on $\{0,1\}^n$. 

<div class="Theorem">
**Theorem.** Every function $f:\{0,1\}^n \rightarrow \{0,1\}$ can be represented using NAND operations.   
</div>

4. Show that you can use a NAND gate to implement a NOT gate.

5. Show that you can use two NAND gates to implement an AND gate.

6. Use a truth table to confirm that `(NOT x) NAND (NOT y)` is equivalent to `x OR y`. 

### Week 2 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 20 |            | MLK day, no class
Wed, Jan 22 |            | Impossible computer programs
Fri, Jan 24 | [2.1][2.1] | Intro to finite automata

#### Wed, Jan 22

* **Slides:** [Impossible programs](day4.html)

#### Fri, Jan 24

Last time we saw that some functions $f: \{0,1\}^* \rightarrow \{0,1\}$ cannot be computed by a computer program.  We saw two proofs that seemed very different.  One used a cardinality argument and the other used proof by contradiction to show that the program `check_if_program_returns_one()` is impossible. It turns out that both proofs are actually closely related.

Suppose we make a list of all possible programs on the left column of an infinite table, with a list of all possible input strings at the top of the table.  The values in the body of the table are the output of each program on each input (including the possibility that there is no output).  The table might look like this:

<center>
<table class="bordered">
<tr><th></th><th>Input 1</th><th>Input 2</th><th>Input 3</th><th>$\ldots$</th></tr>
<tr><th>Program 1</th><td>1</td><td>1</td><td>1</td><td>$\ldots$</td></tr>
<tr><th>Program 2</th><td>0</td><td>0</td><td>na</td><td>$\ldots$</td></tr>
<tr><th>Program 3</th><td>0</td><td>na</td><td>1</td><td>$\ldots$</td></tr>
<tr><th>$\vdots$</th><td>$\vdots$</td><td>$\vdots$</td><td>$\vdots$</td><td>$\ddots$</td></tr>
</table>
</center>

We can construct a function $f:\{0,1\}^* \rightarrow \{0,1\}$ that cannot correspond to any program by using the same diagonalization argument that proves that there are uncountably many infinite binary sequences.  That's essentially what we did when we tried to construct the function `check_if_program_returns_one()` last time.  We created a function `reverse_check()` that corresponds to reversing the values on the main diagonal of the table above.  So we were using a **diagonalization** argument, which is the same argument used to prove that there are uncountably many functions $f:\{0,1\}^* \rightarrow \{0,1\}$. 


After that, we introduced finite automata.  We started with this example: An automatic door at a grocery store has sensors on the front and rear.  It opens if the sensor on the front is active.  It won't close until neither of the sensors are active.  You can model this with the following **state diagram**:

<center>
<img src="AutomaticDoorDFA.png" width = 360></img>
</center>

This is an example of a **finite state machine**, also known as a **deterministic finite automata (DFA)**.  

<div class="Theorem">
**Definition.** A **deterministic finite automata (DFA)** consists of 

1. A finite set of **states** $Q$.
2. A finite **alphabet** $\Sigma$ of possible input signals.
3. A **transition function** $\delta: Q \times \Sigma \rightarrow Q$.
4. An **initial** or **start state** $q_0 \in Q$. 
5. A set of **final** or **accepting states** $F \subseteq Q$.  
</div>

1. What are the sets $Q$ and $\Sigma$ for the automatic door example above?

2. Make a table showing the values of the transition function $\delta$ for the automatic door.

3. An automatic toll booth accepts nickles, dimes, and quarters.  The gate won't open until it receives 25 cents.  Draw a state diagram for the toll booth.  What are the sets $Q$ and $\Sigma$?  

4. A combination lock (like the ones at the campus post office) can be modeled as a finite state machine.  What are the states and what are the input signals?  

5. Describe a DFA that can compute the function $f: \{0,1\}^* \rightarrow \{0,1\}$ which returns 1 when the input string has an odd number of 1's and 0 otherwise.


### Week 3 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 27 | [2.2][2.2] - [2.3][2.3] | Regular languages
Wed, Jan 29 | [2.4][2.4] | Nondeterministic finite automata
Fri, Jan 31 | [2.6][2.6] | NFAs and regular languages

#### Mon, Jan 27

Today we started with these questions about DFAs:

1. For the DFA shown below:
<center>
![](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/FiniteAutomata1.png)
</center>
    a. What is the transition function?
    b. Describe the function $f:\{0,1\}^* \rightarrow \{0,1\}$ that this DFA computes.

2. Draw the state diagram for a DFA that computes whether a binary string contains 011.

<div class="Theorem"> 
**Definition.** For any finite alphabet $\Sigma$, a **language** is a subset of $\Sigma^*$.  A language $L \subseteq \Sigma^*$ is **regular** if there is a DFA $M$ such that $L = \{w \in \Sigma^* : M \text{ accepts } w \}$. 
</div>

Conceptually, when we think about a DFA, we understand that it can do two things:

* A DFA can compute a function $f:\Sigma^* \rightarrow \{0,1\}$.
* A DFA can recognize a language $L \subseteq \Sigma^*$.

It's important to understand that these two interpretations of what a DFA does are equivalent, because there is a simple bijection between the set of all possible languages (the power set $2^{\Sigma^*}$ of $\Sigma^*$) and the set of all possible functions $f: \Sigma^* \rightarrow \{0,1\}$.  

3. Construct a bijection from the power set $2^{\Sigma^*}$ to $\{f: f: \Sigma^* \rightarrow \{0,1\}\}$.  

Our solution ended up involving the **indicator function** for a set $L \subseteq \Sigma^*$, where 
$$f_L(w) = \begin{cases} 1 & \text{ if } w \in L, \\ 0 & \text{ otherwise.} \end{cases}$$

#### Wed, Jan 29

We started by constructing some more examples of DFAs. 

1. Find a DFA that computes whether a binary string *ends with* 011. (This is similar, but not the same as a DFA we constructed last time).

2. How many states would a DFA need if you wanted to check whether a binary string has a 1 in the third position from the last?  

Then we talked about these properties of regular languages. 

<div class="Theorem"> 
**Theorem (Finite languages are regular).** If $\Sigma$ is a finite alphabet, then any finite $L \subset \Sigma^*$ is a regular language.  
</div>

3. How would you prove this? If I give you a finite set of strings $L$, how could you turn that into a DFA that recognizes $L$?

<div class="Theorem">
**Theorem (Closure properties of regular languages).** Let $A, B \subseteq \Sigma^*$ be regular languages.  Then 

* The **union** $A \cup B$ is a regular language.
* The **concatenation** $A \circ B = \{ab : a \in A, b \in B\}$ is a regular language.  
* The **Kleene-star** $A^* = \{a_1 a_2 \ldots a_k : k \ge 0 \text{ and each } a_i \in A \}$ is a regular language. 

We say that the set of regular languages over $\Sigma$ is **closed** under the three operations: union, concatentation, and Kleene-star.

</div>

4. Suppose that $A = \{ \text{big}, \text{small}, \text{pet} \}$ and $B = \{ \text{cat}, \text{dog} \}$. What are the elements of $A \circ B$ and $B^*$?  

We proved the first part of the theorem above (regular languages are closed under unions) in class by thinking about how to construct a new DFA $M$ that accepts $A \cup B$ using DFAs $M_A$ and $M_B$ that accept $A$ and $B$ respectively.  To prove this, we answered these questions:

1. If the machine $M$ is built by running both $M_A$ and $M_B$ simultaneously, what are the possible states of $M$?

2. What are the initial states for $M$?

3. What is the transition function for $M$?

4. What are the accepting states of $M$? 

#### Fri, Jan 31

1. We started by asking whether regular languages are closed under intersections.  Can we adapt the proof we gave last time for unions to intersections?  

    <details>
    Yes, regularly languages are closed under intersections. The proof is almost exactly the same as the proof for unions, the only difference is that the DFA to recognize $A \cap B$ has final states $F_A \times F_B$ while the DFA to recognize $A \cup B$ has final states $(F_A \times Q_B) \cup (Q_A \times F_B)$, that is, any pair of states from $Q_A \times Q_B$ where at least one of the two is final. 
    </details>

To prove that regular languages are closed under concatenation, we introduced a new idea: **non-deterministic finite automata (NFAs)**.

We looked at this example: 

<center>
![](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/NFA1.png)
</center>

An NFA can have more than one arrow exiting a state with the same input.  When that happens, the machine splits into multiple copies, one for each possible next state. 

If an NFA enters a state that has exiting arrows labeled with $\epsilon$, then the NFA immediately splits into multiple copies, one where the current state stays the same, and one where the current state moves along each branch labeled $\epsilon$. This can happen several times, if there is a sequence of branches labeled $\epsilon$.  

If there is no arrow leaving a state for a given input signal, that means that the current copy of the machine is a dead end and it does not need to be continued. 

The NFA accepts a string if any of the parallel computations is in an accepting state after the string is read. We answered these questions:

2. Which states are active at each step as we read the input string 01010? 

3. Does this NFA accept the string 01010?

4. Describe the set of all strings in $\{0,1\}^*$ <!--*--> that this NFA will accept.

Here is the technical definition of an NFA.

<div class="Theorem">
**Definition.** A **non-deterministic finite automata (NFA)** consists of 

1. A finite set of **states** $Q$.
2. A finite **alphabet** $\Sigma$ of possible input signals.
3. A **transition function** $\delta: Q \times \Sigma \rightarrow 2^Q$.
4. An **initial** or **start state** $q_0 \in Q$. 
5. A set of **final** or **accepting states** $F \subseteq Q$.  
</div>

The only change from the definition of a DFA is that the transition function for an NFA can return a *set of states* at each step (including, possibly, the empty set).  Think of these multivalued transitions as creating multiple branching computations that run in parallel. If the transition function returns the empty set, that means that that branch of the parallel computation is a dead end and does not continue. 

5. Let $A, B \subseteq \Sigma^*$ be regular languages recognized by DFAs $M_A$ and $M_B$ respectively.  Describe an NFA that uses the $M_A$ and $M_B$ to check if a string is in the union $A \cup B$.  Note that every DFA is an NFA that has a transition function that only ever returns a single state at a time. 

6. Describe an NFA that can check whether or not the 3rd to last digit of a binary string is 1 using fewer states than the DFA we described last time. Hint: What if the NFA "guesses" every time it sees a 1 that that might be the third to last entry.  What should it's states be from that point on?

### Week 4 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Feb 3  | [2.5][2.5] | NFAs and DFAs are equivalent 
Wed, Feb 5  | [2.7][2.7] | Regular expressions
Fri, Feb 7  | [2.8][2.8] | Regular expressions and languages

#### Mon, Feb 3

Today we continued talking about NFAs.  We've been following the [textbook by Meshwari & Smid](https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf) pretty closely this week, so I recommend reading skimming [Section 2.6][2.6] which is what we covered today.  

<!--1. Construct an NFA that accepts a string in $\{0\}^*$ iff the length of the string is a multiple of 2 or 3.  Can you construct a DFA that does the same thing and with the same number of states? -->

1. We described an NFA that recognizes the concatentation $AB$ of two regular languages by running DFAs $M_A$ and $M_B$ in parallel.  We answer these questions about the NFA:

    a. What are the states of the NFA?
    b. What are the final states of the NFA?

2. We also described an NFA that recognizes the Kleene star $A^*$ of a regular language.  The idea is similar to the previous construction, but you need a way to accept the empty string (if it isn't part of $A$).  

To complete the proof that regular languages are closed under these two operations, we need to prove this:

<div class="Theorem">
**Theorem (Equivalence of NFAs and DFAs).** If there is an NFA that recognizes a language $A \subseteq \Sigma^*$, then there is a DFA that also recognizes $A$.
</div>

The proof is surprisingly simple.  An NFA with states $Q$, transition function $\delta: Q \times \Sigma \rightarrow 2^Q$ can be turned into a DFA that has states $2^Q$ and transition function $\delta_2: 2^Q \times \Sigma \rightarrow 2^Q$.  

3. Describe specifically what $\delta_2(S, \sigma)$ returns for any subset $S \subseteq Q$ using $\delta$. 

4. If $F$ denotes the accepting states of the NFA, then what are the corresponding accepting states of the DFA? 

5. If $q \in Q$ is the initial state of the NFA, what is the initial state of the DFA? 

We applied the idea of this proof to [Exercise 5 from Homework 3](HW/HW3.pdf#page=2).

#### Wed, Feb 5

We introduced **regular expressions** (regex). 

<div class="Theorem">
**Definition.** A **regular expression** over an alphabet $\Sigma$ is a string $e$ with symbols from the extended alphabet $\Sigma \cup \{ ~(~ , ~)~ , ~*~ , ~|~ \}$ that has one of the following forms:

1. A **symbol** $e \in \Sigma$ is a regular expression.
2. A **concatenation** $e = e_1e_2$ where $e_1$ and $e_2$ are regular expressions.
3. A **union** $e = e_1|e_2$ where $e_1$ and $e_2$ are regular expressions.
4. A **grouping** $e = (e_1)$ where $e_1$ is a regular expression.
5. A **star** $e = e_1*$ where $e_1$ is either a single symbol or grouping.

We also accept the empty set $\varnothing$ and the empty string $\epsilon$ as regular expressions.  

</div>

Regular expressions are used to match sets of strings (i.e., languages over $\Sigma$). 

* $e_1e_2$ matches any concatenation of a string matched by $e_1$ with a string matched by $e_2$.  
* $e_1|e_2$ matches anything matched by $e_1$ or $e_2$.  
* $e_1*$ matches any finite concatenation of strings that $e_1$ matches (including zero matches). 

1. Describe what the following regular expressions represent:

    a. `(0|1)0*`
    b. `Σ*1Σ*`
    c. `(0|1)*`

2. Write a regular expression that recognizes the base-10 decimal form of any integer that is a multiple of 5. 

Most programming languages use [Perl compatible regular expressions](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions) which have several additional features to make it easier to work with regular expressions.  Here are some examples we talked about in class. 

<center>
<table class="bordered">
<tr><th colspan=2>Special Symbols</th></tr>
<tr><td>`\s` </td><td> whitespace (tabs, spaces, etc.) </td></tr>
<tr><td>`\w` </td><td> alphanumeric (letters & digits) </td></tr>
<tr><td>`\d` </td><td> digits (0-9) </td></tr>
<tr><td>`.`  </td><td> wildcard matches any single character </td></tr>
<tr><td>`\`  </td><td> escape (for special characters) </td></tr>
</table>


<table>
<tr>
<td><table class="bordered">
<tr><th colspan=2>Extra Operators</th></tr>
<tr><td>`(e)+` </td><td> at least one </td></tr>
<tr><td>`(e)?` </td><td> maybe one (0 or 1) </td></tr>
</table>
</td><td><table class="bordered">

<tr><th colspan=2>Square Brackets</th></tr>
<tr><td colspan=2>Can match one or more ranges of characters</td></tr>
<tr><td>`[a-z]` </td><td> any lower case letter </td></tr>
<tr><td>`[a-zA-Z]` </td><td> any letter </td></tr>
<tr><td>`[^a-z]` </td><td> anything except a-z </td></tr>
</table>
</td></tr>
</table>
</center>

Here is a simple Python regex example:

```python
import re 

s = "My pet dog likes to go to the park."
expr = "pet\s(dog|cat|bird)"
match = re.search(expr, s)
print(match)

```

3. Write a regular expression that would match any e-mail address of the form `name@domain.extension`.  

5. Find a regular expression over the alphabet $\Sigma = \{0,1\}$ that matches all strings that start with a 1, end with a 1, and have an even number of zeros between.  

We stated, but did not prove the following theorem. 

<div class="Theorem">
**Theorem (Equivalence of regular expressions and regular languages).** A language $A \subseteq \Sigma$ is regular if and only if there is a regular expression that describes it. 
</div>


5. Find an NFA that recognizes the same language as the regular expression `(ab|a)*`. Use the ideas from the previous classes about how to build NFAs to find the union, concatenation, and Kleene star of languages.

#### Fri, Feb 7

Today we talked about the proof of the theorem from last time that regular languages and regular expressions are equivalent. One direction is easy: every language described by a regular expression is regular.  This is because we already know that regular languages are closed under the union, concatenation, and Kleene-star operations and we also know that any finite set of strings is a regular language.  

Therefore, we should be able to solve this example, which we didn't have time for on Wednesday. 

1. Find an NFA that recognizes the same language as the regular expression `(ab|a)*`. Use the ideas from the previous classes about how to build NFAs to find the union, concatenation, and Kleene star of languages.

To prove the converse, we described an algorithm for converting NFAs to regular expressions. Note that the Maheshwwari & Smid textbook describes a different approach to convert an NFA into a regular expression in [Section 2.8][2.8].  Our approach is to use a generalized NFA:

<div class="Theorem">
**Definition.** A **generalized non-deterministic finite automata** (GNFA) is just like an NFA, except for the following changes:

1. There is only one accept state and it is not the start state.  

1. No transitions enter the start state or leave the accept state. 

1. Transitions can be triggered by input strings that match a regex (not just single symbols).  

</div>

To finish the proof, we make two observations:

First, you can convert any NFA to a GNFA by adding a special start state that has an epsilon transition to the original start state and a new accept state that has an epsilon transition from any old final state. 

Second, if you have a GNFA with $n > 2$ states, there is an equivalent GNFA with $n-1$ states, because you can remove any state (other than the initial and final states) and replace incoming/outgoing transitions with transitions described by a regex.  

We did the following example to illustrate.

2. Let Σ={A,C,G,T}.  Convert the following NFA to a GNFA, and then remove states until there are only 2 (the start and accept states).

<center>
![](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/ACGT.png)
</center>

<!-- NOTE: YOU GET MORE THAN ONE ANSWER WHEN YOU DO THIS, AND IT DEPENDS ON HOW YOU DO IT (MAKE SURE TO INCLUDE ANY PATH THAT LOOPS BACK TO A STATE AS A LOOP! -->

3. What regular expression is equivalent to the NFA above? 

We finished by talking about languages which are not regular.  One simple language that is not regular is the following: 

$$A = \{w \in \{0,1\}^* : w \text{ has an equal number of } 0 \text{s and } 1 \text{s} \}.$$


<!--

-->


### Week 5 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 10 | [2.9][2.9] | Non-regular languages & the pumping lemma
Wed, Feb 12 | [2.9][2.9] | More non-regular languages
Fri, Feb 14 |            | Review


#### Mon, Feb 10

<div class="Theorem"> 
**Theorem (Pumping Lemma).** If $L \subseteq \Sigma^*$ is a regular langauage, then $L$ has a length $p \ge 1$ (called the **pumping length** of $L$) such that if a string $w \in L$ is longer than $p$, then $w = xyz$ where $x, y, z \in \Sigma^*$ are substrings such that 

1. The middle part $y$ is not the empty string (i.e., $|y| \ge 1$),
2. The first two parts have length $|xy| \le p$, and 
3. The middle part can be "pumped", that is $xy^nz \in L$ for all $n \ge 0$. 
</div>

Here is a picture that helps to understand what is going on.  It also gives a clue about why this theorem is true.

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Pumping_Lemma_for_regular_languages_diagram.png" width=500></img>
</center>

The proof is really simple.  If a finite state machine reads a long enough string, eventually it has to loop back to the same state twice.  The input signals that caused the machine to take that loop make up the substring $y$ in the theorem.  

The pumping lemma is a useful tool to prove that some languages are not regular.  You can use the pumping lemma to give a proof by contradiction.  Be careful, the pumping lemma cannot be used to prove that a language *is* regular.  

<div class="Theorem">
**Steps to prove a language is not regular**

1. Temporarily assume the language $L$ is regular and has pumping length $p$.  

2. Try to construct a string in $L$ so that:

    a. The first part of the string is longer than $p$.
    b. No substring inside the first part can be pumped. 

3. If you can't pump the string, that contradicts the pumping lemma, so $L$ can't be regular.
</div>

We applied this technique to prove that the following languages are not regular. 

1. $L = \{w : w \text{ has an equal number of 0 and 1's}\}$

<!--2. $L = \{ww : w \in \{0,1\}^* \}$ -->

2. $L = \{0^{n^2} : n \in \N \}$.

Here is a nice [meme proof using the pumping lemma from Barak textbook](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/pumpinglemmaproof.png).

#### Wed, Feb 12

Today we looked at more examples of regular and non-regular languages.

1. $L = \{w \in \{0, 1\}^* : w \text{ is a palindrome} \}$.

2. $L = \{w : w \text{ contains an equal number of } 01 \text{ and } 10 \text{ substrings}\}$.

The converse of the pumping lemma is not true.  So you can't use the pumping lemma to prove that a language is regular.  In fact, here is a language that is non-regular, but every string in the language is pump-able!

$$L = \{a^i b^j c^k : i, j, k \ge 0 \text{ and if } i = 1 \text{ then } j = k\}.$$

3. Explain why there is a pumping number $p$ (in fact $p=1$ works) such that any string $w \in L$ can be "pumped".  

4. Despite this, explain why $L$ is not a regular language. Hint: if there was a DFA that recognizes $L$, what other DFAs could you construct?


Many programming languages, including Python & Javascript allow backreferences to previous groups in a regular expression. A group is a part of the regular expression inside parentheses.  The special symbol `\1` refers to anything matched by the first group in the regular expression. Similarly `\2` refers back to anything matched by the second group, and so on. For example: the regular expression `"(\w\w*) \1"` would match any repeated word like "word word" or "dog dog".  *I tried to demonstrate this in class, but I got tripped up because Python requires the regular expression to be entered as a* [raw string](https://docs.python.org/3/library/re.html#:~:text=raw%20string).

```python
import re

regex = r"(\w\w*) \1" # need the r before the quotes to indicate that this is a raw string

print(re.search(regex, "Did I type the the same word twice?"))
```

5. Explain why regular expressions with backreferences are not really regular expressions (at least not according to our definition).  Show that they can match non-regular languages. 


#### Fri, Feb 14

Today we went over some of the problems from [homework 4](HW/HW4.pdf) and the [midterm 1 review problems](midterm1review.pdf).

### Week 6 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Feb 17 |            | **Midterm 1**
Wed, Feb 19 | [3.1][3.1] - [3.2][3.2] | Context-free grammars
Fri, Feb 21 | [3.3][3.3] | Parsing and parse-trees            

#### Wed, Feb 19

Class canceled because of snow. 

#### Fri, Feb 21

Today we introduced context-free grammars. 

<div class="Theorem">
**Definition.** A **context-free grammar (CFG)** consists of 

1. A set of **variables** $V$
2. A set of **symbols** $\Sigma$ (disjoint from $V$)
3. A set of **rules** of the form $A \rightarrow B$ where $A \in V$ and $B \in (\Sigma \cup V)^*$
4. A **start state** $S \in V$. 
</div>

 <!-- We started with some simple examples from Wikipedia (<https://en.wikipedia.org/wiki/Context-free_grammar#Examples>) to illustrate the definition.  -->

1. We explained how the context free grammar

    ```perl
    S         →  aSb
    S         →  ε
    ```

    generates the (non-regular) language
    $$L = \{a^n b^n : n \in \N\}.$$

2. We looked at the example of a CFG and used it to identify the parts $(V,\Sigma, R, S)$ in the formal definition.  

    ```perl
    S         →  <subject> <verb> <object>
    <subject> →  <article> <noun>
    <article> →  a | the
    <noun>    →  boy | girl | dog
    <verb>    →  runs | walks | talks
    <object>  →  <prep> <subject>
    <prep>    →  to |from
    ```

    Draw a parse tree that shows how to derive the sentence "The boy talks to the girl."

3. Find a CFG for the language of matched parentheses.  

    <details>
    Seth suggested this CFG:

    ```perl
        S         →  (S)
        S         →  ()S
        S         →  ε
    ```

    This isn't correct, but it is a good first guess.  Explain why this grammar cannot be used to construct the string `(())()`. 

    </details>

4. Find a context-free grammar for the language 
$$L = \{w \in \{0,1\}^* : w \text{ has an equal number of } 0\text{'s and } 1 \text{'s} \}.$$

We didn't get to this example, but it is good practice too.

5. Describe how to generate the string `(a + a) * a` using the context free grammar below:

    ```perl
    <expr>    →  <expr> + <term> | <term>
    <term>    →  <term> * <factor> | <factor>
    <factor>  →  (<expr>) | a
    ```



We finished by looking at this example that gives the idea of how a programming language can be though of as a context-free language.  

* <https://en.wikipedia.org/wiki/File:C_grammar_stmt2_svg.svg>

<!--
#### Wednesday, September 27

Today, we briefly went over the first midterm exam. I talked about the [grading scale](gradingScale.html) and went over some of the problems . 

Today we spent more time discussing context free grammars. We talked about **left derivations** and **right derivations**

We looked at this example: 

$$E \rightarrow ~E+E~ | ~E*E~ | ~(E)~ | ~a~ $$

1. Use this CFG to derive the string $a+a*a$.  Try to use a left derivation.  Then use a right derivation.  

2. Show that that string actually has more than one left derivation.  

A grammar is **ambiguous** if there are strings with more than one left derivation.  If every left-derivation is unique, then the grammar is **unambiguous**. Note that some CFGs have unambiguous grammars, but so do not.  This alternate grammar generates the same language as our first example, but is unambiguous:

```
    <expr>    →  <expr> + <term> | <term>
    <term>    →  <term> * <factor> | <factor>
    <factor>  →  (<expr>) | a
```

We looked at this [ambiguous grammar](ambiguousGrammar.html).

3. Show that the sentence "the girl touches the boy with the flower" has two left derivations and those derivations correspond to two different meanings this sentence can have.  
<!--
Tips on constructing context free grammars:

1. To construct the union of two context-free languages: Use a new start variable with this production rule: $S \rightarrow S_1 | S_2$ where $S_1, S_2$ denote the start variables for the CFG's for $L_1$ and $L_2$ respectively.  From that point on, you just separately apply the rules for those two grammars.

2. It is 

#### Friday, September 29

Today we discussed the **pumping lemma for context-free languages**.  This is a little more complicated than the pumping lemma for regular languages. We drew some pictures of parse trees to give an intuitive explanation for why this new pumping lemma is true (see [page 126 in Maheshwari & Smid](https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=134)). In particular, we looked at how the string `a+a*a` gets generated by the grammar:

```
    E →  E + T | T
    T →  T * F | F
    F →  (E) | a
```

In the parse tree, there is a branch where the variable `T` gets repeated, and that lets us "pump".  

We used the pumping lemma to prove that the following languages are not context-free:

1. $L = \{a^n b^n c^n : n \in \N\}$.

1. $L = \{a^{n^2} : n \in \N\}$.

1. $L = \{w = w : w \in \{a, b\}^* \}$.

We also talked about how there are always an uncountable number of languages over a finite alphabet $\Sigma$ (since the set of languages is the power set of $\Sigma^*$), and a computer can only compute a countable set of languages, so it is not surprising that most languages are not context-free.  

--->

### Week 7 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Feb 24 |  [3.3][3.3] | Parsing and parse-trees    
Wed, Feb 26 | [3.8][3.8] | The pumping lemma for CFGs
Fri, Feb 28 | [3.5][3.5] - [3.6][3.6] | Pushdown automata 


#### Mon, Feb 24

Last time we used parse trees, but didn't define them.  

<div class="Theorem">
**Definition (Parse Tree).** Given a context free grammar $(V, \Sigma, S, R)$ and a string $w \in \Sigma^*$ that can be generated by the grammar, a **parse tree** for the string is a labeled [ordered tree](https://en.wikipedia.org/wiki/Tree_(graph_theory)#Ordered_tree) with nodes labeled by elements in $V \cup \Sigma$ such that the arrows leaving a node labeled by an element in $V$ correspond to one of the rules in $R$ and the nodes labeled by elements in $\Sigma$ are terminal (no arrows leave them).  
</div>

Today we looked at some more examples of Context Free Grammars. [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) is a family of programming languages that have a particularly simple syntax.  Lisps are built around S-expressions, which are defined by the following CFG rules:

```perl
S → (L) | A
L → S | S L
A → <number> | <string> | <symbol>
```

For the variables above, `S` represents any S-expression, `L` represents a list, and `A` represents an atom, which can be a number, a string, or a symbolic expression like a variable name or operator (among other things).  

1. Draw a parse tree for the S-expression `(* (+ 5 6) (- 4 2))`. Each node in the parse tree should be labeled with a variable (or symbol if it is a terminal node).  

2. Is it possible to draw a different parse tree for this expression?  Why or why not? 

The S-expression grammar is **unambigious**, every expression has only one possible parse tree.  Unfortunately, many CFGs are **ambiguous**, i.e., they allow strings with more than one parse tree.  Here is a simple example. 

```perl
E → E + E 
E → E * E 
E → (E) 
E → a
```

3. Use this CFG to derive the string `a+a*a` two different ways.  

In some (but not all cases) it is possible to find two CFGs that generate the same set of strings, but one is ambiguous and the other isn't.  For example, if we change the grammar above to distinguish between expressions that are terms (`T`), or factors (`F`) or sums of terms (`E`), then we can make an equivalent CFG that is unambiguous:

```perl 
E  →  E + T | T
T  →  T * F | F
F  →  (E) | a
```

<!--
Sentences in ambiguous grammars are hard to parse, since they might have different meanings depending on how they are derived. For example, the sentence "the girl touches the boy with the flower" is ambiguous in English.  
-->

We say that a language is **context-free** if it can be generated by a CFG.  We use the shorthand CFL to denote a context-free language.

<div class="Theorem">
**Theorem (Regular Languages are Context-Free).** Every regular language is context-free.
</div>

We'll prove this later by showing that context-free grammars correspond to a special kind of automata with a (potentially infinte) stack called a pushdown automata.  But today, we talked about how you can prove this theorem using the three operations (union, concatenation, and Kleene star) for regular expressions.  

4. If $A$ and $B$ are both context-free languages, explain why the union $A \cup B$ is context free. 

5. If $A$ and $B$ are both context-free languages, explain why the concatenation $A \circ A$ is context free.

6. Explain why the Kleene star of a CFL is context-free. 


<!--
We looked at this [ambiguous grammar](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/ambiguousGrammar.html).

3. Show that the sentence "the girl touches the boy with the flower" has two left derivations and those derivations correspond to two different meanings this sentence can have.  



Tips on constructing context free grammars:

1. To construct the union of two context-free languages: Use a new start variable with this production rule: $S \rightarrow S_1 | S_2$ where $S_1, S_2$ denote the start variables for the CFG's for $L_1$ and $L_2$ respectively.  From that point on, you just separately apply the rules for those two grammars.
-->

#### Wed, Feb 26

<div class = "Theorem">
**Theorem (Pumping Lemma for CFLs)**. If $L \subseteq \Sigma^*$ is a context-free language, then $L$ has a length $p \ge 1$ (called the **pumping length** of $L$) such that if a string $w \in L$ is longer than $p,$ then $w = uvxyz$ where $u, v, x, y, z \in \Sigma^*$ are substrings such that 

1. At least one of $v$ or $y$ is not empty (i.e., $|vy| \ge 1$),
2. The middle part has length $|vxy| \le p$, and 
3. Both $v$ and $y$ can be "pumped", that is $uv^nxy^nz \in L$ for all $n \ge 0$. 
</div>

This is a little more complicated than the pumping lemma for regular languages. We drew some pictures of parse trees to give an intuitive explanation for why this new pumping lemma is true (see [page 126 in Maheshwari & Smid](https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=134)). 

We started by looking at two examples:

1. Show that the language $L = \{a^n b a^n : n \in \N \}$ is context-free but not regular. 

2. What is the pumping length for the language $L$ above?  

3. Show that $L = \{w = w : w \in \{a, b\}^* \}$ is not context-free. 

<!--
In particular, we looked at how the string `a+a*a` gets generated by the grammar:

```
    E →  E + T | T
    T →  T * F | F
    F →  (E) | a
```

In the parse tree, there is a branch where the variable `T` gets repeated, and that lets us "pump".  
-->

4. Show that $L = \{a^{n^2} : n \in \N\}$ is not context-free.

We didn't have time for this last problem, so I left it as an exercise to consider:

5. $A = \{a^n b^n c^n : n \in \N\}$ is not context-free.  What about the language $B \subset \{a,b,c\}^*$ that consists of all strings with an equal number of a's, b's, and c's?  Is that context-free?  

<!--
We also talked about how there are always an uncountable number of languages over a finite alphabet $\Sigma$ (since the set of languages is the power set of $\Sigma^*$), and a computer can only compute a countable set of languages, so it is not surprising that most languages are not context-free.  -->

#### Fri, Feb 28

Today we talked about **pushdown automata (PDA)** which are basically just NFAs with a stack. Note that the [book calls these nondeterministic pushdown automata][3.5]. There are also deterministic pushdown automata, but those turn out to be more complicated, and only the nondeterministic pushdown automata are actually equivalent to CFGs. So, we will always assume that our PDAs are nondeterministic, unless specifically mentioned otherwise. We started with this example:

<center>
![](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/NPDA1.png)
</center>

This PDA accepts the language $L = \{a^n b^n : n \in \N\}$.  Notice that each arrow has three parts, for example the first loop is labeled $a, \epsilon/a$ which means you can take this loop if you read an $a$ from the input string, and pop $\epsilon$ (i.e., nothing) from the stack, and then push $a$ onto the stack.  We will always use this notation (read, pop/push) for each arc. 

PDAs work just like NFAs, except they have this extra rule: *You only accept a string if you finish in an accepting state and the stack is empty.* 

Some things to note:

1. Since the machine is nondeterministic, you can have more than one state (and more than one stack) branching off whenever you have a choice about which arrow to take.  

2. If you are in a state and there is no valid arrow to take, then that state dies.  

Here is the formal definition. 

<div class="Theorem">
**Definition.** A **nondeterministic pushdown automata (PDA)** consists of 

1. A finite set of **states** $Q$.
2. A finite **input alphabet** $\Sigma$.
3. A finite **stack alphabet** $\Gamma$.
4. A **transition function** $\delta: Q \times (\Sigma \cup \{\epsilon\}) \times (\Gamma \cup \{ \epsilon \}) \rightarrow 2^{Q \times (\Gamma \cup \{\epsilon\})}$. 
5. A **start state** $q_0 \in Q$. 
6. A set of **accepting states** $F \subseteq Q$. 

Note: Some alternative definitions allow PDAs to push more than one symbol from $\Gamma$ onto the stack in one step.  
</div>

We looked at these questions:

1. For the PDA below, describe the language that it accepts.  
<center>
![](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/NPDA2.png)
</center>

2. Describe an PDA that accepts the language $L = \{ a^n b^m : n \ge m \}$.

3. Describe an PDA with just one state that accepts the language of balanced parentheses.  

4. How many distinct PDAs with 5 states, and $\Sigma = \Gamma = \{0,1\}$ are possible (assuming you only push at most one variable onto the stack at each step), according to the definition?  

<!--
#### Wednesday, October 4

Today we talked about the equivalence between CFGs and NPDAs.  We sketched the proof of one direction: that if you have a CFG, then there is an NPDA that accepted the same language.  

The idea of the proof is to create an NPDA with three states.  In state $q_0$ you immediately transition to $q_1$ reading nothing and push `S$` on the stack (where `$` is a special symbol to mark the bottom of the stack).  Then in state $q_1$ you have two different types of transitions that loop back to $q_1$:

1. Transitions where you read nothing and pop a variable off the stack, then push the output of one of the grammar rules for that variable back onto the stack. (I called these red transitions.) You have one red transition for each of the rules in the grammar.

2. Transitions where you read a symbol from the input and pop that symbol off the stack.  (I called these blue transitions.) You have one blue transition for each of the terminals in the grammar.

Finally, you have a final transition to the accepting state $q_2$ which involves reading nothing and popping the `$` off the stack.  If you have finished reading the input when you do this, you will accept the string.  

We illustrated how this idea works using the grammar and the input string `aabbbb`. 

```
    S →  AB
    A →  aAb | ε
    B →  bB | b
```

We finished by describing how Deterministic Pushdown Automata (DPDAs) are different from Nondeterministic Pushdown Automata (NPDAs) and the hierarchy of different languages that we have seen so far.  We looked at this example DPDA:

<center>
![](https://people.hsc.edu/faculty-staff/blins/classes/fall23/coms461/DPDA.png)
</center>

-->

### Week 8 Notes

Day  | Section  | Topic
:----:|:---:|:------------------ 
Mon, Mar 3  | [3.7][3.7] | Pushdown automata & context-free grammars
Wed, Mar 5  | [3.4][3.4] | Chomsky normal form
Fri, Mar 7  | [4.1][4.1] - [4.2][4.2] | Definition of Turing machines


#### Mon, Mar 3

Today we talked about the equivalence between CFGs and PDAs. 

<div class="Theorem">
**Theorem (Equivalence of CFGs and PDAs).** A language is context-free if and only if there is a pushdown automata that recognizes it.
</div>

We sketched the proof of one direction: that if you have a CFG, then there is an PDA that accepts the same language.  The other direction is harder to prove, so we skipped it, but you can find the details in more advanced theory of computing textbooks. 

The idea of the proof for the forward direction is to create an PDA with three states.  In state $q_0$ you immediately transition to $q_1$ reading nothing and push `S$` on the stack (where `$` is a special symbol to mark the bottom of the stack and `S` is the symbol for the start variable).  Then in state $q_1$ you have two different types of transitions that loop back to $q_1$:

* (<span style="color:red">Red loops - one for each rule </span>) 
    i. Read nothing 
    ii. Pop a variable off the stack 
    iii. Push the output of one of the grammar rules for that variable back onto the stack. 

* (<span style="color:blue">Blue loops - one for each input alphabet symbol</span>) 
    i. Read a symbol from the input 
    ii. Pop that symbol off the stack.  
    iii. Push nothing


Finally, you have a final transition to the accepting state $q_2$ which involves reading nothing and popping the `$` off the stack.  If you have finished reading the input when you do this, you will accept the string.  

We illustrated how this idea works using the grammar and the input string `aabbbb`. 

```perl
    S →  AB
    A →  aAb | ε
    B →  bB | b
```

After this example, we talked briefly about normal forms for context-free grammars.  One important normal form is the Chomsky normal form, which we will talk about next time.   

For a context-free grammar $G$, we write $L(G)$ to denote the language generated by $G$.  

1. A variable $A$ in a context-free grammar $G$ is **useless** if there are no strings in $L(G)$ that have a parse tree with $A$ as one of the nodes.  Prove that if $G$ has any useless variables, then there is another context-free grammar $H$ that generates the same language, but does not have any useless variables.  

    <details>
    Let $H$ be the CFG obtained by removing all useless variables from $G$ and all rules that reference those useless variables.  We have to show that $H$ and $G$ both generate the same language.  If $w \in L(G)$, then there is a parse tree for $w$ that doesn't contain any useless variables.  Therefore the same parse tree is a parse tree for generating $w$ using $H$, so $w \in L(H)$.  If $w \in L(H)$,  then all of the variables and rules for the parse tree to generate $w$ are also variables and rules of $G$.  Therefore $w \in L(G)$ which proves that $L(H) = L(G)$. $\square$ 
    </details>


#### Wed, Mar 5


<div class="Theorem">
**Definition (Chomsky normal form).** A context free grammar $G = (V, \Sigma, R, S)$ is in **Chomsky normal form** if all rules are in one of the following forms:

1. $S \rightarrow \epsilon$
2. $A \rightarrow BC$
3. $A \rightarrow a$ 

where $A, B, C \in V$, $a \in \Sigma$, and neither $B$ nor $C$ is the start variable. 
</div>

One nice feature of Chomsky normal form is that it makes it easier to check whether a string can be generated by a grammar.  

<div class="Theorem">
**Definition (Equivalent grammars).** Two context-free grammars are equivalent if they generate the same language.  
</div>

It turns out that there is no general algorithm to check whether or not two CFGs are equivalent.  But all CFGs can be converted to Chomsky normal form.  

<div class="Theorem">
**Theorem (Chomsky).** Every CFG is equivalent to a CFG in Chomsky normal form.
</div>

The proof is the following algorithm to convert any CFG into Chomsky normal form.  

* **Step 1 (Preliminaries).** 

    i. If any rule has $S$ on the right-hand side, then add a new start variable $S_0$ and rule $S_0 \rightarrow S$ so that the start variable never appears on the right side of a rule. If the grammar can generate the empty string, then add the rule $S_0 \rightarrow \epsilon$. 
    ii. Remove any **$\epsilon$-rules**.  If $A \rightarrow \epsilon$ is a rule (where $A$ is not the start variable), then for any rule with $A$ on the right-hand side, add an alternative version without the $A$.
    iii. Remove any **unit rules**. Replace any rule $A \rightarrow B$ with rules that directly transition from $A$ to any string that $B$ can transition to.  

* **Step 2 (Add terminal variables).** For each terminal symbol $a \in \Sigma$, create a variable $T_a$ and add the rule $T_a \rightarrow a$.  If a rule has more than one symbol in its output, then replace any terminal symbols with their corresponding terminal variables. 

* **Step 3 (Break up long rules).** For any rule of the form
$$A \rightarrow X_1 X_2 \cdots X_n$$
where $n > 2$, create new variables $U_1, \ldots, U_{n-2}$ and so that you can replace the long rule with the following shorter rules:
$$U_1 \rightarrow X_1 U_2$$
$$U_2 \rightarrow X_2 U_3$$
$$\cdots$$
$$U_{n-2} \rightarrow X_{n-1} X_n$$

At the end of this process your grammar will be in Chomsky normal form.  

1. Convert the following CFG to Chomsky normal form. 

    ```perl
    S → ABa
    A → aab
    B → Ac
    ```

2. Convert the following CFG to Chomsky normal form. 

    ```perl
    S → aSa | A
    A → abA | b
    ```

3. Explain why the following algorithm won't work to check if any two CFGs are equivalent:

    * Step 1 - Convert both CFGs to Chomsky normal form.
    * Step 2 - Check to see if the two Chomsky normal forms are the same. 

We didn't have time for it today, but here is one more practice example:

4. Convert the following CFG to Chomsky normal form. 

    ```perl
    S → ASA | A | ε
    A → aa | ε
    ```

#### Fri, Mar 7

Today we introduced **Turing machines** (TMs) which are the most general model of computation that we will discuss.  Turing machines are deterministic finite state machines, with an infinite tape that the machine can move along, and both read and write from.  Like DFAs and PDAs, Turing machines can accept or reject an input string, but Turing machines also have a third possibility: they might loop forever and neither accept nor reject. 

Here are some differences between finite automata and Turing machines:

* The input string is initially written on the tape and the Turing machine is initially pointed at the first symbol of the input string. 

* Aside from the input string, the tape is initially filled with special blank symbols (which we'll denote □). 
 
* The Turing machine can read and (optionally) replace one symbol on the tape at a time before moving left or right.

* The TM can have both accept and reject states.  When the Turing machine enters one of these states, it immediately halts and the program is complete. 

* A TM might loop forever without ever accepting or rejecting a string.    

 
We looked at these examples of TMs:

1. Describe an algorithm that a Turing machine could implement to check if a string in $\{a,b,=\}^*$ is in the language $\{w=w : w \in \{a,b\}^* \}$. Use the tape alphabet $\{a,b,=,x, □\}$, where you can use an $x$ to mark symbols that have been dealt with.  Hint: How could you check that the first character of the string matches the first character after the equals sign? 

2. Draw a state diagram for the Turing machine above.  Use the notation 
$$\text{read} \rightarrow \text{write}, \text{move}$$ 
to label transitions.  The move can be either $L$ or $R$, and you can use regular expressions for the character to read.  The character to write is optional, you can move without writing anything.  
<!-- NOTE FOR NEXT TIME: THIS STATE DIAGRAM IS WAY TOO COMPLICATED TO DO IN CLASS.  DO A SIMPLER EXAMPLE. THERE ARE SIMPLE 3 STATE EXAMPLES YOU COULD USE INSTEAD.-->

3. Describe an algorithm that a TM could use to accept the language $\{a^{2^n} : n \ge 0\}.$  Hint: Try moving from left to right, crossing out every other $a$ as you go.  How will you know if there were an even number of a's?  Could you repeat the process?  When should you stop? 

We didn't get to it in class, but here is a state diagram for a TM that can accept the language 
$$L = \{a^{2^n}: n \ge 0\}.$$


<center>
<img src="TM.png" width = 600></img>
</center>

<!-- Note to self: These are examples 3.7 & 3.9 in Sipser.-->


### Week 9 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Mar 17 | [4.2][4.2] | Turing computable functions
Wed, Mar 19 | [4.3][4.3] | Multi-tape Turing machines 
Fri, Mar 21 | [4.4][4.4] | Church-Turing thesis


#### Mon, Mar 17

Here is the formal definition of a Turing machine.

<div class="Theorem">
**Definition.** A **Turing machine** consists of 

1. A finite set of **states** $Q$.
2. A finite **input alphabet** $\Sigma$ that doesn't include the blank symbol □.
3. A finite **tape alphabet** $\Gamma$ such that $\Sigma \subset \Gamma$ and $□ \in \Gamma$. 
4. A **transition function** $\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$. 
5. A **start state** $q_0 \in Q$. 
6. An **accept state** $q_{\text{accept}} \in Q$. 
7. A **reject state** $q_{\text{reject}} \in Q$. 

</div>

Because Turing machines can loop forever, there is a difference between recognizing/accepting a language and deciding a language. 

<div class="Theorem">
**Definition.** A Turing machine **accepts** (or **recognizes**) a language $L \subseteq \Sigma^*$ if the set of strings that it accepts is exactly $L$.  
</div>

A Turing machine that only recognizes a language $L$ might loop forever when you give it a string that is not in $L$.

<div class="Theorem">
**Definition.** A Turing machine **decides** a language $L \subseteq \Sigma^*$ if it not only recognizes $L$, but also rejects every string that is not in $L$. 
</div>

Both of the example Turing Machines above actually decide their languages, since they will successfully reject any input that doesn't match a valid string (they won't get stuck looping forever without halting).  We'll see examples later of Turing machines that accept but don't decide a language. 

Another thing that Turing Machines can do is compute functions by leaving the output on the tape when it halts. 

1. Construct a Turing machine that reads an input string $w \in \{a\}^*$ and leaves $ww$ on the tape when it halts.  <!--*-->

This wasn't to hard to describe the algorithm, but it got a little complicated when we made the state diagram.  Once we did that, we defined Turing computable functions.  

<div class="Theorem">
**Definition.** A function $f: \Sigma^* \rightarrow \Sigma^*$ is **Turing computable** if there is a Turing machine that halts with $f(w)$ on the tape whenever it is given a tape with $w \in \Sigma^*$ as input.

</div>

2. Explain why the function $f(w) = wwww$ is Turing computable.  

<div class="Theorem">
**Theorem (Compostions are computable).** If $f, g : \Sigma^* \rightarrow \Sigma^*$ are both Turing computable functions, then so is the composition $f \circ g$.  
</div>

3. Explain why the function 
$$f(w) = \begin{cases} 1 & \text{ if length of } w \text{ is even.} \\ 0 & \text{ otherwise.} \end{cases}$$
is Turing computable.  Hint: Every regular language is Turing decidable.  

We finished by describing how this function (which comes up in the [Collatz-Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)) is Turing computable:
$$f(n) = \begin{cases}
n/2 & \text{ if } n \text{ is even,}  \\
3n+1 & \text{ if } n \text{ is odd.} \end{cases}$$


#### Wed, Mar 19

Today we looked at **multi-tape Turing machines**.  

<div class = "Theorem">
**Theorem.** Any k-tape Turing machine has an equivalent single-tape Turing machine. 
</div>

*Proof idea.* For every tape symbol of the k-tape TM, we need a "dotted" symbol and we also need a special separator symbol (#).  Then we can put the contents of the k tapes onto a single tape if we add separators and dotted symbols to mark the which symbols are currently pointed to by the TM. 

<center>
<table class="bordered">
<tr> <td> # </td><td> a </td><td> a&#775; </td><td> □ </td><td> a </td><td> # </td><td> b&#775; </td><td> b </td><td> b </td><td> a </td><td> # </td><td> a </td><td> a </td><td> a </td><td> a&#775; </td><td> # </td> </tr>
</table>
</center>

For each step of the k-tape TM, the 1-tape TM follows these rules:

* Starting from the left, it reads the dotted symbols for each of the k-substrings.  Then it returns to the leftmost position. 

* Then it makes a 2nd pass, updating the contents at each dotted symbol, and then moving the dot to the left or right.

* If it reaches the end of a substring but needs to add a character, it first prints a special-blank then shifts every other character to the right by one, before returning to the special-blank and proceeding.  

Another variation on a standard TM is a **nondeterministic Turing machine (NTM)**.  At each step, these can split into more than one possible next state.  The transition function has form:
$$\delta: Q \times \Gamma \rightarrow 2^{Q \times \Gamma \times \{L, R \}}.$$
The nondeterministic TM accepts a language as soon as any of its parallel versions reaches an accept state.  

<div class = "Theorem"> 
**Theorem.** Any language that can be accepted by a nondeterministic Turing machine can also be accepted by a regular Turing machine. 
</div>

We talked about how you can use a 3-tape TM to used a breadth first search through the branching possibilities of a NTM to see if any accept.  
<!--
*Proof idea.* We'll construct a regular 3-tape TM that simulates our NTM.  The key is to do a breadth first search through the tree of possible branches the NTM can take.  If you think of the branches that the NTM can take as a tree, then you can label every node of the tree with an integer.  Then simulate the NTM deterministically 
-->

We also talked about other things that a TM can do:

1. If $f: \Sigma^* \rightarrow \{0,1\}$, and $g, h: \Sigma^* \rightarrow \Sigma^*$ are Turing computable, then so is the function 
<center>
`IF f(x) THEN g(x) ELSE h(x).`
</center>


2. What about a while-loop?

    ```python 
    while(f(x)):
        x = g(x)
    ```

We didn't have time for this last example:

3. Can a Turing machine have a for-loop, where it repeats some function $n$ times? Something like this `Python` example where function $f$ is applied $n$ times?

    ```python
    for i in range(n): 
        x = f(x)
    ```

#### Fri, Mar 21

We started with this example:

1. Suppose that $f: \Sigma^* \rightarrow \Sigma^*$ is a Turing computable function.  Describe a 2-tape TM that inputs a string $x \in \Sigma^*$ on one tape and a number $n$ (encoded with $n$ 1's) on the second tape, that computes 
$$f^{k}(x) := \underbrace{f(f(\cdots f(}_{k\text{-times}}x)))).$$

In mathematics, there are many algorithms, which are step-by-step procedures that can be carried out to solve problems.  Prior to the work of Turing and other computer scientists, no one ever tried to define exactly what an algorithm is.  It turns out to be hard to give a precise definition of an algorithm.  Computer scientists have settled on the following: 


<div class="Theorem">

**Definition (Church-Turing thesis).** An **algorithm** is a computational task that can be carried out by a Turing machine. 

</div>


The idea is that Turing machines can do all of the things (like looping, and conditionals, storing variables) that we think of algorithms as doing, so we use TMs to give a precise definition for algorithms.   

There are many other models of computing that can be proven to be **Turing complete**, that is, they can compute the same functions as Turing machines.  But it is believed that there is no [effective method](https://en.wikipedia.org/wiki/Effective_method) of computation that can solve problems that Turing machines cannot solve.  

We finished by discussing Hilbert's 10th problem: Is there an algorithm to determine whether or not a multivariable polynomial with integer coefficients has an integer root?  We looked at some example polynomials like

$$p(x,y) = 3x^2 - 2xy + y^2 - 2$$
and 
$$q(x,y) = x^2 + y^2 + 1.$$
The pair $(1,1)$ is a root for the first polynomial, since $p(1,1) = 0$, but the second polynomial has no integer roots. 

2. Describe an algorithm that we could implement using a TM or computer program to try to find out if a polynomial has a root.  

The algorithm we described will *accept* any polynomial that has a root.  But it doesn't reject polynomials that don't, instead it loops forever looking for a root.  It wasn't until 1970 that Hilbert's 10th problem was solved, when it was proved that there is no Turing machine that can *decide* the language of integer multivariable polynomials with integer roots.  We'll look at other examples of **undecidable languages** after the midterm.  




### Week 10 Notes

Day  | Section  | Topic
:----:|:---:|:-----------------
Mon, Mar 24 | | Review
Wed, Mar 26 | | **Midterm 2** 
Fri, Mar 28 |  [5.5][5.5] - [5.7][5.7] | Universal Turing machines

#### Mon, Mar 24

Today we reviewed context-free languages for the midterm exam.  We also talked about the [Chomsky hierarchy of languages](https://en.wikipedia.org/wiki/Chomsky_hierarchy). 

#### Fri, Mar 28

Today we introduced **universal Turing machines**.  We used them to consider this language:
<!-- This year, I actually went into some details about how to construct a Universal TM.  We talked about how to encode the transition function on a string if Γ* = {0, 1, |,  □} and Σ = {0, 1}.  The idea is that you arrange all of the possible output transitions in Q x Γ x {L, R} using 3 contiguous sections of the tape, and then the output for state k, and symbol $\sigma$ is located in the $|Γ| k + \sigma$ through |Γ| k + \sigma + |Γ| (k+1) - 1$ cells on the tape. From there, it is easy to describe a TM algorithm that can use reference the transition function on one tape and to edit the input string on another tape. --> 

$$\text{Accept} = \{ \langle M, w \rangle : M \text{ is a Turing machine and } w \text{ is a string that } M \text{ accepts}\}.$$

1. Explain why Accept is Turing recognizable. 

Then we gave a diagonalization proof that Accept is not Turing decidable. Suppose there was a decider for Accept.  Then we could make a table with rows for each Turing machine $M_i$ and columns every Turing machine encoding $\langle M_j\rangle$ and entries 1 or 0 depending on whether $M_i$ accepts $\langle M_j \rangle$.  

2. What would happen if we created a TM $N$ inputs any TM encoding $\langle M \rangle$ and then does the opposite of what $D$ does on $\langle M, \langle M \rangle \rangle$. What would $N$ do when you input $\langle N \rangle$ into $N$? 

3. Why is that a contradiction? 

We finished by observed that there are only a countably infinite number of possible Turing machines, but there is an uncountable infinite number of languages, so there must be *lots* of languages that are not decidable!  
<!--
Today we introduced enumerators.  An **enumerator** for a language $L \subseteq \Sigma^*$ is a Turing machines that computes a function $f: \N \rightarrow L$ that is onto.  We started by proving the following:

<div class="Theorem">
**"Easy" Lemma.** If $L \subseteq \Sigma^*$ is decidable, then there is an enumerator for $L$. 
</div>

To prove this lemma, we came up with the following algorithm. In class I didn't include the `just_started` variable which caused a minor issue in the proof. 

```python
input n
# use a decider function to return the n-th string in the language
s = ""
for i in range(n):
    just_started = True
    while just_started or not decider(s):
        just_started = False
        increment(s)
return s
```

<div class="Theorem">
**"Harder" Theorem.** A language $L \subseteq \Sigma^*$ is recognizable if and only if there is an enumerator for $L$.  
</div>

It was relatively easy to prove the $(\Leftarrow)$ direction as this algorithm demonstrates:

```python
input w
# use an enumerator function to return True if w is in L
n = 0
while not w == enumerater(n):
    n++
return True
```

The other direction is harder to prove.  We sketched a proof at the board, but the important thing to understand is this: Why doesn't the algorithm for the "Easy Lemma" prove the $(\Rightarrow)$ case of the "Harder Theorem"?  
-->

### Week 11 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 31 | [5.1][5.1]-[5.3][5.3] | The halting problem & Rice's theorem
Wed, Apr 2  | [6.1][6.1] | The running time of algorithms
Fri, Apr 4  | [6.1][6.1] | The running time of algorithms

#### Mon, Mar 31

We started by explaining why our proof from last time that the language Accept is undecidable was a diagonalization argument.  Suppose there were a Turing machine $D$ (call it a **decider**) that can decide whether or not any other TM will accept any string.  
$$D(\langle M, w \rangle) = \begin{cases} 1 & \text{ if }M \text{ accepts } w. \\
                                          0 & \text{otherwise}. \end{cases}$$

Imagine we make a table with columns corresponding to different Turing machine encodings and rows corresponding to different Turing machines showing the output of $D$ on each pair.  

<center>
<table class = "bordered">
<tr><td> $D$ </td> <td> $\langle M_1 \rangle$ </td> <td> $\langle M_2 \rangle$ </td> <td> $\langle M_3 \rangle$ </td> <td> $\ldots$ </td> </tr>

<tr><td> $M_1$ </td> <td> 1 </td> <td> 0 </td> <td> 1 </td> <td> </td> </tr>
<tr><td> $M_2$ </td> <td> 0 </td> <td> 1 </td> <td> 0 </td> <td> </td> </tr>
<tr><td> $M_3$ </td> <td> 0 </td> <td> 0 </td> <td> 0 </td> <td> </td> </tr>
<tr><td> $\vdots$ </td> <td> </td> <td> </td> <td> </td> <td> </td> </tr>
</table>
</center>

But what happens if we create a new TM $N$ that always returns the opposite of $D$? Why is there a contradiction if we try to look up the diagonal entry where $N$ is given itself and its encoding string as inputs?  

By proving that no TM can decide the language Accept, we get the following corollary about the [halting problem](https://en.wikipedia.org/wiki/Halting_problem).


<div class = "Theorem">
**Theorem (The Halting Problem is Undecidable).** The language  
$$\text{Halt} = \{ \langle M, w \rangle : M \text{ is a TM that halts on }w \}$$

is undecidable. 
</div>

We gave a proof by contradiction for this theorem.  

* **Question.** Suppose we had a Turing machine $H$ that can decide the halting problem.  Describe a clever algorithm we could use with $H$ to determine whether any other Turing machine $M$ accepts any string $w$.  Why would that algorithm lead to a contradiction?

<!--
Here is the proof:

If Halt were decidable, then we could use the following algorithm to decide if $\langle M, w \rangle \in \text{Accept}$:

1. Check if $\langle M, w \rangle \in \text{Halt}$.
2. If it is, run $M$ on $w$ and accept or reject accordingly. 
3. If not, then reject.  

Since this algorithm would decide the language Accept from last time, but we proved that the language Accept is undecidable, we conclude that Halt must also be undecidable.  
-->

It turns out that not only is the halting problem undecidable, but lots of other questions about Turing machines are undecidable.  A powerful theorem known as **Rice's theorem** says that every nontrivial semantic property of a Turing machine is undecidable. 

Fix an encoding method and let $L_{TM}$ be the set of all strings that are encoded Turing machines, i.e., 
$$L_{TM} = \{ \langle M \rangle : M \text{ is a Turing machine} \}.$$
For any Turing machine $M$, let 
$$L(M) = \{w \in \Sigma^* : M \text{ accepts } w \}.$$

<div class="Theorem">
**Definitions.** A **property** of Turing machines is a subset $P \subseteq L_{TM}$.  We say that a Turing machine $M$ has property $P$ if $\langle M \rangle \in P$. 

* $P$ is **nontrivial** if both $P$ and its complement $\bar{P}$ in $L_{TM}$ are nonempty sets.  

* $P$ is **syntactic** if there exist two Turing machines $M_1$ and $M_2$ such that $L(M_1) = L(M_2)$, but only one has property $P$ (i.e., the difference between the machines is in the syntax of the algorithm, not the languages they recognize). 

* $P$ is **semantic** if it is not syntatic.  So if two Turing machines recognize the same language, then either they both have property $P$ or they both don't.  
</div> 

Here are some examples of properties.  For each example, determine whether it is a syntactic or semantic property. 

1. $\text{INFINITE} = \{\langle M \rangle :  L(M) \text{ is infinite} \}.$
2. $\text{REGULAR} = \{\langle M \rangle :  L(M) \text{ is a regular language} \}.$
3. $\text{HAS-THREE-STATES} = \{\langle M \rangle :  M \text{ has 3 states} \}.$

<div class="Theorem">
**Rice's Theorem.** Every nontrivial semantic property is undecidable. 
</div>

We proved **Rice's theorem** using a proof by contradiction (see below). Our book also has a different proof in [Section 5.3][5.3] if you are interested. 

*Proof.* Suppose $M_1$ is a Turing machine with property $P$ and $M_2$ is a Turing machine that doesn't have $P$.  We can assume without loss of generality that $L(M_2) = \varnothing$.  Then for any Turing machine $M$ and string $w$, construct a new Turing machine $T_{Mw}$ that starts by running $M$ on $w$ until that halts, then it runs $M_1$ on the actual input, returning whatever $M_1$ returns.  So
$$L(T_{Mw}) = \begin{cases} L(M_1) & \text{ if } M \text{ halts on } w \\
                            L(M_2) = \varnothing & \text{ if } M \text{ doesn't halt on } w. \end{cases}$$
Therefore $T_{Mw}$ has property $P$ if and only if $M$ halts on $w$.

* **Question.** Why would this lead to a contradiction if there were a Turing machine that could decide $P$?  

#### Wed, Apr 2

Today we introduced **big-O notation** and used it to talk about running times of algorithms. 

<div class="Theorem">
**Definition (Big-O notation).** Let $f, g: \N \rightarrow [0, \infty)$.  We say that $f \in O(g)$ if there are constants $C, n_0 > 0$ such that $f(n) \le C g(n)$ for all $n \ge n_0$.  So $O(g)$ is the set of all functions that are eventually bounded by $C g$ for some constant $C$. 
</div>

Note that there are lots of important examples in [Barak Chapter 12](https://introtcs.org/public/lec_10_efficient_alg.html) of algorithms and their running times. 

1. Which is true?  $(\log n)^3 \in O(n)$ or $n \in O(\log n)^3$? <!-- USEFUL TRICK: REDUCE TO $\log n$ versus $n^{1/6}$ -->

We proved the following facts about big-O notation:

<div class="Theorem">
**Theorem (Only Dominant Terms Matter).** If $f: \N \rightarrow [0,\infty)$ is a sum of nonnegative functions $f_1, \ldots, f_k$, then there is at least one function $f_j$ such that $O(f) = O(f_j)$.  We call that function a **dominant term** for $f$. 
</div>


<div class="Theorem">
**Theorem (Constants Don't Matter).** For any $f: \N \rightarrow [0,\infty)$ and constant $c > 0$, $O(cf) = O(f)$ and $O(f \pm c) = O(f)$.
</div>

<div class="Theorem">
**Theorem (Products of Functions).** If $f_1 \in O(g_1)$ and $f_2 \in O(g_2)$, then $f_1f_2 \in O(g_1 g_2)$. 
</div>


2. Does the base of an exponential function matter in O-notation? What about for logarithms? 
 
We get this hierarchy of functions:

$$\underbrace{\text{logarithms}}_{\text{base doesn't matter}} \ll \underbrace{\text{polynomials}}_{\text{dominant power matters}} \ll \underbrace{\text{exponentials}}_{\text{base matters}} \ll \text{factorials}$$


We used these ideas to find the dominant term for these expressions:

3. $n^4 + n^3 \log n + (\log n)^5$.

4. $n^{100} + 2^n$. 

So why do we use big-O notation?  It makes it easier to talk about a lot of formulas.  For example, an algorithm that requires $7(n+3) \dfrac{n!}{k!(n-k)!}+167$ steps can be described simply as being $O(n^{k+1})$.

**Caution 1.** Big-O notation only gives an upper bound for how fast functions grow.  Functions in $O(f)$ don't have to grow at the same rate as $f$, they can also grow much slower.  

**Caution 2.** You should always write the simplest possible expression inside big-O notation.  For example $O(5n^3 + \log n) = O(n^3)$, so just write $O(n^3)$.  

We finished by talking about how we use big-O notation to describe the runtime of algorithms. Consider the language 
$$L = \{a^n b^n : n \ge 0 \}.$$
Here is a simple algorithm to decide $L$:

* **Simple Algorithm.** Input $w \in \{a, b \}^*$. 
    - On each pass (left to right) cross out one $a$ and then one $b$. 
    - If there are no letters remaining to cross out, then accept.  
    - If there you can cross out only one letter, then reject. 

5. Estimate the worst-case number of steps it will take to decide if a string with $n$-characters is in $L$ with this algorithm. Use big-O notation to express the answer. 


#### Fri, Apr 4

We started with this example: 

1. Find an algorithm that determines whether a binary number is divisible by 7.  Hint: if $k$ is a positive integer written in binary and you add a zero at the end, what number do you get?  What if you add a 1 at the end.  How could you use this idea to keep track of the remainder modulo 7 as you read a binary number?  

2. What is the time complexity of the algorithm above?

It turns out that the language $L = \{ w \in \{0,1\}^* : w \text{ is a binary number divisible by } 7\}$ is a regular language.  For regular languages, we proved the following result. 

<div class="Theorem">
**Theorem.** If $L \subseteq \Sigma^*$ is regular, then $L$ can be decided in $O(n)$ time.
</div>

<!--
We started with this example:

1. Estimate the time complexity for the TM from [midterm 2 review problem #3](midterm2review.pdf) that decrements a binary string by 1. 

-->

Last time we saw an algorithm that can decide $L = \{a^n b^n : n \ge 0 \}$ in $O(n^2)$ steps using a simple algorithm.  There are actually better algorithms that can decide $L$ faster.  Here's one:

* **Improved Algorithm.** Input $w \in \{a, b \}^*$. 
    - On each pass (left to right) through $w$, cross out every other $a$ (starting with first), then cross out every other $b$ (starting with first). 
    - Reject if you find $b$ before you find an $a$, or if the total number of letters is odd. 
    - If all letters have been crossed out, then accept.  

3. What is the time complexity of this new algorithm? Hint: How many times does it need to pass through a string of length $n$ (worst case)? 

You can go even faster with a multi-tape Turing machine.

* **Multi-tape Algorithm.** Input $w \in \{a, b \}^*$. 
    - Read the input once left to right.  
    - Copy each $a$ to tape 2.  
    - For each $b$, remove an $a$ from tape 2. 
    - Accept if tape 2 is empty at the end.  

4. What is the time complexity of this multi-tape algorithm?  

<div class="Theorem">
**Theorem (Multi-tape speedup).** If $t(n) \ge n$, then any multi-tape Turing machine that runs in $t(n)$ steps can be simulated by a single-tape Turing machine in $O(t(n)^2)$ steps.  
</div>

<div class="Theorem">
**Theorem (Nondeterministic speedup).** If $t(n) \ge n$, then any nondeterministic Turing machine that runs in $t(n)$ steps can be simulated by a deterministic Turing machine in $2^{O(t(n))}$ steps, that is, the time complexity is at most $2^{c t(n)}$ for some constant $c>0$.  
</div>

We talked about how to prove the second theorem by considering the computation tree for a nondeterministic Turing machine.  If the NTM runs in $t(n)$, steps, then a breadth first simulation of the NTM must check an exponential number of branches $O(b^{t(n)})$ where $b$ is the maximum number of branches at each step. Each branch requires $t(n)$ steps to simulate, so the total run time of the deterministic TM is $O(t(n) b^{t(n)})$ which can be expressed as $2^{O(t(n))}$.  

### Week 12 Notes


Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 7  | [6.2][6.2] | The complexity class P
Wed, Apr 9  | [6.2][6.2] | The complexity class P
Fri, Apr 11 | [B8.1](https://introtcs.org/public/lec_07_other_models.html#ram-machines-and-nand-ram) | RAM machines

#### Mon, Apr 7

Today we started by talking about [problem #4 on homework 9](HW/HW9.pdf).  We also looked at examples using Rice's theorem like problem #3.  Then we introduced the following class of languages which can be decided in polynomial time.  

<div class="Theorem">
**Definition.** A language $L \subseteq \Sigma^*$ is in **class P** (denoted $L \in \mathsf{P}$) if there is a Turing machine $M$ and a $k \ge 0$ such that $M$ can decide $L$ in $O(n^k)$ time. 
</div>

1. Explain why all regular languages are in class P. 

#### Wed, Apr 9

Today we did this in-class workshop to prove that all context-free languages are in class P. 

* **Workshop:** [Context Free Languages are in P](ChomskyNF.pdf)

<!--
2. If $K, L \subseteq \Sigma^*$ are both in class $P$, then prove that the concatenation $KL$ is in class P. Hint: if $w \in KL$, then there exist $x \in K$ and $y \in L$ such that $w$ is the concatenation $xy$.  So to check if $w \in KL$, you just need to check if $w$ can be decomposed into $xy$ where $x \in K$ and $y \in L$. 
    * If the length of $w$ is $n$, then how many different ways can you decompose $w$ into $xy$? 
    * How long will it take a Turing machine to check all of those decompositions to see if any have $x \in K$ and $y \in L$?  

<div class="Theorem">
**Theorem.** If any of the following types of machines has a polynomial time algorithm to solve a problem, then so do all of the others.

1. Turing machine
2. Multi-tape Turing machine
3. C++ program (or any other general programming language)
</div>
-->

 
#### Fri, Apr 11

Today we looked at some examples of languages that are in class P. We also briefly discussed **random access memory (RAM) machines** which are sometimes a more convenient model for discussing time complexity.  It turns out that any problem that can be solved in polynomial time by a RAM machine can also be solved in polynomial time by a Turing machine.  There is more in [Barak Chapter 8 about RAM machines](https://introtcs.org/public/lec_07_other_models.html#ram-machines-and-nand-ram). 

1. Let $\operatorname{PATH} = \{ \langle G, s, t \rangle : G \text{ is a directed graph with a path from } s \text{ to } t \}$.  Estimate the time complexity of the following algorithm:
    - Step 1 - Mark s. 
    - Step 2 - Scan edges. For any edge from a marked node to an unmarked node, mark the second node. 
    - Step 3 - Repeat step 2 until there are no remaining edges from marked to unmarked nodes. 
    - Step 4 - Accept if $t$ is marked, otherwise reject. 

2. If $K, L \subseteq \Sigma^*$ are both in class $P$, then prove that the concatenation $KL$ is in class P. Hint: if $w \in KL$, then there exist $x \in K$ and $y \in L$ such that $w$ is the concatenation $xy$.  So to check if $w \in KL$, you just need to check if $w$ can be decomposed into $xy$ where $x \in K$ and $y \in L$. 
    * If the length of $w$ is $n$, then how many different ways can you decompose $w$ into $xy$? 
    * How long will it take a Turing machine to check all of those decompositions to see if any have $x \in K$ and $y \in L$?  

3. Estimate the time complexity of the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) for finding the greatest common divisor of two positive integers:

    ```python
    def gcd(a, b): 
        while (b != 0): 
            t = b
            b = a % b
            a = t
        return a
    ```

    Hint: For every two steps of the while loop, the size of $a$ will decrease by a factor of at least 2, and $b$ will be strictly smaller than $a$.  

### Week 13 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 14 | [6.3][6.3] | The complexity class NP
Wed, Apr 16 | [6.5][6.5] | NP-complete languages
Fri, Apr 18 | [6.5][6.5] | NP-complete languages

#### Mon, Apr 14 


<div class="Theorem"> 
A **verifier** $V$ for a language $L \subseteq \Sigma^*$ is a Turing machine such that
$$L = \{w \in \Sigma^* : V \text{ accepts } \langle w, s \rangle \text{ for some string } s \}.$$
The string $s$ is called the **solution** or **certificate** for $w$.  
</div>

Consider the language COMPOSITE $= \{ w \in \{0,1\}^* : w \text{ is a binary number that is not prime}\}$.   This language is hard to decide, but it is easy to verify that a number is composite if someone tells you two of its factors.  For example $850441 = 853 \cdot 997$.  

It turns out that long multiplying two $n$-bit integers can be done in $O(n^2)$ time.  

<div class="Theorem">
A language $L \subseteq \Sigma^*$ is in **class NP** (also known as **polynomial time verifiable**) if there is a verifier for $L$ that runs in polynomial time as a function of the length of the input string $w$. We don't make any assumptions about the length of the solution string $s$ or how long it will take to find $s$.
</div> 


We showed that these languages are both in class NP:

1. COMPOSITE $= \{ w \in \{0,1\}^* : w \text{ is a binary number that is not prime}\}$. 

2. 3-CLIQUE $= \{\langle G \rangle : G \text{ is a graph with 3 vertices that are all connected by edges}\}$. 

We also proved this theorem:

<div class = "Theorem">
**Theorem.** P $\subseteq$ NP.
</div>

3. Why doesn't the following algorithm show that COMPOSITE is in class P? 

    ```python
    # Input: An integer N > 1

    for k = 2 to N-1:
        if (N % k == 0): 
            ACCEPT
    # If N has no smaller divisors after the loop, then
    REJECT
    ```

We also stated and gave a hand-wavy proof of this result:

<div class = "Theorem"> 
**Theorem.** A language $L$ is in class NP if and only if there is a nondeterministic Turing Machine that decides $L$ in polynomial time.  
</div> 

Along the way, we mentioned some interesting new results:

* 2019 Harvey & van der Hoeven Multiplication Algorithm $O(n \log n)$. 
* 2003 Agarwal, Kayal, Saxena (AKS) Primality Test - polynomial time algorithm.

It is still unknown whether P $\ne$ NP.  

#### Wed, Apr 16

Today we introduced the **Boolean satisfiability problem** (SAT). 

<div class="Theorem">
**Definition.** A Boolean function $\phi:\{0,1\}^n \rightarrow \{0,1\}$ is **satisfiable** if there is an input $x \in \{0,1\}^n$ such that $\phi(x) = 1$. 
</div>

1. Show that the Boolean function $\phi(x,y,z) = (\bar{x} \vee y) \wedge (x \vee \bar{z})$ is satisfiable. 

2. Give an example of a Boolean function that is not satisfiable. 

A **Boolean formula** is a string involving variables and the logical operators AND ($\wedge$), OR ($\vee$), and NOT (denoted by $\sim$ or a line on top of a variable).  Consider the following language: 

$$SAT = \{ \langle \phi \rangle : \phi \text{ is a satisfiable Boolean formula} \}.$$ 


3. Prove that SAT is decidable. 

4. Prove that SAT is in NP.

It turns out that SAT is actually an **NP-complete** language, which means that if SAT turns out to be in P, then so does every NP language!  That's a theorem that we aren't ready to prove yet, but one of the key ideas in the proof is to be able to reduce one problem to another problem in polynomial time.  

<div class="Theorem">
**Definition.** In a Boolean formula, 

* A **literal** is a variable $x_i$ or a negated variable $\bar{x}_i$. 
* A **clause** is an expression formed by combining a finite collection of literals with the OR operator. 

A Boolean formula is in **conjunctive normal form** (CNF) if it consists of a finite number of clauses all connected together by AND operators.  

</div>

For example  
$$\phi = (\bar{x} \vee y) \wedge (x \vee \bar{z})$$
is in CNF. 

In logic, a **conjunction** is when two or more statements are joined with an AND, and a **disjunction** is when two or more statements are joined with an OR. 

An important special case of the SAT problem is the 3-SAT problem, which only looks at Boolean formulas in CNF where the clauses each involve only 3 literals (possibly including repeated literals). So a 3-CNF formula would be something like:
$$(x_1 \vee \bar{x_2} \vee x_3 ) \wedge (\bar{x_3} \vee x_5 \vee x_6 ) \wedge (\bar{x_3} \vee x_6 \vee \bar{x_4}) \wedge (x_4 \vee x_5 \vee x_6 ).$$ 




Instead of using a brute force algorithm to decide 3-SAT, we will take a different approach and prove that solving the 3-SAT problem is not much harder than deciding this language:

$$\text{CLIQUE} = \{ \langle G, k \rangle : G \text{ is a graph with a } k\text{-clique} \}.$$

In fact, we gave the outline of a proof for the following theorem (although we didn't formally define "polynomial time reducible" yet). 

<div class="Theorem">
**Theorem.** 3-SAT is polynomial time reducible to CLIQUE.  
</div>

The key to link 3-SAT and CLIQUE is to draw a graph where every vertex corresponds to a literal in one of the clauses, and we draw edges according to the following rules:

* Never draw an edge connecting literals in the same clause. 
* Always draw an edge connecting literals in different clauses, unless they are negations of each other.

Then, if a Boolean formula in 3-CNF has $k$-clauses, then it is satisfiable iff the corresponding graph has a $k$-clique (as the following image illustrates):  

<center>
<a href="https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#3-satisfiability"><img width = 400 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Sat_reduced_to_Clique_from_Sipser.svg/280px-Sat_reduced_to_Clique_from_Sipser.svg.png"/></a>
<figcaption>3-satisfiability</figcaption>
</center>

#### Fri, Apr 18

<div class="Theorem">
**Definition.** A language $A \subseteq \Sigma^*$ is **polynomial time reducible** to another language $B \subseteq \Sigma^*$ (denoted $A \le_P B$) when there is a polynomial time computable function $f: \Sigma^* \rightarrow \Sigma^*$ such that for every $w \in \Sigma^*$,
$$w \in A \text{ if and only if } f(w) \in B.$$
</div> 

Last time we proved that we can turn any Boolean formula in 3-conjunctive normal form into a graph $G$, and that the graph has a k-clique (where $k$ is the number of clauses in the formula) if and only if the original formula was in 3-SAT.  

1. If our formula has $k$ clauses, then how many vertices does the graph $G$ have?

2. What is an upper bound for the number of edges in $G$? 

3. Based on the previous answers, how long will it take an algorithm to to convert a 3-CNF formula to the graph $G$ and number $k$?  

<div class="Theorem">
**Definition.** A language $B$ is **NP-hard** if every $A$ in NP is polynomial time reducible to $B$.  Languages that are both NP and NP-hard are called **NP-complete**. 
</div>

In the early 1970s, researchers in both the USA and Soviet Union were studying algorithms.  Cook (USA) and Levin (USSR) gave the first proof that some problems are NP-complete. 

<div class="Theorem">
**Theorem (Cook-Levin).** 3-SAT is NP-complete.
</div>

There are several proofs of this theorem.  They are all a bit technical, but we'll hopefully take a look at one later. For today we proved the following result.  

4. Prove that if any NP-complete language is in P, then P = NP.  

Then we looked at another example of a polynomial time reduction.  

Let 
$$k\text{-SAT} =  \{ \langle \phi \rangle : \phi \text{ is a CNF Boolean formula with at most } k \text{ literals per clause} \}.$$

Here is an algorithm to reduce k-SAT to 3-SAT. 

* Loop through the clauses of $\phi$.  
* For any clause with more than 3 literals do the following:
    - Replace the last two literals with a new dummy variable $d_i$.  
    - Add a new clause with $\bar{d_i}$ and the two literals you removed.  
* Repeat until the clause has just 3 literals.  

It's not hard to confirm that at every step, the new clauses will be satisfiable if and only if the old clauses were.  It is also not hard to verify that this algorithm runs in polynomial time.  

### Week 14 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 21 | [6.5][6.5] | Examples of NP-complete languages
Wed, Apr 23 |  | Review
Fri, Apr 25 |  | **Midterm 3** 
Mon, Apr 28 |  | TBA

[1.1]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=9>
[1.2]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=12>
[1.3]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=15>
[2.1]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=29>
[2.2]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=31>
[2.3]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=39>
[2.4]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=43>
[2.5]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=49>
[2.6]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=56>
[2.7]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=60>
[2.8]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=68>
[2.9]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=75>
[2.10]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=84>
[3.1]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=99>
[3.2]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=102>
[3.3]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=108>
[3.4]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=112>
[3.5]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=120>
[3.6]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=124>
[3.7]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=128>
[3.8]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=132>
[4.1]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=145>
[4.2]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=149>
[4.3]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=156>
[4.4]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=159>
[5.1]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=165>
[5.2]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=172>
[5.3]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=178>
[5.4]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=181>
[5.5]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=185>
[5.6]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=188>
[5.7]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=192>
[5.8]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=194>
[6.1]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=205>
[6.2]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=207>
[6.3]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=210>
[6.4]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=219>
[6.5]: <https://cglab.ca/~michiel/TheoryOfComputation/TheoryOfComputation.pdf#page=221>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
