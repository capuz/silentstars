---
repo: "gabrieljsilva/decorated-factory"
name: "decorated-factory"
description: "A factory decorators for creating objects with faker data"
url: "https://github.com/gabrieljsilva/decorated-factory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-22T02:06:38Z"
lastCommitAt: "2026-06-25T02:08:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["gabrieljsilva", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a34cf0d1fc4eb64cb7c9cf65833b5c8c223f9e69b995486084cf1945944addc/gabrieljsilva/decorated-factory"
---

# Decorated Factory

A **declarative**, **type‑safe** factory for generating realistic data in tests, fixtures and seeders – no hand‑written mocks, no hidden globals.

---

## Table of contents

* [Overview](#overview)
* [Installation](#installation)
* [Quick‑start](#quick-start)
* [Core concepts](#core-concepts)
* [Built‑in JavaScript types](#built-in-javascript-types)
* [Built‑in helpers](#built-in-helpers)
* [Generating instances](#generating-instances)
* [Defining relationships](#defining-relationships)
* [Nested graphs & circular refs](#nested-graphs--circular-refs)
* [Key binding (foreign keys)](#key-binding-foreign-keys)
* [Arrays & amounts](#arrays--amounts)
* [Overriding values with `set`](#overriding-values-with-set)
* [Excluding fields with `without`](#excluding-fields-with-without)
* [Plain vs class instances](#plain-vs-class-instances)
* [Error handling](#error-handling)
* [API reference](#api-reference)

---

## Overview

Decorated Factory combines **metadata decorators** with a **fluent builder** that creates objects _only when – and only as deep as – you request them_. It works with plain objects or class instances, supports complex relationships, and ships with…
