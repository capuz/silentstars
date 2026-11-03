---
repo: "codacy/codacy-cloud-cli"
name: "codacy-cloud-cli"
description: "A command-line tool to interact with Codacy Cloud directly from your terminal. "
readmeQualityOk: true
url: "https://github.com/codacy/codacy-cloud-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-02-18T13:17:28Z"
lastCommitAt: "2026-11-03T12:47:49Z"
lastReleaseAt: "2026-06-17T14:18:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 62
maintainers: ["alerizzo", "github-actions[bot]", "claudiacodacy"]
openGraphImageUrl: "https://opengraph.githubassets.com/44a7e59d7c3d3d15458c31fc508b78640b561e7da173534590d38bb3129a892c/codacy/codacy-cloud-cli"
---

# Codacy Cloud CLI

A command-line tool to interact with [Codacy Cloud](https://app.codacy.com) directly from your terminal. Built with Node.js and TypeScript.

## Installation

### From npm

```bash
npm install -g "@codacy/codacy-cloud-cli"
```

### From source

```bash
git clone https://github.com/codacy/codacy-cloud-cli.git
cd codacy-cloud-cli
npm install
npm run build
npm link
```

## Authentication

The CLI accepts two kinds of token.

### Account API token

Reaches every organization and repository your account can see. Log in interactively (recommended):

```bash
codacy login
```

Or set the `CODACY_API_TOKEN` environment variable:

```bash
export CODACY_API_TOKEN=your-token-here
```

You can get a token from **Codacy > My Account > Access Management > API Tokens** ([link](https://app.codacy.com/account/access-management)).

The `login` command stores the token encrypted at `~/.codacy/credentials`. The environment variable takes precedence over stored credentials when both are present.

### Repository (project) token

Scoped to a single repository — the right choice for CI, since a leaked token can't reach anything else. Get one from **Codacy > Repository > Settings >…
