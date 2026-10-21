---
repo: "daimlertruck/DT-DDS"
name: "DT-DDS"
description: "Daimler Truck Digital Design System"
readmeQualityOk: true
url: "https://github.com/daimlertruck/DT-DDS"
homepage: "https://daimlertruck.github.io/DT-DDS"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["design-systems", "design-tokens", "react", "daimler-truck"]
stars: 16
forks: 4
openIssues: 41
closedIssues: 33
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-06-26T15:22:48Z"
lastCommitAt: "2026-10-21T08:49:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 66
maintainers: ["joelpereira15", "afreire-laptop", "catiaraminhos"]
openGraphImageUrl: "https://opengraph.githubassets.com/424525bb21124c5e5a1f2de7276986b5e96bbdcbcea023d0f76852b5f399ceeb/daimlertruck/DT-DDS"
discussionCount: 0
---

It contains UI components, brand themes, examples and documentation.</div>

#

#### **DT-DDS provides:**

- A unified group of utility functions commonly used, and spread across different projects
- A unified group of reusable UI components commonly used, and spread across different projects
- W3C standards, common tooling, and high quality through CI/CD lifecycle
- Accessibility meeting WCAG 2.1 AA standards
- Faster developments and implementations
- Easy collaboration and Maintenance
- Versioning and changelogs
- Documentation

#### **Documentation via:**

- [Storybook/Developer documentation](https://daimlertruck.github.io/DT-DDS/)
- [Figma (private design files)](https://www.figma.com/file/RdxGI4OUcKDRfBRPmBJXbW/DT_UI-Design-System)

## 📦 Installation

`@dt-dds/react` uses CSS-IN-JS behind the scenes. You'll also need to add Emotion as a project dependency.

```bash
yarn add @dt-dds/react @emotion/css @emotion/react @emotion/styled
```

## 🔨 Usage

Import the DT-DDS global styles in the root component.

```tsx
import '@dt-dds/react/index.css';
```

And wrap your code in a `ThemeProvider` component to make it available to all components.

```tsx
import { Provider as…
