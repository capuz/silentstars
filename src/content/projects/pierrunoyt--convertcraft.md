---
repo: "PierrunoYT/ConvertCraft"
name: "ConvertCraft"
description: "Local batch file converter for Windows, macOS, and Linux: images, JSON/YAML/TOML/CSV, audio, and video. Built in Rust with egui; files never leave your machine."
readmeQualityOk: true
url: "https://github.com/PierrunoYT/ConvertCraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["desktop-app", "egui", "ffmpeg", "file-converter", "rust", "audio-converter", "batch-processing", "cross-platform", "csv", "eframe"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-16T13:40:19Z"
lastCommitAt: "2026-11-18T12:07:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["PierrunoYT", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c0d8e072cbe8b8d52679ce79390865917b8831e49e6edc8b99fadbdcacf1d55/PierrunoYT/ConvertCraft"
discussionCount: 0
---

ConvertCraft is a native desktop batch converter for **images, structured data, audio, and video** on **Windows, macOS, and Linux**, built with Rust and egui/eframe. Files are processed locally without uploading them to a conversion service. Image and data conversion run in Rust; audio and video use your local FFmpeg installation.

ConvertCraft is one of the open-source desktop apps from [Pierruno](https://pierruno.dev/).

## What you can do

- **Build a batch:** pick multiple files, import a folder recursively, or drag files and folders into the window.
- **Mix formats:** choose a target for each file or apply one target to an entire category.
- **Keep working:** conversions run on up to four background workers, with per-file status and batch progress.
- **Choose your destination:** save beside each source or collect outputs in one folder.
- **Avoid accidental replacement:** overwriting is off by default; filename collisions receive numbered suffixes.
- **Tune image output:** set JPEG/AVIF quality from 10 to 100 (default 90) and optionally shrink images to fit a maximum width and height.
