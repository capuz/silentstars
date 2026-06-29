---
repo: "avaje/avaje-prisms"
name: "avaje-prisms"
description: "Upgraded fork of hickory (updated to Java 11 with module-info and new features)"
url: "https://github.com/avaje/avaje-prisms"
homepage: "https://avaje.io/prisms/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["annotation-processing", "annotation-processor", "java", "annotation-tool", "hickory", "avaje"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 12
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-02-08T22:37:05Z"
lastCommitAt: "2026-06-29T07:23:29Z"
lastReleaseAt: "2023-08-08T02:46:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["github-actions[bot]", "dependabot[bot]", "SentryMan"]
openGraphImageUrl: "https://opengraph.githubassets.com/75aa8c5bf27f43bff0406f4140fec5d462743133b0d293eb8eece719d4cccfba/avaje/avaje-prisms"
---

# [Avaje Prisms](https://avaje.io/prisms/)

Fork of the legendary [hickory annotation processor](https://javadoc.io/static/com.jolira/hickory/1.0.0/net/java/dev/hickory/prism/package-summary.html). Hickory has served pretty well since it was created in 2010, but it's unmaintained and doesn't have module support. 

## What's a Prism?

When writing annotation processors the two conventional mechanisms to access the annotations are both awkward. `Element.getAnnotation()` can throw Exceptions if the annotation or its members are not semantically correct, and it can also fail to work on some modular projects. (This is one the reasons why `<annotationProcessorPaths>` is required for modular projects but it is seriously limited and technically not correct either (See [MCOMPILER-412](https://issues.apache.org/jira/browse/MCOMPILER-412)) Moreover, when calling a member with a `Class` return type, you need to catch an exception to extract the `TypeMirror`.

On the other hand, `AnnotationMirror` and `AnnotationValue` do a good job of modeling both correct and incorrect annotations, but provide no simple mechanism to determine whether it is correct or incorrect, and provide no convenient…
