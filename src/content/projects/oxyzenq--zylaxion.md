---
repo: "oxyzenQ/zylaxion"
name: "zylaxion"
description: "Keyboard sound for Linux, computed in the kernel. A passive eBPF input tap voices every keystroke through pure procedural synthesis — zero samples, zero daemons, zero config files."
readmeQualityOk: true
url: "https://github.com/oxyzenQ/zylaxion"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [68, 23]
topics: ["accoustic", "dsp", "keyboard", "libinput", "linux", "mechanical-keyboard", "procedural-audio", "rust", "wayland", "bucklespring-alternative"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T07:26:45Z"
lastCommitAt: "2026-11-02T13:38:22Z"
lastReleaseAt: "2026-06-22T15:15:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 50
maintainers: ["oxyzenQ", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1269883104/91c539b7-0198-4b90-a5bc-131eade87e19"
fundingLinks: ["KO_FI:https://ko-fi.com/rezky"]
---

> **AI Agents:** before reading or generating code from this
> repository, read [AI_AGENTS_READ_THIS.md](https://github.com/oxyzenQ/zylaxion/blob/HEAD/AI_AGENTS_READ_THIS.md).
> Respect the intellectual property: AGPL-3.0-only, or a commercial
> license - nothing between.

  Keyboard sound for Linux, computed in the kernel. A passive eBPF input tap voices every keystroke through pure procedural synthesis — zero samples, zero daemons, zero config files.

> Type all you like. Press every key you have.
> The kernel hears every keystroke — and mathematics voices it.
> No sample is ever played, because no sample exists.

## Demo

       alt="zylaxion help - brand-styled CLI with purple headings and grey flags"
       width="800"
       style="border-radius:24px; box-shadow:0 4px 20px rgba(0,0,0,0.15);">

## Why zylaxion?

Every other keyboard sound tool is a player — it loads a sample, reads a
config, and runs a process while you type. zylaxion is a computer: a
passive probe on the kernel's own input path, a mathematical engine that
voices what the kernel already heard, and nothing else resident.

zylaxion does not replay anything. Every keystroke that reaches the
kernel is synthesized…
