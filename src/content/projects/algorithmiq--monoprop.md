---
repo: "Algorithmiq/monoprop"
name: "monoprop"
description: "Because your operators deserve to propagate at escape velocity"
readmeQualityOk: true
url: "https://github.com/Algorithmiq/monoprop"
homepage: "https://docs.monoprop.algorithmiq.tech"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [62, 29]
topics: ["majorana-fermions", "pauli-propagation", "quantum-simulation"]
stars: 54
forks: 2
openIssues: 26
closedIssues: 57
watchers: 2
contributors: 15
recentReleases: 8
createdAt: "2026-06-27T12:30:06Z"
lastCommitAt: "2026-10-23T09:32:36Z"
lastReleaseAt: "2026-09-22T14:05:24Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 41
maintainers: ["dependabot[bot]", "diagonal-hamiltonian", "robertodr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba7c5602f080c20fe3b88d436238627b4971fb4f8d8bda730fa2983b64ab639d/Algorithmiq/monoprop"
discussionCount: 2
---

# monoprop
> because your operators deserve to propagate at escape velocity

`monoprop` is a high-performance C++ library with Python bindings for **Majorana and
Pauli propagation** — a backend for classically simulating and variationally
optimising quantum circuits. Rather than storing the full quantum state, it
expands an operator in the Majorana basis and propagates it through a circuit,
truncating terms that contribute little. It scales to large systems by partitioning
the operator across cores and across nodes with MPI.

> [!WARNING]
> This package is under active development. This project follows [Semantic Versioning](https://semver.org/). While in `0.x.y`, breaking changes may occur in minor releases.
> Pin your version if you depend on it. If you have feedback, please [open an issue](https://github.com/Algorithmiq/monoprop/issues/new).

## Benchmarks

`monoprop` is compared with other open-source Pauli and Majorana propagation engines:

Head to our [benchmarks page](https://docs.monoprop.algorithmiq.tech/benchmarks) for more details.

Every commit on `main` also runs the internal benchmark suite, tracked over time
with [Bencher](https://bencher.dev/) to catch performance…
