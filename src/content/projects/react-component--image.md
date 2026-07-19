---
repo: "react-component/image"
name: "image"
description: "🖼️ Image display, fallback, and preview tooling for React."
readmeQualityOk: true
url: "https://github.com/react-component/image"
homepage: "https://react-component.github.io/image"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ant-design", "antd", "react", "react-component", "javascript"]
stars: 211
forks: 119
openIssues: 31
closedIssues: 24
watchers: 4
contributors: 64
recentReleases: 0
createdAt: "2018-12-30T11:09:11Z"
lastCommitAt: "2026-07-19T06:13:41Z"
lastReleaseAt: "2020-09-25T10:25:17Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 30
maintainers: ["zombieJ", "afc163", "aojunhao123"]
openGraphImageUrl: "https://opengraph.githubassets.com/404f0eaed7c6b5a5f257f4ae2346f69792163a352ed377f846b81a3d72da66ba/react-component/image"
fundingLinks: ["GITHUB:https://github.com/ant-design", "OPEN_COLLECTIVE:https://opencollective.com/ant-design"]
---

<h1>@rc-component/image</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>🖼️ Image display, fallback, and preview tooling for React.</p>

  <p>
  </p>
</div>

## Highlights

- Supports placeholder, fallback, and preview.
- Preview supports zoom, rotate, flip, drag, keyboard access, and custom actions.
- `Image.PreviewGroup` supports grouped preview and custom preview items.
- Ships compiled JavaScript, TypeScript definitions, and CSS assets.

## Install

```bash
npm install @rc-component/image
```

## Usage

```tsx | pure
import Image from '@rc-component/image';
import '@rc-component/image/assets/index.css';

export default function App() {
  return (
    <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
  );
}
```

## Preview Group

```tsx | pure
import Image from '@rc-component/image';
import '@rc-component/image/assets/index.css';

export default function App() {
  return (
    <Image.PreviewGroup>
      <Image…
