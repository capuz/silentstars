---
repo: "OrlovEvgeny/serde.zig"
name: "serde.zig"
description: "Universal serialization for Zig: JSON, Yaml, XML, MessagePack, TOML, CSV and more from a single API. msgpack.org[Zig]"
url: "https://github.com/OrlovEvgeny/serde.zig"
homepage: "https://zigshape.eorlov.org"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["json-serialization", "parser", "serde", "zig", "zig-library", "zig-package"]
stars: 66
forks: 3
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-03-06T09:34:33Z"
lastCommitAt: "2026-06-28T06:55:10Z"
lastReleaseAt: "2026-05-26T12:59:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 41
maintainers: ["OrlovEvgeny", "nullndvoid", "uwni"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c65c61db37535140c821b73adb008467a3ec74ebc737c030048363a29d752c3/OrlovEvgeny/serde.zig"
---

# serde.zig

Serialization framework for Zig

Uses Zig's comptime reflection (`@typeInfo`) to serialize and deserialize any Zig type across JSON, MessagePack, TOML, YAML, XML, ZON, TOON, and CSV without macros, code generation, or runtime type information.

## Table of Contents

- [Why serde.zig?](#why-serdezig)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Formats](#formats)
- [Supported Types](#supported-types)
- [Examples](#examples)
  - [Nested structs](#nested-structs)
  - [Arena allocator](#arena-allocator-recommended-for-deserialization)
  - [Zero-copy deserialization](#zero-copy-deserialization)
  - [Pretty-printed output](#pretty-printed-output)
  - [Tagged unions](#tagged-unions)
  - [Enums](#enums)
  - [Maps](#maps)
  - [CSV](#csv)
  - [TOML](#toml)
  - [YAML](#yaml)
  - [XML](#xml)
  - [ZON](#zon)
  - [TOON](#toon)
- [Serde Options](#serde-options)
  - [Field renaming](#field-renaming)
  - [Asymmetric renaming](#asymmetric-renaming)
  - [Field aliases](#field-aliases)
  - [Enum and union variant renaming](#enum-and-union-variant-renaming)
  - [Skip fields](#skip-fields)
  - [Default values](#default-values)
  - [Deny unknown…
