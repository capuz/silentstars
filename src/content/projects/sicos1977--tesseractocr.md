---
repo: "Sicos1977/TesseractOCR"
name: "TesseractOCR"
description: "A .net library to work with Google's Tesseract"
readmeQualityOk: true
url: "https://github.com/Sicos1977/TesseractOCR"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 226
forks: 34
openIssues: 0
closedIssues: 72
watchers: 12
contributors: 5
recentReleases: 0
createdAt: "2022-01-19T13:17:08Z"
lastCommitAt: "2026-11-26T13:00:24Z"
lastReleaseAt: "2022-07-11T16:31:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 38
maintainers: ["Sicos1977", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/11a11cd54bb954a3a76e1c4dcdcee441de3228a591a828e47faa160edc0295b8/Sicos1977/TesseractOCR"
---

What is TesseractOCR
====================

TesseractOCR is a .NET wrapper for Tesseract OCR. The native API bindings target **Tesseract 5.5.4**, and the bundled native image-processing library is **Leptonica 1.87.0**. The Windows native binaries are named `tesseract55.dll` and `leptonica-1.87.0.dll` (the Tesseract DLL name identifies the 5.5 series).

For concurrent OCR with reusable engines, see [Recognize images in parallel with EnginePool](#recognize-images-in-parallel-with-enginepool).

## Documentation
Documentation can be found [here](https://sicos1977.github.io/TesseractOCR/)

## Install and prepare language data

Install the NuGet package:

```powershell
dotnet add package TesseractOCR
```

Tesseract also needs trained language data. Choose one of these options:

- **NuGet:** Find the `TesseractOCR.Languages.*` packages on [nuget.org](https://www.nuget.org/packages?q=TesseractOCR.Languages). For example, install English with:

  ```powershell
  dotnet add package TesseractOCR.Languages.English
  ```
