---
repo: "ambonvik/cimba"
name: "cimba"
description: "A multithreaded discrete event simulation library in C, using POSIX pthreads for parallelized trials and replications, stackful asymmetric coroutines for concurrent simulated processes inside each thread, and optionally CUDA or other GP GPU parallelism for detailed model physics inside each coroutine."
readmeQualityOk: true
url: "https://github.com/ambonvik/cimba"
homepage: "https://cimba.readthedocs.io/en/latest/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["coroutines", "discrete-event-simulation", "hashheap", "random-number-generators", "simulation", "statistical-analysis", "ziggurat", "fibonacci-hash", "memory-pool", "c"]
stars: 77
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-08-25T20:49:44Z"
lastCommitAt: "2026-10-25T22:11:23Z"
lastReleaseAt: "2026-10-25T20:38:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["ambonvik"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbe77c41a6d813a79854d80a8ce5ca260437143a1e6e826885cb6d522a4465d8/ambonvik/cimba"
---

Cimba is a general purpose, fast discrete event simulation library written in C and assembly,
providing an expressive process-oriented simulation worldview combined with multithreaded
trial parallelism in a shared memory space for high performance on modern
desktop computers. The simulated processes are implemented as stackful coroutines 
("fibers") inside the pthreads. Cimba can also use massive GPU parallelism to
calculate model physics within the processes or events of the simulation. As far as we 
know, there is no other discrete event simulation tool that can provide 
a similar combination of powerful features and performance. 

It is currently implemented for both Linux and Windows on the x86-64 architecture, 
with other platforms planned.

### Why should I use it?
It is powerful, fast, reliable, and free.

* *Powerful*: Cimba provides a comprehensive toolkit for discrete event simulation:

  * Processes implemented as asymmetric stackful coroutines. A simulated process can
    yield and resume control from any level of a function call stack, allowing
    well-structured coding of arbitrarily large simulation models.
    A simulated process can run in an infinite loop
    or…
