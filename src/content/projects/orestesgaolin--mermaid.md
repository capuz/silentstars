---
repo: "orestesgaolin/mermaid"
name: "mermaid"
description: "Pure Dart + Flutter implementation of mermaid diagrams "
readmeQualityOk: true
url: "https://github.com/orestesgaolin/mermaid"
homepage: "http://roszkowski.dev/mermaid/"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["dart", "flutter", "mermaid"]
stars: 20
forks: 2
openIssues: 1
closedIssues: 63
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-06-14T14:33:51Z"
lastCommitAt: "2026-09-08T07:39:21Z"
lastReleaseAt: "2026-09-04T17:02:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 55
maintainers: ["orestesgaolin", "parlough"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b1403a96720760dbb29c308b0f7fd3fe8c10e10165adf5c3f3aac9b4db24d3/orestesgaolin/mermaid"
---

# Mermaid for Dart and Flutter

This repository contains a Dart implementation of Mermaid diagram parsing and
layout, plus renderers for SVG and Flutter. It does not use JavaScript, a
WebView, or a browser at runtime.

The [comparison site](https://roszkowski.dev/mermaid/) renders the Dart and
mermaid.js results side by side.

```dart
import 'package:flutter/material.dart';
import 'package:mermaid_flutter/mermaid_flutter.dart';

const diagram = MermaidDiagram(source: '''
graph TD
  A[Start] --> B{Works?}
  B -->|yes| C[Ship it]
  B -->|no| A
''');
```

## Packages

| Package | Purpose |
| --- | --- |
| [`elk`](https://github.com/orestesgaolin/mermaid/blob/HEAD/packages/elk) | Pure Dart layered graph layout with compound graphs, ports, and orthogonal routing. |
| [`mermaid_core`](https://github.com/orestesgaolin/mermaid/blob/HEAD/packages/mermaid_core) | Mermaid parser, layout engine, render scene, SVG renderer, and command-line tool. |
| [`mermaid_flutter`](https://github.com/orestesgaolin/mermaid/blob/HEAD/packages/mermaid_flutter) | Flutter widgets and a `CustomPainter` renderer for `mermaid_core`. |
| `mermaid_samples` | Internal sample catalogue used by the demo, website, and…
