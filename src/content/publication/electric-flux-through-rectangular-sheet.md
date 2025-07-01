---
isDraft: false
metaContent:
    {
        title: "Electric Flux Through Rectangular Sheet",
        description: "Solving a definite integral to find the electric flux through a rectangular sheet by a finite charge.",
        heroImage: [true, "/index/pub/electric-flux-through-rectangular-sheet.png"],
        keywords: ["physics", "electrostatic", "gauss law", "integration"],
    }
createdAt: "03 Dec 2023"
---

## How Things Got Started

This story begins in the senior year of my high school, as I was preparing for JEE.

We were studying **Gauss-Law** in physics. Our teacher gave us some practice problems to get a better hang of stuff.

One of the problems was about a point charge placed in different positions around a cube and we have to find the electric flux.

The problem was as follows, _"There is a point charge q, placed at the center of the face of a cube. Find the electric flux passing through the face opposite to the face on which the charge is placed."_

My 16 year old brain wasn't able to solve this problem, as a matter of fact no one in the class was able to solve it as well.

And recently, out of nowhere, my thoughts circle back to this problem and I gave it another go. And this time I was able to solve it, and I want to share what I was able to do here.

## Let's Get Things In Order First

**The problem**: _"There is a point charge q, placed at the center of the face of a cube. Find the electric flux passing through the face opposite to the face on which the charge is placed."_

From the diagram we can see that the target square face can be divided into four equal squares around it's center.

And if we find the flux through one quadrant, we can just multiply it by four and we'll get our final result.

## Let The Math Begin

I mentioned above that we need to find the flux for one square, but what if instead of a square it was a rectangle with different measurements.

So what we'll do is try to find the answer for a rectangle and put the dimensions of the square in the expression to generate our answer.

$$ \Phi*{(m,n)} = \Large\oint*{R*{(m,n)}}\normalsize\overrightarrow{E}*{(x,y)}\ldotp\text{d}\overrightarrow{s} $$

$$ \overrightarrow{E}_{(x,y)}=\dfrac{1}{4\pi\epsilon_{0}}\dfrac{q(x\hat{i}+y\hat{j}+a\hat{k})}{(a^{2}+x^{2}+y^{2})^{3/2}} $$

$$ \overrightarrow{\text{d}s}=\text{d}x\text{d}y\hat{k} $$

$$ \Phi*{(m,n)} = \Large\int*{0}^{m}\normalsize\text{d}x\Large\int*{0}^{n}\normalsize\dfrac{1}{4\pi\epsilon*{0}}\dfrac{qa}{(a^{2}+x^{2}+y^{2})^{3/2}}\text{d}y $$

Now we'll make a subtitution for in the coordinate system for $x$ and $y$ as follows.

$$ \begin{align} x=a\tan(\theta) \implies & \text{d}x=a\sec^{2}(\theta)\text{d}\theta, \\ y=a\tan(\phi) \implies & \text{d}y=a\sec^{2}(\phi)\text{d}\phi \end{align} $$

Hence the limits of the integral will turn into

$$ \begin{align} x:[0,n] &\rightarrow & \theta:[0,\arctan(\frac{n}{a})]&\equiv[0,\alpha] \\ y:[0,m]& \rightarrow & \phi:[0,\arctan(\frac{m}{a})]&\equiv[0,\beta] \end{align} $$

$$ \Phi*{(m,n)} =\Large\int*{0}^{\beta}\normalsize\text{d}\phi\Large\int*{0}^{\alpha}\normalsize\dfrac{1}{4\pi\epsilon*{0}}\dfrac{q\sec^{2}(\theta)\sec^{2}(\phi)}{(1+\tan^2(\theta)+\tan^2(\phi))^{3/2}}\text{d}\theta $$

let $\begin{align} & \tan(\theta) & = &\sec(\phi)\tan(\gamma) \\ \implies& \sec^{2}(\theta)\text{d}\theta &= &\sec(\phi)\sec^{2}(\gamma)\text{d}\gamma \end{align}$

$$ \theta:[0,\alpha] \rightarrow \gamma:[0,\arctan(\tan(\alpha)/\sec(\phi))] \equiv [0,\delta]$$

$$ \Phi*{(m,n)} = \Large\int*{0}^{\beta}\normalsize\text{d}\phi\Large\int*{0}^{\delta}\normalsize\dfrac{1}{4\pi\epsilon*{0}}q\cos(\gamma)\text{d}\gamma $$

$$ \Phi*{(m,n)} = \Large\int*{0}^{\beta}\normalsize\Big\lparen\dfrac{q}{4\pi\epsilon*{0}}\sin(\theta)\Big\vert*{0}^{\delta}\Big\rparen\text{d}\phi $$

$$ \Phi*{(m,n)} = \Large\int*{0}^{\beta}\normalsize\dfrac{q}{4\pi\epsilon\_{0}}\sin(\delta)\text{d}\phi $$

$$ \Phi*{(m,n)} = \dfrac{q}{4\pi\epsilon*{0}}\Large\int\_{0}^{\beta}\normalsize\dfrac{\sin(\alpha)\cos(\phi)}{\sqrt{\sin^{2}(\alpha)\cos^{2}(\phi)+\cos^{2}(\alpha)}}\text{d}\phi $$

let $ \begin{align} & \sin(\alpha)\sin(\phi) & = & u \\ \implies & \sin(\alpha)\cos(\phi)\text{d}\phi & = & \text{d}u \end{align}$

$$ \phi:[0,\beta] \rightarrow u:[0,\sin(\alpha)\sin(\beta)] $$

$$ \Phi*{(m,n)} = \dfrac{q}{4\pi\epsilon*{0}}\Large\int\_{0}^{\sin(\alpha)\sin(\beta)}\normalsize\dfrac{\text{d}u}{\sqrt{1-u^{2}}}$$

$$ \begin{align} \Phi*{(m,n)} & = \dfrac{q}{4\pi\epsilon*{0}} \arcsin(u)\Big\vert*{0}^{\sin(\alpha)\sin(\beta)} \\ & = \dfrac{q\arcsin(\sin(\alpha)\sin(\beta))}{4\pi\epsilon*{0}} \\ & = \dfrac{q}{4\pi\epsilon\_{0}}\arcsin\Big(\normalsize\dfrac{mn}{\sqrt{a^{2}+m^{2}}\sqrt{a^{2}+n^{2}}}\Big) \end{align}$$

## Party Time

Now that we have our expression we can get the answer for our original problem the square face.

And that will be $ 4\Phi*{(a/2,a/2)} $. which evaluates to $\dfrac{q\arcsin(0.2)}{\pi\epsilon*{0}}.$

I hope you had fun reading this article and learnt something.

Till then, I'll be floating around.
