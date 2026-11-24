---
repo: "inference4j/inference4j"
name: "inference4j"
description: "Java Inference API for Onnx models"
readmeQualityOk: true
url: "https://github.com/inference4j/inference4j"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 60
forks: 4
openIssues: 17
closedIssues: 74
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-02-11T23:01:00Z"
lastCommitAt: "2026-11-24T14:06:35Z"
lastReleaseAt: "2026-02-22T04:07:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 42
maintainers: ["viniciusccarvalho"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f6f88a29d5f9b3feb72be46ba9739b7719f3d88cff9491627ce1398fca312e1/inference4j/inference4j"
---

# inference4j

**Run AI models in Java. Three lines of code, zero setup.**

inference4j is an inference-only AI library for Java built on ONNX Runtime. It provides ergonomic, type-safe APIs for running model inference **locally** — no API keys, no network calls, no third-party services. Pass a `String`, `BufferedImage`, or `Path`, get Java objects back.

> **Note:** inference4j is under active development (0.x). APIs may change. Check out the [documentation site](https://inference4j.github.io/inference4j) for the full user guide, or browse the [examples](https://github.com/inference4j/inference4j/blob/HEAD/inference4j-examples/README.md) to get started.

## What can you do with inference4j?

Want to see it in action? Check out [inference4j-showcase](https://github.com/inference4j/inference4j-showcase) — a local demo app you can run to explore every capability the library provides.

### Sentiment Analysis

```java
try (var classifier = DistilBertTextClassifier.builder().build()) {
    System.out.println(classifier.classify("This movie was fantastic!"));
    // [TextClassification[label=POSITIVE, confidence=0.9998]]
}
```
