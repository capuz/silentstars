---
repo: "RapidAI/RapidOCRLite"
name: "RapidOCRLite"
description: "RapidOCR lite edition,  for smaller, faster."
readmeQualityOk: true
url: "https://github.com/RapidAI/RapidOCRLite"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-10-14T00:51:50Z"
lastCommitAt: "2026-10-22T08:52:15Z"
lastReleaseAt: "2026-10-22T03:23:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["znsoftm", "ma139"]
openGraphImageUrl: "https://opengraph.githubassets.com/096ffc41b6283ddaffb186d8452f5936577bae73e154a08df57e59633bee3a04/RapidAI/RapidOCRLite"
---

Join our [Discord](https://discord.gg/33eyQJq498)

[简体中文](https://github.com/RapidAI/RapidOCRLite/blob/HEAD/README-CN.md) | English

**[🎬 Community-made promo video: RapidOCRLite — lightweight open-source OCR engine (Douyin)](https://www.douyin.com/video/7698023726318767386)**

**RapidOCRLite** (PyPI `RapidOCRLite` 5.0.0a6) is the lightweight, fast edition of RapidOCR: a C++ PP-OCRv6 engine with a C ABI, a C++ API, and a Python package whose import name is still `rapidocr` and whose Python API is fully compatible with RapidOCR. The ONNX Runtime 3.x line (latest tag `v3.9.2`) stays in [RapidAI/RapidOCR](https://github.com/RapidAI/RapidOCR). Hosted demos linked from the badges above run that 3.x line.

### 🧪 `model_type="lite"` (experimental, bundled Indra OCR weights)

`RapidOCR(params={"Det.model_type": "lite", "Rec.model_type": "lite"})` runs the bundled [Indra OCR](https://huggingface.co/datalab-to/indra-ocr) models from `python/src/rapidocr/models/lite/` (about 17.1 MB). Nothing is downloaded.

- **Different license.** These weights are **not** Apache-2.0. They use a modified OpenRAIL-M license (see `models/lite/LICENSE` and `NOTICE`), with use restrictions:
  - Entities with…
