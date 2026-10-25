---
repo: "slicerx-oss/slicerx"
name: "slicerx"
description: "A slicer for the gods. An AI-ready CAD engine and slicer for 3D printing: free, open source, hand-written Rust core."
readmeQualityOk: true
url: "https://github.com/slicerx-oss/slicerx"
homepage: "https://slicerx.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [56, 35]
stars: 5
forks: 1
openIssues: 5
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-06T01:17:00Z"
lastCommitAt: "2026-10-25T08:44:02Z"
lastReleaseAt: "2026-10-07T05:18:10Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 69
maintainers: ["subydoo-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/61a72ab8672e66577e86d13b2601f1a8e221e7f4be8943c7062a26c3062f3587/slicerx-oss/slicerx"
fundingLinks: ["GITHUB:https://github.com/Subydev", "BUY_ME_A_COFFEE:https://buymeacoffee.com/xccyf47w7r", "CUSTOM:https://slicerx.app/support"]
---

SlicerX is a free, fully open source CAD engine and slicer for FFF 3D printers, built to be driven by other software as much as by people. An AI assistant can plan settings, slice, and send a job to a printer through its MCP server, under a permission policy the user controls. A web page can slice in the browser with the WebAssembly core, and a print farm tool can call the CLI or link the Rust crate. The slicing core is hand-written Rust, compiles to native code and WebAssembly, and uses the setting names OrcaSlicer, Bambu Studio and PrusaSlicer share, so existing profiles carry over. It contains no code from those projects. The base kit is Apache-2.0, so you can build it into your own product, open or closed, as long as you keep the "Made possible by SlicerX" credit.

> [!NOTE]
> SlicerX is pre-alpha and started in September 2026. It borrows a few ideas from a small slicing prototype its author wrote in 2021; nearly all of today's code is new. Several surfaces below are still being built.

## The base kit

Everything below is the base kit, under Apache-2.0: what you need to slice, set up and drive printers from your own software.

| Surface | What you get | State |
| --- | --- |…
