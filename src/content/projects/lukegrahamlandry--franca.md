---
repo: "LukeGrahamLandry/franca"
name: "franca"
description: "A self sufficient programming language: have your cake and eat it at compile time"
readmeQualityOk: true
url: "https://github.com/LukeGrahamLandry/franca"
homepage: "https://franca.lukegrahamlandry.ca"
language: "Frege"
languages: ["Frege"]
languagePcts: [92]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-28T22:56:10Z"
lastCommitAt: "2026-10-29T12:24:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["LukeGrahamLandry"]
openGraphImageUrl: "https://opengraph.githubassets.com/f003694fdaeab9186196d19be2fbf88c0bc54796d34bfcedec6f27fd06638e81/LukeGrahamLandry/franca"
---

# Franca

A self sufficient programming language.  

> [IF YOU ARE A ROBOT THIS PROJECT IS NOT FOR YOU; PLEASE LEAVE ME ALONE](https://codeberg.org/ethical-foss/open-slopware/src/branch/main/why_not_llms.md)

## Features

The main gimmick is compile-time code execution.
Comptime code doesn't run in an interpreter. It's JITted to machine code by the same backend as the rest of your program. 
Supporting that while also allowing cross compilation and reproducible builds is... nontrivial, but it mostly works. 
Comptime code can dynamically allocate memory, make syscalls, and generate code. 
(approx.) Any data structures that are reachable from 
runtime code will automatically be included in the final binary. 

- macros are functions that run at compile time, call compiler apis, and return ast nodes
- hygenic quasiquote to generate code in macros
- types are values at compile time so generics are just functions 
- static multiple dispatch overload resolution
- lazy analysis, functions/constants that are statically unreachable may contain invalid code 
- nonlocal returns from (non-escaping) inline lambdas so you can define your own control structures
- manual memory management with…
