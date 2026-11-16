---
repo: "shahabahreini/YOLOMatic"
name: "YOLOMatic"
description: "Automate the YOLO training by Ultralytics for custome COCO datasets"
readmeQualityOk: true
url: "https://github.com/shahabahreini/YOLOMatic"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["yolo", "yolov10", "yolov8", "yolov9", "coco", "automated", "detection", "object", "yolo10", "yolo11"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-08-09T21:44:45Z"
lastCommitAt: "2026-11-16T04:30:21Z"
lastReleaseAt: "2026-05-14T21:52:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 81
undervaluedScore: 58
maintainers: ["shahabahreini", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ed7cd45708840a5f6c9d8c700f437e16f541763e017d64f5241675f4a411631/shahabahreini/YOLOMatic"
fundingLinks: ["CUSTOM:https://github.com/sponsors"]
---

# YOLOmatic

**Interactive computer-vision training for YOLO, RF-DETR, SAM 3.1, and Detectron2.**

YOLOmatic is a production-focused Python CLI/TUI for configuring, training,
fine-tuning, predicting, benchmarking, augmenting, converting, monitoring, and
uploading computer-vision models. It covers YOLO26/12/11/10/9/8, YOLOX,
RF-DETR, SAM 3.1, and Detectron2 from one terminal workflow.

## Table of Contents

- [Why YOLOmatic](#why-yolomatic)
- [30-Second Quickstart](#30-second-quickstart)
- [Feature Matrix](#feature-matrix)
- [FAQ](#faq)
- [Documentation](#links)
- [Versioning](#versioning)

## Why YOLOmatic

- **Interactive wizard UX:** configure models, datasets, fine-tuning, prediction,
  benchmarking, augmentation, NDJSON conversion, TensorBoard, and upload flows
  without hand-writing boilerplate.
- **Hardware-aware configs:** CUDA, Apple Silicon MPS, CPU fallback, workers,
  batch sizes, and runtime preflight checks are handled before training starts.
- **Safe offline augmentation:** isolated worker processes create reproducible
  Albumentations datasets without replacing a prior output until the new one succeeds.
- **10+ model families in one CLI:** Ultralytics YOLO, native…
