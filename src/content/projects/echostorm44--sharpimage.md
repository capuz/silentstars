---
repo: "Echostorm44/SharpImage"
name: "SharpImage"
description: "A pure C# .NET 10 port of ImageMagick. Zero native dependencies. Full AOT compatibility. No P/Invoke, no C/C++ bindings — just managed code competing at native speed."
readmeQualityOk: true
url: "https://github.com/Echostorm44/SharpImage"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 11
forks: 3
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-03-14T22:56:04Z"
lastCommitAt: "2026-10-21T21:15:19Z"
lastReleaseAt: "2026-09-02T16:14:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 53
maintainers: ["Echostorm44"]
openGraphImageUrl: "https://opengraph.githubassets.com/bebaeb47c8001e5d6797f79fc8547a2d56976bc32774612b9a69196b812f6c6f/Echostorm44/SharpImage"
---

# SharpImage

A pure C# .NET 10 port of ImageMagick. Zero native dependencies. Full AOT compatibility. No P/Invoke, no C/C++ bindings — just managed code competing at native speed.

## Why SharpImage?

ImageMagick is the gold standard for image processing, but it's written in C — a language that has allowed memory corruption, buffer overflows, and CVEs to accumulate for decades. .NET 10 has matured to the point where C# can compete with C and C++ in raw performance when used with care: `Span<T>`, hardware intrinsics (SSE2/SSE4.1/AVX2/AVX-512), `stackalloc`, `ArrayPool<T>`, and aggressive JIT inlining.

SharpImage reimplements ImageMagick's image processing pipeline entirely in safe, managed C# and with better performance — producing a library DLL, a CLI tool, and a GUI Photoshop style example project.

## Features

### 34 Image Formats (Including 31 Camera Raw)

| Category | Formats |
|----------|---------|
| **Common Raster** | PNG, JPEG, GIF, BMP, TGA, TIFF, WebP, ICO |
| **Modern Codecs** | AVIF, HEIC, JPEG 2000, JPEG XL, OpenEXR |
| **Professional** | PSD, DPX, Cineon, HDR (Radiance), FITS, DICOM |
| **Compact** | QOI, Farbfeld, WBMP, PNM (PBM/PGM/PPM), PCX |
|…
