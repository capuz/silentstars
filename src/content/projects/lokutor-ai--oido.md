---
repo: "lokutor-ai/oido"
name: "oido"
description: "Oído: open-vocabulary speech recognition on a $5 ESP32-S3, faster than real time. No cloud, no NPU. English + Spanish."
readmeQualityOk: true
url: "https://github.com/lokutor-ai/oido"
homepage: "https://lokutor-ai.github.io/oido/demo/"
language: "C"
languages: ["C", "Python"]
languagePcts: [51, 45]
topics: ["asr", "conformer", "edge-ai", "embedded", "esp-idf", "esp32", "esp32-s3", "microcontroller", "on-device-ai", "speech-recognition"]
stars: 133
forks: 9
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-09-30T11:15:19Z"
lastCommitAt: "2026-11-12T11:37:40Z"
lastReleaseAt: "2026-11-03T21:38:06Z"
status: "newborn"
tags: []
healthScore: 78
undervaluedScore: 30
maintainers: ["Gmarcoel", "danivs10"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2d24631e42eb2ccf915856dab8e87827c43b04b7543497c6918e93097e5c764/lokutor-ai/oido"
---

# Oído: speech recognition that fits in a $5 chip

*¡Oído!* is what cooks call out in a Spanish kitchen to confirm an order: *heard, got it*.

**License:** code GPLv3 (commercial licenses available, see COMMERCIAL.md). The model files are **non-commercial**: CC BY-NC-SA 4.0 with Lokutor's terms (see models/LICENSE-WEIGHTS), except NVIDIA's original tokenizer (CC-BY-4.0). Commercial use: contact@lokutor.com.

*Animated demo; [full video with sound](https://huggingface.co/lokutor-ai/oido-ctc-small-int8/blob/main/demo.mp4).
The transcripts are Oído's output, sped up. Board runs are described in the 'Real time (v2)' section.*

Speech-to-text for any English or Spanish sentence, running entirely on an **ESP32-S3** (240 MHz dual-core Xtensa LX7, 8 MB PSRAM,
16 MB flash). No cloud, no command list, no neural accelerator. Built by [Lokutor](https://lokutor.com).
Models on Hugging Face: [int8](https://huggingface.co/lokutor-ai/oido-ctc-small-int8) ·
[int4](https://huggingface.co/lokutor-ai/oido-ctc-small-int4).

**[Try it in your browser](https://lokutor-ai.github.io/oido/demo/)**: the same C engine and int4 model as the chip, compiled to WebAssembly (microphone or upload, nothing leaves…
