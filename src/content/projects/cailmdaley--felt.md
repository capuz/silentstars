---
repo: "cailmdaley/felt"
name: "felt"
description: "Directory-contained markdown fibers with YAML frontmatter and wikilinks. A lightweight substrate for accumulating context — decisions, claims, tasks, questions, specs — and keeping it searchable, connected, and round-trippable through whatever tooling layers on top."
readmeQualityOk: true
url: "https://github.com/cailmdaley/felt"
language: "Elixir"
languages: ["Elixir", "TypeScript", "Go"]
languagePcts: [33, 30, 27]
stars: 8
forks: 0
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-13T09:02:09Z"
lastCommitAt: "2026-11-01T22:55:48Z"
lastReleaseAt: "2026-05-03T17:38:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["cailmdaley"]
openGraphImageUrl: "https://opengraph.githubassets.com/486d00258fde4710b9647d55e25a49048e33f4d378ded4d9bbbf4452ba016f03/cailmdaley/felt"
---

# felt

**[Documentation](https://cailmdaley.github.io/felt/)**

When work spans several days or coding-agent sessions, decisions and unfinished tasks can disappear into chat transcripts.
**felt** keeps them in Markdown files beside your project, with a command-line tool for recording, searching, and connecting them.
You and your agents read and write the same notes; Git keeps their history.

## Set up with your agent

**Shuttle** is the optional task board that launches agents and follows their work.
We recommend asking your existing agent to help you set it up.
Give it this prompt:

```text
Read https://cailmdaley.github.io/felt/shuttle/agent-setup/ and help me set up Shuttle. Record this setup as a task on the board, and give me the board URL when it is ready.
```

The [setup guide](https://cailmdaley.github.io/felt/shuttle/setup/) explains what to expect.
To use felt for notes on its own, follow the commands below.

## Keep project notes

Each note is called a **fiber**.
It can hold a task, a question, a decision, a finding, or a project specification.
A fiber lives in its own directory under `.felt/`, with metadata above its Markdown body:

```markdown
---
name: Choose a…
