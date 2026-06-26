---
repo: "miguelperezcolom/mateu"
name: "mateu"
description: "Open source library for building awesome web UIs using good plain java"
url: "https://github.com/miguelperezcolom/mateu"
homepage: "https://mateu.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["java", "mdd", "vaadin", "mateu"]
stars: 52
forks: 12
openIssues: 11
closedIssues: 60
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2017-02-07T19:09:48Z"
lastCommitAt: "2026-06-26T21:31:50Z"
lastReleaseAt: "2024-08-04T09:29:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 56
maintainers: ["miguelperezcolom"]
openGraphImageUrl: "https://opengraph.githubassets.com/9550defc1f356fd37b1006c3a06b3e188a2aa3f2cf998a398d3adfdacfdd3b7d/miguelperezcolom/mateu"
---

# Mateu

Mateu is a **model-driven UI framework for Java** that lets you build **business web applications** at very high speed.

Define your UI once in Java.  
Mateu generates forms, navigation, CRUD screens and application structure automatically.

---

## Why Mateu

Traditional business applications usually require:

- backend logic
- frontend app
- API layer
- duplicated models
- duplicated validation
- a lot of glue code

Mateu takes a different approach:

- one application model
- one source of truth
- less code
- fewer moving parts

---

## Example (real admin panel)

With Mateu, this:

```java
enum ProductStatus {
    Available, OutOfStock
}

record Product(
    @NotEmpty String id,
    @NotEmpty String name,
    @NotNull ProductStatus status
) implements Identifiable {}

@UI("/products")
public class Products extends AutoCrudOrchestrator<Product> {
}
```

becomes:

![Admin panel](https://mateu.io/images/docs/admin-panel/products-list.jpeg)

👉 See full example: https://mateu.io/java-user-manual/use-cases/admin-panel/

---

## What you get

- forms and inputs from fields
- validation from annotations
- menus from your object model
- full CRUD with minimal code
- responsive…
