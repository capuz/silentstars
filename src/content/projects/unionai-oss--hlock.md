---
repo: "unionai-oss/hlock"
name: "hlock"
description: "Make your agent setup portable. Pin, commit, and sync on a new machine."
readmeQualityOk: true
url: "https://github.com/unionai-oss/hlock"
homepage: "https://docs.hlock.ai"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [70, 29]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-10-16T14:45:01Z"
lastCommitAt: "2026-10-25T02:47:11Z"
lastReleaseAt: "2026-10-24T16:28:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["cosmicbboy", "EngHabu"]
openGraphImageUrl: "https://opengraph.githubassets.com/751dfb545b5e65227bf287757e09a305dea629ca42f7a4dba50e21f1e3925c27/unionai-oss/hlock"
discussionCount: 1
---

# hlock

### Your agent harness<br>made portable.

**Pin your harness, models, MCP servers, skills, and config in<br>a `harness.lock`, version it, and rehydrate it anywhere.**

[**Documentation**](https://docs.hlock.ai/) ·
[Quickstart](https://docs.hlock.ai/getting-started/quickstart/) ·
[CLI reference](https://docs.hlock.ai/reference/cli/) ·
[Design specs](https://github.com/unionai-oss/hlock/tree/main/specs)

---

Your agent is more than a model. It's a harness, MCP servers, skills, and config,
hand-tuned on one machine. `hlock` is the missing harness packaging layer, written in Rust 🦀:
`harness.lock` tracks all of its dependencies, so you can commit it to git and restore
it anywhere. When you're ready, it measures your stack against your own tasks and finds a
better one.

| You know this from package managers | In `hlock` |
|---|---|
| 🔒 `uv.lock` / `Cargo.lock` | **`harness.lock`**: every dependency of your harness, pinned and hashed |
| 📌 `pip freeze` | **`hlock pin`**: record the setup you already have, and re-pin as it grows |
| ✅ `--locked` check | **`hlock check`**: show what changed since the pin |
| 📦 `uv sync` / `npm ci` | **`hlock sync`**: rehydrate the locked…
