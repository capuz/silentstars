---
repo: "cure-lang/cure-lang"
name: "cure-lang"
description: "Cure language compiling to BEAM with FSM primitives and Dependent types"
readmeQualityOk: true
url: "https://github.com/cure-lang/cure-lang"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [94]
stars: 120
forks: 9
openIssues: 7
closedIssues: 33
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2025-10-04T11:50:04Z"
lastCommitAt: "2026-08-28T15:34:52Z"
lastReleaseAt: "2026-04-16T19:36:02Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 39
maintainers: ["am-kantox"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1069671711/47773cc5-f5c5-4443-90bd-c5ac88e35854"
discussionCount: 3
---

# Cure

Dependently-typed programming language for the BEAM virtual machine with
one kernel-checked compiler pipeline and first-class OTP concurrency.

Cure compiles `.cure` source files to BEAM bytecode, enabling programs to run
natively on the Erlang VM alongside Erlang and Elixir code.

## Architecture

```mermaid
flowchart TD
    A[.cure source] -->|Cure.Compiler.Lexer| B[Token stream]
    B -->|Cure.Compiler.Parser| C[MetaAST — Metastatic 3-tuples]
    C -->|Cure.Elab.Program| D[Checked dependent Core]
    D -->|Cure.Core.Kernel| E[Validated and erased Core]
    E -->|Cure.Elab.Emit| F[Erlang Abstract Forms]
    F -->|Cure.Compiler.BeamWriter| G[BEAM bytecode]
```

Every pipeline stage emits structured events via `Cure.Pipeline.Events`,
backed by an Elixir `Registry` in PubSub mode. External tools (LSP, profilers,
IDE plugins) can subscribe to observe and react to compilation in real time.

## Internal Representation

Cure uses [Metastatic](https://hexdocs.pm/metastatic)'s MetaAST 3-tuple
format as its internal AST:

```elixir
{type_atom, keyword_meta, children_or_value}
```

This provides a well-defined, layered AST structure and interoperability with
Metastatic's…
