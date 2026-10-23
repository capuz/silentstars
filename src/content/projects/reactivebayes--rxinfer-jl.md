---
repo: "ReactiveBayes/RxInfer.jl"
name: "RxInfer.jl"
description: "Julia package for automated Bayesian inference on a factor graph with reactive message passing"
readmeQualityOk: true
url: "https://github.com/ReactiveBayes/RxInfer.jl"
homepage: "https://rxinfer.com/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Julia"]
languagePcts: [67, 31]
topics: ["bayesian-inference", "inference-engine", "julia-language", "machine-learning", "message-passing", "probabilistic-programming", "variational-inference"]
stars: 419
forks: 39
openIssues: 20
closedIssues: 186
watchers: 12
contributors: 32
recentReleases: 0
createdAt: "2022-06-10T10:12:10Z"
lastCommitAt: "2026-10-23T09:32:39Z"
lastReleaseAt: "2022-12-21T14:18:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "community_hub"]
healthScore: 94
undervaluedScore: 38
maintainers: ["bvdmitri", "ofSingularMind", "Nimrais"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a23130a71fbfb2906410a7e30e40606be27f3a8097d3003a3928c2f51cdadc/ReactiveBayes/RxInfer.jl"
discussionCount: 123
---

# Overview

`RxInfer.jl` is a Julia package for automatic Bayesian inference on a factor graph with reactive message passing.

Given a probabilistic model, RxInfer allows for efficient message-passing-based Bayesian inference. It uses the model structure to generate an algorithm that consists of a sequence of local computations on a factor graph representation of the model.

### Performance and scalability

RxInfer.jl has been designed with a focus on efficiency, scalability and maximum performance for running Bayesian inference with message passing. Below is a comparison between RxInfer.jl and Turing.jl on latent state estimation in a linear multi-variate Gaussian state-space model. [Turing.jl](https://github.com/TuringLang/Turing.jl) is a state-of-the-art Julia-based general-purpose probabilistic programming package and is capable of running inference in a broader class of models. Still, RxInfer.jl executes the inference task in [various models](https://examples.rxinfer.com) faster and more accurately. RxInfer.jl accomplishes this by taking advantage of any conjugate likelihood-prior pairings in the model, which have analytical posteriors that are known by RxInfer.jl. As a…
