---
repo: "xujialiu/Zotero-TTS"
name: "Zotero-TTS"
description: "Enhances Zotero 10's Read Aloud: more voices, word and sentence highlighting at once in your own colors, speed and navigation shortcuts, one voice across documents, settings backup and reading-position sync through WebDAV."
readmeQualityOk: true
url: "https://github.com/xujialiu/Zotero-TTS"
homepage: "https://github.com/xujialiu/Zotero-TTS/releases/latest"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["accessibility", "azure-speech", "kokoro", "openai", "read-aloud", "text-to-speech", "tts", "zotero", "zotero-plugin", "zotero-addon"]
stars: 15
forks: 1
openIssues: 6
closedIssues: 67
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-22T16:25:57Z"
lastCommitAt: "2026-09-08T08:16:44Z"
lastReleaseAt: "2026-08-23T10:28:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 57
maintainers: ["xujialiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/92f37ce3c08699a1ed358c5fee3436e566e7692e1adef04f0fd7774d0a800d0a/xujialiu/Zotero-TTS"
fundingLinks: ["GITHUB:https://github.com/xujialiu", "BUY_ME_A_COFFEE:https://buymeacoffee.com/xujialiu"]
discussionCount: 0
---

<h1 align="center">Zotero-TTS</h1>

</p>

## What it adds

Zotero 10 already reads aloud, and this plugin does not replace its player —
it adds voices to the player's **Local** tier and tunes what is around them.
[Why it is built this way](https://github.com/xujialiu/Zotero-TTS/blob/HEAD/PHILOSOPHY.md).

- 🗣️ **More voices in the Local tier** of the Read Aloud player — Azure Speech, Cloudflare Workers AI, a [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI) on your machine, OpenAI or any OpenAI-compatible server. [→ Providers](#providers)
- 🔖 **Resume where you stopped** — close a document, open it again later, press `Shift+Space`, and Read Aloud starts at the sentence you left off on. [→ Resume where you stopped](#resume-where-you-stopped)
- 🎧 **A voice browser** in the settings: every voice by tier and language, a play button for a short sample, hearts for favorites, and a switch to offer only the favorites. [→ Voice browser](#voice-browser)
- ✨ **Word *and* sentence highlighting at once**, in your own colors and opacities — for Zotero's voices too. [→ Highlight](#highlight)
- ⌨️ **Keyboard shortcuts** for speed, volume, jumping by sentence or paragraph, reading from…
