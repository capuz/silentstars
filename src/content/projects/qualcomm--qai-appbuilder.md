---
repo: "qualcomm/qai-appbuilder"
name: "qai-appbuilder"
description: "QAI AppBuilder is designed to help developers easily execute models on WoS and Linux platforms. It encapsulates the Qualcomm® AI Runtime SDK APIs into a set of simplified interfaces for running models on the NPU/HTP."
readmeQualityOk: true
url: "https://github.com/qualcomm/qai-appbuilder"
language: "Python"
languages: ["Python"]
languagePcts: [63]
stars: 196
forks: 43
openIssues: 6
closedIssues: 97
watchers: 4
contributors: 35
recentReleases: 0
createdAt: "2023-11-28T19:25:47Z"
lastCommitAt: "2026-08-23T04:09:29Z"
lastReleaseAt: "2024-08-01T08:53:42Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 42
maintainers: ["tim202503", "abc-xx", "shijunz"]
openGraphImageUrl: "https://opengraph.githubassets.com/32f561bc8eff1e57b0e2ee546bc1e08f2f2003a622ad7540e8f8812aa59d527a/qualcomm/qai-appbuilder"
discussionCount: 3
---

<br>

</div>

<br>

</div>

<br>

---

## QAI AppBuilder

**QAI AppBuilder** (the "Quick AI Application Builder", this repository) is an open-source,
**on-device AI application platform** built on top of the
[Qualcomm® AI Runtime SDK](https://softwarecenter.qualcomm.com/#/catalog/item/Qualcomm_AI_Runtime_SDK).
Just describe the app you want in plain language — the AI Agent turns it into a complete,
runnable application on the Snapdragon NPU, with **no coding required**.

### From an idea to a running app — in one conversation

At the center of QAI AppBuilder is the **App Builder**: tell the Agent what you want to build
("*a screenshot OCR tool*", "*a voice-memo transcriber*", "*a real-time speech translator*")
and it assembles a complete, self-contained local application for you — picking the right
models, wiring up the pipeline, and generating the UI. The default output is a lightweight
local web app; with a custom prompt the Agent can produce a CLI tool, a desktop utility, or a
batch script just as easily.

To do this, the Agent draws on **on-device Model Packs** (Whisper, Zipformer-ZH, MeloTTS,
PP-OCR and more) and, whenever it needs a model that isn't packaged yet, resolves it…
