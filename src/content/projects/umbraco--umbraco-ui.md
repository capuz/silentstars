---
repo: "umbraco/Umbraco.UI"
name: "Umbraco.UI"
description: "Umbraco UI Components"
readmeQualityOk: true
url: "https://github.com/umbraco/Umbraco.UI"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ui-components", "ui", "components", "umbraco", "umbraco-cms", "hacktoberfest"]
stars: 152
forks: 85
openIssues: 34
closedIssues: 138
watchers: 14
contributors: 65
recentReleases: 0
createdAt: "2020-11-25T07:48:32Z"
lastCommitAt: "2026-10-09T10:49:51Z"
lastReleaseAt: "2022-08-10T13:56:18Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 92
undervaluedScore: 46
maintainers: ["iOvergaard", "dependabot[bot]", "nielslyngsoe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/315865767/d02ce978-efc5-40c7-83ed-5e2bdf2da8d3"
discussionCount: 50
---

# [Umbraco UI Library](https://uui.umbraco.com/)

A collection of 80+ web components for building [Umbraco CMS](https://umbraco.com/) interfaces. Built with [Lit](https://lit.dev/) and TypeScript. Browse them in the [Storybook](https://uui.umbraco.com/).

## Installation

```sh
npm install @umbraco-ui/uui
```

**Requirements:** Node >= 24.13, npm >= 11. Runtime dependency: [Lit](https://lit.dev/) ^3.0.0.

## Quick start

Import only the components you need — your bundler will tree-shake the rest:

```js
import '@umbraco-ui/uui/components/button/button.js';
import '@umbraco-ui/uui/components/input/input.js';
```

```html
<uui-button look="primary" label="Save"></uui-button>
<uui-input label="Name"></uui-input>
```

Or register everything at once with `import '@umbraco-ui/uui';`.

Include a theme for CSS custom properties and typography:

```html
<link
  rel="stylesheet"
  href="node_modules/@umbraco-ui/uui/dist/themes/light.css" />
```

Apply the `uui-font` and `uui-text` classes to the element that should carry UUI typography (typically `<body>`):

```html
<body class="uui-font uui-text">
  ...
</body>
```

No bundler? Use UUI directly in the browser via [import…
