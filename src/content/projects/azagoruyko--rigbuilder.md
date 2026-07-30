---
repo: "azagoruyko/rigBuilder"
name: "rigBuilder"
description: "Rig Builder for your scripts and pipelines."
readmeQualityOk: true
url: "https://github.com/azagoruyko/rigBuilder"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2022-03-19T09:11:16Z"
lastCommitAt: "2026-07-30T06:05:10Z"
lastReleaseAt: "2024-08-26T10:34:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["azagoruyko"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca45211f086c33ac2aef83bec8f00ba84a984f6e7e275358994ce2c27910a9f6/azagoruyko/rigBuilder"
---

</div>

**Rig Builder** is a powerful, standalone environment for managing and executing complex Python script hierarchies across any host application (Maya, Blender, Unreal Engine, etc.).

While initially developed for rigging, it has evolved into a versatile tool for building pipeline utilities, automation scripts, and custom DCC tools through a visual, module-based workflow. By assembling reusable building blocks, you can create anything from complex rigs to production-ready scene management tools.

## ⚙️ Core Concepts

At its heart, Rig Builder operates on a **graph-based hierarchy of modules**:

- **📦 Modules**: The primary building blocks. Modules can represent anything from a rigging step (e.g., Spine, Limb) to a general utility (e.g., Batch Exporter, Scene Cleanup).
- **🎛️ Attributes**: Parameters that define module behavior. Attributes can hold any JSON-compatible data.
- **🔗 Connections**: Attributes can be "wired" together using relative path (e.g., `/parent/input`).
- **🧠 Expressions**: They alter attribute values at time of value resolution.
- **🖥️ Host Connectivity**: Rig Builder connects to host applications and executes modules inside, bringing the result back…
