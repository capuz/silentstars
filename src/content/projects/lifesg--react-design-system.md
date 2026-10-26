---
repo: "LifeSG/react-design-system"
name: "react-design-system"
description: "The repository for our design system in React"
readmeQualityOk: true
url: "https://github.com/LifeSG/react-design-system"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 22
forks: 23
openIssues: 12
closedIssues: 58
watchers: 4
contributors: 83
recentReleases: 0
createdAt: "2022-03-08T10:30:17Z"
lastCommitAt: "2026-10-26T09:18:50Z"
lastReleaseAt: "2022-11-14T06:37:08Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 72
maintainers: ["qroll", "dependabot[bot]", "ghazwan-gt"]
openGraphImageUrl: "https://opengraph.githubassets.com/92c467a3dcf162057472dbd42714e45287f8c8efb7e1192954bed721fd05b4d7/LifeSG/react-design-system"
---

# LifeSG React Design System

A React component library for LifeSG and BookingSG related products.

## Installation

```
npm i @lifesg/react-design-system
```

### Peer dependencies

```json
{
    "@floating-ui/react": ">=0.26.23 <1.0.0",
    "@lifesg/react-icons": "^1.5.0",
    "react": "^17.0.2 || ^18.0.0 || ^19.0.0",
    "react-dom": "^17.0.2 || ^18.0.0 || ^19.0.0"
}
```

## Getting Started

The module requires some custom css for fonts and certain components to work
properly. You will need to load the corresponding stylesheets in your app.

> [!NOTE]
> The font stylesheet example below is for the LifeSG theme. Fonts are
> theme-specific. If you are using another theme, refer to the
> [installation instructions](https://designsystem.life.gov.sg/react/index.html?path=/docs/getting-started-installation--docs).

Add this into the `head` of your html file:

```tsx
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v4/css/main.css"
/>
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css"
/>
```

Or if you are importing to an existing css file:

```css
@import…
