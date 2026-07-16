---
repo: "monotykamary/pi-hide-providers"
name: "pi-hide-providers"
description: "Hide providers and models from pi's model selector — filter the /model list and Ctrl+P cycling via a configurable blocklist"
readmeQualityOk: true
url: "https://github.com/monotykamary/pi-hide-providers"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-14T17:39:51Z"
lastCommitAt: "2026-07-16T05:58:33Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 38
maintainers: ["monotykamary"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb4c800ed84dff53f2da04e59f46c6b6cc1183982eefb1647644019282c2da09/monotykamary/pi-hide-providers"
fundingLinks: ["GITHUB:https://github.com/monotykamary", "KO_FI:https://ko-fi.com/monotykamary", "BUY_ME_A_COFFEE:https://buymeacoffee.com/monotykamary", "POLAR:https://polar.sh/monotykamary"]
---

# 🔇 pi-hide-providers

**Hide providers and models from the selector in [pi](https://github.com/earendil-works/pi-coding-agent)**

_Filter the model picker so you only see the models you care about._

</div>

---

## The Problem

Pi's model selector shows **every** available model from every configured provider. If you have Ollama running with 20 local models, or an OpenRouter account with hundreds of options, the model list becomes noisy and slow to navigate. There's no built-in way to say *"I never want to see these providers/models in the selector."*

Pi has `enabledModels` in `settings.json` as an allowlist, but maintaining it manually is tedious — you have to list every model you *do* want, and clobber `settings.json` with hundreds of entries. What you really want is a **blocklist**: *"hide everything from these providers, except the ones I explicitly use."*

## The Solution

`pi-hide-providers` gives you a blocklist that **completely removes** models from all lists — not an allowlist, not a scoped subset:

- Define hide rules in a config file (`~/.pi/agent/hide-providers.json` or `.pi/hide-providers.json`)
- On session start, the extension monkey-patches…
