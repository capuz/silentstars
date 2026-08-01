---
repo: "deepforestsci/physika"
name: "physika"
description: "A physical programming language"
readmeQualityOk: true
url: "https://github.com/deepforestsci/physika"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 9
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-01-19T20:37:44Z"
lastCommitAt: "2026-08-01T06:12:47Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 56
maintainers: ["a-b-h-a-y-s-h-i-n-d-e", "rbharath", "Iammohithhh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f5bba332148a4a1872c55545aa3bd36ae227965368105d07dc313651df7c14a/deepforestsci/physika"
---

</p>

  </a>
</p>

# Physika

Physika is designed to simplify the representation of equations governing diverse physical systems, and the computational methods used to approximate their solutions. Physika is a type-based differentiable language program, that checks for dimension and data type correctenss.

## Workflow

```
example.phyk → Lexer (PLY) → Parser → AST → Type Checker → Runtime Execution
```

1. The **lexer** tokenizes a given `.phyk` file.
2. **parser** applies grammar rules to produce an Abstract Syntax Tree (AST) containing variables, functions, classes, for-loops, and expressions.
3. The **type checker** validates tensor shapes and type correctness across the AST.
4. The **runtime** interprets the AST datastructure and executes the program, using PyTorch as backend.

## Usage

```bash
physika examples/example_arrays.phyk
```

## Physika Program Description

Physika uses Unicode math symbols for type annotations. Below is an example of arrays and array operations:

```
x : \mathbb{R}[6] = [1, 2, 3, 5, 6, 7]
y : ℝ[3] = x[0:2] + x[0:2]
z : \R[3] = y + [1, 3, 4]

x
y
z
```

Output:
```
[1.0, 2.0, 3.0, 5.0, 6.0, 7.0] ∈ ℝ[6]
[2.0, 4.0, 6.0] ∈ ℝ[3]
[3.0, 7.0, 10.0] ∈ ℝ[3]…
