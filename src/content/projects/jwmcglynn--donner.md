---
repo: "jwmcglynn/donner"
name: "donner"
description: "Donner SVG, an embeddable browser-grade SVG2 engine in modern C++20"
readmeQualityOk: true
url: "https://github.com/jwmcglynn/donner"
homepage: "https://jwmcglynn.github.io/donner/"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["svg", "css3", "cpp20", "cpp", "svg2"]
stars: 30
forks: 2
openIssues: 11
closedIssues: 67
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2018-12-14T07:29:02Z"
lastCommitAt: "2026-07-04T22:51:51Z"
lastReleaseAt: "2026-04-16T20:05:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 94
undervaluedScore: 63
maintainers: ["jwmcglynn", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e340786196e1a7ea6b3b47771b5db3063b662ae32d82ff070b16efe8a7fa7bf/jwmcglynn/donner"
discussionCount: 1
---

# Donner SVG: Embeddable browser-grade SVG2 engine for your application

Donner SVG Editor & Toolkit is an editor application plus reusable SVG rendering, geometry, and toolkit libraries. At its core is an embeddable browser-grade SVG2 engine in C++20, providing full access to the SVG DOM. [Try it out online!](https://jwmcglynn.github.io/donner-editor/)

```cpp
ParseWarningSink warnings;
ParseResult<SVGDocument> maybeDocument = SVGParser::ParseSVG(
    loadFile("donner_splash.svg"), warnings);

if (maybeDocument.hasError()) {
  std::cerr << "Parse Error: " << maybeDocument.error() << "\n";
  std::abort();
}

Renderer renderer;
renderer.draw(maybeDocument.result());

const bool success = renderer.save("output.png");
```

## Why Donner?

- It's designed to be embeddable, and provides an exception-free API surface
- For malformed files, it produces detailed parse errors, which includes file/line information
- Donner provides an extensive and well-documented SVG API surface, which enables inspecting and modifying the SVG in-memory
- Donner implements the latest standards, SVG2 and CSS3 and aims for high-conformance

Donner supports:

- SVG2 core functionality, such as shapes, fills,…
