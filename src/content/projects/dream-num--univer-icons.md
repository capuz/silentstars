---
repo: "dream-num/univer-icons"
name: "univer-icons"
description: "Icons used by Univer"
url: "https://github.com/dream-num/univer-icons"
homepage: "https://docs.univer.ai/icons/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 12
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-01-09T08:58:31Z"
lastCommitAt: "2026-06-25T06:41:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 70
maintainers: ["jikkai", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e5eac551fcc4898f0678caec55fb2338ce26f85130b5eb3cb4343ddbcf235ad/dream-num/univer-icons"
---

# @univerjs/icons

![npm license](https://img.shields.io/npm/l/@univerjs/icons)
![npm version](https://img.shields.io/npm/v/@univerjs/icons)
![npm downloads](https://img.shields.io/npm/dw/@univerjs/icons)

> @univerjs/icons is a set of icons designed for office software scenarios., it contains a series of icons and React components, you can use them in your React project.

## Installation

```bash
# npm
npm install @univerjs/icons

# pnpm
pnpm add @univerjs/icons

# yarn
yarn add @univerjs/icons
```

For Vue 3 projects, install the Vue package:

```bash
# npm
npm install @univerjs/icons-vue

# pnpm
pnpm add @univerjs/icons-vue

# yarn
yarn add @univerjs/icons-vue
```

## Usage

Use icons just like render a React component:

```tsx
import { SaveIcon } from '@univerjs/icons'

function App() {
  return <SaveIcon />
}
```

Because icons are React components, you can pass any SVGElement attributes to them, such as style:

```tsx
function App() {
  return <SaveIcon style={{ color: '#3526de', fontSize: '48px' }} />
}
```

```tsx
<SmileIcon style={{ color: '#3526de', fontSize: '48px' }} />
```

### Standard usage

Instead of adding various props to the icons, we prefer to follow the…
