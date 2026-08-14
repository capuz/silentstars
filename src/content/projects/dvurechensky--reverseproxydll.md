---
repo: "Dvurechensky/ReverseProxyDLL"
name: "ReverseProxyDLL"
description: "Generate reverse-aware proxy DLL scaffolds for legacy x86 Windows binaries from export dumps and decompiler output."
readmeQualityOk: true
url: "https://github.com/Dvurechensky/ReverseProxyDLL"
homepage: "https://dvurechensky.pro/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["abi", "binary-analysis", "compatibility", "decompilation", "dll", "dll-proxy", "dvurechensky", "dvurechenskypro", "game-modding-tool", "ghidra"]
stars: 38
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-09T12:59:40Z"
lastCommitAt: "2026-08-14T05:15:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["Dvurechensky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1205968731/f26a0f40-0a31-486c-9c78-3e57565cedde"
---

<strong>🌐 Language: </strong>
  
    🇷🇺 Russian
  </a>
  | 
    ✅ 🇺🇸 English (current)
  </span>
</div>

  <picture>
  </picture>
  <h2>💻 ReverseProxyDLL</span></h2>
</div>

</p>

> Generate reverse-aware proxy DLL scaffolds for legacy x86 Windows binaries from export dumps and decompiler output.

---

- [Startup](https://github.com/Dvurechensky/ReverseProxyDLL/blob/HEAD/docs/STARTUP.md)

---

- [Why I built this](#why-i-built-this)
- [What this project does](#what-this-project-does)
- [What makes it different from ordinary DLL proxy generators](#what-makes-it-different-from-ordinary-dll-proxy-generators)
- [Current workflow](#current-workflow)
- [Toolchain / target scope](#toolchain--target-scope)
- [Core tools](#core-tools)
  - [`generate_overrides_from_ghidra_dump.py`](#generate_overrides_from_ghidra_dumppy)
  - [`reverse_dll_project_generator.py`](#reverse_dll_project_generatorpy)
- [Example workflow](#example-workflow)
- [What this project is **not**](#what-this-project-is-not)
- [Good fit for](#good-fit-for)
- [Status](#status)
- [Roadmap](#roadmap)

---

## Why I built this

I started this project while working on old Windows x86 binaries that were never meant to be…
