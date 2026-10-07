---
repo: "xadupre/onnx-light"
name: "onnx-light"
description: "onnx without protobuf"
readmeQualityOk: true
url: "https://github.com/xadupre/onnx-light"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 12
closedIssues: 2410
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-04-24T12:11:05Z"
lastCommitAt: "2026-10-07T10:30:26Z"
lastReleaseAt: "2026-07-30T09:00:08Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Copilot", "xadupre", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/375671fc06349b2346818d510eff663d842e5f7b7a1bdfc93230c113aea2e33a/xadupre/onnx-light"
---

# onnx-light

[Documentation](https://sdpython.github.io/doc/onnx-light/dev/index.html)

See also the [ONNX roadmap](https://github.com/onnx/onnx/blob/main/ROADMAP.md)
for the upstream project's direction and priorities.

> **Note:** `onnx-light` started from the upstream ONNX pull request
> [onnx/onnx#7208](https://github.com/onnx/onnx/pull/7208), which is the
> initial code base from which this project diverged.

## onnx without protobuf

- **ONNX Files larger than 2 GB** (protobuf is limited to 2Gb)
- **Parallel loading and saving**: significantly faster compared to the single-threaded path
- **Zero-copy parsing** – creates the ModelProto without any tensor copy
- **Aligned external tensor offsets** – external tensor data can be written
  with explicit offset alignment
- **No serialize/parse round-trip for C++ tools** – the Python `ModelProto`
  *is* the C++ `ModelProto`
- Supports protobuf (onnx) and flatbuffers (onnxruntime) format.

## Modular C++ libraries

The C++ code is split into several small libraries so a downstream project
can link only what it needs:

- `onnx_light::lib_onnx_proto` – protobuf-compatible message types,
  parser / serializer, external data, optional…
