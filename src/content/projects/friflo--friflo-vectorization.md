---
repo: "friflo/Friflo.Vectorization"
name: "Friflo.Vectorization"
description: "C# vectorizer for floating point math"
readmeQualityOk: true
url: "https://github.com/friflo/Friflo.Vectorization"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["avx", "csharp", "simd", "vectorization", "ecs", "simd-intrinsics", "sse"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-09T04:48:14Z"
lastCommitAt: "2026-08-29T17:28:25Z"
lastReleaseAt: "2026-05-06T20:10:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["friflo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f6415ba857126e35a297ae87f1c1f0b640facaa3798084ed2c9fe0b540680c7/friflo/Friflo.Vectorization"
---

<h1>friflo Vectorization</h1>

</div>


friflo Vectorization is a C# source generator used to vectorize idiomatic **floating point** math
for **x86-64** processors from **Intel** and **AMD** using **AVX**.  
It is basically the counter part for *auto vectorization* used in languages like C/C++ and Rust.  
It enables similar optimizations like Unity Burst on the **.NET** platform.  
By applying vectorization the performance of math operations can be improved by magnitudes.

**Example**  
Given a typical code snippet that can be optimized with vectorization.  
Languages like C/C++ or Rust can vectorize the method by executing 8 operations in one CPU cycle instead of 1.  
C# has no auto vectorization and executes 1 operation per CPU cycle.
```cs
static void MovePositionVector(Vector3[] position, Vector3[] velocity, float deltaTime) {
    for (int n = 0; n < position.Length; n++) {
        position[n] += velocity[n] * deltaTime;
    }
}
```

### Setup

friflo Vectorization applies the same optimization by generation C# code similar to C/C++ or Rust compilers.  

```
dotnet add package Friflo.Vectorization.Attributes
dotnet add package…
