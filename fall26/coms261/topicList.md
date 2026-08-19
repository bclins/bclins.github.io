
Day  | Section  | Topic
:---:|:---:|:-----------------------------------
Mon, Aug 26 | [TP01][TP01], [C2] | Introduction to Python & Thonny
Wed, Aug 28 | [TP02][TP02] | Variables & functions
Thu, Aug 29 | [TP02][TP02] | Statements versus expressions
Fri, Aug 30 | [C2.6][C2.6] | Binary & floating-point numbers
Mon, Sep 2  | | Labor Day, no class
Wed, Sep 4  | [TP03][TP03] | Functions
Thu, Sep 5  | [TP03][TP03] | For-loops
Fri, Sep 6  | [TP04][TP04] | Turtle graphics
Mon, Sep 9  | [TP05][TP05] | Conditional statements
Wed, Sep 11 | [TP05][TP05] | Boolean expressions
Thu, Sep 12 |  | 
Fri, Sep 13 |  |
Mon, Sep 16  | [TP05][TP05] | Integer division and modulus
Wed, Sep 18  | [C11][C11] | While-loops
Thu, Sep 19  | [C11][C11] | While-loops con'd
Fri, Sep 20  | [TP05](https://allendowney.github.io/ThinkPython/chap05.html#recursion) | Recursion
Mon, Sep 23  | [TP06](https://allendowney.github.io/ThinkPython/chap06.html#recursion-with-return-values) | Recursion with return values
Wed, Sep 25  | [docs](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range) | Sequence types
Thu, Sep 26  | [C10.1][C10.1] | Lists
Fri, Sep 27  | [TP09][TP09] | Lists
Mon, Sep 30 |  [TP08][TP08] | Strings
Wed, Oct 2  |  | Review
Thu, Oct 3  |  |
Fri, Oct 4  |  | **Midterm 1**
Mon, Oct 7   | [C10.3][C10.3] |  Mutability and immutability
Wed, Oct 9   | [TP07.2](https://allendowney.github.io/ThinkPython/chap07.html#reading-the-word-list) | Reading files
Thu, Oct 10  | [TP07.2](https://allendowney.github.io/ThinkPython/chap07.html#reading-the-word-list) | Reading files
Fri, Oct 11  |  | Common patterns in loops (map, filter, reduce)
Mon, Oct 14  |            | Fall break, no class
Wed, Oct 16  |  | More map, filter, & reduce examples
Thu, Oct 17  | [TP18.5](https://allendowney.github.io/ThinkPython/chap18.html#list-comprehensions) | List comprehensions
Fri, Oct 18  | [TP10][TP10] | Dictionaries
Mon, Oct 21  | [TP10][TP10] | Dictionary Comprehensions 
Wed, Oct 23  | [C16][C16] | Iterable types
Thu, Oct 24  | [TP11][TP11] | Tuples
Fri, Oct 25  | [TP11][TP11] | Tuples
Mon, Oct 28  | [TP18.1](https://allendowney.github.io/ThinkPython/chap18.html#sets) | Sets and set comprehensions
Wed, Oct 30  |  | Search algorithms
Thu, Oct 31  |  | Sorting
Fri, Nov 1   | [C11.13](https://people.hsc.edu/faculty-staff/blins/books/CafieroPython.pdf#section.11.13) | Nested loops
Mon, Nov 4  | [C9.2](https://people.hsc.edu/faculty-staff/blins/books/CafieroPython.pdf#section.9.2) | Program structure
Wed, Nov 6  | [C9.3](https://people.hsc.edu/faculty-staff/blins/books/CafieroPython.pdf#section.9.3) | Function structure & incremental development
Thu, Nov 7  | [C13.3](https://people.hsc.edu/faculty-staff/blins/books/CafieroPython.pdf#section.13.3) | Writing to a file
Fri, Nov 8  | [C13.3](https://people.hsc.edu/faculty-staff/blins/books/CafieroPython.pdf#section.13.3) | Writing to a file - con'd
Mon, Nov 11 | [TP14][TP14] | Introduction to classes
Wed, Nov 13 | [TP15][TP15] | Magic methods
Thu, Nov 14 | [TP15][TP15] | Static versus instance methods
Fri, Nov 15 | [TP15][TP15] | Calling magic methods
Mon, Nov 18  | [TP16][TP16] | Type conversion and casting
Wed, Nov 20  |  | Sequence and iterator types
Thu, Nov 21  |  | Review
Fri, Nov 22  |  | **Midterm 2**
Mon, Nov 25  | [TP17][TP17] | Inheritance
Wed, Nov 27  |  | Thanksgiving break, no class
Fri, Nov 29  |  | Thanksgiving break, no class
Mon, Dec 2  | [TP17][TP17] | Inheritance
Wed, Dec 4  |  | Checkers
Thu, Dec 5  |  | Checkers - con'd
Fri, Dec 6  |  | Google Colab
Mon, Dec 9  |  | 

### Mon, Dec 2

Last time we defined classes to represent rectangles and squares.  

1. Add a method called `.translate(dx, dy)` that shifts the coordinates of a rectangle or square horizontally by `dx` and vertically by `dy`.  Where should you put the method?  

There is nothing stopping us from defining a translate method differently for squares than for rectangles.  For example, we could have the square's version take a tuple containing a coordinate pair.  Although Python would allow this, it is a bad idea because functions/methods that work for a superclass should still work for a subclass too. Subclasses can have additional features, but they shouldn't lose old features and they should behave the way you expect members of the superclass to behave.  

<!--
Consider the following classes:

```python
class Deck:
    def __init__(self):
        self.card_list = []
        for suit in "CDHS":
            for rank in ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]:
                self.card_list.append(suit+rank)    
    def shuffle(self):
        random.shuffle(self.card_list)
    def pop_card(self):
        return self.card_list.pop()
    def replace_card(self, card):
        self.card_list.append(card)

class Hand(Deck):
    def __init__(self, cards):
        self.card_list = cards
```
-->

<!--
* You should cover the **Liskov substitution principle**.  You should always make sure that the subclass is usable everywhere that the superclass can be used.  Give an example where you break this rule by overriding a method.  Then describe the correct way to override a method so that the inputs are allowed to be supertypes of the old inputs and the outputs must be subtypes of the old output.  Maybe use scale and translate methods for squares & rectangles?  
-->

One thing that you can do is create subclasses of standard classes, like dict:

```python
class Counter(dict):
    def __init__(self, iterator):
        super(Counter, self).__init__()
        for item in iterator:
            if item in self:
                self[item] += 1
            else:
                self[item] = 1

x = Counter([1,1,1,2,2,2,2,3,3,3])
print(x)
print(type(x))
for key, val in x.items():
    print(key, val) 
```


<!--
See this comment <https://stackoverflow.com/questions/18405618/extending-built-in-python-dict-class> to understand the `super(Counter, self).__init__()` line.
--> 

### Wed, Dec 4

Today as an in-class activity we started creating a checker board class using Tkinter.  

<center>
<img src="checkers.png" width=401></img>
</center>

Some tips to keep in mind:

1. It might help to have a global constant `SQUARE_SIZE`.  

2. If you add the row and column number, the light squares are even and the dark squares are odd. 

3. When you initialize the `Board` class, you should draw the squares on the board using 

    ```python
    canvas.create_rectangle(left, top, right, bottom, fill = color)
    ```

    It might help to have two different colors `LIGHT_SQUARE` and `DARK_SQUARE` stored as constants. 

4. The `Board` class should also have checkers.  

5. Each checker should be a `Checker` object with a position (column and row) and a color.  You should also pass the canvas object as a parameter so you can draw the checker when you initialize it.  Use the function    

    ```python
    canvas.create_oval(left, top, right, bottom, fill = color)
    ```

    It might help to have constants `DARK_CHECKER`, `LIGHT_CHECKER`, and `CHECKER_RADIUS`. 

### Thu, Dec 5

Today we talked about some ways to develop the checker board that we started yesterday.  Then at the end of class, I showed briefly how to add interactivity to the program. 

To add the ability to move checkers, you can add these lines to the `__init__` method for the checkers:

```python
    """To make the checkers interactive, you'll need to store the return value of 
    canvas.create_oval() as an attribute so you can change it when the user drags 
    the checkers. You'll also need to keep the canvas as an attribute as well.
    """
    self.canvas = canvas
    self.oval = canvas.create_oval(x - r, y - r, x + r, y + r, fill=color)

    #  Attributes to keep track of how far the checker has moved
    self.offset_x = 0
    self.offset_y = 0

    # Bind mouse events to the checker object
    canvas.tag_bind(self.oval, "<ButtonPress-1>", self.on_click)
    canvas.tag_bind(self.oval, "<B1-Motion>", self.on_drag)
    canvas.tag_bind(self.oval, "<ButtonRelease-1>", self.on_release)
```

Then you also need to add three methods to the `Checker` class:

```python
    def on_click(self, event):
        # Save the offset of the mouse click relative to the checker's top-left corner
        self.offset_x = event.x - self.canvas.coords(self.oval)[0]
        self.offset_y = event.y - self.canvas.coords(self.oval)[1]

    def on_drag(self, event):
        # Update the checker's position as the mouse moves
        x1, y1, x2, y2 = self.canvas.coords(self.oval)
        width = x2 - x1
        new_x1 = event.x - self.offset_x
        new_y1 = event.y - self.offset_y
        self.canvas.coords(self.oval, new_x1, new_y1, new_x1 + width, new_y1 + width)
 
    def on_release(self, event):
        # Snap checkers into center of nearest square when you release the mouse button
        x1, y1, x2, y2 = self.canvas.coords(self.oval)
        r = (x2 - x1) // 2
        # Need to calculate the center of the nearest square to our checker
        x = ((x1 + x2) // (2 * SQUARE_SIZE) + 0.5) * SQUARE_SIZE
        y = ((y1 + y2) // (2 * SQUARE_SIZE) + 0.5) * SQUARE_SIZE
        self.canvas.coords(self.oval, x-r, y-r, x+r, y+r)
```

You can take a look at the final program here:

* **Example**: [checkers.py](checkers.py)

### Fri, Dec 6

Today we introduced [Google Colab]() as an alternative to using an integrated development environment (IDE) like Thonny.  We also introduced graphing by importing `matplotlib.pyplot`.  

```python
import matplotlib.pyplot as plt
from math import *

def f(x): return cos(x) - x + 3

xs = [k / 100 for k in range(1000)]
ys = [f(x) for x in xs]
plt.plot(xs, ys) + plt.plot(xs, [0 for x in xs])
plt.show() 
```

<center>
<img src="example_plot.png" width = 400></img>
</center>


We did two exercises in class.  

1. We revisited an old exercise from November 1st, where we had data about which classes a list of students had registered for.  

    ```python
    registration_data = [
        {'name': 'Alice Adams', 'classes': ['Engl 490', 'Span 330', 'Phys 260', 'Engl 450', 'Math 260']}, 
        {'name': 'Bob Brown', 'classes': ['Biol 450', 'Govt 330', 'Fren 301', 'Germ 101', 'Phys 450']}, 
        {'name': 'Charlie Clark', 'classes': ['Span 490', 'Span 201', 'Germ 260', 'Hist 301', 'Govt 301']}, 
        {'name': 'Daisy Davis', 'classes': ['Govt 201', 'Span 201', 'Hist 260', 'Math 201', 'Chem 101']}, 
        {'name': 'Edward Evans', 'classes': ['Biol 450', 'Fren 450', 'Econ 102', 'Fren 260', 'Fren 330']},
        {'name': 'Fiona Foster', 'classes': ['Hist 330', 'Hist 490', 'Chem 101', 'Germ 490', 'Econ 102']},
        {'name': 'George Green', 'classes': ['Span 330', 'Hist 260', 'Chem 301', 'Govt 490', 'Govt 102']},
        {'name': 'Hannah Hill', 'classes': ['Biol 490', 'Fren 301', 'Engl 260', 'Engl 301', 'Germ 450']},
        {'name': 'Isaac Ives', 'classes': ['Span 330', 'Econ 201', 'Fren 330', 'Biol 450', 'Math 260']},
        {'name': 'Jessica Johnson', 'classes': ['Engl 201', 'Econ 102', 'Span 101', 'Govt 330', 'Chem 490']},
        {'name': 'Kevin King', 'classes': ['Biol 330', 'Span 260', 'Biol 260', 'Germ 301', 'Math 102']},
        {'name': 'Lily Lewis', 'classes': ['Span 301', 'Biol 102', 'Math 330', 'Fren 450', 'Engl 101']},
        {'name': 'Michael Miller', 'classes': ['Biol 450', 'Fren 102', 'Fren 201', 'Phys 102', 'Math 102']},
        {'name': 'Nora Nelson', 'classes': ['Math 260', 'Fren 101', 'Biol 101', 'Engl 301', 'Germ 260']},
        {'name': 'Oliver Owens', 'classes': ['Econ 260', 'Fren 450', 'Biol 260', 'Engl 490', 'Germ 330']},
        {'name': 'Patricia Parker', 'classes': ['Phys 101', 'Fren 201', 'Hist 201', 'Germ 330', 'Germ 102']},
        {'name': 'Quinn Quinn', 'classes': ['Biol 301', 'Econ 260', 'Biol 101', 'Biol 201', 'Span 101']},
        {'name': 'Rachel Roberts', 'classes': ['Biol 450', 'Econ 301', 'Chem 330', 'Germ 260', 'Span 490']},
        {'name': 'Samuel Smith', 'classes': ['Hist 260', 'Econ 101', 'Germ 301', 'Govt 301', 'Math 450']},
        {'name': 'Tina Taylor', 'classes': ['Govt 450', 'Hist 101', 'Span 201', 'Fren 330', 'Hist 201']},
        {'name': 'Ulysses Underwood', 'classes': ['Engl 201', 'Phys 101', 'Engl 101', 'Econ 260', 'Chem 260']},
        {'name': 'Vanessa Vincent', 'classes': ['Econ 201', 'Span 101', 'Engl 201', 'Math 260', 'Phys 301']},
        {'name': 'William Wilson', 'classes': ['Math 490', 'Math 201', 'Biol 102', 'Germ 260', 'Germ 102']},
        {'name': 'Xavier Xander', 'classes': ['Germ 301', 'Govt 101', 'Govt 102', 'Chem 490', 'Hist 102']}, 
        {'name': 'Yolanda Young', 'classes': ['Hist 301', 'Chem 102', 'Govt 330', 'Chem 101', 'Econ 330']},
        {'name': 'Zachary Zimmerman', 'classes': ['Biol 330', 'Chem 330', 'Hist 201', 'Phys 490', 'Chem 260']}
    ]   
    ```

    Make a list (including repeats) of all classes the students have signed up for.  Then use the `Counter` class from the `collections` library to create a `Counter` with keys equal to the different courses and values equal to the number of these students who have signed up for each course.  

2. Suppose we have imported `cos` from the `math` library. Consider the function

    ```python
    def f(x): return cos(x) - x + 3
    ```

    Write a recursive function `find_roots(f, a, b, precision = 10**(-6))` that can find the root of the function `f`.  Recall the algorithm (which we also discussed on Nov 6) has these steps:

    a. Find the midpoint of `a` and `b`.  
    b. If `f(m) == 0` or `b` and `a` are really really close, then return `m`. 
    c. If `f(a) * f(m) < 0`, then the root must be between `a` and `m`, so use recursion.
    d. Otherwise the root must be between `m` and `b`, so use recursion. 

### Mon, Dec 9

Today we talked about a few of the problems from the [final exam review](practicefinal.pdf). It particular we talked about how to understand a recursive function by using a stack diagram.  

We also looked at this program:

```python
def median(nums):
    while len(nums) < 2:
        nums.pop(0)
        nums.pop()
    if len(nums) == 2:
        return sum(nums) / 2
    else: 
        return nums[0]

a = [2,4,6,8,10,12]
print(median(a))
```

1. What is the value of the list `nums` each time the while-loop condition is checked?

2. What does this program print when it is run?

3. Describe two bad things about the way this median function is implemented.  


