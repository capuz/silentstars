---
repo: "Tonic-Box/YABR"
name: "YABR"
description: "Java bytecode toolkit: procedural API, SSA IR, optimization transforms, mutable AST API, (de)compilation."
url: "https://github.com/Tonic-Box/YABR"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["bytecode", "java"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-21T10:05:08Z"
lastCommitAt: "2026-06-28T03:11:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["Tonic-Box"]
openGraphImageUrl: "https://opengraph.githubassets.com/b636d07783c412c378687f12a94094278b808900486a34342f954b5cccdd333d/Tonic-Box/YABR"
---

# YABR - Yet Another Bytecode Reader/Writer

A Java bytecode library with class-file parsing, bytecode editing, mutable IRs, (de)compilation,
and a set of higher-level analyses.

## Quick Start

```java
// Load a class
ClassPool pool = ClassPool.getDefault();
ClassFile cf = pool.loadClass(inputStream);

// Create a new class with a default constructor
int access = new AccessBuilder().setPublic().build();
ClassFile newClass = ClassFactory.createClass(pool, "com/example/MyClass", access);

// Add a field with a getter and setter
FieldEntry field = newClass.createNewField(access, "value", "I", new ArrayList<>());
ClassFactory.generateGetter(newClass, field, false);
ClassFactory.generateSetter(newClass, field, false);

// Write the class
newClass.rebuild();
byte[] bytes = newClass.write();
```

## Documentation

| Guide | Description |
|-------|-------------|
| [Quick Start](docs/quick-start.md) | Getting started |
| [Architecture](docs/architecture.md) | Module structure and design |
| [Class Files](docs/class-files.md) | ClassPool, ClassFile, ConstPool |
| [Bytecode API](docs/bytecode-api.md) | Bytecode editing |
| [Generation API](docs/generation-api.md) | Fluent class generation |…
