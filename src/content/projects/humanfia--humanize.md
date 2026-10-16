---
repo: "humanfia/humanize"
name: "humanize"
description: "The agent flow system for token maxxing."
readmeQualityOk: true
url: "https://github.com/humanfia/humanize"
homepage: "https://docs.humanfia.ai/humanize/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent", "harness", "system", "flow", "infra", "workflow", "ai-agents", "claude-code", "codex", "coding-agents"]
stars: 311
forks: 32
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 14
recentReleases: 6
createdAt: "2026-07-24T00:15:19Z"
lastCommitAt: "2026-10-16T08:20:42Z"
lastReleaseAt: "2026-10-14T09:37:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 33
maintainers: ["futrime", "antoinegg1", "SihaoLiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3b67eb998a878f3d4a1b7ac654d11a3aee56399f1aa9096a98363ec06814e67/humanfia/humanize"
---

# humanize _(hmz)_

The agent flow system for token maxxing.

## Install

Needs Python 3.12 or newer, [uv](https://docs.astral.sh/uv/), and a coding agent CLI you are
signed in to, such as Claude Code or Codex.

```sh
uv tool install hmz
```

Three backends need a package of their own: `[dsh]` for DeepSeek Harness, `[kimi]` for Kimi
Code, `[litellm]` for a model called directly -- or most CLIs run through litellm, as any
account it can reach -- `[all]` for all three.

```sh
uv tool install 'hmz[all]'
```

`hmz update` moves it to the newest release, keeping the extras it was installed with.

### Desktop app

On macOS, `humanize-<version>-macos-universal.dmg` from the
[latest release](https://github.com/humanfia/humanize/releases/latest) puts `hmz web` in a
window of its own: drag humanize to Applications. It runs the `hmz` installed above. The
[guide](https://docs.humanfia.ai/humanize/user/desktop) says how to open it the first time.

## Usage

Open the terminal interface in a repository:

```sh
hmz
```

Or open every epic on this machine in a browser:

```sh
hmz web
```

Or run a flow from your shell:

```sh
hmz exec -f chat -a assistant=claude/claude-opus-5:high "What does this…
