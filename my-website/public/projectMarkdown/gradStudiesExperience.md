## Heading  
Curiosity, Code, and Courant: My Graduate Journey at NYU
---

## Date  
May 2025  
---

## Type  
Life Experience, Opinion  
---

## Intro  
My experience through graduate studies at NYU.  
---

## Keywords  
- life experience  
- grad studies  
- NYU  
- USA  
---

## Link  
---

## Content  

I'm writing this two years after completing my Master’s in Scientific Computing at NYU.  
I’ve been meaning to document everything I pursued academically at NYU, and also reflect on how I ended up there in the first place.

Before grad school, I was working in Bangalore, India at Altair, where I developed geometry and meshing algorithms for HyperMesh. That was an exciting time. During undergrad, I had used tools like HyperMesh, Ansys Fluent, and CATIA extensively. Suddenly, I was working behind the scenes on one of them. It felt surreal. Over time, though, I realized I wanted to go deeper into the solver side of things and understand the mathematics behind those systems. That curiosity led me to apply to graduate programs focused on Simulation Sciences, Computational Science, Applied Mathematics, and Scientific Computing.

Computer Science wasn’t even on my radar. I didn’t think I’d have a shot at top-tier CS programs anyway. I applied to six master’s programs:  
- Computational Science at Stanford  
- Applied Mathematics at TU Delft  
- Computational Science at Imperial College London  
- Computational Sciences at Georgia Tech  
- Computational Science at UIUC  
- Scientific Computing at NYU  

Of course, I wanted to get into Stanford. I was hopeful because several people from my undergrad had made it there, but they had better GPAs, stronger research experience, and overall more impressive academic profiles. I didn’t. As expected, I didn’t get in.

In the end, I received offers from two excellent programs: one from Imperial College London and one from NYU Courant. The UK was geographically closer to home, so naturally, I chose... the USA. 😄  
Jokes aside, after much deliberation, I felt the kind of research culture and academic freedom I was seeking was better aligned with the U.S. system. So, New York it was.

NYU Courant was a solid choice. Known globally for its strength in applied mathematics, especially in numerical computation, it provided the kind of academic environment I had been looking for. I joined the Scientific Computing program with genuine excitement, driven more by curiosity than by career goals. My plan was simple: take the courses that interested me and see where they led.

Initially, I thought I would go deep into mathematics. I was fascinated by the theory behind solvers and numerical algorithms. But pure math is tough. It demands a strong foundation and a level of mental stamina that I realized I still needed to build. In my applied math courses, I started noticing that I was performing better in the computational sections. The computer science parts were relatively straightforward compared to proving theoretical bounds or establishing convergence.

That realization made me appreciate Computer Science more. Since my program required that half of my coursework come from CS, I ended up exploring a wide range of topics: programming language internals, distributed systems, high-performance computing, and more. These subjects were hands-on, intellectually engaging, and easier to apply in real-world scenarios.

One thing that stood out was the student composition. In math courses, there was a diverse mix of backgrounds, but relatively few Indian students. In CS courses, however, more than half the class was often Indian, and most were focused on getting into Big Tech. It made sense. Those jobs pay well and make life easier. There was nothing wrong with that.

But I never thought that way. My goal has always been to explore what I’m curious about. I’ve been that kind of learner — driven by interest first and everything else later. And yes, that approach has caused its share of trouble.

So, at NYU, I enrolled in the following courses:

## Courses Taken  

**Fall 2021**  
- Numerical Methods I — Prof. Benjamin Peherstorfer  
- Fundamental Algorithms — Prof. Yevgeniy Dodis  
- Computer Graphics — Prof. Daniele Panozzo  

**Spring 2022**  
- Numerical Methods II — Prof. Leslie Greengard  
- Machine Learning — Prof. Rajesh Ranganath  
- High Performance Computing — Prof. Benjamin Peherstorfer  

**Summer 2022**  
- Stochastic Calculus — Prof. Alexey Kuptsov  
- Programming Languages — Prof. Cory Plock  

**Fall 2022**  
- Computer Vision — Prof. Rob Fergus  
- Monte Carlo Sampling Methods — Prof. Jonathan Weare  
- Distributed Systems — Prof. Aurojit Panda  

**Spring 2023**  
- Algorithmic Trading and Quantitative Strategies — Prof. Petter Kolm


Most of my course selections were either mandatory (such as Fundamental Algorithms, Numerical Methods I and II, and Programming Languages) or chosen out of personal interest. I spent a good amount of time trying to deeply understand the material, often going beyond what was required. My time was divided between coursework, teaching assistant responsibilities, grading, completing assignments, and cooking for myself.

I worked hard on all the projects. Some were easy and fun, while others pushed me into unfamiliar territory. But overall, working on them turned out to be one of the most fulfilling aspects of the program.

## Projects and Research Work

### Numerical Computation Algorithms in Python and MATLAB
- Developed and tested algorithms for eigenvalue decomposition and matrix factorizations.
- Applied root-finding techniques for nonlinear and polynomial equations.
- Implemented numerical integration using Trapezoidal rule, Romberg integration, and Gaussian quadrature.
- Designed curve fitting routines and polynomial interpolation schemes.
- Solved optimization problems via Newton’s method and Chebyshev polynomial approximation.
- Used finite difference methods to solve ODEs and PDEs, including elliptic, parabolic, and advection types.
- Applied Green’s functions and Laplacian stencils (5-point and 9-point) for boundary value problems.
- Implemented Runge-Kutta schemes for time integration in dynamic systems.
- Designed iterative solvers such as Jacobi, Gauss-Seidel, and SOR.
- Performed spectral analysis using Fourier Transform and Fast Fourier Transform (FFT).

