---
repo: "react-component/dropdown"
name: "dropdown"
description: "🔽 A trigger-driven dropdown component for React."
readmeQualityOk: true
url: "https://github.com/react-component/dropdown"
homepage: "https://react-component.github.io/dropdown"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["ant-design", "antd", "javascript", "react", "react-component"]
stars: 181
forks: 111
openIssues: 25
closedIssues: 26
watchers: 23
contributors: 57
recentReleases: 0
createdAt: "2015-05-30T09:31:49Z"
lastCommitAt: "2026-09-08T08:17:14Z"
lastReleaseAt: "2022-01-10T03:40:45Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 78
undervaluedScore: 30
maintainers: ["QDyanbing", "zombieJ", "afc163"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eeacdeb4a58dba2847cef5eae5edcc131e14c4b264e3f6bd5b3fb0e340551af/react-component/dropdown"
fundingLinks: ["GITHUB:https://github.com/ant-design", "OPEN_COLLECTIVE:https://opencollective.com/ant-design"]
---

<h1>@rc-component/dropdown</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>🔽 A trigger-driven dropdown component for React.</p>

  <p>
  </p>
</div>

## Highlights

- Built on `@rc-component/trigger`.
- Supports hover, click, context menu, and custom trigger actions.
- Accepts a React element or render function as dropdown overlay.
- Supports align point behavior and trigger-width matching.

## Install

```bash
npm install @rc-component/dropdown
```

## Usage

```tsx | pure
import Dropdown from '@rc-component/dropdown';
import '@rc-component/dropdown/assets/index.css';

export default function App() {
  return (
    <Dropdown overlay={<div>Dropdown content</div>} trigger={['click']}>
      <button type="button">Open</button>
    </Dropdown>
  );
}
```

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

Additional props are passed to the underlying [`@rc-component/trigger`](https://github.com/react-component/trigger)…
