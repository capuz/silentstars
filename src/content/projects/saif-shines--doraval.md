---
repo: "saif-shines/doraval"
name: "doraval"
description: "Assesses the agent setup in this project and shows what to fix. Ships and shares that work, including a pocket agent."
readmeQualityOk: true
url: "https://github.com/saif-shines/doraval"
homepage: "https://doraval.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["plugins", "skills", "coding-agents"]
stars: 11
forks: 0
openIssues: 18
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-21T12:09:21Z"
lastCommitAt: "2026-10-08T10:51:10Z"
lastReleaseAt: "2026-06-16T15:04:01Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 94
undervaluedScore: 50
maintainers: ["saif-shines"]
openGraphImageUrl: "https://opengraph.githubassets.com/e927e1568627889e0b8fd10d2c048174bf960ce97b0b27678ba841d0beda46cf/saif-shines/doraval"
---

# doraval

Dora assesses the agent setup in this project and shows what to fix. Dora helps you ship and share that work, including a pocket agent.

`dora` is the command. The package name is `@hacksmith/doraval`.

## Quick start

```sh
npx skills add saif-shines/doraval
dora review --quick skills
```

That add installs four skills: `ask-dora`, `review-with-dora`, `grilling-for-routine`, and `writing-for-routine`.

Pass the folder that holds the skills you ship. A check of `.` also scores test fixtures and can exit 1.

`--quick` checks structure. No API key. Exit `0` clean · `1` issues · `2` could not run.

[agnix](https://github.com/agent-sh/agnix) lints files in the editor. [Promptfoo](https://www.promptfoo.dev/docs/guides/test-agent-skills/) A/B tests a skill with a model. [`skills-ref validate`](https://agentskills.io/specification) only checks the spec. `dora review --quick` reviews the workspace. `dora review --run` runs the skill off, then on.

Run the same check on a pull request:

```yaml
name: dora
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:…
