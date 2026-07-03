---
repo: "x3zvawq/paddleocr.js"
name: "paddleocr.js"
description: "A cross-platform OCR library based on PaddleOCR v5 and ONNX Runtime that is as small as possible."
url: "https://github.com/x3zvawq/paddleocr.js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-20T14:27:42Z"
lastCommitAt: "2026-07-03T06:24:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 60
maintainers: ["x3zvawq"]
openGraphImageUrl: "https://opengraph.githubassets.com/684e51502860fac231cea1a2fce6da0b5bdc788900f55bdf7a6249c37330b361/x3zvawq/paddleocr.js"
---

# paddleocr.js

[中文文档](./README_zh.md)

A lightweight TypeScript runtime for PaddleOCR / PaddleX ONNX inference.

The library focuses on the inference chain: preprocessing, ONNX Runtime calls,
postprocessing, presets, and high-level pipelines. It does not ship image decoders,
OpenCV, pyclipper, or model binaries. Your application loads the pixels and model
files, then passes them into this runtime.

## What It Supports

| Area | User-facing API |
| --- | --- |
| OCR det + textline orientation + rec | `PaddleOcrService` |
| Table Recognition V2 | `TableRecognitionV2Service` |
| PP-Structure-like document parsing | `PaddleStructureService` |
| Text detection / recognition modules | `DetectionService`, `RecognitionService` |
| Document / textline / table classification | `ImageClassificationService` |
| Layout / region / table-cell object detection | `ObjectDetectionService` |
| Table structure recognition | `TableStructureRecognitionService` |
| Formula recognition | `FormulaRecognitionService` |
| Text image unwarping | `TextImageUnwarpingService` |

Preset coverage includes PP-OCRv5 and PP-OCRv6 OCR models, document orientation,
textline orientation, table classification, UVDoc,…
