---
repo: "maveio/components"
name: "components"
description: "privacy friendly (🇪🇺) iframe-less, video UI elements for videos hosted on mave.io"
readmeQualityOk: true
url: "https://github.com/maveio/components"
homepage: "https://mave.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 6
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-03-06T12:03:22Z"
lastCommitAt: "2026-09-01T12:56:05Z"
lastReleaseAt: "2023-06-14T12:26:12Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 84
maintainers: ["davidvanleeuwen", "mave-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f72bc349b6e2557e0d37821bc80a4790c9f37285fe0ed4008967b06015e6f6e8/maveio/components"
---

<br />
    <picture>
      <source srcset="https://mave.io/images/logo_white.svg" media="(prefers-color-scheme: dark)">
    </picture>
  </a>
</p>

# components

Components are pre-built rich UI components that help you build your own video experiences across desktop and mobile (web). There is no need to run external iframes these days. This library leverages the power of [webcomponents](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), which makes it fast and has a small footprint. You can create a (free) account on [mave.io](https://mave.io).

[Install](#install) •
[Usage](#usage) •
[Contributing](#contributing) •
[Docs](https://mave.io/docs/)

## Get started

Include the following in your site (and [create an account](https://app.mave.io/signup)):

```html
<script
  type="module"
  src="https://cdn.video-dns.com/npm/@maveio/components/+esm"
></script>
```

and start using our [components](#usage)!

## Install

If you want to use our component library locally within your project:

```
npm install @maveio/components
```

And either use the regular version

```js
// include in your script.js
import { Player } from '@maveio/components';

// and use the component in…
