---
repo: "Chandaro/NoCode-Computer-Vision"
name: "NoCode-Computer-Vision"
description: "NoCode CV Trainer is a desktop application for Windows that lets you upload images, draw annotations, and train state-of-the-art object detection and image classification models — all through a clean point-and-click interface."
readmeQualityOk: true
url: "https://github.com/Chandaro/NoCode-Computer-Vision"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [61, 34]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-19T15:41:22Z"
lastCommitAt: "2026-10-21T17:31:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 10
maintainers: ["Chandaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/40fbee8359a3539b29484b21eaeaa43c2cd06ba9ab13622484004b32e1ca0280/Chandaro/NoCode-Computer-Vision"
---

NoCode CV is a self-hosted computer vision workstation that runs entirely on your own machine. Annotate images, train YOLO models, run inference on video and webcam — all through a browser UI, all offline, no cloud account required.

One installer script sets everything up. One launcher starts it. Everything stays on your hardware.

```bash
# Windows
Install NoCode CV.bat

# macOS / Linux
chmod +x "Install NoCode CV.sh" && ./"Install NoCode CV.sh"
```

Then open **http://localhost:8000**.

---

## Table of Contents

- [What it does](#what-it-does)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dataset Import Formats](#dataset-import-formats)
- [Contributing](#contributing)

---

## What it does

Most CV tooling expects you to write training scripts, manage file paths, and understand YAML configs before you see a single prediction. NoCode CV skips all of that.

You create a project, upload images, draw annotations, pick a model size, and hit train. The live log streams directly in the browser. When training finishes, you can immediately run inference on images, video…
