---
repo: "pym96/Pan-agent"
name: "Pan-agent"
description: "A replayable, recoverable, and general harness for autonomous agents."
readmeQualityOk: true
url: "https://github.com/pym96/Pan-agent"
homepage: "https://pym96.github.io/Pan-agent/"
language: "Python"
languages: ["Python", "TypeScript", "JavaScript"]
languagePcts: [51, 22, 22]
stars: 13
forks: 0
openIssues: 24
closedIssues: 100
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-08-11T11:26:58Z"
lastCommitAt: "2026-10-15T08:08:57Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 95
undervaluedScore: 47
maintainers: ["pym96"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c41c9c4847bdd14f69b5023ce1f093f1bf15155917ebb49472eabe85da8e1c3/pym96/Pan-agent"
---

# Pan Agent

A terminal agent for working with local files and shell commands. Watch tool calls, approve operations, and replay saved runs without calling the model or executing tools again.

## Requirements

- Node.js **22.19.0 or newer**, with npm.
- An interactive terminal. Validated on macOS arm64; Linux and Windows are not yet verified for this release.
- For real tasks: a DeepSeek or Kimi Code API key. The offline demo requires no key.

The installed runtime needs no Python, Go, Docker, PostgreSQL, Redis or TypeScript compiler.

## Install

Release downloads are **pending review and license selection**. Until published, build from this repository:

```sh
git clone https://github.com/pym96/Pan-agent.git
cd Pan-agent
npm --prefix typescript ci --ignore-scripts
mkdir -p artifacts
(cd typescript && npm pack --pack-destination ../artifacts)
mkdir -p consumer
cd consumer
npm install ../artifacts/pan-agent-0.1.0.tgz --omit=dev --ignore-scripts --no-audit --no-fund
./node_modules/.bin/pan-agent --help
```

Once the `.tgz` is available in Releases, install that downloaded file with the same `npm install` command. No build is needed for a prebuilt package. The package is not published…
