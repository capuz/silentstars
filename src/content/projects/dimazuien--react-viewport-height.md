---
repo: "dimazuien/react-viewport-height"
name: "react-viewport-height"
description: "A utility for React to set 100vh equal to the actual browser inner window height."
url: "https://github.com/dimazuien/react-viewport-height"
homepage: "https://codesandbox.io/s/react-viewport-height-90o4j"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["react", "hook", "viewport", "scroll", "vh", "resize", "window", "screen", "mobile"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-09-01T11:49:02Z"
lastCommitAt: "2026-06-27T21:46:25Z"
lastReleaseAt: "2023-07-31T15:34:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 76
maintainers: ["renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/15dccd9dd2e8c677ceab61d13aa37e175b1763f099e6f3129869e433d3658210/dimazuien/react-viewport-height"
discussionCount: 1
---

# react-viewport-height

A utility for React to set 100vh equal to the actual browser inner window height.

Since `vh` has troubles on mobile browsers (primarily because of the address bar), there are several tricks to fix it. This package implements the one from [this article](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/).

_The solution for this was introduced in the [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4) which is [widely supported now](https://caniuse.com/viewport-unit-variants). Instead of using this package, you can use the `dvh` unit if your project doesn't need to support older browsers. [Read more about new units.](https://web.dev/viewport-units/)_

## Usage

```shell
npm install react-viewport-height
```

```jsx
// index.js
import useVH from 'react-viewport-height';
import './index.css';

const App = () => {
  useVH();

  return <div className='app' />;
};
```

```css
/* index.css */
.app {
  min-height: calc(var(--vh, 1vh) * 100);
}
```

Read [the documentation](https://github.com/dimazuien/react-viewport-height/blob/main/docs/index.md) for more details. You can also play with a…
