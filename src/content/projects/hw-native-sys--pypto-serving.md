---
repo: "hw-native-sys/pypto-serving"
name: "pypto-serving"
description: "Provide LLM inference service based on PyPTO"
readmeQualityOk: true
url: "https://github.com/hw-native-sys/pypto-serving"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 11
forks: 35
openIssues: 41
closedIssues: 23
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-05-16T02:20:20Z"
lastCommitAt: "2026-11-04T02:56:46Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 82
undervaluedScore: 55
maintainers: ["lterrac", "superxf", "bumble0918"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0ba46eae01e0b5db2209f66ad7c6adaa567bfbfc2a028d1fea9ec74aae74427/hw-native-sys/pypto-serving"
---

# pypto-serving

PyPTO Serving is a small local inference stack for running Qwen3-14B and DeepSeek V4 generation with PyPTO kernels on Ascend NPUs. It includes an installable Python package, model executor integrations and CLI entry points.

## Documentation

The external documentation lives under [`docs/`](https://github.com/hw-native-sys/pypto-serving/blob/HEAD/docs/index.md). Start with:

- [Installation](https://github.com/hw-native-sys/pypto-serving/blob/HEAD/docs/get-started/installation.md)
- [Quickstart](https://github.com/hw-native-sys/pypto-serving/blob/HEAD/docs/get-started/quickstart.md)
- [Online Serving](https://github.com/hw-native-sys/pypto-serving/blob/HEAD/docs/user-guide/online-serving.md)
- [CLI Reference](https://github.com/hw-native-sys/pypto-serving/blob/HEAD/docs/cli-reference/pypto-serving.md)
- [Models](https://github.com/hw-native-sys/pypto-serving/blob/HEAD/docs/models/index.md)

## Layout

```text
pypto_serving/
  cli/                         pypto-serving CLI implementation
  config/                      runtime, generation, and parallel configuration
  serving/                     engine, scheduler, KV cache, HTTP server, workers
  model/…
