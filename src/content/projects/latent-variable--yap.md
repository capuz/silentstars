---
repo: "latent-variable/Yap"
name: "Yap"
description: "Local-first two-way voice for your agents on macOS: TTS (mouth) + Parakeet STT (ears), fully on-device."
readmeQualityOk: true
url: "https://github.com/latent-variable/Yap"
language: "Swift"
languages: ["Swift"]
languagePcts: [75]
topics: ["ai-agents", "kokoro", "local-first", "macos", "menu-bar", "on-device", "parakeet", "speech-to-text", "swift", "text-to-speech"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-23T20:41:49Z"
lastCommitAt: "2026-08-22T04:06:19Z"
lastReleaseAt: "2026-07-17T02:30:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 53
maintainers: ["latent-variable"]
openGraphImageUrl: "https://opengraph.githubassets.com/71672e47967d01407073f35e9427ae3d9007f25bd2a710dcc1af0320dbdadedc/latent-variable/Yap"
---

https://github.com/user-attachments/assets/5b9b47f6-a25a-4489-8f23-fbfba03b5969

# Yap

**Talk to your Mac. It talks back. You both yap.**

Your keyboard is slow and your eyes are slower. Give your Mac ears and a voice instead: hold a key and talk, your words type themselves; highlight anything and hear it out loud in a shockingly human voice. Fully local. No cloud, no account, nobody listening but you.

[Install](#install) · [The loop](#the-loop) · [What it does](#what-it-does)

</div>

---

You think faster than you type, and way faster than you read. So stop doing both. **Yap** gives your Mac two things it was missing: **ears** (hold a key, talk, and local [Parakeet](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2) drops your words right where the cursor is) and a **voice** (highlight anything, tap a shortcut, hear it read back in a real [Kokoro](https://github.com/hexgrad/kokoro) or Pocket voice). Until Neuralink wires you straight into your coding agent, this is the shortcut: quit typing *at* your computer, start yapping *with* it.

## Install

The app bundles its own Python — nothing else to install.

**① Homebrew** — easiest, no Gatekeeper prompt.

```bash
brew install…
