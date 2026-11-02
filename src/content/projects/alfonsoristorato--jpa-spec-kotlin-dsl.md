---
repo: "alfonsoristorato/jpa-spec-kotlin-dsl"
name: "jpa-spec-kotlin-dsl"
description: "A Kotlin DSL for building type-safe JPA Specification (Criteria API) using idiomatic Kotlin syntax."
readmeQualityOk: true
url: "https://github.com/alfonsoristorato/jpa-spec-kotlin-dsl"
homepage: "https://alfonsoristorato.github.io/jpa-spec-kotlin-dsl/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["jpa", "kotlin", "kotlin-dsl", "specification", "spring-jpa", "spring-specifications", "spring-data", "spring-data-jpa", "criteria-api", "criteria-api-specification"]
stars: 25
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-23T12:23:57Z"
lastCommitAt: "2026-11-02T13:38:10Z"
lastReleaseAt: "2025-12-02T21:00:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["renovate[bot]", "alfonsoristorato", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9773c10d817d567ca408adf6514cccbce939fd1a6dcdb2d4eb88fcdae3dbe1d1/alfonsoristorato/jpa-spec-kotlin-dsl"
---

# JPA Specification Kotlin DSL

A Kotlin DSL for building type-safe JPA queries using idiomatic Kotlin syntax. The library provides three distinct DSLs:

1. **Predicate DSL** - Build JPA `Predicate` objects for use within `Specification` or `PredicateSpecification`
2. **Specification DSL** - Build complete `Specification<T>` queries
3. **PredicateSpecification DSL** - Build complete `PredicateSpecification<T>` queries

This is achieved with zero runtime overhead by providing extension functions on Kotlin property references
`KProperty1<T, P>`, letting you write type-safe predicates directly from property references.

## Features

- **Three DSL flavors**:
    - **Predicate DSL** - For building predicates to use within `Specification {}` or `PredicateSpecification {}`
    - **Specification DSL** - Complete specifications
    - **PredicateSpecification DSL** - Complete predicate specifications
- **Type-safe queries** using Kotlin property references (`::`) - implemented as extension functions on
  `KProperty1<T, ?>`
- **Idiomatic Kotlin** syntax with infix operators
- **Composable specifications** with `and` and `or` operators
- **Zero overhead** - extension functions on top of JPA…
