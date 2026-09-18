---
repo: "falseeeeeeeeee/ShaderLibrary"
name: "ShaderLibrary"
description: "希望开源能够帮到所有人"
readmeQualityOk: true
url: "https://github.com/falseeeeeeeeee/ShaderLibrary"
language: "C#"
languages: ["C#", "ShaderLab"]
languagePcts: [75, 23]
stars: 493
forks: 104
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2023-03-24T12:03:15Z"
lastCommitAt: "2026-09-18T08:25:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 21
maintainers: ["falseeeeeeeeee"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe98c804cbb83d1ea1387dfab0eb22920852e30eaf79fcf8c63654e6bc45b8e8/falseeeeeeeeee/ShaderLibrary"
---

# 【ShaderLibrary】

[TOC]

------

# 😉约定

​		在Unity里有[**Shader Forge (SF)**](https://www.acegikmo.com/shaderforge/)、[**Amplify Shader Editor (ASE)**](http://amplify.pt/unity/amplify-shader-editor/)、[**Shader Graph (SG)**](https://docs.unity3d.com/cn/Packages/com.unity.shadergraph@10.5/manual/index.html) 三种连连看，代码虽然都是[**ShaderLab**](https://docs.unity3d.com/cn/current/Manual/SL-Reference.html)语法但也主要分了[**CG**](https://en.wikipedia.org/wiki/Cg_%28programming_language%29)和[**HLSL**](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl)两种，故在此假定我个人的使用规范。

​		因为CG语言NVIDIA不再更新，Unity也逐渐放弃，手机成为主流，故大多Shader使用[**URP**](https://docs.unity3d.com/cn/Packages/com.unity.render-pipelines.universal@12.1/manual/index.html)管线编写，该工程以[**2021.3.0f1c1以上URP**](https://unity.cn/releases/lts)为基准，我更希望向上升级，尽量不向下兼容，不要再乘坐旧时代的大船了，如果说新的东西不好，那么为什么大家费时费力费钱的去更新这么些的东西。

​		命名前缀按照制作Shader的工具类型当作前缀。如：ASE_XXX、SG_XXX...

​		Shader路径按照使用的管线分类，一级为管线类型，二级为类别。如：Default/Base/ASE_XXX、URP/Base/SG_XXX...

​		Shader采用模块化路径，每一个Shader分为一个文件夹，相关的模型材质引用都放在根目录的**ShaderLib**文件夹下，如：Assets/ShaderLib/Base_XXX/S_XXX.shader

## 命名

| 使用工具                       | 前缀缩写 | 命名方式：前缀缩写_名称.xxx    |
|…
