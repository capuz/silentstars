---
repo: "brady-aiello/DeepPrint"
name: "DeepPrint"
description: "Print Kotlin data class instances as constructor statements using KSP"
readmeQualityOk: true
url: "https://github.com/brady-aiello/DeepPrint"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 4
closedIssues: 6
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2022-09-05T22:16:29Z"
lastCommitAt: "2026-08-22T04:07:57Z"
lastReleaseAt: "2023-06-19T02:57:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 36
maintainers: ["brady-aiello"]
openGraphImageUrl: "https://opengraph.githubassets.com/b68ab9a435ee189f19105d3db86e7d0129ba4244fe1fdad4951cd1bad5006d5f/brady-aiello/DeepPrint"
discussionCount: 2
---

# DeepPrint
## A utility for printing kotlin data classes with the same syntax as their primary constructor.

## Benefits:

1. Data classes are easier to read in logs, as they now look like pretty JSON.
2. Creating a replica object just involves copying and pasting.

Don't print with the default `toString()` like this in your logs:
```
ThreeClassesDeep3(age=55, person=SamplePersonClass(name=Dave, sampleClass=SampleClass(x=0.5, y=2.6, name=A point)), sampleClass=SampleClass(x=0.5, y=2.6, name=A point))
```
Use `deepPrint()` or `deepPrintReflection()` to print this instead:
```kotlin
ThreeClassesDeep3(
  age = 55,
  person = 
    SamplePersonClass(
      name = "Dave",
      sampleClass = 
        SampleClass(
          x = 0.5f,
          y = 2.6f,
          name = "A point",
        ),
    ),
  sampleClass = 
    SampleClass(
      x = 0.5f,
      y = 2.6f,
      name = "A point",
    ),
)
```

## KSP vs. Reflection
DeepPrint offers 2 implementations: 1 using KSP and the other using reflection.
They have similar functionality, but don't have exact parity. This is partly 
due to the limitations of reflection, and partly because some features have
not been added yet.

### KSP…
