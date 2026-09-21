---
repo: "syuilo/glitch-studio"
name: "glitch-studio"
description: "🤯 A̴ g̸l̶i̴t̵c̷h̵ d̶e̶d̴i̷c̶a̵t̴e̴d̴ i̷m̶a̶g̸e̵ e̷d̶i̵t̶i̷n̸g̴ s̵o̴f̶t̷w̸a̶r̸e̶"
originalDescription: "🤯 A̴ g̸l̶i̴t̵c̷h̵ d̶e̶d̴i̷c̶a̵t̴e̴d̴ i̷m̶a̶g̸e̵ e̷d̶i̵t̶i̷n̸g̴ s̵o̴f̶t̷w̸a̶r̸e̶"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/syuilo/glitch-studio"
homepage: "http://syuilo.dev/glitch-studio/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [48, 34]
stars: 7
forks: 0
openIssues: 50
closedIssues: 37
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-10T04:19:15Z"
lastCommitAt: "2026-09-21T09:13:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 71
maintainers: ["syuilo"]
openGraphImageUrl: "https://opengraph.githubassets.com/63e912696101e9ce69dbf88eef3534317bdda97a777d47cb476b3575ea39f3df/syuilo/glitch-studio"
---

# Glitch Studio (⚠️Under Development!!!)

Glitch Studio is a web application that enables real-time image and video processing and editing through a node-based editor, and can also be used as a shader playground.

- All image processing is performed on the GPU for high efficiency
- Resolution-independent so rendering at any resolution produces consistent results without visual changes (※1)
- FPS-independent so rendering at any frame rate produces consistent results without changes in motion speed
- Aspect-ratio-independent so rendering at any aspect ratio produces consistent results without distortion (※2)
- Expressions can be interpreted as [AiScript](https://aiscript-dev.github.io/ja/)
- UI thread, audio processing thread, and image processing thread are separated, allowing efficient use of multi-core and fast operation

With the right idea, you can create various things. The possibilities are infinite.

## Concept

A mechanism where various "nodes" are wired together to process data.

Nodes are like functions - they receive input (though some don't) and return output.

"Data" is not limited to images - it can be scalar fields or vector fields. In other words, any data that is a…
