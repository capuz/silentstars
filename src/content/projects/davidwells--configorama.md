---
repo: "DavidWells/configorama"
name: "configorama"
description: "⚙️ ${variable} support for config files"
readmeQualityOk: true
url: "https://github.com/DavidWells/configorama"
homepage: "https://configorama.netlify.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["wired"]
stars: 25
forks: 2
openIssues: 14
closedIssues: 29
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-09-18T03:36:08Z"
lastCommitAt: "2026-07-05T06:32:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "under_pressure"]
healthScore: 91
undervaluedScore: 61
maintainers: ["DavidWells"]
openGraphImageUrl: "https://opengraph.githubassets.com/a42a9cd8b4e12e0b88f283decac0e78b2151997ca0c4262a6d4194df0d80caa3/DavidWells/configorama"
fundingLinks: ["GITHUB:https://github.com/DavidWells"]
---

# Configorama

Resolve dynamic config values from environment variables, CLI flags, files, git data, expressions, and custom sources. Works with YAML, JSON, TOML, INI, HCL, Markdown, JavaScript, and TypeScript.

```bash
npm install configorama
npx configorama config.yml --stage prod
```

Configorama is a framework-agnostic variable engine for configuration files. Use it to resolve a config at runtime, inspect missing values before resolution, audit risky references, draw dependency graphs, run an interactive setup flow, or emit requirements JSON for agents and automation.

## TL;DR

Deployment configs usually pull values from several places: env vars, CLI flags, local files, generated JavaScript, git metadata, stage-specific maps, and secret stores. Most config parsers stop at parsing, while framework-specific variable systems tend to stay tied to that framework.

Configorama loads a config file, finds variable references, resolves them in dependency order, applies filters/functions, and returns a plain JavaScript object. It can also report what the config needs before resolution.

Common use cases:

| Need | Support | Example |
|---|---|---|
| Resolve values from many sources |…
