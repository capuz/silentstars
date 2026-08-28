---
repo: "mittwald/flow"
name: "flow"
description: "The mStudio Design System — an accessible React component library and a remote-rendering stack for sandboxed mStudio extensions."
readmeQualityOk: true
url: "https://github.com/mittwald/flow"
homepage: "https://flow.mittwald.de"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["accessibility", "component-library", "design-system", "design-system-frontend", "design-tokens", "mittwald", "react", "react-aria", "storybook"]
stars: 14
forks: 3
openIssues: 36
closedIssues: 706
watchers: 1
contributors: 48
recentReleases: 0
createdAt: "2023-11-20T07:47:58Z"
lastCommitAt: "2026-08-28T14:21:52Z"
lastReleaseAt: "2024-02-06T08:53:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 74
maintainers: ["mfal", "Lisa18289", "maaaathis"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd6ea2ef36817ebd97aaec02358aa9160ced1166f3d145658dc1e1e010e03e8d/mittwald/flow"
---

# Flow

## mStudio Design System

A React component library and a remote-rendering system, built by
[mittwald](https://www.mittwald.de).

Flow gives mittwald a single, accessible UI foundation — and lets
[mStudio](https://developer.mittwald.de) extensions render sandboxed interfaces
with those same components from inside an iframe.

- 📘 **Documentation:** <https://flow.mittwald.de>
- 🎛️ **Storybook:** <https://storybook.flow-components.de>
- 🧩 **Extension developer portal:** <https://developer.mittwald.de>

## Highlights

- **Various components** covering actions, forms, overlays, navigation, data
  visualization, content, and status.
- **Accessible by default** — most components wrap
  [react-aria-components](https://react-spectrum.adobe.com/react-aria/components.html),
  so keyboard behavior, focus management, and ARIA come built in.
- **Design tokens** compiled from YAML to CSS variables via
  [style-dictionary](https://styledictionary.com/) — colors, typography,
  spacing, and radii stay consistent and themeable.
- **Contextual composability** — components adapt to where they're used (an
  `Icon` inside an `Alert` sizes itself; a `Heading` inherits its level) instead
  of…
