---
repo: "ruvnet/LatentMesh"
name: "LatentMesh"
description: "Latent communication fabric for continuously evolving agent collectives — training-free orthogonal alignment of hidden states as a network primitive."
readmeQualityOk: true
url: "https://github.com/ruvnet/LatentMesh"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
stars: 12
forks: 1
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-18T01:18:59Z"
lastCommitAt: "2026-08-28T15:32:01Z"
lastReleaseAt: "2026-08-27T19:59:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 28
maintainers: ["ruvnet", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f7627b96b46bdef1fa24cf2bccabe1f315e5a7bd1d5a71ccd6e88c4559571ac/ruvnet/LatentMesh"
---

# LatentMesh

### A causally-verified latent communication fabric for continuously evolving agent collectives

**[LatentMesh Air Studio](https://latentmesh-air.ruv.chatgpt.site/) · [ADRs](https://github.com/ruvnet/LatentMesh/blob/HEAD/docs/adr) · [The original story](https://ruvnet.github.io/LatentMesh/)**

</div>

---

## In plain language

Today, when one AI agent needs to hand a problem to another, it has to explain its whole train of thought in words first — write it out, send it, have the other agent read and re-parse it. That's slow, and a lot gets lost in translation. LatentMesh asks: what if an agent could hand over its actual "thinking" — the internal numbers a model uses before it turns them into words — directly to another agent, skipping the write-it-out-and-read-it-back step entirely?

The catch is that this can't just be trusted blindly. A connection between two agents earns the right to influence anything only after it passes a test proving it actually made the receiving agent smarter — not just busier. Every claimed connection is checked against five decoys (nothing sent, random noise, the wrong topic, talking to itself, and even the old-fashioned written-out…
