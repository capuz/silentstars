---
repo: "diskria-minecraft-platform/lapis"
name: "lapis"
description: "A Kotlin Symbol Processor (KSP) for Sponge Mixins. Built exclusively for Minecraft modding, Lapis focuses on intent-based injections and compile-time safety. It provides a Kotlin-first frontend with a type-safe DSL, leverages a MixinExtras-based backend, and automates the generation of Mixin and AW/AT configurations."
readmeQualityOk: true
url: "https://github.com/diskria-minecraft-platform/lapis"
homepage: "https://central.sonatype.com/artifact/io.github.recrafter/lapis"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kotlin", "kotlin-library", "ksp", "code-generation", "minecraft-modding", "mixin"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-13T11:50:55Z"
lastCommitAt: "2026-08-28T14:24:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 42
maintainers: ["diskria"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115709906/51566a8d-fa74-4f45-9daa-5a557cadc429"
---

# Lapis

A Kotlin Symbol Processor (KSP) for Sponge Mixins. Built exclusively for Minecraft modding, Lapis focuses on intent-based injections and compile-time safety. It provides a Kotlin-first frontend with a type-safe DSL, leverages a MixinExtras-based backend, and automates the generation of Mixin and AW/AT configurations.

---

## Features & Magic: Type-Safe Mixins

Writing raw Java Mixins can be a nightmare. You are constantly copying long JVM descriptors, fighting with mapping
updates, and crying when everything silently breaks in runtime.

Meet **Lapis** — a framework that turns Mixins into a beautifully structured, type-safe paradise using Kotlin Schemas
and KSP under the hood.

### 1. Define Your Schemas (Type-Safe Bytecode Blueprint)

First, we will describe the target classes and class members for which we want to write injections or open access if it
is private:

```kotlin
@Class(AdvancementsScreen::class, side = Side.ClientOnly)
object _AdvancementsScreen {

    // Real method in Java: 'boolean mouseScrolled(double x, double y, double dx, double dy)
    // This is 4 'double' params and 'boolean' return type
    // So, we describe the method signature as a functional…
