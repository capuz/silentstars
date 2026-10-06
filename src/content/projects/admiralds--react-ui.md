---
repo: "AdmiralDS/react-ui"
name: "react-ui"
description: "React component storybook based on the Admiral 2.1 design system"
originalDescription: "Сторибук компонентов React на основе дизайн системы Адмирал 2.1"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/AdmiralDS/react-ui"
homepage: "https://AdmiralDS.github.io/react-ui/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["react", "styled-components", "typescript"]
stars: 51
forks: 19
openIssues: 9
closedIssues: 1305
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2022-04-12T15:18:05Z"
lastCommitAt: "2026-10-06T10:41:44Z"
lastReleaseAt: "2022-07-06T08:08:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 60
maintainers: ["syros", "VeronaPl", "Parasjona"]
openGraphImageUrl: "https://opengraph.githubassets.com/61d6afc742abf47abd03dd777a4c857a4426657385c8ab301fe94c1b53d676db/AdmiralDS/react-ui"
---

# @admiral-ds/react-ui

React component library based on the Admiral 2.1 design system

## Contents

- [Contributing Guidelines](https://github.com/AdmiralDS/react-ui/blob/HEAD/CONTRIBUTING.md)
- [Installation](#installation)
- [Setup](#setup)

## Installation

@admiral-ds/react-ui requires dependencies:

1. `styled-components > 5.1.0`
2. `react > 16.0.0`
3. `react-dom > 16.0.0`

   You can use a ready-made template with the configured library [https://github.com/AdmiralDS/web-app-vite-admiral](https://github.com/AdmiralDS/web-app-vite-admiral)
   or create a project from scratch and install the library:

```shell
$ npm create vite@latest my-web-app -- --template react-ts
$ cd my-web-app
$ npm install
$ npm i @admiral-ds/react-ui
$ npm run dev
```

## Setup

For @admiral-ds/react-ui to work properly, you need to use `<ThemeProvider>`, `<FontsVTBGroup />` and `<DropdownProvider>`, and it is **recommended** to connect them at the root of the project:

main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import…
```
