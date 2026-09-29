---
repo: "loopflowstudio/loopflow"
name: "loopflow"
description: "Arrange LLMs to code in harmony."
readmeQualityOk: true
url: "https://github.com/loopflowstudio/loopflow"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-08T23:52:40Z"
lastCommitAt: "2026-09-29T08:03:45Z"
lastReleaseAt: "2026-03-04T17:27:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: ["jacklionheart", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2634d81b3c0fbea86dddb3d502a06e840ab1bca69ac4b1b116c3da9d9e30874f/loopflowstudio/loopflow"
---

# Loopflow

A software instrument. It doesn't make the software for you. You make the
software through it.

```bash
curl -fsSL https://github.com/loopflowstudio/loopflow/releases/latest/download/install.sh | sh
lf init
```

AI can build a lot of software fast. It can also spend all day going in
circles, and it's hard to tell which is happening. Loopflow keeps track, so
you can see what got done and what still needs you.

Free and open source. Needs [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
or [Codex](https://github.com/openai/codex), which have their own cost.

## More install options

```bash
lf install                  # update to the latest published release, from any directory
lf install schedule         # check at login and weekly (macOS)
lf install schedule daily   # also accepts weekly, hourly, 5min
```

Use `lf rebase` inside a repository to update its checkout.

Requires macOS or Linux and one of
[Claude Code](https://docs.anthropic.com/en/docs/claude-code),
[Codex](https://github.com/openai/codex), or
[OpenCode](https://github.com/anomalyco/opencode). Default install location is
`~/.local/bin` (`LF_INSTALL_DIR` overrides). Or install with cargo:…
