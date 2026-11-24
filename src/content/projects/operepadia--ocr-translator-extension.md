---
repo: "OPerepadia/ocr-translator-extension"
name: "ocr-translator-extension"
description: "Extract and translate text from images or any area of a web page using local OCR"
readmeQualityOk: true
url: "https://github.com/OPerepadia/ocr-translator-extension"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["firefox-addon", "image-to-text", "ocr", "translation", "paddleocr", "screen-translator", "browser-extension", "llm"]
stars: 7
forks: 3
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-29T18:29:47Z"
lastCommitAt: "2026-11-24T13:21:44Z"
lastReleaseAt: "2026-08-17T16:45:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 55
maintainers: ["OPerepadia"]
openGraphImageUrl: "https://opengraph.githubassets.com/28b2ca1ed597a4d7522b1d46cc28ad157b67cfb95ed643752b8c843a202d6879/OPerepadia/ocr-translator-extension"
---

# Screen OCR Translator

Browser extension that uses local OCR to extract text from images, comics, scans, or any area of a web page, and shows the translation in an overlay or a panel.

Text recognition runs locally in your browser. Translation uses Google Translate by default. You can also use DeepL (with your own API key) or any OpenAI-compatible LLM endpoint (local or remote).

## Install

## Features

- Select any area of a web page and translate it in place.
- Translate an image directly from the context menu.
- Translate a screen area live, such as hardcoded video subtitles.
- Run OCR locally in your browser with bundled [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) models.
- Wide language support with automatic script detection. See [supported languages](#text-recognition).
- Group recognized lines into speech bubbles and free-text regions with a [local layout model](https://github.com/OPerepadia/ocr-translator-extension/blob/HEAD/docs/LAYOUT-GROUPING.md).
