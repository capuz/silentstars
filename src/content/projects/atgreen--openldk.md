---
repo: "atgreen/openldk"
name: "openldk"
description: "A JIT Compiler and Runtime for Java in Common Lisp"
readmeQualityOk: true
url: "https://github.com/atgreen/openldk"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 278
forks: 13
openIssues: 2
closedIssues: 10
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2024-12-31T17:55:50Z"
lastCommitAt: "2026-10-23T09:32:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 37
maintainers: ["atgreen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e136e32054fd63ffdab5fb4071ba270c1e96001ec35c614d61ad53fef6717c0a/atgreen/openldk"
---

# OpenLDK
## A JIT Compiler and Runtime for Java in Common Lisp

OpenLDK is a Just-In-Time (JIT) compiler and runtime environment for
Java, implemented entirely in Common Lisp. It bridges the gap between
Java and Common Lisp by incrementally translating Java bytecode into
Lisp, which is then compiled into native machine code for
execution. This unique approach allows Java classes to be seamlessly
mapped to Common Lisp Object System (CLOS) classes, enabling
effortless integration between Java and Common Lisp codebases.

## Key Features

- **Java Bytecode to Lisp Translation**: OpenLDK translates Java bytecode into Common Lisp, making it possible to execute Java code within a Lisp environment.
- **Native Machine Code Compilation**: The translated Lisp code is compiled into native machine code, ensuring efficient execution.
- **CLOS Integration**: Java classes are mapped to CLOS classes, allowing for smooth interoperability between Java and Common Lisp.
- **OpenJDK Runtime Libraries**: OpenLDK leverages OpenJDK's core runtime libraries, made possible by the GNU Classpath Exception to the GPL.

## Use Cases

OpenLDK is not designed to be a high-performance Java
runtime. Instead, it's…
