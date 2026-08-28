---
repo: "reactor-team/reactor-runtime"
name: "reactor-runtime"
description: "The Runtime for Real-Time"
readmeQualityOk: true
url: "https://github.com/reactor-team/reactor-runtime"
homepage: "https://www.reactor.inc/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 10
createdAt: "2026-05-20T10:13:40Z"
lastCommitAt: "2026-08-28T14:36:17Z"
lastReleaseAt: "2026-07-30T09:26:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 70
maintainers: ["Dere-Wah", "douglaseel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccd519b771cdd7c9d48c78c1dbf727b28dfd7ff67c93dae1a2d6c91bac83a2f9/reactor-team/reactor-runtime"
---

**Build real-time AI models in Python.**

[📖 Documentation](https://docs.reactor.inc/deploy/overview) · [🚀 Quickstart](https://docs.reactor.inc/deploy/development/overview) · [🌐 Reactor](https://reactor.inc)

</div>

---

Reactor Runtime turns an inference pipeline into a real-time, interactive media and data stream. You write `load()` and `run()`; the runtime handles the session lifecycle, the WebRTC media transport, and the wire protocol that connects clients to your model. Viewers watch frames as they are generated and change what the model is doing mid-stream, with no restart and no re-queue.

## Highlights

- 📡 **Real-time streaming.** Frames reach clients over WebRTC as your model produces them, not after a whole video is done. `emit()` paces your loop to the rate clients play at, so a model needs no rate limiter of its own.
- 🎮 **Live interaction.** Clients send commands mid-generation: change a prompt, move a camera, adjust a parameter. The next frame reflects it.
- 🔌 **No transport code.** You never import a WebRTC library, manage a WebSocket, or encode video. The runtime ships its own media engine as a wheel, so a plain Python container is all a model needs.
- ✅…
