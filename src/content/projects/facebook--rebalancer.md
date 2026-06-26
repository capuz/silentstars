---
repo: "facebook/rebalancer"
name: "rebalancer"
description: "Rebalancer is a domain-specific language and tool for specifying and solving assignment problems (eg, putting balls in boxes with complex rules)."
url: "https://github.com/facebook/rebalancer"
homepage: "https://facebook.github.io/rebalancer/"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 64
recentReleases: 2
createdAt: "2026-06-10T23:14:07Z"
lastCommitAt: "2026-06-26T23:38:47Z"
lastReleaseAt: "2026-06-14T17:33:49Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 57
maintainers: ["vj-menon", "r-barnes", "yangneu2015"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c7951a01c27c03c4d92e4a36fd110e026ca4b2a6383a07781c36e6d443803e0/facebook/rebalancer"
---

# Rebalancer

Rebalancer is an assignment solver library that provides a generic and intuitive API for defining any assignment problem and the ability to optimize the assignment given a variety of implemented algorithms.

An assignment problem is any problem that can be defined as a decision of how to assign objects to containers, such that each object is assigned to exactly one container, given that it satisfies a set of constraints/rules and optimizes a set of objectives/goals.

The core solver is written in C++ and runs in a single process with multi-threaded parallelism. Currently, it can handle problems with ~1M objects and containers reasonably well. It's easily extensible to support new solving algorithms and expressions. Independent of the problem definition the user can choose from multiple solving algorithms. The most common are:
* **Local search** starts with an arbitrary assignment, and keeps performing simple moves (such as moving an object to a different container, swapping two objects, etc.) that are valid and improve the objective, until it can't find new improvements (or hits a user-defined moves limit or time limit). This solver is not guaranteed to find a global…
