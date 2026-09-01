---
repo: "bostonaholic/reflect"
name: "reflect"
description: "An AI tool to generate your brag document"
readmeQualityOk: true
url: "https://github.com/bostonaholic/reflect"
homepage: "https://bostonaholic.github.io/reflect/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "brag-document", "llm", "nodejs"]
stars: 36
forks: 7
openIssues: 9
closedIssues: 14
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2025-03-29T15:36:47Z"
lastCommitAt: "2026-09-01T08:48:17Z"
lastReleaseAt: "2026-08-07T15:19:25Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 59
maintainers: ["dependabot[bot]", "bostonaholic"]
openGraphImageUrl: "https://opengraph.githubassets.com/84ba25d9e31d44c7d20bd76f3194e23398090d860dfd082127b7e832f366795f/bostonaholic/reflect"
discussionCount: 2
---

# Reflect

> [!IMPORTANT]
> While this tool helps document your GitHub
> contributions, it's crucial to remember that
> your impact and value to a company extends far
> beyond what's visible in GitHub. Many critical
> aspects of software engineering - such as
> mentoring, documentation, cross-team
> collaboration, and technical leadership - often
> happen outside of version control. For more on
> this topic, check out
> [Glue Work](https://www.noidea.dog/glue), an
> excellent resource about the often-overlooked
> but essential work that makes teams successful.

## Quickstart 🚀

### Prerequisites ⚙️

1. Install [nodenv](https://github.com/nodenv/nodenv) (preferred) or [nvm](https://github.com/nvm-sh/nvm)
2. Install npm or yarn package manager
3. GitHub Personal Access Token (PAT) with `repo` and `read:org` scopes
4. OpenAI API key (optional, for summary and brag document generation)

### Usage 💻

Set up the development environment:

```bash
dev up
```

This installs Node.js, npm dependencies, and copies
`.env.example` to `.env` if it doesn't exist. Edit
`.env` with your tokens.

Run the tool:

```bash
./reflect --username <github-username> --lookback <months-to-look-back> --brag…
