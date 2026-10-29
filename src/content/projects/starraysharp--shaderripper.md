---
repo: "StArraySharp/ShaderRipper"
name: "ShaderRipper"
description: "Unity shader decompiler — rebuilds DXBC/GLSL into readable ShaderLab"
readmeQualityOk: true
url: "https://github.com/StArraySharp/ShaderRipper"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["d3d11", "glsl", "glsl-shader", "glsl-shaders", "shaderlab", "shaders", "unity", "unity3d"]
stars: 17
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-10-20T06:26:28Z"
lastCommitAt: "2026-10-29T05:49:13Z"
lastReleaseAt: "2026-10-28T02:41:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 48
maintainers: ["StArraySharp"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c5d90e3138b260883ae6479cb7507b4117ae380e57ac32b47ebf388d489732/StArraySharp/ShaderRipper"
---

# ShaderRipper

English | [简体中文](https://github.com/StArraySharp/ShaderRipper/blob/HEAD/README.zh-CN.md)

Extract shaders from Unity game data and rebuild them as readable **ShaderLab + HLSLPROGRAM**. Pure C#, all runtime resources embedded, ready to run.

> 💡 **This project's code is 100% AI-generated** (DeepSeek / GLM collaboration), with human work limited to requirements, acceptance testing and release.

**Supported payloads**: dxbc — d3d11, Xbox / GameCore slots (instruction-by-instruction DXBC → HLSL translation), and DXIL chunks inside a dxbc container via dxcompiler (disassembly, back-translation unverified); glsl — GLES3 / GLES2 / OpenGLCore / OpenGL (GLSL back-translation to HLSL). Other backends (d3d9, Metal, Vulkan, console, WebGPU) have no translator and are skipped.

## Build

Requires the .NET 10 SDK.

Two layers:

- **`ShaderRipper` (`src/ShaderRipper`, assembly `ShaderRipper.dll`)** — the parsing/decompilation core library, usable from other tools
- **`ShaderRipper.Application` (`src/ShaderRipper.Application`)** — the CLI front end; rename its apphost to `ShaderRipper.exe` when publishing

```bash
dotnet build ShaderRipper.slnx -c Release

# Windows NativeAOT…
