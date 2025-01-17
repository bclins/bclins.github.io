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

### Mon, Jan 13

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

### Wed, Jan 15

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


### Fri, Jan 17

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

3. Use mathematical induction to prove the following:

<div class="Theorem">
**Theorem.** Every function $f:\{0,1\}^n \rightarrow \{0,1\}$ can be represented by a Boolean circuit.   
</div>

We say that the Boolean operations ($\wedge$, $\vee$, $\neg$) are a **universal set of operations** since every Boolean function on $\{0,1\}^n$ can be constructed using those operations.  

We finished by talking about how the NAND operation is universal all by itself.  Using just the NAND operation, yin the sense that any function that can be constructed from AND, OR, NOT gates can also be constructed with NAND gates.  

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

### Week 3 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Jan 27 | [2.2][2.2] - [2.3][2.3] | Regular languages
Wed, Jan 29 | [2.4][2.4] | Nondeterministic finite automata
Fri, Jan 31 | [2.6][2.6] | NFAs and regular languages

### Week 4 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 3  | [2.5][2.5] | NFAs and DFAs are equivalent 
Wed, Feb 5  | [2.7][2.7] - [2.8][2.8] | Regular expressions
Fri, Feb 7  | [2.9][2.9] | The pumping lemma

### Week 5 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Feb 10 | [2.9][2.9] | Non-regular languages
Wed, Feb 12 |            | Review
Fri, Feb 14 |            | **Midterm 1**

### Week 6 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Feb 17 | [3.1][3.1] - [3.2][3.2] | Context-free grammars
Wed, Feb 19 | [3.3][3.3] | Parsing and parse-trees
Fri, Feb 21 | [3.8][3.8] | The pumping lemma for context-free languages

### Week 7 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Feb 24 | [3.5][3.5] - [3.6][3.6] | Pushdown automata
Wed, Feb 26 | [3.7][3.7] | Pushdown automata & context-free grammars
Fri, Feb 28 | [4.1][4.1] - [4.2][4.2] | Definition of Turing machines

### Week 8 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Mar 3  | [4.2][4.2] | Turing computable functions
Wed, Mar 5  | [4.3][4.3] - [4.4][4.4] | Church-Turing thesis
Fri, Mar 7  | [5.5][5.5] - [5.7][5.7] | Enumerators

### Week 9 Notes

Day  | Section  | Topic
:----:|:---:|:------------------
Mon, Mar 17 |             | Universal Turing machines
Wed, Mar 19 | [5.1][5.1]-[5.3][5.3] | The halting problem & Rice's theorem
Fri, Mar 21 |                       

### Week 10 Notes

Day  | Section  | Topic
:----:|:---:|:-----------------
Mon, Mar 24 | | Review
Wed, Mar 26 | | **Midterm 2** 
Fri, Mar 28 | [6.1][6.1] | The running time of algorithms

### Week 11 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Mar 31 | [6.2][6.2] | The complexity class P
Wed, Apr 2  | [6.2][6.2] | The complexity class P - con'd 
Fri, Apr 4  | [6.3][6.3] | The complexity class NP

### Week 12 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 7  | [6.4][6.4] | Nondeterministic TMs
Wed, Apr 9  | [6.5][6.5] | The SAT problem
Fri, Apr 11 | [6.5][6.5] | Polynomial time reductions

### Week 13 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 14 | [6.5][6.5] | Hamilton path problem
Wed, Apr 16 | [6.5][6.5] | NP-Complete languages
Fri, Apr 18 |            | 

### Week 14 Notes

Day  | Section  | Topic
:---:|:---:|:---------
Mon, Apr 21 |  | Review
Wed, Apr 23 |  | **Midterm 3** 
Fri, Apr 25 |  | TBA
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
