---
repo: "terrestris/react-geo"
name: "react-geo"
description: "A set of geo related modules to use in combination with React, Ant Design and OpenLayers."
readmeQualityOk: true
url: "https://github.com/terrestris/react-geo"
homepage: "https://terrestris.github.io/react-geo/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["geo", "react", "ant-design", "openlayers", "typescript", "hacktoberfest"]
stars: 418
forks: 57
openIssues: 15
closedIssues: 133
watchers: 15
contributors: 25
recentReleases: 0
createdAt: "2017-08-31T08:18:26Z"
lastCommitAt: "2026-09-10T08:21:02Z"
lastReleaseAt: "2018-02-07T09:48:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 38
maintainers: ["dnlkoch", "dependabot[bot]", "ahennr"]
openGraphImageUrl: "https://opengraph.githubassets.com/b366e55c25496001d15c9f0dfb5f8731734f10be0ee476db873ca39b6469b2f1/terrestris/react-geo"
discussionCount: 3
---

# react-geo  <a href="https://terrestris.github.io/react-geo/"><img align="left" src="./assets/logo.svg" width="70px" /></a>

`react-geo` is a JavaScript library providing a large number of components to build modern mapping applications. It is used in combination with [React](https://github.com/facebook/react), [OpenLayers](https://github.com/openlayers/openlayers) and [Ant Design](https://github.com/ant-design/ant-design).

## Installation

```javascript static
npm i --save @terrestris/react-geo
```

## Usage

For a full list of available components, their properties and examples see [here](https://terrestris.github.io/react-geo/docs/latest/index.html).

### TypeScript

The `react-geo` package includes TypeScript declarations as `*.d.ts` files. The build itself is included in ESM format (currently ES2022).

### Ant-Design ConfigProvider

`react-geo` supports [dynamic theming](https://ant.design/docs/react/customize-theme) of the Toggle Button via the antd `ConfigProvider`.

```tsx
import {ConfigProvider} from 'antd';
<ConfigProvider
  theme={{
    cssVar: true,
    Component: {
      Button: {
        primaryActive: '#0958d9'
      }
    }
  }}
>
  //...
</ConfigProvider>
```…
