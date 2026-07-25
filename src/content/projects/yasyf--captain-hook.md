---
repo: "yasyf/captain-hook"
name: "captain-hook"
description: "Stop repeating yourself to Claude."
readmeQualityOk: true
url: "https://github.com/yasyf/captain-hook"
homepage: "https://yasyf.github.io/captain-hook/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-02T06:12:26Z"
lastCommitAt: "2026-07-25T06:01:44Z"
lastReleaseAt: "2026-06-10T11:12:03Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 60
maintainers: ["yasyf", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1256838744/e022bfb0-89e6-405c-ab37-9169a51b6100"
---

# 

**Stop repeating yourself to Claude.** captain-hook mines your transcripts for the corrections you keep giving and opens PRs that turn each one into a typed, tested Python hook.

## Get started

```bash
brew install --formula yasyf/tap/captain-hook
uvx capt-hook init
```

The formula deploys the fixed, signed host at `~/Applications/Captain Hook.app`; `init` scaffolds
`.claude/hooks/`, wires Claude Code's settings, and arms the session reviewer. Every event runs
the exact `capt-hook` build the installed app names — nothing resolves "latest" mid-session, and
the app keeps itself current in the background. One `block_command` later, a force-push dies
at `PreToolUse` and the hook's inline tests run green:

Driving with an agent? Paste this:

```text
/plugin marketplace add yasyf/captain-hook
/plugin install captain-hook@captain-hook
```

<details>
<summary>Prefer a prompt over the plugin?</summary>

```text
Install the `yasyf/tap/captain-hook` Homebrew formula, then run `uvx capt-hook init`
in this repo, write one hook that blocks force-pushes,
and verify it with `uvx capt-hook test`. Read https://yasyf.github.io/captain-hook/
if you get stuck.
```

</details>

---

## Use cases…
