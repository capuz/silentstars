---
repo: "1-3-7/disrobe"
name: "disrobe"
description: "Static decompiler, deobfuscator, and unpacker for reverse engineering and malware analysis: Python decompiler (3.8-3.15), PyInstaller extractor, PyArmor unpacker, JavaScript deobfuscator (obfuscator.io, JS-Confuser, webpack), Android APK and Java decompiler, .NET deobfuscator, UPX unpacker, Lua, PHP, WASM, PowerShell. MCP server."
readmeQualityOk: true
url: "https://github.com/1-3-7/disrobe"
homepage: "https://1-3-7.github.io/disrobe/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["decompiler", "malware-analysis", "pyarmor", "pyinstaller", "reverse-engineering", "nuitka", "wasm", "deobfuscator", "dotnet", "python-decompiler"]
stars: 142
forks: 10
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 1
recentReleases: 1
createdAt: "2026-05-27T12:04:13Z"
lastCommitAt: "2026-10-04T09:51:44Z"
lastReleaseAt: "2026-09-15T07:39:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 29
maintainers: ["1-3-7"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1251262935/58eac055-8764-4f4f-b0a7-3e8b78587c68"
---

# Disrobe

**Disrobe is a static decompiler, deobfuscator, and unpacker.** It strips packing and obfuscation from compiled software one layer at a time and recovers the source code or the original bytes underneath.

Give `disrobe auto` an executable, an app package, a script, or a firmware image. It names each layer (installer, archive, packer, freezer, protector, obfuscator, bytecode), removes it with the matching recovery pass, and runs again on what that pass produced until no pass recognizes what is left. One Rust binary covers Python, JavaScript and WebAssembly, Java and Android, .NET, native PE, ELF, and Mach-O code, Go, Lua, PHP, Ruby, Erlang and Elixir, ActionScript, shell scripts and Office macros, React Native and Flutter apps, installers, and firmware. `disrobe catalog` lists the 169 packers, protectors, obfuscators, and bytecode families it recognizes across 15 ecosystems.

The engines are built in. Python bytecode decompiles without a Python installation, JavaScript recovery needs no Node.js, and the Java, Android, and .NET decompilers need no JVM or .NET SDK; `jvm decompile` and `dotnet decompile` run an installed external decompiler only when `--backend` names it.…
