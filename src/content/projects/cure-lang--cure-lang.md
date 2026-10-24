---
repo: "cure-lang/cure-lang"
name: "cure-lang"
description: "Cure language compiling to BEAM with FSM primitives and Dependent types"
readmeQualityOk: true
url: "https://github.com/cure-lang/cure-lang"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [77]
stars: 132
forks: 12
openIssues: 3
closedIssues: 40
watchers: 5
contributors: 9
recentReleases: 3
createdAt: "2025-10-04T11:50:04Z"
lastCommitAt: "2026-10-24T08:20:54Z"
lastReleaseAt: "2026-10-12T06:08:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 48
maintainers: ["am-kantox", "pedrohfonseca81"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1069671711/47773cc5-f5c5-4443-90bd-c5ac88e35854"
discussionCount: 4
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
