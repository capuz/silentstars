---
repo: "Superce1l/OCRMiniTool"
name: "OCRMiniTool"
description: "Lightweight text recognition tool (Unlimited-OCR-2)"
originalDescription: "文字识别小工具(Unlimited-OCR-2)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Superce1l/OCRMiniTool"
language: "Python"
languages: ["Python"]
languagePcts: [65]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-10-27T09:12:08Z"
lastCommitAt: "2026-11-13T05:36:08Z"
lastReleaseAt: "2026-11-13T05:40:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 67
maintainers: ["Superce1l"]
openGraphImageUrl: "https://opengraph.githubassets.com/d49c0f9eb078ea075030a9701fa8f7d8b742fe7db1e94a98b1145db00fefa8a1/Superce1l/OCRMiniTool"
---

# OCRMiniTool (OCR Mini Tool)

A local graphical OCR tool. **Your data never leaves your computer.** Built on Baidu's open-source [**Unlimited-OCR-2**](https://huggingface.co/baidu/Unlimited-OCR-2) (MIT, about 3.3B parameters), it parses dragged-in images or PDFs into Markdown text. It has a **WebView interface** (native WebView2 window) and supports CUDA GPU acceleration as well as pure CPU inference (detected automatically).

> The UI framework is based on [Superce1l/STTMiniTool](https://github.com/Superce1l/STTMiniTool) (the same local HTTP server + SSE + WebView2 architecture and visual language). Upstream model: [baidu/Unlimited-OCR](https://github.com/baidu/Unlimited-OCR)

---

## Key Features

- 🖼️ **Images / PDF → Markdown**: jpg, png, bmp, webp, and tiff are recognized on drop; PDFs are automatically converted to images page by page (pymupdf)
- 📚 **Two recognition modes**: **Merged parsing** (multiple files treated as pages of the same document, with cross-page context in a single request) and **batch recognition** (each file recognized independently with its own result; failures don't interrupt the queue, and it can be cancelled at any time)
- 🔍 **Three image slicing…
