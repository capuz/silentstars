---
repo: "vrettasm/PyGeneticAlgorithms"
name: "PyGeneticAlgorithms"
description: "This repository implements a genetic algorithm (GA) in Python3 programming language, using only Numpy and Joblib as additional libraries."
readmeQualityOk: true
url: "https://github.com/vrettasm/PyGeneticAlgorithms"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["genetic-algorithm", "numpy", "optimization-algorithms", "python3", "parallel-genetic-algorithm"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-11-11T11:38:44Z"
lastCommitAt: "2026-09-29T10:04:16Z"
lastReleaseAt: "2026-06-04T07:38:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 74
maintainers: ["vrettasm"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3d8511595be5db748b08a368cde818b2219bf2a76721dd52348ac261124e3ec/vrettasm/PyGeneticAlgorithms"
---

# PyGenAlgo: A simple and powerful toolkit for genetic algorithms.

**Pylint score: 9.85 / 10**

This repository implements a genetic algorithm toolbox in Python3 programming language, using only *Numpy* and *Joblib*
as additional libraries. The toolbox offers the following implementations (as engines):

- A **StandardGA** class, where the whole population of chromosomes is replaced by a new one at the end of each
iteration (or epoch).
- An **IslandModelGA** class offers a new genetic operator (MigrationOperator), which allows for periodic migration
of the best individuals among the (co-evolving) different island populations. The island populations are coevolving
in parallel using separate CPUs.
- A brand new **MultiObjectiveGA** class is added that allows the user to solve more complex multiobjective optimization
problems. The major difference in the new class is that the fitness function is expected to return a tuple with all the
objective function values, e.g. (fx1, fx2, ..., fxn) rather a single function value fx. Note, that if the problem has
additional constraints to satisfy, as is usually the case, they should be summed in one 'penalty' variable and included
in the tuple…
