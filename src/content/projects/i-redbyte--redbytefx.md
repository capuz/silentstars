---
repo: "i-redbyte/redbytefx"
name: "redbytefx"
description: "DSL for Android AGSL"
readmeQualityOk: true
url: "https://github.com/i-redbyte/redbytefx"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 22
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T21:26:05Z"
lastCommitAt: "2026-10-03T09:21:30Z"
lastReleaseAt: "2026-04-18T14:21:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 26
maintainers: ["i-redbyte"]
openGraphImageUrl: "https://opengraph.githubassets.com/c018a39362d56551d31df42f70b191995644e1ca7f182ee4fbd7dd1b3bf0dbb1/i-redbyte/redbytefx"
---

**English** · [Русский](https://github.com/i-redbyte/redbytefx/blob/HEAD/README.ru.md)

# RedByteFX

**RedByteFX** is a Kotlin DSL that compiles one typed shader algebra to Android AGSL, OpenGL ES 3.0, OpenGL ES 3.1 compute, and OpenGL ES 3.2 geometry and tessellation.

Authoring is Kotlin, not a shader string. The compiler emits the text the platform actually runs:

`shader(target) { ... } -> ShaderProgram -> AGSL RuntimeShader, a GLES 3.0 program, a GLES 3.1 compute program, or a GLES 3.2 program`

**Platform:** library `minSdk` is **24**. **AGSL** (`ShaderTarget.Agsl`, `rememberFxController`, `redbyteFx`) needs **API 31+** (`RuntimeShader`); below that, runtime calls throw `AgslNotSupportedException` and Android Studio warns via `@RequiresApi`. **OpenGL ES** scenes work from API 24 through `redbytefx-gl` and `redbytefx-gl-compose` (`GlSurface`). GLES output is GLSL ES 3.00, 3.10 compute, or 3.20 with geometry and tessellation. API reference: [GitHub Pages](https://i-redbyte.github.io/redbytefx/).

## What you write

One carrier, `Expr<T>`. Rank is nominal (`Vec2`, `Vec3`, `Vec4`, and the matrix types). Precision is a parameter: `Flt<High>` is a highp float, `Flt<Med>` is a…
