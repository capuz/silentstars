---
repo: "truthofmatthew/persian-license-plate-recognition"
name: "persian-license-plate-recognition"
description: "PLPR utilizes YOLOv5 and custom models for high-accuracy Persian license plate recognition, featuring real-time processing and an intuitive interface in an open-source framework."
readmeQualityOk: true
url: "https://github.com/truthofmatthew/persian-license-plate-recognition"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["ai", "computer-vision", "image-processing", "license-plate-recognition", "machine-learning", "python", "vehicle-identification", "yolov5", "persian-license-plate"]
stars: 450
forks: 126
openIssues: 6
closedIssues: 15
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2024-02-20T21:06:32Z"
lastCommitAt: "2026-10-27T12:39:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 21
maintainers: ["truthofmatthew"]
openGraphImageUrl: "https://opengraph.githubassets.com/c282da319f7ac6d81bf4b64ef39e64106f15acb191710b781a8b686316be7ee8/truthofmatthew/persian-license-plate-recognition"
---

# Persian License Plate Recognition (PLPR)

Read Iranian license plates from a camera, a video or a photo, and decide whether the car may enter.
Version 2 runs the same models in four places: a browser tab, the original desktop app, an API server, and an edge agent next to the gate camera.

| Web app (desktop) | Web app (phone) |
|---|---|
|  |  |

| Dark theme | Desktop app (PySide6) |
|---|---|
|  |  |

More: [entry log](https://github.com/truthofmatthew/persian-license-plate-recognition/blob/HEAD/docs/screenshots/web-log.png), [residents](https://github.com/truthofmatthew/persian-license-plate-recognition/blob/HEAD/docs/screenshots/web-residents.png), [API docs](https://github.com/truthofmatthew/persian-license-plate-recognition/blob/HEAD/docs/screenshots/api-docs.png).
All screenshots use made-up residents.

## What's in the box

| Part | Folder | What it does |
|---|---|---|
| Core library | `plpr/` | ONNX Runtime engine (no PyTorch), Persian plate grammar, tracker that votes across frames so one car gives one entry |
| Web app | `web/` | Runs the models in the browser with WebGPU or WebAssembly. Camera, video, photo or stream URL. Residents and log stay in the browser…
