---
repo: "AnIT012/nihongo"
name: "nihongo"
description: "An agent skill that makes Japanese written by AI closer to text written by people. Usable with Claude, ChatGPT, Claude Code, Codex, and others."
originalDescription: "AIが書く日本語を、人が書く文に近づけるエージェントスキル。Claude、ChatGPT、Claude Code、Codexなどで使えます。"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/AnIT012/nihongo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 181
forks: 6
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-16T17:41:03Z"
lastCommitAt: "2026-11-18T12:01:22Z"
status: "newborn"
tags: []
healthScore: 97
undervaluedScore: 29
maintainers: ["claude", "AnIT012", "AMZ-jpcslr"]
openGraphImageUrl: "https://opengraph.githubassets.com/902c4ebf1d1755bab7def8f1023649b55600fd12063ddfca253914a1bf900a2e/AnIT012/nihongo"
---

# nihongo

In fact, this README was entirely written by an AI with nihongo installed. Not a single character was corrected by a human, so if you notice anything that feels AI-like, please tell us in an Issue!

nihongo is an agent skill that makes Japanese written by AI closer to text written by people.

- **Personal**: Not only removes AI-like feel, but also lets your own personality come through
- **Lite**: A mode that applies from the point of generation, not just revision
- **Full**: A mode that writes differently for each purpose, from emails to ES (entry sheets), technical books, articles, and documents
- **Full推敲**: A mode that proofreads existing text without changing its meaning

In all of them, reasons, impressions, and promises that were not requested are not written, and numbers, dates, and who does what are not changed.

## Try it first (Claude Code)

```
npx skills add AnIT012/nihongo -g -a claude-code
echo '@~/.claude/skills/nihongo/ALWAYS.md' >> ~/.claude/CLAUDE.md
```

The first line installs the skill, and the second makes Lite load every time. For how to install in other environments, see [Installation](#インストール).
