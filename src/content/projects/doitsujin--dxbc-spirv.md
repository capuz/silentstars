---
repo: "doitsujin/dxbc-spirv"
name: "dxbc-spirv"
description: "IR and translation library for older D3D shader models"
readmeQualityOk: true
url: "https://github.com/doitsujin/dxbc-spirv"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 72
forks: 18
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2025-06-29T00:34:50Z"
lastCommitAt: "2026-09-24T08:42:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 36
maintainers: ["doitsujin", "cjacek", "K0bin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7134c76f7474cf5c241eabb25e1662eaaf6347ab68b377efc44cacc37f2c4096/doitsujin/dxbc-spirv"
---

# dxbc-spirv

An SSA-based compiler for Direct3D Shader Models 5.1 and older.

This implements a custom IR, which can be trivially lowered to SPIR-V or translated to other, similar IRs.
Please refer to the [documentation](https://github.com/doitsujin/dxbc-spirv/blob/main/ir/ir.md) for an
instruction reference.

## Feature support

### DXBC
- Minimum precision is supported, with both `min10float` and `min16float` being lowered to
a 16-bit or 32-bit floating point type depending on the provided compile options.
Min-precision integer types are lowered to 16 or 32-bit integers accordingly.

- Shader Model 5.1 resource declarations and dynamic descriptor indexing are supported.

- Shader Model 5.0 interfaces and class linkage are supported, but require a very specific
data layout to pass in instance data and function table indices.

### SPIR-V
- The built-in SPIR-V lowering targets SPIR-V 1.6 with the Vulkan memory model, and
  optionally `SPV_KHR_float_controls2` depending on device capabilities. Backwards
  compatibility to older SPIR-V versions is not a priority and not planned.

## Building

```
meson setup builddir

# To enable building command line tools
meson configure…
