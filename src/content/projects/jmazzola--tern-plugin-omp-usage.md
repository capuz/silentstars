---
repo: "jmazzola/tern-plugin-omp-usage"
name: "tern-plugin-omp-usage"
description: "Tern plugin: omp usage limits above the omp composer context bar"
readmeQualityOk: true
url: "https://github.com/jmazzola/tern-plugin-omp-usage"
language: "Luau"
languages: ["Luau"]
languagePcts: [90]
topics: ["oh-my-pi", "oh-my-pi-extension", "omp", "tern", "tern-plugin"]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-10-12T01:12:12Z"
lastCommitAt: "2026-11-15T08:18:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 47
maintainers: ["jmazzola", "zyhp", "coredump"]
openGraphImageUrl: "https://opengraph.githubassets.com/9411756c92870554f5cf2de1911d7180a96cc584f7484c09f3d1ceffafe55e02/jmazzola/tern-plugin-omp-usage"
---

# tern-plugin-omp-usage

Your omp usage limits, just above the omp composer's context bar in [Tern](https://stencil.so/tern):

In the Spine chat style it sits just below the bar instead, on the composer's column, clear of omp's working status:

Hover it for each window's meter, reset time and saved resets:

- **Follows your model.** Shows the active model's provider (anything `omp usage` reports: Claude, Codex, Kimi,
  Gemini, Muse Code, …) and switches within ~2 s of Alt+P, or to a subagent's model while you view its transcript.
  New providers and windows show up without changes here.
- **Or every provider**, or the ones you pick, in your order.
- **Several accounts** for one provider: all of them, each named once (`Claude dev.ops 5H … · a.k.chen 5H …`) in
  your order, only the one you pick (the others summed up in the card), or **combined**: one set of windows, each
  window's share their average and their saved resets added up, or **by plan**, the accounts with the same windows
  together. Switch any account off to leave it out. Accounts go by the part of their email before the `@`; seats that share it add their domain
  (`claude-team@lumen`, `claude-team@pinegg`).
- **A card…
