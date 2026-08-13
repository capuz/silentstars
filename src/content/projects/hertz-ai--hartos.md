---
repo: "hertz-ai/HARTOS"
name: "HARTOS"
description: "An AI-native OS. Models run on your own hardware, nodes federate peer-to-peer with no broker, and the API is OpenAI-compatible. Boots, has its own Wayland compositor, and runs on 8GB. Apache 2.0."
readmeQualityOk: true
url: "https://github.com/hertz-ai/HARTOS"
homepage: "https://docs.hevolve.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["agent-framework", "agentic-ai", "ai-agent", "ai-runtime", "chatbot", "federated-learning", "llm", "local-first", "local-llm", "model-serving"]
stars: 51
forks: 5
openIssues: 23
closedIssues: 2
watchers: 2
contributors: 12
recentReleases: 3
createdAt: "2023-06-19T09:22:33Z"
lastCommitAt: "2026-08-13T05:18:39Z"
lastReleaseAt: "2026-08-13T05:11:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["lawlietlight", "sathi006", "girihz"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccface087cdd81ee6d6c88845c067587032239898c5f18f9231e045537dcd56e/hertz-ai/HARTOS"
discussionCount: 1
---

<h1 align="center">HART OS</h1>

</p>

---

### What it is?

An assistant that runs on your own machine, with no subscription, that works
with the wifi off. What you type stays on the device because there is nowhere
else for it to go, and you can watch the network to check.

8GB of RAM is enough, and on 8GB it is the modest version. Exactly what you
get at which spec is in [Start it](#start-it), because that is where it
matters.

On a hard question a frontier model beats anything that fits on a laptop. Most
of what people ask in a day is not that, and this is for the rest.

Ready today: [Nunba](https://github.com/hertz-ai/Nunba) for Windows, Linux and
Android. This repo is the runtime underneath it: it serves local inference as a
system service, federates peer to peer, and is drivable end to end from
`/v1/chat/completions` or the `hart` CLI.

## Start it

**Just want to use it?** Download
[Nunba](https://github.com/hertz-ai/Nunba/releases/latest): one signed
installer, no Python, and a setup wizard that picks a model for your hardware.
Read the next section anyway, because it is what that wizard is deciding; the
clone-and-pip part further down is the only bit that assumes you are…
