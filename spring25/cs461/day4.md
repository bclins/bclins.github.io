---
title: Functions and programs
date: January 22, 2025
---

<!-- 
You can use this command to compile this slide show:

pandoc -s -t slidy day4.md -o day4.html
 
-->

# Functions

<ul class="incremental">
<li> We've seen that Boolean circuits can be used to calculate any function $\{0,1\}^n \rightarrow \{0,1\}$.  

<li> What about functions $f:\{0,1\}^* \rightarrow \{0,1\}$? 

<li> **Answer: No!** We'll prove today that some of those functions are impossible to compute.  
</ul>



# Programs

In this course, a **program** is a file or string that contains instructions written using a programming language (like C or Python) for how to compute a function.  

Consider the following computer program, that takes an input string called `input_string` from $\{0,1\}^*$.

```python
def contains_0101(input_string):
    if "0101" in input_string:
        return 1
    else:
        return 0
```


<ul class="incremental">
<li> **Functions and programs are not the same.** The code above is just one way to implement the abstract function we are describing. A single function can have lots of programs that implement it. 

# Decision Programs

<li> **Decision programs.** A program that always returns a 0 or a 1 when it finishes is called a **decision program**.  
<ul>
<li>It's okay if the program might crash on some inputs.
<li>It's also okay if some inputs cause the program to loop forever. 
<li>As long as the program only ever returns 0 or 1 when it finishes (if it ever does!).
</ul>
</ul>

# Example Decision Programs

These are all decision programs.


```python {.incremental}
def always_one(input_string):
    return 1
``` 


```python {.incremental}
def maybe_loop_forever(input_string):
    if "1" in input_string:
        n = 1
        while n > 0:
            n = n + 1
    else:
        return 0
``` 

```python {.incremental}
def more_than_100_bits(input_string):
    if len(input_string) > 100:
        return 1
    else:
        return 0
```

<div class="incremental">

* **Question:** One of these programs does not correspond to a function $f:\{0,1\}^* \rightarrow \{0,1\}$. Which is it? 

</div>

# Answer

The Python function `maybe_loop_forever` does not correspond to a true function $f:\{0,1\}^* \rightarrow \{0, 1\}$. 

```python
def always_one(input_string):
    return 1
``` 


```python
def maybe_loop_forever(input_string):
    if "1" in input_string:
        n = 1
        while n > 0:
            n = n + 1
    else:
        return 0
``` 

```python
def more_than_100_bits(input_string):
    if len(input_string) > 100:
        return 1
    else:
        return 0
```


# Converting Programs to Strings

Each program is written using ASCII characters.  For example:

```python 
def always_one(input_string):
    return 1
``` 

has 43 ASCII characters (including an end of file EOF character).  How many bits is that? Recall that standard ASCII codes go from 0 to 127.  

# Inputing One Program Into Another



What output would we get if we used the binary representation of the `always_one` program as the `input_string` for the `more_than_100_bits` program?  

```python
more_than_100_bits(binary_encoding("always_one.py"))
```

<div class="incremental">

* What about using the binary representation of `always_one.py` in `maybe_loop_forever`?  

```python {.incremental}
def maybe_loop_forever(input_string):
    if "1" in input_string:
        n = 1
        while n > 0:
            n = n + 1
    else:
        return 0
```

</div>

# Inputing a Program Into Itself

What happens with each of these commands?



```python {.incremental}
always_one(binary_encoding("always_one.py"))
```


```python {.incremental}
maybe_loop_forever(binary_encoding("maybe_loop_forever.py"))
```

```python {.incremental}
more_than_100_bits(binary_encoding("more_than_100_bits.py"))
```

# A More Complicated Program

Consider the following unfinished program:

```python
def check_if_program_returns_one(program_string, input_string):
    """return 1 if 
        1. program_string is the ASCII binary encoding of a valid Python program, and
        2. The program defined by program_string returns 1 when given input_string as its input.
    otherwise, return 0."""
```

<div class="incremental">

* **This program is impossible!**

* We'll use a proof by contradiction.  

</div>

# Here's the idea:

If the program `check_if_program_returns_one` is possible, then we could make the following Python function:


```python
def reverse_check(program_string):
    return 1 - check_if_program_returns_one(program_string, program_string)
```


What will `reverse_check` do?  

<div class="incremental">

1. If we feed `reverse_check` itself as input, why can't it return 1?

1. Why can't it return 0? 

</div>

# Conclusion

Both `check_if_program_returns_one` and `reverse_check` are impossible programs.


<div class="incremental">

* But the function we are trying to program with `reverse_check` is a perfectly well defined function 
$$f: \{0,1\}^* \rightarrow \{0,1\}.$$

    - It inputs a binary encoding of a Python program.
    - It outputs 0 if the program returns one when it runs on itself as its input.
    - Otherwise if the input is gibberish or runs forever or doesn't output 1, then $f$ outputs 1. 
 

* There is just no binary encoding of a program for this function, because that would be impossible. 
</div>
# Un-programmable Functions

There is an easier way to see that there are functions $f:\{0,1\}^* \rightarrow \{0,1\}$ which are impossible to implement with computer programs based on cardinality.  

<div class="incremental">


* How many computer programs are possible (say programs written using ASCII characters)?  

* How big is the set $\{0,1\}^*$? 

* **Answer:** The strings $\{0,1\}^*$ are countable, so their cardinality is $\aleph_0$. 

* How many functions $f: \{0,1\}^* \rightarrow \{0,1\}$ are there? 

<!-- * How big is the set $\{f : f:\{0,1\}^* \rightarrow \{0,1\} \}$?  -->

* **Theorem.** If $A$, $B$ are finite sets and $|A| = a$ and $|B| = b$, then the cardinality of the set of all functions $f: A \rightarrow B$ (denoted $\{f: f: A \rightarrow B\}$) is $b^a$. 

* If $A$ is an infinite set, then we abuse notation slightly and say that the cardinality of $\{f: f: A \rightarrow B\}$ is $b^{|A|}$. 

</div>

# How Many Functions?


<div class="incremental">

* How many functions $f: \{0,1\}^* \rightarrow \{0,1\}$ are there? 

* Since $|\{0,1\}^*| = \aleph_0$, the cardinality of $\{f: f: \{0,1\}^* \rightarrow \{0,1\} \} = 2^{\aleph_0}$ which is uncountable because it is the same as the cardinality of the power set (i.e., set of all subsets) of $\mathbb{N}$.


* **Theorem (Exercises 4-5 on HW 2).** The power set $2^A$ of a set $A$ always has higher cardinality than the set $A$ itself.

<!--* **Answer:** Every ASCII program can be encoded as a binary string in $\{0,1\}^*$. Since $\{0,1\}^*$ is countably infinite, so is the set of all possible ASCII programs.   The last set $\{f : f:\{0,1\}^* \rightarrow \{0,1\} \}$ has cardinality $2^{|\{0,1\}^*|} = 2^{\aleph_0}$ which is uncountable.  -->

* **Conclusion.** You cannot program every function from $\{0,1\}^*$ <!--*--> because there are $2^{\aleph_0}$ such functions, but only $\aleph_0$ possible computer programs.
</div>

# Schroeder Bernstein Theorem

Another really useful theorem is:

**Schroeder-Bernstein Theorem.** If the are 1-to-1 functions $f:A \rightarrow B$ and $g: B \rightarrow A$, then there is a bijection from $A$ to $B$. In particular, $|A| = |B|$. 


