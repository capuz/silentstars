---
repo: "apimartetccxd5a/vidu-q4-api"
name: "vidu-q4-api"
description: "Vidu Q4 API (`vidu-q4`): model id, pricing, parameters and copy-paste examples for the OpenAI-compatible APIMart endpoint."
readmeQualityOk: true
url: "https://github.com/apimartetccxd5a/vidu-q4-api"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 50
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-12T12:15:09Z"
lastCommitAt: "2026-11-10T14:49:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["apimartetccxd5a"]
openGraphImageUrl: "https://opengraph.githubassets.com/f02496e109d9812845ed34c224856e082a955086edd7212aab73f22502bc5923/apimartetccxd5a/vidu-q4-api"
---

# Vidu Q4 API (`vidu-q4`)

> **per generated second** for 3–16 s clips, up to 4K — one OpenAI-compatible endpoint at `https://api.apimart.ai/v1`, no monthly plan required. *(observed 2026-10-12)*

**[Get an API key](https://go.apimart.ai/k-4bb1f7)** · **[Live pricing](https://go.apimart.ai/k-e87962)** · **[Model page](https://go.apimart.ai/k-83ac6d)** · [⚡ 60-second quickstart](#quickstart)

**Why teams call Vidu Q4 (`vidu-q4`) through APIMart**

- **One key, entire catalog.** The same `https://api.apimart.ai/v1` base URL and `Authorization` header reach Vidu Q4 (`vidu-q4`) and 300+ other image, video and language models — switch the `model` field, not your client.
- **Per-second billing.** A job is charged for the seconds it actually generates at the resolution you picked.
- **The charge comes back in the response.** Every completed task reports the amount billed (`cost` / `credits_cost`); a task marked `failed` is refunded.
- **Async by design.** Submit, take the `task_id`, poll `GET /v1/tasks/{id}` — batching and retries are ordinary queue work, not a bespoke integration.

Vidu Q4 creates 3–16 second videos: animate one first frame or use 1–15 reference images and optional MP3…
