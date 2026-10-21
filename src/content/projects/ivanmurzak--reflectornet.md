---
repo: "IvanMurzak/ReflectorNet"
name: "ReflectorNet"
description: "Advanced .NET reflection toolkit for AI-driven scenarios. Dynamically invoke methods with JSON, generate schemas, and serialize complex objects with type preservation. Perfect for automation, testing, and AI integration."
readmeQualityOk: true
url: "https://github.com/IvanMurzak/ReflectorNet"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["automation", "csharp", "dotnet", "json-schema", "netstandard", "netstandard20", "nuget-package", "reflection", "runtime-analysis", "serialization"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-05-23T06:59:43Z"
lastCommitAt: "2026-10-21T21:15:10Z"
lastReleaseAt: "2025-08-16T06:40:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 60
maintainers: ["IvanMurzak", "lior1997k"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/988847008/296b6552-7f35-48d6-93a0-65e980003e47"
---

# ReflectorNet

ReflectorNet is a .NET reflection toolkit for dynamic automation, AI-assisted tooling, testing, and runtime inspection. It can serialize live objects with type metadata, deserialize them back, modify existing instances in place, inspect object graphs by path or pattern, generate JSON Schema, and discover or invoke methods from partial runtime descriptions.

The main entry point is `Reflector`. The central data model is `SerializedMember`, a JSON-friendly representation of a .NET value that preserves the member name, resolved type, fields, properties, and raw JSON value payload.

## Index

- [ReflectorNet](#reflectornet)
  - [Index](#index)
  - [Why ReflectorNet](#why-reflectornet)
  - [Installation](#installation)
  - [Target Frameworks](#target-frameworks)
  - [Quick Start](#quick-start)
  - [Core Features](#core-features)
    - [Type-Preserving Serialization](#type-preserving-serialization)
    - [In-Place Modification](#in-place-modification)
    - [Path Syntax](#path-syntax)
  - [Object Inspection](#object-inspection)
    - [`TryReadAt`](#tryreadat)
    - [`View`](#view)
    - [`Grep`](#grep)
  - [Object Modification](#object-modification)
    -…
