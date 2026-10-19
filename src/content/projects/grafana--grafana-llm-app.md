---
repo: "grafana/grafana-llm-app"
name: "grafana-llm-app"
description: "Plugin to easily allow LLM based extensions to grafana"
readmeQualityOk: true
url: "https://github.com/grafana/grafana-llm-app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [49, 48]
stars: 139
forks: 21
openIssues: 28
closedIssues: 80
watchers: 108
contributors: 85
recentReleases: 0
createdAt: "2023-06-06T04:15:35Z"
lastCommitAt: "2026-10-19T09:15:06Z"
lastReleaseAt: "2024-02-22T17:36:31Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 39
maintainers: ["renovate-sh-app[bot]", "gerboland", "sd2k"]
openGraphImageUrl: "https://opengraph.githubassets.com/4299d4a6b8987153f432cbb7a0926b9c7db52d319f527047b987295702dcc7fa/grafana/grafana-llm-app"
---

# LLM Plugin and frontend libraries repo

This repository holds separate packages for Grafana LLM Plugin and the `@grafana/llm` package for interfacing with it.

They are placed into a monorepo because they are tighlty coupled, and should be developed together with identical dependencies where possible.

Each package has its own package.json with its own npm commands, but the intention is that you should be able to run and test both of them from root.

## Contributing

If you're interested in adding support for new LLM providers or extending the functionality of the Grafana LLM App, please see the [CONTRIBUTING.md](https://github.com/grafana/grafana-llm-app/blob/HEAD/CONTRIBUTING.md) file for detailed implementation guidance.

## Developing these packages

### Quickstart

1. Install node >= 22, go >= 1.21, and [Mage](https://magefile.org/).
2. Install docker
3. Run `npm install`
4. Run `npm run dev`
5. In a separate terminal from dev, run `npm run server`
If you want to bring up the vector services, you can run `COMPOSE_PROFILES=vector npm run server` instead

6. Go to (http://localhost:3000/plugins/grafana-llm-app) to see configuration page and the developer sandbox

This will…
