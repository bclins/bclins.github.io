---
title: Midterm 2 Review
css: ../mockup.css
header-includes: |
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <style>
  :root {
    --header-color:	#622; 
    --link-color: #A32; 
  }
  </style>
---

\newcommand{\ds}{\displaystyle}
\newcommand{\on}{\operatorname}
\newcommand{\R}{\mathbb{R}}

Midterm 2 will be this Friday, April 12.  The exam will focus on these topics. 

### Neural Networks

Make sure you understand the basics of how layers of a neural network are defined by combining an affine linear function $v \mapsto Wv + b$ (where $W$ is a weight matrix and $b$ is a bias vector) and an activation function like $\on{ReLU}(x) = \max(x, 0)$ or the sigmoid function $\sigma(x) = \dfrac{1}{1+e^{-x}}$. You should know how to draw a computation graph and how to do the backpropagation algorithm, and understand what backpropagation is used for. There will be questions on the example similar to the questions on this workshop:

* **Workshop:** [Backpropagation](Workshops/Backpropagation.pdf)


### Image Convolution

You should understand the basic idea of how image convolution with a kernel works.  If I give you an image matrix like 

$$\begin{pmatrix} 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 1 & 1 & 1 & 1 & 1 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \end{pmatrix},$$

then you should be able to compute the convolution with a simple kernel $K = \tfrac{1}{9} \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$.  For the pixels on the edge of the original image matrix, you can assume that the pixels just off the edge are all zeros, so for example the top left pixel is 0 and so are all of its neighbors (above, below, left, and right). 

I might also ask you to predict what a convolution matrix does, for example $K = \begin{pmatrix} -1 & -1 & -1 \\ -1 & 8 & -1 \\ -1 & -1 & -1 \end{pmatrix}$ will calculate how different the center pixel is from its immediate neighbors, so it will tend to detect the edges of an image.  

### K-Means Clustering

I could ask you to do one step of the k-means clustering algorithm with some simple data.  For example, if I had 5 points in $\R^2$ and I wanted to find $k = 2$ clusters.  Suppose that the five points are $(-1,-1), (-1,2), (2,-3), (3,1), (4,-1)$ and I start with $(3,1)$ and $(4,-1)$ as my representative points.  What are the clusters and representative points after 1 iteration of the k-means algorithm?  

### Principal Component Analysis 

I won't ask you to calculate the principal components of a large matrix, but you should understand what principal components are and why PCA is useful.  You should also know what the **covariance matrix** is: for a data matrix $X$ with each row representing one data point, the covariance matrix is
$$Q = \dfrac{1}{n-1} (X - \bar{x})^T (X-\bar{x})$$
where $\bar{x}$ is a matrix with every entry in column $j$ equal to the average of the entries in column $j$ of $X$.  

Then the principal components are the orthogonal columns of a matrix $W$ such that 
$$Q = W D W^T$$
where $D$ is a diagonal matrix.  If $W_k$ is the matrix with the $k$ most important columns of $W$, then you can compress the data in the original data matrix $X$ by computing
$$X_k = X W_k.$$
Then to recover the original data (approximately), 
$$X \approx X_k W_k^T.$$
You do not need to memorize any of these formulas, but you should be able to calculate simple examples.  For example, you could be asked to calculate the covariance matrix for something like this data matrix:
$$X = \begin{pmatrix} 1 & 5 \\ 0 & 3 \\ -1 & 4 \end{pmatrix}.$$


### k-Nearest Neighbors Algorithm

You should know this algorithm.  I might ask you to apply this algorithm with pencil and paper on a simple example.  For example, using the $\ell_1$-norm ($\|v\|_1 = |v_1| + |v_2| + \ldots + |v_n|$) to measure distance, what are the 3 closest neighbors of the point $(0,5)$ in the set $\{ (-1,-1), (-1,2), (2,-3), (3,1), (4,-1) \}$? 

### Markov chains with rewards

Given a Markov chain with transition matrix $Q$ and reward vector $R$, you should know that the expected value vector $v$ is the solution of the recursive formula
$$ v = R + Qv$$
and that you can use the value iteration algorithm to find the solution.  You should also understand that expected value is the theoretical average of the total reward for each possible starting state. 

### Other 

Make sure you know and can explain the following terminology & concepts. 

* Supervised learning
* Unsupervised learning
* Dimension reduction
* Classification 
* Curse of dimension



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