### Computer Graphics Fundamentals and Experiments
- Built a ray tracing engine in C++ for rendering meshes and point clouds.
- Used bounding volume hierarchies to accelerate ray tracing.
- Designed shading models for light-material interaction and realism.
- Implemented a CPU rasterization pipeline supporting geometric transformations.
- Developed a 2D interactive graphics application using the SDL library.

### Causal Inference-Based Recommendation System using PyTorch
- **Two-Part Recommendation Strategy**: Modeled exposure prediction followed by interest prediction.
- **Latent Preferences Modeling**: Captured unobserved user traits to improve accuracy.
- **Bias Mitigation**: Used hidden variables to remove exposure bias in recommendation scores.
- **Evaluation**: Tested on MovieLens and Amazon Reviews datasets, measured via RMSE.

### OpenMP-Based Parallel Graph Algorithms in C++
- **Implemented Algorithms**: BFS, Bellman-Ford, Connected Components using OpenMP.
- **Concurrency Handling**: Applied atomic operations and thread-local reductions.
- **Performance Evaluation**: Demonstrated scalability up to 32 threads on large-scale graphs.
- **Scalability Testing**: Benchmarked on graphs with 1M+ nodes and 15M+ edges.

### Semantic Segmentation of Satellite Imagery with U-Nets
- **Objective**: Segmented land types (buildings, roads, vegetation, water) using satellite imagery.
- **Dataset**: Used Landcover.ai high-resolution RGB tiles (512×512).
- **Models**: Trained Vanilla U-Net, U-Net+ResNet-18, U-Net+ResNet-50.
- **Augmentation**: Included random rotations, color shifts, and flips to improve generalization.
- **Training**: Used PyTorch on NYU A100 GPU cluster.
- **Evaluation**: Assessed using Jaccard Index, Precision, Recall, F1, Accuracy, Exact Match.
- **Outcome**: U-Net+ResNet-18 with augmentation yielded best performance vs training cost.

### Monte Carlo Sampling Algorithms and Statistical Methods
- **CLT & Sampling Accuracy**: Validated Central Limit Theorem using histograms and QQ plots; estimated tail probabilities and decay rates.
- **Sampling Techniques**: Used inverse transform and rejection sampling for custom 1D/2D distributions; compared method efficiency.
- **Importance Sampling**: Estimated rare event probabilities using Gaussian proposals; compared vanilla and self-normalized estimators.
- **MCMC on Ising Model**: Simulated magnetization with Gibbs and Metropolis-Hastings; evaluated sample efficiency via IAT.
- **Langevin Dynamics**: Compared Overdamped, Hybrid, and Underdamped Langevin MCMC for simulating XY models under various step sizes.
- **Ensemble MCMC & Rosenbrock**: Sampled Rosenbrock density using Newton, Langevin, and Ensemble methods; Ensemble with α=2 gave best results.

### Distributed Systems: Scalable Key-Value Store and Consensus Protocols
- Developed a **Chord-based distributed hash table in Go** for peer-to-peer networks. Used consistent hashing to enable efficient key lookups and seamless node joins/departures without disrupting the system.
- Implemented a **scalable key-value store** on top of the Chord protocol and conducted performance evaluations by scaling from 100K to 1.6M keys across 100 nodes, measuring key fetch latency under load.
- Built a **replicated state machine in Elixir** using the Raft consensus protocol to ensure consistency across distributed nodes. Implemented leader election, log replication, and term synchronization.
- Validated the **fault tolerance** of the Raft system through rigorous testing under simulated node failures, confirming recovery and consistency in the presence of crashes and network partitions.


### Quantitative Analysis of U.S. Equity Markets and Covariance Estimation
- Conducted an in-depth analysis of **S&P 500 trade and quote data (June–Sept 2007)** to investigate market microstructure and price dynamics during periods of volatility and structural change.
  
- Developed a **nonlinear market impact model** to estimate temporary price impact using volatility, volume imbalance, and average traded volume. Fitted the model via nonlinear least squares and validated parameters using residual and paired bootstrap techniques.

- Performed a detailed **residual analysis** showing non-normality and heavy tails, highlighting sensitivity to data-cleaning parameters. Applied White’s test to confirm homoskedasticity in model residuals.

- Segmented stocks into **more active vs less active groups** and re-estimated model parameters for each, revealing distinct impact characteristics across liquidity tiers.

- Estimated **annualized covariance matrices** using Empirical, Clipped, and Optimal Shrinkage methods on five-minute returns. Demonstrated that optimal shrinkage consistently yielded the most stable and unbiased estimates across multiple portfolio construction strategies.

- Built and evaluated portfolios under **four predictor types**: minimum variance, omniscient foresight, mean-reversion, and random long-short. Optimal shrinkage was found to be the most robust across cases based on volatility and bias metrics.

- Applied concepts from **portfolio theory** to compute efficient frontiers and derive closed-form expressions for optimal weights under varying risk-free rate scenarios. Used Black-Litterman framework to incorporate subjective views into return forecasts.

- Emphasized the importance of **data preprocessing**—including normalization, interpolation, and noise removal—in improving model robustness and downstream statistical inference.


## Closing Thoughts  

In my final semester, I landed a job at SIMULIA in Dassault Systèmes. It was a tough market when I graduated. Most people I knew were applying to hundreds or even thousands of roles without much success. I got mine after just 32 applications. It felt incredible.

The only catch was that the job was in Boston, and I really didn’t want to leave New York. But the role was similar to what I had done at Altair, and I liked that kind of work. Equipped with more knowledge and experience, I was ready to take on new challenges. And looking backward, I should not have stopped applying. That story, however, belongs in a different post.

---
