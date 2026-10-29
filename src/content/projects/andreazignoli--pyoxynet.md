---
repo: "andreazignoli/pyoxynet"
name: "pyoxynet"
description: "Open-source models from the Oxynet research papers for CPET data: exercise intensity domains, VT1 and VT2, synthetic tests. Runs locally, no TensorFlow needed."
readmeQualityOk: true
url: "https://github.com/andreazignoli/pyoxynet"
homepage: "https://www.oxynet.net"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "machine-learning", "cpet", "deep-learning", "exercise-physiology", "sports-science", "ventilatory-threshold", "cardiopulmonary-exercise-test", "oxynet"]
stars: 26
forks: 4
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2022-01-06T11:07:26Z"
lastCommitAt: "2026-10-29T10:37:23Z"
lastReleaseAt: "2026-10-29T10:37:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 34
maintainers: ["andreazignoli"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/445139798/8602c07f-4b8d-479a-937b-32ff03c442bd"
discussionCount: 0
---

·
    ·
    ·

Give pyoxynet a test and it returns, second by second, the model's output for the moderate, heavy
and severe exercise-intensity domains, and the two ventilatory thresholds (VT1 and VT2) where those
outputs cross. It can also generate synthetic tests. Everything runs on your machine: the models
are frozen LiteRT files, so TensorFlow is not needed.

## Looking for the hosted Oxynet API?

This repository is pyoxynet, the open-source research package. The Oxynet platform is a separate,
hosted service at [app.oxynet.net](https://app.oxynet.net), with its own, separately trained
models. It reads metabolic cart exports as they come off the cart (COSMED and Cortex among them,
detected automatically), checks the signals, and returns ventilatory thresholds (VT1 and VT2),
substrate use (FATMAX), exercise oscillatory ventilation and signal-quality checks as structured,
versioned JSON. API keys are free: [app.oxynet.net/signup](https://app.oxynet.net/signup).

- REST API: [OpenAPI schema](https://app.oxynet.net/v1/openapi.json) and
  [developer docs](https://www.oxynet.net/developers)
- AI assistants: a remote MCP server at `https://app.oxynet.net/oxynet-mcp`
- **AI agents:** to…
