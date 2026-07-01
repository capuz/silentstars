---
repo: "ffroliva/gflow-cli"
name: "gflow-cli"
description: "Unofficial CLI for Google Flow — drive Veo I2V from the terminal. For Ultra/Pro subscribers who want to use their Flow credits efficiently via batch automation instead of the web UI."
url: "https://github.com/ffroliva/gflow-cli"
homepage: "https://github.com/ffroliva/flow-cli"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 54
forks: 18
openIssues: 5
closedIssues: 42
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-05-09T15:05:54Z"
lastCommitAt: "2026-07-01T07:05:24Z"
lastReleaseAt: "2026-05-20T14:38:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 47
maintainers: ["ffroliva", "C1ph3r404", "gunalak"]
openGraphImageUrl: "https://opengraph.githubassets.com/f42ae826df9c35b13812f3d11d09e85508af967cdfe83ce0e532de3d88a04b36/ffroliva/gflow-cli"
discussionCount: 1
---

# gflow-cli

> Unofficial Python CLI for Google Flow. Drive [Veo](https://labs.google/fx/tools/flow) (image-to-video, text-to-video) and Imagen (text-to-image) from your terminal: scripted, batched, pipeline-ready.

> ⚠️ **Unofficial, reverse-engineered, not affiliated with Google.** Endpoints can change without notice. Read the full [DISCLAIMER](DISCLAIMER.md).
>
> 🌐 **Headed browser today.** gflow drives Flow through a persistent Playwright Chromium profile, because Google's auth and reCAPTCHA gates require it. The [Architecture](#architecture--current-limitations) section shows where you can help.

## Why gflow-cli?

You pay for Google AI Ultra or Pro, you have Veo credits, and you run real batch work. gflow-cli gives you:

- **Batch generation.** Loop prompts straight from the shell: `for p in $(cat prompts.txt); do gflow image t2i "$p"; done`. Image batching plus `gflow video t2v` / `i2v` / `r2v` all ship today.
- **Consistent subjects.** `gflow character create` mints a Flow Character (face and body reference) so the same person appears from one generation to the next.
- **Prompt tools.** `--tool creative-director` rewrites a terse prompt into a vivid one (Google's…
