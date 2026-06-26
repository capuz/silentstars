---
repo: "Sma1lboy/kobe"
name: "kobe"
description: "The best terminal IDE for coding agents. kobe reimagines how you work with AI agents — fan out many in parallel, each isolated in its own git worktree, all from one screen. Engine-agnostic: Claude Code, Codex, and more."
url: "https://github.com/Sma1lboy/kobe"
homepage: "https://www.npmjs.com/package/@sma1lboy/kobe"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 78
forks: 4
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-05-09T10:03:04Z"
lastCommitAt: "2026-06-26T23:10:54Z"
lastReleaseAt: "2026-05-11T03:02:43Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 34
maintainers: ["Sma1lboy", "ZHallen122", "NarwhalChen"]
openGraphImageUrl: "https://opengraph.githubassets.com/99cbc4eb3fc50822a969271c2487be34e1528cef662dbe844310b336f069f676/Sma1lboy/kobe"
discussionCount: 5
---

</p>

  <strong>Run parallel coding agents from any terminal.</strong><br/>
  kobe is an SSH-friendly TUI for turning AI coding work into isolated git worktrees and persistent tmux sessions.
</p>

</p>

## A quick look

https://github.com/user-attachments/assets/17947cf2-bd90-41d8-9e56-2b30050f6d08

kobe opens into a tmux workspace with:

- **Tasks** - create, switch, archive, rename, retarget.
- **Engine** - the live AI CLI session.
- **Ops** - changed files, previews, `@file` mentions, PR prompts.
- **Shell** - a normal shell inside the task worktree.

---

## Choose your AI engine

Use **Settings → Engine** to pick which AI CLI kobe should run for a task: `claude`, `codex`, `gemini`, `copilot`, or your own command.

https://github.com/user-attachments/assets/11fcc3e5-7d20-403d-82df-3e5d156d1dba

---

AI agents are useful one at a time. kobe is for when you want five attempts running at once.

```text
Task = git worktree + tmux session + branch
```

Create a task, send it to `claude`, `codex`, or `copilot`, detach, reattach, compare the worktree, keep the good branch, archive the rest. It runs where your code already lives: your laptop, a devbox, a VPS, or any machine you can…
