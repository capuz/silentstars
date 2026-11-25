---
repo: "jonathanperis/csharpc"
name: "csharpc"
description: "A C# front-end for LLVM: compiles C# source to small, fast native executables via Roslyn + LLVM — like clang, rustc and gollvm. Written in C#."
readmeQualityOk: true
url: "https://github.com/jonathanperis/csharpc"
homepage: "https://github.com/jonathanperis/csharpc#readme"
language: "C#"
languages: ["C#"]
languagePcts: [89]
topics: ["aot", "aot-compilation", "codegen", "compiler", "compilers", "csharp", "dotnet", "garbage-collector", "llvm", "llvm-frontend"]
stars: 20
forks: 2
openIssues: 19
closedIssues: 233
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-22T11:58:54Z"
lastCommitAt: "2026-11-25T03:09:51Z"
lastReleaseAt: "2026-10-30T17:46:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 97
undervaluedScore: 54
maintainers: ["jonathanperis"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5cc961941fa50fccabc02e5439e8e707c863b39a733256d48cb83c62d52f1bc/jonathanperis/csharpc"
fundingLinks: ["GITHUB:https://github.com/jonathanperis", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jonathanperis"]
---

# csharpc

**A C# front-end for LLVM.**
csharpc compiles C# source code straight to LLVM IR and then to small, fast native executables —
what `clang` is to C, `rustc` to Rust and `gollvm` to Go.

```mermaid
flowchart LR
    src["C# source<br/>.cs / .csproj"] --> roslyn["Roslyn<br/>parse · bind · diagnose"]
    roslyn --> cfg["ControlFlowGraph<br/>csharpc's MIR"]
    cfg --> lower["csharpc lowering<br/>generics · closures · async · EH"]
    corelib["C# corelib<br/>collections · LINQ · BCL"] --> lower
    lower --> ir["LLVM IR"]
    ir --> opt["LLVM optimizer<br/>whole-program LTO"]
    rt["csrt runtime<br/>GC · threads · unwinding"] --> opt
    opt --> link["codegen + clang link"] --> exe(["native executable"])
```

csharpc is written in C# (.NET 11). It uses **Roslyn** as its parser and type checker — so every
diagnostic, overload resolution and language rule is exactly the official compiler's — and the
**LLVM C API** as its backend. Everything in between is csharpc: lowering Roslyn's control-flow graph
to LLVM IR, the object model, a garbage-collected runtime, a C# corelib, and the driver. No IL, no JIT
and no CoreCLR at run time: the output is an ordinary native executable.
