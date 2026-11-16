---
repo: "edonadei/caliper"
name: "caliper"
description: "Run your real agent with and without your skills, MCPs, and rules. See which ones actually help, and what they cost in tokens. Supports Claude Code, Codex, Pi, Hermes, Antigravity, and OpenCode."
readmeQualityOk: true
url: "https://github.com/edonadei/caliper"
homepage: "https://deepwiki.com/edonadei/caliper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "cli", "codex", "evals", "skills", "pi", "evaluation", "reliability", "hermes"]
stars: 235
forks: 26
openIssues: 13
closedIssues: 103
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-05-13T02:48:44Z"
lastCommitAt: "2026-11-16T04:28:35Z"
lastReleaseAt: "2026-07-05T20:21:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 97
undervaluedScore: 30
maintainers: ["edonadei"]
openGraphImageUrl: "https://opengraph.githubassets.com/af66f568a22de2f56208e8ba7f65220f8c2a2b7fa0b29df89e85697e12d67264/edonadei/caliper"
---

Your skill worked when you tried it. Will it work the next nine times?<br>
After the next model update? When another skill competes for the same prompt?

## What it measures

Every attempt installs your skill where the agent looks for it, never pasted
into the prompt, in a fresh home with an empty working directory. Then Caliper
answers the questions a single try can't:

| You want to know | How Caliper answers |
| --- | --- |
| Does it work every time, not just once? | Runs each task k times and leads with the single-run **success rate**. `pass@k` flatters flaky skills, so it comes second. |
| Does the agent even pick it? | **Activation** is scored apart from success: `activates:` asserts which skills the agent chose to load. |
| Does it lose prompts to a neighbour? | Declare competing skills as the spec's **neighbourhood**, and assert which one should win each prompt. |
| Is it earning its context? | `--ablate` re-runs without the skill. Same score? The skill isn't doing the work. |
| Does it hold on another agent? | One spec runs on Claude Code, Codex, Pi, Hermes, Antigravity or OpenCode. You pick the engine at run time. |

## Quick start

**Let your agent build the eval.**…
