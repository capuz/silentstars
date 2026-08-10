---
repo: "SeCherkasov/SkerrySSH"
name: "SkerrySSH"
description: "Open-source cross-platform SSH client (Linux/Windows/MacOS/Android)"
readmeQualityOk: true
url: "https://github.com/SeCherkasov/SkerrySSH"
homepage: "https://skerry.sech.uk"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 7
forks: 1
openIssues: 14
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-06-11T18:09:59Z"
lastCommitAt: "2026-08-10T05:06:06Z"
lastReleaseAt: "2026-08-05T17:56:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 62
maintainers: ["SeCherkasov", "onepve", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e017dccd3267f02e9549c3828055e19a84cf91331c7aaa5442b0a174671f300d/SeCherkasov/SkerrySSH"
discussionCount: 0
---

**English** · [Русский](https://github.com/SeCherkasov/SkerrySSH/blob/HEAD/README.ru.md)

</div>

---

Open-source SSH client with a single core (Kotlin Multiplatform) for every platform:
**Linux · Windows · macOS · Android**.

- **Local-first** — fully functional without an account or external services; sync is optional
  and self-hosted.
- **Zero-knowledge** — vault sealed with Argon2id + XChaCha20-Poly1305; the master password and
  encryption keys never leave the device.
- **AI under policy** — model output is treated as untrusted input: command execution requires
  explicit confirmation; local inference (llama.cpp) rules out outbound traffic.

---

## How Skerry compares

| | Skerry | Termius | PuTTY | Tabby |
|---|---|---|---|---|
| **License** | GPL-3.0 / AGPL-3.0 | proprietary | MIT | MIT |
| **Platforms** | Linux · Windows · macOS · Android | Linux · Windows · macOS · Android · iOS | Windows · Unix | Linux · Windows · macOS |
| **Price** | free | from $10/mo | free | free |
| **Without an account** | ✅ | ⚠️ local only | ✅ | ✅ |
| **Encrypted vault** | ✅ | ✅ | ❌ | ⚠️ opt-in |
| **Sync** | ✅ self-hosted | ✅ vendor cloud | ❌ | ✅ self-hosted |
| **Team sharing** | ✅ | ⚠️ paid…
