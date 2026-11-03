---
repo: "daimlertruck/DT-DDS"
name: "DT-DDS"
description: "Daimler Truck Digital Design System"
readmeQualityOk: true
url: "https://github.com/daimlertruck/DT-DDS"
homepage: "https://daimlertruck.github.io/DT-DDS"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["design-systems", "design-tokens", "react", "daimler-truck"]
stars: 16
forks: 5
openIssues: 43
closedIssues: 40
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-06-26T15:22:48Z"
lastCommitAt: "2026-11-03T10:52:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["afreire-laptop", "joelpereira15", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/897304b33a44b88258fc1ad431ff75e2f2693f853dc47fe2487390f53d148756/daimlertruck/DT-DDS"
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
