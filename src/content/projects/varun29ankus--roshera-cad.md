---
repo: "varun29ankuS/Roshera-CAD"
name: "Roshera-CAD"
description: "Agent-native geometry kernel: a Rust B-Rep engine where every operation returns a validity certificate — the kernel cannot lie. AI agents query, build, and verify real mechanical parts."
readmeQualityOk: true
url: "https://github.com/varun29ankuS/Roshera-CAD"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["3d", "ai", "brep", "cad", "computational-geometry", "geometry-kernel", "nurbs", "rust", "ai-cad", "b-rep"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-09T06:39:30Z"
lastCommitAt: "2026-07-16T04:53:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["varun29ankuS"]
openGraphImageUrl: "https://opengraph.githubassets.com/eca7fbf08ddc1e8a51bd655b9a016e31ca0ad0bc30bf25a80d66969d33504c80/varun29ankuS/Roshera-CAD"
---

</p>

<h1 align="center">Roshera</h1>

  An agent runtime for geometry — a native Rust B-Rep kernel with a semantic surface AI can query, reason about, and act on.
  <br />
  <strong>Every operation returns a validity certificate. The kernel cannot lie.</strong>
</p>

</p>

---

</p>

  <em>An agent drives the kernel over the bridge to build real mechanical parts — a revolved rocket thrust chamber and a pair of keyed involute gears — and the kernel certifies each one as a closed, watertight, physically-sound solid.</em>
</p>

---

Roshera is an **agent runtime for geometry**. The product is the kernel and the bridge it exposes: a native Rust B-Rep engine whose primitives, topology, and operations carry enough semantic structure for an LLM to query, reason about, and drive directly. Humans orchestrate; agents execute. The React/Three.js frontend that ships in this repo is one client of that runtime — it talks to the kernel over REST + WebSocket the same way an external agent would.

The differentiator is the readable surface: geometry is not just triangles, it is a queryable model with named features, intent, and history. And every operation an agent runs returns the kernel's…
