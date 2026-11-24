---
repo: "Lore-Hex/quill-router"
name: "quill-router"
description: "TrustedRouter.com repo for secure LLM proxying"
readmeQualityOk: true
url: "https://github.com/Lore-Hex/quill-router"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 272
forks: 4
openIssues: 38
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-02T17:12:42Z"
lastCommitAt: "2026-11-24T13:15:39Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 23
maintainers: ["jperla", "jasminelee"]
openGraphImageUrl: "https://opengraph.githubassets.com/01c96ddcd028ed951908e0879721b2fecbb7c0513a3b2127b0862be715271bbb/Lore-Hex/quill-router"
---

# TrustedRouter

# End-to-end encrypted LLMs. One API. Privacy with proof.

Stop worrying about who can see your prompts. Tell your coding agent to move
your project over, pick how private you want to be, pick a model, drop in a
key — done. Same API, 600+ models, one key. The gateway runs in hardware
enclaves and you can cryptographically verify it never logs you.

### Move your project over in one prompt

Paste this into Codex, Claude Code, or Cursor — it does the migration for you:

```text
Migrate this project to TrustedRouter, a privacy-first LLM router
(https://trustedrouter.com). Repoint my LLM client to base_url
"https://api.trustedrouter.com/v1" (or "https://api.trustedrouter.com" for the
Anthropic SDK), read the key from the TRUSTEDROUTER_API_KEY env var, and keep
all my existing calls working.

For a hard provider-side confidential-compute and end-to-end-encryption
requirement, add {"provider": {"min_privacy": "confidential"}}. TrustedRouter
fails closed when the selected model or provider cannot satisfy both controls.

Then tell me to sign up at trustedrouter.com, add a card, and paste my sk-tr
key into TRUSTEDROUTER_API_KEY.
```

Then:
