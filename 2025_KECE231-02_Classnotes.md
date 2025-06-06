# Classnotes from 2025 KECE231

## ODE: Ordinary Differential Equation
> ODEs can have more than one dependent variable and
> can only have one independent variable

### Example:
- $\frac{dy}{dx} + 6y = e^{-x}$
- $\frac{dx}{dt} + \frac{dy}{dt} = 3x + 2y$

### Order
> Order of highest derivative in equation
- **First Order**: $\frac{dy}{dx} + y = e^{-x}$
- **Second Order**: $\frac{d^2y}{dx^2} + 5\frac{dy}{dx} - 4y = e^{x}$

### Type
- Is coefficient constant or variable?
- Is driving function constant or variable?

### Linearity
We will only consider linear ODEs

### Solution
Any function that satisfies the ODE over an interval

---

## IVP: Initial Value Problem
### Subjected to initial conditions
- $y(x_0) = y_0$ 
- $y'(x_1) = y_1$
- $\cdots$
- $y^{(n-1)}(x_{n-1}) = y_{n-1}$

### 1st Order IVP

Solve $\frac{dy}{dx}= f(x,y)$ subjected to $y(x_0) = y_0$

### 2nd Order IVP

Solve $\frac{d^2y}{dx^2} = f(x,y,y')$ subjected to $y(x_0) = y_0$ 
and $y'(x_1) = y_1$

---

## Separable equations
Can be written in the form of
> $$\frac{dy}{dx} = g(x)h(y)$$

Solve by separating variables:
$$\frac{dy}{dx} = g(x)h(y) \Longrightarrow \frac{1}{h(y)}dy = g(x)dx$$
$$\Rightarrow \underbrace{\int \frac{1}{h(y)}dy = \int g(x)dx}_{\text{
	hopefully easy to integrate}}$$

**<span style="color:red; font-weight:bold">Example:</span>**
$$\frac{dy}{dx}=-\frac{x}{y},\,y(4)=-3$$

**<span style="color:blue; font-weight:bold">Solution:</span>**
Re-arrange $yfy=-xdx$
$$\int y dy = -\int x dx$$
$$\Rightarrow \frac{y^2}{2} = -\frac{x^2}{2} + C_1$$
$$\Rightarrow \boxed{x^2 + y^2 = C^2}$$

---

## Linear equations
Standard form:
> $$\frac{dy}{dx} + P(x)y = f(x)\textcolor{red}{+0}$$ 

Solution is sum of to solutions
> $$y = \underset{\text{complementory function}}{y_c} + \underset{\text{particular solution}}{y_p}$$

$y_c$ is solution for 
> $$\frac{dy}{dx} + P(x)y = 0$$

$y_p$ is solution for
> $$\frac{dy}{dx} + P(x)y = f(x)$$

---

### Homogeneous DE
> A linear equation is homogeneous if $f(x) = 0$.

A homogeneous equation can be solved by **separating variables**.

---

### Method of Solving Linear equations: Integrating Factor
Given a linear equation in **standard form**:
> $$\frac{dy}{dx} + P(x)y = f(x)$$

Integrating factor:
> $$\mu(x) = e^{\int P(x)dx}$$

Solving the ODE using integrating factor:

$$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)f(x)$$
$$\Rightarrow \frac{d}{dx}[\mu(x)y] = \mu(x)f(x)$$
$$\overset{\int dx}{\Rightarrow} \mu(x)y = \int \mu(x)f(x)dx + C$$

Then the solution is given by
$$\boxed{y = \frac{1}{\mu(x)}\left(\int \mu(x)f(x)dx + C\right)}$$

where $C$ is a constant of integration.

**<span style="color:red; font-weight:bold">Example:</span>** Solve the DE:
$$x\frac{dy}{dx} - 4y = x^6 e^{x}$$

**<span style="color:blue; font-weight:bold">Solution:</span>**

Standard form:
$$\frac{dy}{dx} - \frac{4}{x}y = x^5 e^{x}$$

Integrating factor:
$$e^{\int P(x)dx} = e^{\int -\frac{4}{x}dx}
	= e^{-4\ln|x|} = x^{-4}$$

Integrating factor method:
$$y = \frac{1}{x^{-4}}\left( \int xe^{x} dx + C\right)$$
$$\Rightarrow \boxed{y = x^4(x-1)e^x + Cx^4}$$

---

## Exact equations
Given function: 
> $$\underset{M\text{ and }N\text{ are coefficients can be function of x only, 
	y only, or x and y}}{M(x,y)dx + N(x,y)dy = 0}$$

Given function is **exact** if:
> $$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

This exact equation is a differential of some function $f(x,y) = C$

That means $f(x,y)$ is also a solution of the equation: 

> $$M(x,y)dx + N(x,y)dy = 0$$

$$f(x,y) = \int M(x,y)dx + g(y) = \int N(x,y)dy + h(y)$$

where

$$ g'(y) = M(x,y) - \frac{\partial}{\partial y}\int M(x,y)dx $$
$$\underset{\text{easier than it looks}}{h'(y) = N(x,y) - \frac{\partial}{\partial x}\int N(x,y)dy}$$

<span style="color:red; font-weight:bold">Example:</span>
$$2xydx + (x^2 - 1)dy = 0$$

<span style="color:blue; font-weight:bold">Solution:</span>
$$\underbrace{2xy}_{M(x,y)}dx + \underbrace{(x^2 - 1)}_{N(x,y)}dy = 0$$
$$\frac{\partial M}{\partial y} = 2x = \frac{\partial N}{\partial x}
	\quad \Rightarrow \quad \text{given Eq. is }\textbf{Exact}$$
$$f(x,y) = \int Mdx + g(y) = x^2y+g(y)$$
$$\Rightarrow N(x,y) = \frac{\partial f}{\partial y} = x^2 + g'(y) $$
$$\Rightarrow g'(y) = -1 \quad \Rightarrow \quad g(y) = -y + C$$
$$\Rightarrow \boxed{f(x,y) = x^2y - y + C}$$

---

### Integrating factor for non-exact equations
If the equation is not exact, we can use an integrating factor $\mu(x,y)$ such that:

> If $(M_y - N_x)/N$ is a function of $x$ only, then $\mu(x,y) = \mu(x)$
$$ \mu(x) = e^{\int \frac{M_y - N_x}{N}dx} $$

> If $(N_x - M_y)/M$ is a function of $y$ only, then $\mu(x,y) = \mu(y)$
$$ \mu(y) = e^{\int \frac{N_x - M_y}{M}dy} $$

While $M_y = \frac{\partial M}{\partial y}$ and $N_x = \frac{\partial N}{\partial x}$,
the integrating factor can be used to make the equation exact.


<span style="color:red; font-weight:bold">Example:</span> Solve DE:
$$xydx + (2x^2 + 3y^2 -20)dy = 0$$

<span style="color:blue; font-weight:bold">Solution:</span>
$$\underbrace{xy}_{M(x,y)}dx + (\underbrace{2x^2 + 3y^2 -20}_{N(x,y)})dy = 0$$
$$\frac{\partial M}{\partial y} = x \neq \frac{\partial N}{\partial x} = 4x 
	\quad \Rightarrow \quad \text{not Exact}$$
$$\Rightarrow \underset{x,y\text{ dependent}}{\frac{M_y - N_x}{N} = \frac{x - 4x}{2x^2 + 3y^2 -20}}
	\quad \text{and} \quad \underset{y\text{ dependent}}{\frac{N_x - M_y}{M} = \frac{3}{y}}$$
$$\Rightarrow \mu(y) = e^{\int \frac{3}{y}dy} = e^{3\ln|y|} = y^3$$
$$\Rightarrow xy^4dx + (2x^2y^3+3y^5-20y^3)dy \quad (\text{Exact Function})$$
$$\Rightarrow \boxed{f(x,y) = \frac{1}{2}x^2y^4 + \frac{1}{2}y^6 - 5y^4 + C}$$

---

## Solution for non-exact equations by substitution
### Homogeneous functions
<small>(it is different from homogeneous equations)</small>

If $f(x,y)$ is a homogeneous function of degree $\alpha$, then:
> $$f(tx,ty) = t^\alpha f(x,y)$$

<span style="color:red; font-weight:bold">Example:</span>
$$f(x,y) = x^3 + y^3$$
$$f(tx,ty) = (tx)^3 + (ty)^3 = t^3(x^3 + y^3) = \underbrace{t^3f(x,y)}_{\text{
	homogeneous function of degree 3}}$$

---

### Homogeneous first order ODEs

If we have a first order ODE in the form of:
> $$M(x,y)dx + N(x,y)dy = 0$$

If $M(x,y)$ and $N(x,y)$ are homogeneous functions of degree $\alpha$,
 then we can make is separable by using substitution:
> $$y = vx \quad \text{or} \quad x=vy$$
where $v$ and $u$ are new dependent variables.

<span style="color:red; font-weight:bold">Example:</span> Solve DE:
$$(x^2 + y^2) dx + (x^2-xy) dy = 0$$

<span style="color:blue; font-weight:bold">Solution:</span>
$$\underbrace{(x^2 + y^2)}_{M(x,y)}dx + \underbrace{(x^2-xy)}_{N(x,y)}dy = 0$$
$$\frac{\partial M}{\partial y} = 2y \neq \frac{\partial N}{\partial x} = 2x - y
	\quad \Rightarrow \quad \text{not Exact}$$

Since $M(x,y)$ and $N(x,y)$ are homogeneous functions of degree 2,
we can use substitution:&emsp; $y = ux \quad \Rightarrow \quad dy = udx + xdu$

$$\Rightarrow (x^2 + u^2x^2)dx + (x^2 - ux^2)(udx + xdu) = 0$$
$$\Rightarrow \frac{1 - u}{1 + u}du + \frac{1}{x}dx = 0
	\quad \Rightarrow \quad \text{Separable function}$$
$$\Rightarrow \boxed{(x+y)^2 = C_1xe^{\frac{y}{x}}}$$

---

## Bernoulli's equation
A Bernoulli's equation is a first order ODE of the form:
> $$\frac{dy}{dx} + P(x)y = f(x)y^n$$

where $n \in \mathbb{R}$ and $P(x)$ and $f(x)$ are continuous functions.
- for $n = 0 \> \text{or} \> 1$, it is a linear equation

i.e. we get: $\frac{dy}{dx} + P(x)y = f(x)$ ($n=0$)
$\frac{dy}{dx} + (P(x)-f(x))y = 0$ ($n=1$)

- for $n \neq 0, 1$, we can use substitution to reduce it to a linear equation.
> $$v = y^{1-n} \quad \Rightarrow \quad y = v^{\frac{1}{1-n}}$$

<span style="color:red; font-weight:bold">Example:</span> Solve DE:
$$x\frac{dy}{dx} + y = x^2y^2$$

<span style="color:blue; font-weight:bold">Solution:</span>
$$\frac{dy}{dx} + \frac{1}{x}y = xy^2$$
$$\Rightarrow \text{Bernoulli's equation with } n=2, u=y^{-1}$$
Substitution:&emsp; $y=u^{-1} \quad \Rightarrow \quad dy = -u^{-2}du$
$$\Rightarrow -u^{-2}\frac{du}{dx} + \frac{1}{x}u^{-1} = xu^{-2}$$
$$\Rightarrow \frac{du}{dx} + \underbrace{\left(-\frac{1}{x}\right)}_{P(x)} u = 
	\underbrace{-x}_{f(x)} \quad \Rightarrow \quad \text{Standard form}$$
$$\Rightarrow \mu(x) = e^{\int P(x)dx} = e^{\int -\frac{1}{x}dx} = e^{-\ln|x|} = \frac{1}{x}$$
$$\Rightarrow u = \frac{1}{\mu(x)}\left( \int \mu(x)f(x)dx + C \right) \quad 
	\Rightarrow \quad u=-x^2 + Cx$$
$$\Rightarrow \boxed{y = \frac{Cx}{x^2 - 1}}$$

---

## Reduction to separation of variables
If we have a first order ODE of the form:
> $$\frac{dy}{dx} = f(Ax+By+C),\qquad A, \> B \> \text{and} \> C : \text{Const.}$$

we can use substitution reducing into a separable equation.
$$u = Ax + By + C \quad \text{and}\quad B \neq 0
	\quad \Rightarrow \quad \frac{du}{dx} = A + B\frac{dy}{dx}$$

<span style="color:red; font-weight:bold">Example:</span> Solve IVP of DE:
$$\frac{dy}{dx}=(-2x+y)^2+7,\quad y(0)=0$$

<span style="color:blue; font-weight:bold">Solution:</span>
$$\frac{dy}{dx} = f(-2x+y), \quad f(u) = u^2+7 \quad \Rightarrow \quad 
	\frac{du}{dx} = -2 + \frac{dy}{dx}$$
$$\Rightarrow \frac{du}{dx} = u^2 - 9 \quad \Rightarrow \quad \text{separable function}$$
$$\Rightarrow \frac{du}{(u-3)(u+3)}=dx \quad \Rightarrow \quad \frac{1}{6} \left[
	\frac{1}{u-3} - \frac{1}{u+3} \right] du = dx$$
$$\Rightarrow \frac{u-3}{u+3} = Ce^{6x} \quad \Rightarrow \quad u = \frac{3(1+Ce^{6x})}{1-Ce^{6x}}$$
$$\Rightarrow y = 2x + \frac{3(1+Ce^{6x})}{1-Ce^{6x}}, \quad y(0)=0 \quad \Rightarrow 
	\quad C = -1$$
$$\Rightarrow \boxed{y = 2x + \frac{3(1-Ce^{6x})}{1+e^{6x}}}$$

---

## A Numerical Solutions for ODEs
- ODEs may be solved analytically or numerically, depending which is easier or possible.

### Euler's Method (1st order Runge-Kutta)
Given $y' = f(x,y), \> y(x_0) = y_0$ gives:
> $$y_{n+1} = y_n + h \underbrace{f(x_n,y_n)}_{\text{slope}}$$
<small>
where $x_n = x_0 + nh, \quad n = 0, 1, 2, 3, \cdots$
</small>

### Improved Euler's Method (2nd order Runge-Kutta)
> $$ y_{n+1} = y_n + h \frac{f(x_n, y_n) + f(x_{n+1}, y^*_{n+1})}{2}$$
<small>
where $y^*_{n+1} = y_n + hf(x_n, y_n), \quad n = 0, 1, 2, 3, \cdots$
</small>

### 4th order Runge-Kutta (RK4)
> $$ y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$
<small>
where $k_1 = f(x_n, y_n)$\
$k_2 = f(x_n + \frac{1}{2}h, y_n + \frac{1}{2}hk_1)$\
$k_3 = f(x_n + \frac{1}{2}h, y_n + \frac{1}{2}hk_2)$\
$k_4 = f(x_n + h, y_n + hk_3)$
</small>

<span style="color:red; font-weight:bold">Example:</span>
Get numerical solution of $y(1.5)$ using RK1, RK2 and RK4 of DE:
$$y' = 2xy, \quad y(1) = 1$$

<span style="color:blue; font-weight:bold">Solution:</span>
![Solution Graph](./Example-RK1_RK2_RK4.png)

---

## Theory of Linear Equations
> $$a_n(x) y^{(n)} + a_{n-1}(x) y^{(n-1)} + \cdots +  a_1(x) y' + a_0(x) y = g(x)$$
<small>
> - $a_n(x) \neq 0$ and continuous
> - $g(x)$ is continuous
</small>

- If $g(x) = 0$, it is a homogeneous equation
- If $g(x) \neq 0$, it is a non-homogeneous equation

The general solutions is:
> $$y = \underset{\text{complementory function}}{y_c} + \underset{\text{particular solution}}{y_p}$$
<small>$y_c$ is solution for homogeneous equation.\
$y_p$ is solution for non-homogeneous equation.</small>

---

### Homogeneous equation
- sum of two of more solutions is also a solution
- constant multiple of solution is also a solution
- always prossess trivial solution $y = 0$

---

### Super Position Principle
Let $y_1, y_2, \cdots , y_k$ be solutions of the homogeneous DE.\
Then, the linear combination
>$$y = c_1 y_1(x) + c_2 y_2(x) + \cdots + c_k y_k(x)$$
<small>where the $c_i, \> i = 1, 2, \cdots , k$ are arbitrary constants,</small>

is also a solution.

<span style="color:red; font-weight:bold">Example:</span> DE:
$$ x^3y'''-2xy'+4y=0 $$
has solutions $y_1 = x^2$ and $y_2 = x^2 \ln{|x|}$

---

### Linear Dependence/Independence
A set of functions $f_1(x), f_2(x), \cdots , f_n(x)$ are **linearly dependent** if 
there exist constants $c_1, c_2, \cdots , c_n$, not all zero, such that:
> $$ c_1 f_1(x) + c_2 f_2(x) + \cdots + c_n f_n(x) = 0 $$
<small>Not linearly dependent $\Rightarrow$ **linearly independent**.</small>

---

### Wronskian (Linearity determinant)
> $$W(f_1, f_2, \cdots, f_n) = 
\begin{vmatrix}
f_1 & f_2 & \cdots & f_n \\
f_1' & f_2' & \cdots & f_n' \\
\vdots & \vdots & \ddots & \vdots \\
f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)}
\end{vmatrix}$$
<small>each functions $f_1(x), f_2(x), \cdots , f_n(x)$ possesses at least $n-1$ derivatives.</small>

$W \neq 0$ means functions $f_1(x), f_2(x), \cdots , f_n(x)$ are linearly dependent.

---

## Homogeneous with Constant Coefficients

### Auxiliary Equation
> $$am^2 + bm + c = 0$$
<small>when given $ay'' + by' + cy = 0$</small>

#### Case I: \( m_1 \) and \( m_2 \) are real and distinct
> $$y = C_1 e^{m_1 x} + C_2 e^{m_2 x}$$

#### Case II: \( m_1 = m_2 \) (equal roots)
> $$y = C_1 e^{m_1 x} + C_2 x e^{m_1 x}$$

#### Case III: \( m_1, m_2 \) are complex
> $$y = e^{\alpha x} \left( C_1 \cos{\beta x} + C_2 \sin{\beta x} \right)$$
<small>$m_1 = \alpha + i\beta, \quad m_2 = \alpha - i\beta \quad (\alpha,\ \beta \in \mathbb{R})$</small>

<span style="color:red; font-weight: bold;">Example:</span> Solve DE:  
$$ y'' - 2y' - 3y = 0 $$

<span style="color:blue; font-weight:bold">Solution:</span> Auxiliary equation:  $m^2 - 2m - 3 = 0$
$$\Rightarrow m = \frac{2 \pm \sqrt{(-2)^2 + 4 \cdot 1 \cdot 3}}{2} = 
	\frac{2 \pm \sqrt{16}}{2} = \frac{2 \pm 4}{2}$$
$$\Rightarrow m_1 = 3,\quad m_2 = -1$$
$$\Rightarrow \boxed{y = C_1 e^{3x} + C_2 e^{-x}}$$

---

### Higher Order Equations
The auxiliary equation of $n$th-order DE is:
> $$a_n m^n + a_{n-1} m^{n-1} + \cdots + a_2 m^2 + a_1 m + a_0 = 0$$
<small>when given $a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_2 y'' + a_1 y' + a_0 y = 0$</small>

- If the roots are all real and distinct, the solution is:
$$y = C_1 e^{m_1 x} + C_2 e^{m_2 x} + \cdots + C_n e^{m_n x}$$

- If there are equal or complex roots, the general solution will contain
 	the **linear combination** of the solutions, including terms like
	$x e^{mx}$ or $\sin, \cos$ components.

<span style="color:red; font-weight: bold;">Example:</span> Solve the DE:  
$$ y''' - 3y'' - 4y = 0 $$

<span style="color:blue; font-weight:bold">Solution:</span> Auxiliary equation:$m^3 + 3m^2 - 4 = 0$

$$\Rightarrow (m - 1)(m^2 + 4m + 4) = (m - 1)(m + 2)^2$$
$$\Rightarrow m_1 = 1, \quad m_2 = m_3 = -2$$
$$\Rightarrow \boxed{y = \underbrace{C_1 e^{x}}_{\text{Case I}}
	+ \underbrace{C_2 e^{-2x} + C_3 x e^{-2x}}_{\text{Case II}}}$$

---

## Method of undetermined coefficients
> $$\square y'' + \square y' + \square y = g(x)$$
<small>we will work with constant coefficients</small>

In context of class, $g(x)$ must be one of the following types:

<table style="margin:0 auto">
<tr>
	<td>Constant</td>
	<td>Polynomial</td>
	<td>Exponential</td>
</tr>
<tr>
	<td>Sine or Cosine</td>
	<td>Sum of Above</td>
	<td>Product of Above</td>
</tr>
</table>

<span style="color:red; font-weight: bold;">Example:</span> Solve the DE:  
$$y'' + 4y' - 2y = 2x^2 - 3x + 6$$

<span style="color:blue; font-weight:bold">Solution:</span> Using auxiliary equation,
$y_c = C_1 e^{(-2+\sqrt{6})x} + C_2 e^{-(2+\sqrt{6})x}$
$$y_p = Ax^2 + Bx + C \quad \Rightarrow \quad
	y_p' = 2Ax + B \quad \text{and} \quad y_p'' = 2A$$
$$\Rightarrow 2A + 4(2Ax + B) - 2(Ax^2 + Bx + C) = 2x^2 - 3x + 6$$
$$\Rightarrow A = -1, \> B=-\frac{5}{2}, \> C = -9 \quad 
	\Rightarrow \quad y_p = -x^2 - \frac{5}{2}x - 9$$
$$\boxed{y = y_c + y_p = C_1 e^{(-2+\sqrt{6})x} + C_2 e^{(-2-\sqrt{6})x} - x^2 - \frac{5}{2}x - 9}$$

---

### Duplication problem
To find an appropriate particular solution $y_p$, we avoid duplication with the complementary solution.

If $Ae^x$ is already part of $y_c$, we try:
$$y_p = Ax e^x$$

If $Ae^x$ and $Axe^x$ are already part of $y_c$, we try:
$$y_p = Ax^2 e^x$$

---

