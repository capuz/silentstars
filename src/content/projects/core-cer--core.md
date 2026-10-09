---
repo: "CORE-cer/CORE"
name: "CORE"
description: "Implementation of CORE in cpp"
readmeQualityOk: true
url: "https://github.com/CORE-cer/CORE"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 13
forks: 5
openIssues: 10
closedIssues: 5
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-05-09T16:27:50Z"
lastCommitAt: "2026-10-09T18:56:01Z"
lastReleaseAt: "2026-06-27T18:22:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 41
maintainers: ["nicobuzeta"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4f86d2781d3b6511c57160bcf3d59a3a046e5c17c41acee271f1d74b0cbb6af/CORE-cer/CORE"
discussionCount: 2
---

# CORE: a Complex Event Recognition Engine

## Overview

This is a C++ reimplementation of the CORE engine, as presented in the paper ["CORE: a Complex Event Recognition Engine"](https://www.vldb.org/pvldb/vol15/p1951-riveros.pdf) by Marco Bucchi, Alejandro Grez, Andrés Quintana, Cristian Riveros, and Stijn Vansummeren. This engine is designed for the efficient evaluation of complex event queries over large data streams in real time.

## Features

- **Efficient Query Evaluation**: Specialized in evaluating a broad array of complex event queries, including those featuring the 'within time' operator.
  
- **Automaton-based Algorithm**: Utilizes an innovative automaton-based evaluation algorithm that maintains a data structure to represent the set of partial matches in constant time per input event.

- **Stable Performance**: Exhibits consistent performance regardless of query size or time window size.

- **High Scalability**: Aims to outperform state-of-the-art CER systems across multiple workloads.

- **Test Driven Development**: Developed using unit tests with the Catch2 framework.

- **Conan Package Manager**

## Quick Start

To get started quickly in your local machine:…
