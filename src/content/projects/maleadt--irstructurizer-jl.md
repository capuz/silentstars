---
repo: "maleadt/IRStructurizer.jl"
name: "IRStructurizer.jl"
description: "Pattern-matching structured control flow in Julia's SSA IR."
readmeQualityOk: true
url: "https://github.com/maleadt/IRStructurizer.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 3
closedIssues: 7
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-01-29T14:09:14Z"
lastCommitAt: "2026-11-07T10:37:02Z"
lastReleaseAt: "2026-04-01T13:12:53Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 68
maintainers: ["maleadt", "gbaraldi", "AntonOresten"]
openGraphImageUrl: "https://opengraph.githubassets.com/b40d6ae07ed391fb5aab3ff5fa0edec453f535f3a13b0eadf8c9c4445b02ce1e/maleadt/IRStructurizer.jl"
---

# IRStructurizer

Convert Julia's unstructured SSA IR into structured control flow representation (SCF-style operations).

## Quick Start

```julia-repl
julia> using IRStructurizer

julia> f(x) = x > 0 ? x + 1 : x - 1

julia> code_structured(f, Tuple{Int})
1-element Vector{Pair{StructuredIRCode, DataType}}:
 StructuredIRCode(
│ %1 = intrinsic Base.slt_int(0, _2)::Bool
│ %7 = if %1 -> Nothing
│ ├ then:
│ │   %3 = intrinsic Base.add_int(_2, 1)::Int64
│ │   return %3
│ ├ else:
│ │   %5 = intrinsic Base.sub_int(_2, 1)::Int64
│ └   return %5
) => Int64

julia> sci, ret_type = code_structured(f, Tuple{Int}) |> only
```

## API

### `code_structured(f, argtypes; validate=true, exceptions=:error)`

Get structured IR for function `f` with argument types `argtypes`.

- `validate`: Throw `UnstructuredControlFlowError` if unstructured control flow remains
- `exceptions`: how to treat try/catch, as for `StructuredIRCode`

### `StructuredIRCode(ir::IRCode; structurize=true, validate=true, exceptions=:error)`

Construct structured IR from Julia's `IRCode` (obtained via `Base.code_ircode`).

- `structurize`: Convert unstructured control flow (GotoNode/GotoIfNot) into structured operations
-…
