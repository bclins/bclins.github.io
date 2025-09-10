---
title: Octave Code Snippets
css: https://bclins.github.io/mockup.css
---

### Euler's Method

I asked ChatGPT to implement Euler's method in GNU Octave, and here is what it came up with. If you would rather use Octave than Python for [Homework 3](HW/HW3.pdf) or [Project 1](Project1.pdf), then you can start with this code, if you would like.  

```matlab
% Euler's method in Octave
% Solves y' = f(t,y) for t in [a,b] with initial condition y(a) = y0

% Define the function f(t,y)
f = @(t,y) y - t^2 + 1;   % Example ODE: y' = y - t^2 + 1

% Interval [a,b] and step size h
a = 0;
b = 2;
h = 0.2;

% Initial condition
y0 = 0.5;

% Number of steps
N = floor((b - a)/h);

% Preallocate arrays
t = zeros(1, N+1);
y = zeros(1, N+1);

% Initial values
t(1) = a;
y(1) = y0;

% Euler iteration
for n = 1:N
    y(n+1) = y(n) + h * f(t(n), y(n));
    t(n+1) = t(n) + h;
end

% Display results
disp([t' y'])

% Plot solution
plot(t, y, 'o-')
xlabel('t')
ylabel('y(t)')
title('Euler''s Method Approximation')
grid on

```

### Slope Fields

Here's a slope field using Octave.  

```matlab
% Slope field for y' = -t / y in Octave

% Define the function
f = @(t,y) -t ./ y;

% Grid for (t,y)
tmin = -3; tmax = 3;
ymin = -3; ymax = 3;
[t, y] = meshgrid(linspace(tmin, tmax, 20), linspace(ymin, ymax, 20));

% Compute slopes
dy = f(t, y);
dx = ones(size(dy));       % dt is always 1 (to represent direction field)

% Normalize the arrows for consistent length
L = sqrt(dx.^2 + dy.^2);
dx = dx ./ L;
dy = dy ./ L;

% Plot slope field using quiver
quiver(t, y, dx, dy, 0.5)   % 0.5 scales arrow size
xlabel('t')
ylabel('y')
title('Slope field for dy/dt = -t/y')
axis tight
grid on
```
