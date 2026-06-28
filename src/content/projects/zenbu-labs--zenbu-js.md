---
repo: "zenbu-labs/zenbu.js"
name: "zenbu.js"
description: "The framework for building hackable software"
url: "https://github.com/zenbu-labs/zenbu.js"
homepage: "https://zenbujs.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 240
forks: 19
openIssues: 10
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 9
createdAt: "2026-04-17T00:01:06Z"
lastCommitAt: "2026-06-28T01:47:27Z"
lastReleaseAt: "2026-06-14T04:37:38Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 66
undervaluedScore: 26
maintainers: ["RobPruzan", "oldzenbu", "rakshit9"]
openGraphImageUrl: "https://opengraph.githubassets.com/2072f9f8822562170ad9d449340edbe3914cce2ba306c26b4e7b3cb236670f96/zenbu-labs/zenbu.js"
---

</p>

</div>

  <br/>

  </span>

</p>

  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
</p>

<br />

  <b>Get started in 5 seconds</b>
</p>

```bash
npx create-zenbu-app
```

<br />

## Why was Zenbu.js made
Zenbu.js is the underlying architecture for [Zenbu](https://zenbu.dev), a highly extensible development environment

## Why make extensible apps

1. Coding agents can generate and customize software on demand for a specific use case

2. Letting people modify your app means more directions get explored than you could reach on your own.

3. Extensible code tends to be more maintainable, because it’s already written to be changed.

## How does it work

Users can modify Zenbu apps in 2 ways:

### Modifying the raw source code

When a Zenbu app is built for production, there is no TypeScript compilation or bundling step. The same source code you wrote in development will be downloaded by the user and stored in `~/.zenbu/<app-name>`. When the app launches, it discovers the app code, dynamically compiles it, and runs the JavaScript using Electron's Node.js runtime.

All the source code in this directory is being watched for changes. When there is…
