---
repo: "stamparm/thebleep"
name: "thebleep"
description: "Corrects your shell command before it runs, or after it fails. Explains itself, learns from you, works with coding agents. Successor to The Fuck."
readmeQualityOk: true
url: "https://github.com/stamparm/thebleep"
homepage: "https://www.sekuripy.hr/labs/thebleep/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bash", "developer-tools", "fish", "powershell", "thefuck", "thefuck-alternatives", "zsh", "autocorrect", "claude-code", "cli"]
stars: 28
forks: 5
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 4
recentReleases: 7
createdAt: "2026-08-17T20:09:01Z"
lastCommitAt: "2026-10-30T11:02:42Z"
lastReleaseAt: "2026-10-30T09:25:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 52
maintainers: ["stamparm", "github-actions[bot]", "LeonFedotov"]
openGraphImageUrl: "https://opengraph.githubassets.com/75535f02fe3aff17b46069fbf54ccfd0a85366533c81b724dc5b31637cb46d5a/stamparm/thebleep"
---

# The Bleep [][version-link] [][workflow-link] [](LICENSE.md)

Type the command wrong. Type `bleep`. Run the right one.

**[Try it in your browser](https://stamparm.github.io/thebleep/)** — the engine
itself, compiled to WebAssembly, correcting whatever you type at it. Every
answer comes with the confidence, the evidence and the rule that produced it,
and nothing on that page can run anything.

*The Bleep* corrects console commands: the one that just failed and, if you
let it, the one you are about to run. It reads what the tool printed, what
your project declares and what your manual pages say, offers the fix with a
confidence and a reason beside it, and never runs anything you did not see
first. It grew out of [The Fuck](https://github.com/nvbn/thefuck) by Vladimir
Iakovlev and its contributors, whose work stays credited in its history; it
keeps their rules, settings and alias, and [what changed](#for-the-fuck-users)
is at the end.

## Get it

```bash
curl -fsSL https://raw.githubusercontent.com/stamparm/thebleep/master/install.sh | sh
```

That picks up whichever of `uv`, `pipx` or `pip` you already have, and prints
the one line to add to your shell's startup file. Prefer to do…
