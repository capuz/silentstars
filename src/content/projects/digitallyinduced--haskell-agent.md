---
repo: "digitallyinduced/haskell-agent"
name: "haskell-agent"
description: "an agent harness is just a monoid in the category of endofunctors"
readmeQualityOk: true
url: "https://github.com/digitallyinduced/haskell-agent"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [98]
stars: 21
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-19T20:26:24Z"
lastCommitAt: "2026-09-01T08:51:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 44
maintainers: ["mpscholten"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1339997765/3baaa783-a636-4eb7-ac2a-9eac5b9e23c9"
---

# haskell-agent

An independent agent harness, written in Haskell.

## Try it out

```bash
nix run --accept-flake-config "github:digitallyinduced/haskell-agent"
```

## Supported LLM Providers

- OpenAI (Subscription)
- xAI (Subscription)
- Claude (Subscription)
- OpenRouter (API billing)
- Google Gemini (Google account or AI Studio API billing)

## What is distinctive

Most agent harnesses are effectively untyped imperative programming
environments. A model emits loosely structured commands that mutate files,
processes, conversation state, and other shared resources. Correctness depends
on conventions enforced at runtime, often after effects have already begun.

`haskell-agent` is an exploration in a different direction. Model output is
treated as untrusted input at the boundary. Accepted actions are decoded into
typed values, state changes are expressed as pure transformations where
possible, and effects are interpreted explicitly by the runtime. The model
remains probabilistic; the environment in which its actions execute does not
have to be.

- **A functional agent runtime:** protocol states, tool policies, transport
  ownership, UI transitions, and agent lifecycles are…
