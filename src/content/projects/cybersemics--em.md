---
repo: "cybersemics/em"
name: "em"
description: "A beautiful, minimalistic note-taking app for personal sensemaking."
readmeQualityOk: true
url: "https://github.com/cybersemics/em"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["outliner", "sensemaking", "knowledge-management", "tools-for-thought", "note-taking"]
stars: 356
forks: 141
openIssues: 609
closedIssues: 1861
watchers: 13
contributors: 85
recentReleases: 3
createdAt: "2018-08-07T02:25:56Z"
lastCommitAt: "2026-08-28T14:30:38Z"
lastReleaseAt: "2026-07-16T03:53:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 42
maintainers: ["raineorshine", "Copilot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc8ea02c3173cc6cf4a6d7b6540a01a9f3084f0a7a26def2b6da502f8764c623/cybersemics/em"
discussionCount: 14
---

# em

**em** is a beautiful, minimalistic note-taking app for personal sensemaking.

- **cognitively-informed** - Supports focus, nonlinearity, and associative connectivity.
- **process-oriented** - Facilitates flow and organic thinking.
- **semiotic** - Mediates concept through a monistic, contextual semiotic web.

## Documentation

- [Overview](https://github.com/cybersemics/em/wiki/Docs) - An overview of the architecture, data structures, and tips for contributors.
- [Roadmap](https://github.com/cybersemics/em/wiki/Roadmap) - A high-level overview of the project, including vision and objectives.

## Setup

Install dependencies:

```
yarn
```

Start the dev server for local development:

```sh
yarn start
```

## Testing

There are two testing scripts:

- `yarn test` - Unit tests covering Redux actions, reducers, util, components with react-testing-library on JSDOM.
- `yarn test:puppeteer` - Puppeteer tests will test realistic user behavior against a headless Chrome instance. Requires Docker for platform-independent execution.

### Windows

You will need the Bash CLI on your system to run the Puppeteer tests on Windows.

There are two ways to run bash on Windows:

- Windows…
