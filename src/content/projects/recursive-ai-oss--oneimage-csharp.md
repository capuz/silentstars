---
repo: "recursive-ai-oss/oneimage-csharp"
name: "oneimage-csharp"
description: "Pure managed .NET image library: tiled, demand-driven engine; PNG, JPEG, WebP, GIF, TIFF, BMP, ICO codecs and ICC color management written from the specs, with no native dependencies."
readmeQualityOk: true
url: "https://github.com/recursive-ai-oss/oneimage-csharp"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-22T08:39:19Z"
lastCommitAt: "2026-11-06T12:17:11Z"
lastReleaseAt: "2026-10-24T06:08:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["hclewk"]
openGraphImageUrl: "https://opengraph.githubassets.com/e67495f87c540219c8f2d57950765653f7a79f1a80d7255b433922dcabe3419a/recursive-ai-oss/oneimage-csharp"
---

# OneImage

**A pure-managed .NET image library: one-line thumbnails, crops and
conversions, and lazy, tiled, streaming load, edit and render on the
same engine.** PNG, JPEG, WebP, GIF, TIFF, BMP and ICO, with ICC color
management. Pure C# with no dependency beyond .NET itself; untrusted
files are read through bounds-checked managed code.

How many times faster OneImage is than ImageSharp 3.1.12 on each
benchmark task (wall-clock time, log scale, higher is better; a task
where OneImage is slower shows as a bar to the left, a tie in gray):

[Full results, with memory, the losses and the method →](https://github.com/recursive-ai-oss/oneimage-csharp/blob/HEAD/docs/performance.md)

## Why OneImage

- **Lazy, tiled and streaming.** `Resize`, `Crop` and the other
  operations only record what to do. Pixels are computed tile by tile
  when you save, so a 24 MP photo becomes a thumbnail without being held
  at full size, and JPEGs decode at 1/2, 1/4 or 1/8 scale when that is
  enough ([guide](https://github.com/recursive-ai-oss/oneimage-csharp/blob/HEAD/docs/guide.md#the-lazy-model)).
- **One-liners and an editing surface.** `Image.Thumbnail(...)` for the
  common job; an immutable…
