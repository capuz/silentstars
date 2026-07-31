---
repo: "erwins-enkel/shepherd"
name: "shepherd"
description: "Shepherd — self-hosted mission control for interactive Claude Code (herdr + Bun + SvelteKit)"
readmeQualityOk: true
url: "https://github.com/erwins-enkel/shepherd"
homepage: "https://shepherd.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 12
forks: 1
openIssues: 57
closedIssues: 365
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-30T12:43:48Z"
lastCommitAt: "2026-07-31T06:30:44Z"
lastReleaseAt: "2026-06-03T07:12:46Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["scoop", "kai-osthoff", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a8a2593b69decd99b15e1d3220e45a5602866ef140ccd423e1753c237d7b1de/erwins-enkel/shepherd"
discussionCount: 1
---

# Shepherd

> Self-hosted mission control for **interactive** AI coding CLIs — and opinionated about how
> agent-built software should ship. Spawn, watch, and steer a herd of real `claude` sessions (with
> the Codex CLI in alpha) from your browser or phone, with best-practice guardrails built in. On
> your own server, on your own subscription.

      src="site/public/app-screenshot.webp"
      alt="Shepherd mission-control overview showing an epic with multiple coding-agent sessions, status badges, review state, preview state, and elapsed time."
      width="920"
    >
  </a>
</p>

Shepherd spawns genuine interactive `claude` sessions (and, in alpha, `codex` sessions) in isolated
git worktrees (via [`herdr`](https://herdr.dev), the interactive-pane manager), bridges each PTY to an `xterm.js` pane in
the browser, and lets one operator run many agents in parallel — observing their status and steering
them by typing, exactly like a human at a terminal. Around those sessions it adds the engineering
discipline that parallel agent work otherwise erodes: every plan and PR faces adversarial review,
and nothing merges while behind its base — a stale PR is sent back to its agent to rebase,…
