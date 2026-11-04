---
repo: "Mubumbutu/Ebook-Subtitle-Translator"
name: "Ebook-Subtitle-Translator"
description: "A desktop application written in Python for translating EPUB, SRT, TXT, ASS, PDF, DOCX, FB2, MOBI, AZW and AZW3 files using LLMs (LM Studio, Ollama, OpenRouter), DeepL, or Google Translate."
readmeQualityOk: true
url: "https://github.com/Mubumbutu/Ebook-Subtitle-Translator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 17
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T11:51:26Z"
lastCommitAt: "2026-11-04T08:05:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 43
maintainers: ["Mubumbutu"]
openGraphImageUrl: "https://opengraph.githubassets.com/363e109d23e5419e1ce854b43637e24c9e79cdde1e46ef52c88e2160dd01a48f/Mubumbutu/Ebook-Subtitle-Translator"
---

# EPUB / SRT / TXT / ASS / PDF / Kindle / FB2 / DOCX Translator with LLM

A desktop application for translating **EPUB**, **SRT**, **TXT**, **ASS**, **PDF**, **MOBI/AZW/AZW3**, **FB2**, and **DOCX** files using local or cloud-hosted language models.

---

---

## Screenshots .epub before and after:

---

## Changelog

### [1.1.0] - 2026-11-01
**Added**
- Added a new **LLM Prompt** tab that displays the complete prompt sent to the LLM.

**Changed**
- Updated the options in the **Tag Profile (Advanced)** tab.
- Improved the logic of the **Alignment** function for lighter LLM models that are unable to correctly insert tags into translations.

**Fixed**
- Minor fixes and improvements.

### [1.0.0] - 2026-10-23
**Added**
- Initial public release version 1.0.0.

---

## Supported formats

| Format | Extensions | Notes |
|--------|------------|-------|
| EPUB | `.epub` | Full HTML structure preserved; two processing modes (see below) |
| SRT | `.srt` | Subtitle blocks with timestamps; translated lines split proportionally |
| TXT | `.txt` | Plain text, paragraph-by-paragraph |
| PDF | `.pdf` | Text extracted by page block; layout preserved on PDF→PDF save |
| Kindle | `.mobi` `.azw`…
