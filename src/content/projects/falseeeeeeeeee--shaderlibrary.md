---
repo: "falseeeeeeeeee/ShaderLibrary"
name: "ShaderLibrary"
description: "I hope open source can help everyone"
originalDescription: "希望开源能够帮到所有人"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/falseeeeeeeeee/ShaderLibrary"
language: "C#"
languages: ["C#"]
languagePcts: [78]
stars: 493
forks: 104
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2023-03-24T12:03:15Z"
lastCommitAt: "2026-09-22T08:45:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 27
maintainers: ["falseeeeeeeeee"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e9bdb9cae6992ff59b1d7010aac52466521394b8adfc1d9e26f9775f20366ca/falseeeeeeeeee/ShaderLibrary"
---

# 【ShaderLibrary】

[TOC]

------

# 😉Conventions

In Unity, there are three visual editors: [**Shader Forge (SF)**](https://www.acegikmo.com/shaderforge/), [**Amplify Shader Editor (ASE)**](http://amplify.pt/unity/amplify-shader-editor/), and [**Shader Graph (SG)**](https://docs.unity3d.com/cn/Packages/com.unity.shadergraph@10.5/manual/index.html). Although the code syntax is all [**ShaderLab**](https://docs.unity3d.com/cn/current/Manual/SL-Reference.html), it is mainly divided into two types: [**CG**](https://en.wikipedia.org/wiki/Cg_%28programming_language%29) and [**HLSL**](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl). Therefore, I am establishing my personal usage conventions here.

Since NVIDIA no longer updates the CG language and Unity is gradually abandoning it, with mobile devices becoming mainstream, most Shaders are written using the [**URP**](https://docs.unity3d.com/cn/Packages/com.unity.render-pipelines.universal@12.1/manual/index.html) pipeline. This project is based on [**URP 2021.3.0f1c1 and above**](https://unity.cn/releases/lts). I prefer to upgrade to newer versions and try not to maintain backward compatibility with older…
