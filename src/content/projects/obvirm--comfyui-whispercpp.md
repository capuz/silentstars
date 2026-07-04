---
repo: "obvirm/ComfyUI-WhisperCPP"
name: "ComfyUI-WhisperCPP"
description: "ComfyUI node for WhisperCPP Fast and smooth"
url: "https://github.com/obvirm/ComfyUI-WhisperCPP"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 5
forks: 3
openIssues: 6
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-11-11T01:33:00Z"
lastCommitAt: "2026-07-04T19:19:19Z"
lastReleaseAt: "2026-07-04T04:19:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 66
maintainers: ["obvirm"]
openGraphImageUrl: "https://opengraph.githubassets.com/b68e2dd4cb0611b1be22cd075a4d3935d9d8149434b5b0ea9a04ce9c7832382b/obvirm/ComfyUI-WhisperCPP"
discussionCount: 1
---

# ComfyUI-WhisperCPP

ComfyUI custom node for speech-to-text using **whisper.cpp** (C API via ctypes).  
Full pipeline: ASR → Vocal Separation → Alignment → Diarization — **zero whisperx**.

## Screenshots

## Features

- **whisper.cpp native** — DLL + ctypes binding directly to C API, no Python wrapper
- **All `whisper_full_params`** — every parameter exposed as a node widget
- **Two advance toggles** — `show_advance_cpp` (core whisper params) + `show_advance_ext` (UVR/alignment/diarization detail)
- **7 output sockets** — text, segments_json, srt, vtt, tsv, aud, json_result (no file I/O)
- **GPU acceleration** — Vulkan, OpenCL, CUDA, Metal (build-time auto-detect)
- **VAD** — cpp-annote (community-1 segmentation model, DLL + onnxruntime)
- **UVR vocal separation** — BSRoformer.cpp DLL (GGUF model, no temp files)
- **Pre-filter** — RMS-based energy filter to prevent hallucinations on silence
- **Alignment** — sherpa-onnx CTC (zipformer, word-level timestamps)
- **Diarization** — cpp-annote DLL (no Python dependencies)
- **Cross-platform** — Windows/MSVC, Linux/GCC, macOS/Clang (DLL/so/dylib)

## Modules

| Module | Language | Binding | File |
|---|---|---|---|
| **whisper.cpp**…
