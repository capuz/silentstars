---
repo: "staff0rd/assist"
name: "assist"
description: "A CLI tool for enforcing determinism in LLM development workflow automation."
readmeQualityOk: true
url: "https://github.com/staff0rd/assist"
homepage: "https://staffordwilliams.com/devlog/assist/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 2
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-01T10:36:24Z"
lastCommitAt: "2026-08-05T06:07:25Z"
lastReleaseAt: "2026-01-27T22:27:35Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 64
maintainers: ["staff0rd", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c35565f622b689b76439713811d4ad92677fe73aced300735a2775e810178c99/staff0rd/assist"
---

# assist

A CLI tool for enforcing determinism in LLM development workflow automation.

See [devlog](https://staffordwilliams.com/devlog/assist/) for latest features.

## Installation

You can install `assist` globally using npm:

```bash
npm install -g @staff0rd/assist
assist sync
```

## Updating

```bash
assist update
```

## Local Development

```bash
# Clone the repository
git clone git@github.com:staff0rd/assist.git
cd assist

# Install dependencies
npm install

# Build the project
npm run build

# Install globally
npm install -g .
```

After installation, the `assist` command will be available globally. You can also use the shorter `ast` alias.

## Claude Commands

- `/add-command` - Add a new run command to assist.yml
- `/branch <description> [--jira KEY]` - Create a branch off the fresh remote default, deriving a kebab-case slug from the description
- `/bug` - File a bug with reproduction steps, expected and actual behavior
- `/comment` - Add pending review comments to the current PR
- `/commit` - Commit only relevant files from the session
- `/devlog` - Generate devlog entry for the next unversioned day
- `/draft` - Draft a new backlog item with LLM-assisted questioning…
