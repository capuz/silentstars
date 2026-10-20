---
repo: "MobMonRob/DSL4GeometricAlgebra"
name: "DSL4GeometricAlgebra"
description: "DSL for Geometric algebra with Java"
readmeQualityOk: true
url: "https://github.com/MobMonRob/DSL4GeometricAlgebra"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 5
forks: 1
openIssues: 7
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2022-02-15T09:48:12Z"
lastCommitAt: "2026-10-20T08:49:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 75
maintainers: ["codedeedope", "orat"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d35e6edefee0908e10f7b8f4793de8ee5e5c29905706a3af338172015e43670/MobMonRob/DSL4GeometricAlgebra"
---

# DSL4GA
This repository contains code to work with multivector expressions of geometric algebra. The idea is to realise a complete toolchain with a geometric algebra specific domain specific language based on [Truffle/Graal](https://www.graalvm.org/latest/graalvm-as-a-platform/language-implementation-framework/) with state of the art smart editing features, debugging functionality and a fast implementation based on [JCasADi](https://github.com/MobMonRob/JCasADi/) focused on bringing algorithmic differentation in the world of geometric algebra.

## Disclaimer
The current state of the project is a proof of concept, so it is not advised to use it in real world applications. If you have feedback or feature suggestions, please create a new GitHub Issue.

Especially be cautious regarding:
- The documentation may not be up to date.
- Breaking changes can occur at any time.
- There is still no static type system. Even trivial errors may only be noticed late while executing. Sometimes exceptions are raised later than the actual error or not at all. Thus erroneous code can lead to undefined behaviour.
- Rules specified in the documentation may not be consistently enforced with an eager…
