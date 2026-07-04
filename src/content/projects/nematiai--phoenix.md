---
repo: "nematiai/phoenix"
name: "phoenix"
description: "Phoenix is a local chatbot that does not require internet access or a GPU. It is free and open-source. "
url: "https://github.com/nematiai/phoenix"
homepage: "https://docs.osllm.ai/"
language: "Dart"
languages: ["Dart", "TypeScript"]
languagePcts: [51, 26]
stars: 6
forks: 1
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2024-05-31T20:25:05Z"
lastCommitAt: "2026-07-04T06:12:31Z"
lastReleaseAt: "2025-03-28T14:14:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 73
maintainers: ["parsanemati84", "nemati-ceo"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a77964a3dfe92bc31439d47e94998621b635c53f4276254cc980eba7f5eabbf/nematiai/phoenix"
---

# Phoenix

### Run large language models **100% on your own machine** — private, offline, yours.

A full-stack, open-source workbench for local LLMs. Flutter desktop UI over a
**llama.cpp** engine, a pure-Dart core SDK, and an optional Django/Celery backend —
no cloud, no API keys, no data leaving your device.

**⭐ If Phoenix is useful to you, [star the repo](https://github.com/osllmai/phoenix) — it genuinely helps.**

</div>

---

<br/><sub><i>Desktop UI — design preview (the app is in active development).</i></sub>
</div>

## Why Phoenix?

- 🔒 **Truly private** — inference runs on-device in `phoenix_core` + `engine/`. The backend **never** runs an LLM. Your prompts never leave the machine.
- ⚡ **Local-first, cloud-optional** — works fully offline; an optional gateway speaks OpenAI `/v1/chat/completions` + Anthropic `/v1/messages` so existing tools just point at `localhost`.
- 🧩 **Extensible by design** — features load as self-registering modules (`FeatureModule`); add one file, not a monolithic rewrite.
- 📦 **GGUF model catalog** — import `.gguf` files from disk, load/switch/remove, favorites — all managed on-device.
- 🛠️ **One core, many surfaces** — a single pure-Dart SDK…
