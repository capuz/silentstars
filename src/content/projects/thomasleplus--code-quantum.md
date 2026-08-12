---
repo: "thomasleplus/code-quantum"
name: "code-quantum"
description: "A place to stash my quantum computing experiments"
readmeQualityOk: true
url: "https://github.com/thomasleplus/code-quantum"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [81]
topics: ["quantum", "hadamard", "quantum-computing", "quantum-mechanics", "quantum-algorithms", "quantum-programming-language", "quantum-circuit", "qasm", "qasm2", "qubits"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-07-30T00:58:45Z"
lastCommitAt: "2026-08-12T05:14:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 87
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/68d928b4062e4c720d04dfbf8d0282118872dbdde3cad89a0df75227a312ef83/thomasleplus/code-quantum"
---

# Code Quantum

A place to stash my quantum computing experiments

## [Hadamard Basic](https://github.com/thomasleplus/code-quantum/blob/HEAD/Hadamard%20Basic.qasm)

This is the simplest quantum circuit: a single input quibit goes through an Hadamard gate. The output is a qubit which if measured has a 50/50 chance to be a 0 or 1.

See [https://en.wikipedia.org/wiki/Hadamard_transform#Quantum_computing_applications](https://en.wikipedia.org/wiki/Hadamard_transform#Quantum_computing_applications)
for more details.

## [Grover's Search](https://github.com/thomasleplus/code-quantum/blob/HEAD/Grover's%20Search.qasm)

An implementation of Grover's quantum search algorithm using 5 qubits and 3 classical bits for measurement. Grover's algorithm provides a quadratic speedup for searching an unsorted database, finding a marked item in O(√N) time compared to O(N) classically.

The circuit demonstrates the key components of Grover's algorithm:

- Initialization with Hadamard gates to create superposition
- Oracle function that marks the target solution
- Diffusion operator for amplitude amplification
- Multiple iterations to increase the probability of measuring the correct answer

See…
