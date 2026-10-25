---
repo: "starlitcode/Lumiverse-Auto-Retry"
name: "Lumiverse-Auto-Retry"
description: "Lumiverse extension that retries a reply when something goes wrong: an error, an empty reply, a stream that stalls, a reply cut off mid-sentence, or a refusal. Every check, phrase and retry note can be read and changed in its settings."
readmeQualityOk: true
url: "https://github.com/starlitcode/Lumiverse-Auto-Retry"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 39]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-08T17:04:25Z"
lastCommitAt: "2026-10-25T08:56:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/037d97e66b6760da0912f74825928ada4e5d193c2bd38f2fa69d1e04843063d1/starlitcode/Lumiverse-Auto-Retry"
---

# Auto Retry

A Lumiverse extension. It re-runs an AI reply when it fails, comes back empty, stalls partway, gets cut off mid-sentence, or refuses by mistake, so you do not have to catch it and press regenerate yourself.

It works alongside [Auto Refine](https://github.com/starlitcode/Lumiverse-Auto-Refine). Auto Retry decides whether a reply is worth keeping. Auto Refine improves the ones that are.

## What it does

It watches each reply and tries again when:

- the provider sends back an error (by default it skips errors that will not go away, like a wrong API key)
- the reply comes back empty, including one that "thinks" but never writes anything
- the thinking or the reply is one character over and over, like `!!!!!!!!` (see [One character over and over](https://github.com/starlitcode/Lumiverse-Auto-Retry/blob/HEAD/docs/detection.md#one-character-over-and-over))
- the thinking or the reply turns into a jumble of words from several languages run together, words with no spaces, or broken characters (see [Garbled replies](https://github.com/starlitcode/Lumiverse-Auto-Retry/blob/HEAD/docs/detection.md#garbled-replies) and [The…
