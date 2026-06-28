---
repo: "Atypical-Consulting/Koine"
name: "Koine"
description: "A domain-specific language for Domain-Driven Design: write a bounded context's ubiquitous language once in .koi files and the compiler emits idiomatic, self-contained C# (and TypeScript) — value objects, entities, aggregates, invariants, commands, events, state machines, repositories, CQRS, context maps."
url: "https://github.com/Atypical-Consulting/Koine"
homepage: "https://atypical-consulting.github.io/Koine/"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [53, 38]
topics: ["aggregates", "antlr", "bounded-context", "code-generation", "codegen", "compiler", "cqrs", "csharp", "ddd", "domain-driven-design"]
stars: 8
forks: 1
openIssues: 34
closedIssues: 256
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T15:23:40Z"
lastCommitAt: "2026-06-28T01:34:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 56
maintainers: ["phmatray", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c1c95b6edfac98125763124c9f9276632fee6b06b4542803768a92f4e281b8/Atypical-Consulting/Koine"
---

# Koine

> Write your domain's **ubiquitous language** once, in `.koi` files. Koine compiles it to
> idiomatic, self-contained C# — value objects, entities, aggregates, invariants, the whole
> Domain-Driven Design toolkit.

## The problem

Domain-Driven Design gives you a precise vocabulary — value objects, entities, aggregates,
invariants, domain events, state machines — but in C# every one of those is a pile of mechanical
boilerplate: validating constructors, value equality, identity equality, defensive copies, guard
clauses, repository contracts. You write it by hand for every type. Then the model drifts from the
glossary on the wiki, the "ubiquitous language" stops being ubiquitous, and the rules you cared
about get buried in plumbing.

## The solution

**Koine is a small, readable DSL for DDD.** You describe a bounded context using the same words your
domain experts use, and the compiler emits the tactical code for you — correct, idiomatic, and with
no runtime to reference. The model *is* the ubiquitous language: there is no second copy to keep in
sync, and the rules stay front and centre instead of drowning in boilerplate.

The name evokes **Koine Greek**, the *common*…
