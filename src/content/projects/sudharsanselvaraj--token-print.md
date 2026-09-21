---
repo: "Sudharsanselvaraj/Token-Print"
name: "Token-Print"
description: "Interactive 3D visualization platform for exploring transformer architectures, tensors, and real-time LLM inference."
readmeQualityOk: true
url: "https://github.com/Sudharsanselvaraj/Token-Print"
homepage: "https://tokenprint.in/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["3d", "gguf-model-support", "huggingface", "large-language-models", "llm", "open-source", "threejs", "transformer-visualization", "transformers", "visualization"]
stars: 194
forks: 33
openIssues: 14
closedIssues: 158
watchers: 5
contributors: 14
recentReleases: 3
createdAt: "2026-07-17T13:17:04Z"
lastCommitAt: "2026-09-21T09:13:57Z"
lastReleaseAt: "2026-09-13T16:54:30Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 97
undervaluedScore: 35
maintainers: ["Sudharsanselvaraj", "ManoShruthiS", "shanky-ux"]
openGraphImageUrl: "https://opengraph.githubassets.com/f592f4d4ec560a5948ba6fc9a6901fa2b4aba76612e229bf8cf34364b1b33131/Sudharsanselvaraj/Token-Print"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/sudharsanselvaraj"]
discussionCount: 2
---

<h3>Stop reading architecture diagrams. Watch your model think.</h3>
  <p><b>A real 3D inspector wired into a real forward pass — not an illustration of one.</b></p>

  <p>
  </p>

  <p>
  </p>
</div>

---

  <br />
  <sub><a href=".github/assets/demo.mp4">▶ Watch the high-quality demo (.mp4)</a></sub>
</p>

Every other LLM visualizer gives you one of two things: a static architecture diagram, or a
"visualization" quietly running on fake numbers. **TokenPrint does neither.** Load
`Qwen2.5-0.5B-Instruct` live or drop in any local `.gguf`, and watch attention heads, RoPE
rotations, and the residual stream move in real 3D — every value traced back to
`named_parameters()`, a real forward pass, or the GGUF binary header itself.

## Start locally

Run `python3 scripts/start.py` with Python 3.11/3.12 and Node 20.9+. The launcher installs dependencies, downloads the model with progress, and checks both services. For an immediate offline example, choose **Try a recorded demo** on the home page.

[Setup and troubleshooting](https://github.com/Sudharsanselvaraj/Token-Print/blob/HEAD/docs/local-setup.md) · [Browser GPT-2 and…
