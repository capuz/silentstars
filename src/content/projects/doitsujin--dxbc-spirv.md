---
repo: "doitsujin/dxbc-spirv"
name: "dxbc-spirv"
description: "IR and translation library for older D3D shader models"
readmeQualityOk: true
url: "https://github.com/doitsujin/dxbc-spirv"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 77
forks: 21
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2025-06-29T00:34:50Z"
lastCommitAt: "2026-11-06T12:18:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["doitsujin", "K0bin", "werman"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c72c28b3696c4fe57477d4836a8369404d178964320d7bf15e227df8b362a06/doitsujin/dxbc-spirv"
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
