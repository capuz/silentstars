---
repo: "lispyclouds/claxon"
name: "claxon"
description: "Minimal, pure clojure, data-driven NATS client"
url: "https://github.com/lispyclouds/claxon"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
topics: ["babashka", "clojure", "nats", "nats-jetstream"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-19T07:14:04Z"
lastCommitAt: "2026-06-29T07:22:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 33
maintainers: ["lispyclouds"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e0f0c97cfd0bfb5b8d761abac490443c24611d0d7f2c7d3faa57b12a59fabe3/lispyclouds/claxon"
---

# claxon

A minimal, pure-Clojure, data-driven [NATS](https://nats.io) client.

## Rationale

Most Clojure NATS clients are thin wrappers around the official Java SDK (`nats.java`). That's a perfectly reasonable choice, but it comes with a JVM tax: you get nats.java's threading model, its option-builder classes, and a hard dependency on a full JVM, which means no runtimes like Babashka.

claxon takes the other path. The [NATS client protocol](https://docs.nats.io/reference/reference-protocols/nats-protocol) is a small, text-based, line-oriented protocol. claxon implements the protocol directly against a plain `java.net.Socket`, using nothing but Clojure data to describe the wire format with the following goals:

- **Babashka-compatible.** claxon runs as a script, in a `bb.edn` project, or embedded in a larger bb-based tool, with no AOT compilation and no native dependencies beyond the JVM/GraalVM that bb already ships.
- **Small, inspectable and flexible** The entire protocol surface is described as data in one map (`claxon.conf/defaults`'s `:claxon/frame-shapes`) ops, their arguments, and their payloads. Reading and writing frames are both generic interpreters over that data, not…
