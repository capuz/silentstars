---
repo: "ZPL-03/MechAgent"
name: "MechAgent"
description: "Open-source CAE/FEA multi-agent orchestration framework driven by natural language"
originalDescription: "自然语言驱动的开源 CAE/FEA 多智能体编排框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ZPL-03/MechAgent"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["cae", "calculix", "fea", "gmsh", "langgraph", "multi-agent"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-18T16:30:12Z"
lastCommitAt: "2026-11-13T05:39:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 36
maintainers: ["ZPL-03"]
openGraphImageUrl: "https://opengraph.githubassets.com/4977db25d150a7652865d7a310cfba70cc0c3bba45331b2b66b38a1959c23711/ZPL-03/MechAgent"
---

# MechAgent

MechAgent is an open-source CAE/FEA multi-agent orchestration framework. It provides a local Studio, a CLI, and a Python SDK, and organizes natural-language engineering requests into parametric modeling, meshing, solving, post-processing, verification, and reporting.

The framework connects engineering tasks with external tools through capability registration, tool registration, and Pydantic data contracts. Solvers and meshers are replaceable backends, and dedicated solver formats and compilation logic are managed by adapters. The built-in execution capability is linear-elastic static analysis of structures, using CalculiX and Gmsh. For the specific input scope, see [Capabilities and Natural Language Parsing](https://github.com/ZPL-03/MechAgent/blob/HEAD/docs/capabilities.md).

## Studio

Studio uses an engineering workbench layout: inputs and the load-case library on the left, geometry, mesh, and result viewports in the center, acceptance and execution evidence on the right, and the engineering report below. The interface supports Chinese and English, as well as dark, light, and system-following themes. Switching language preserves the source language of engineering…
