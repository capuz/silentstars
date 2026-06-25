---
repo: "Kbediako/codex-termux-pocket"
name: "codex-termux-pocket"
description: "Codex CLI tweaked for Android/Termux (self-update + build version)"
url: "https://github.com/Kbediako/codex-termux-pocket"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["android", "cli", "codex", "codex-cli", "openai", "termux"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 502
recentReleases: 0
createdAt: "2026-01-05T08:45:53Z"
lastCommitAt: "2026-06-25T01:35:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 49
maintainers: ["Kbediako", "jif-oai", "bolinfest"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a7dc97cff0434702efe0b70b876f334cf6ce716e17e27f93ea6cd41658cec8e/Kbediako/codex-termux-pocket"
---

</p>

If you want Codex in your code editor (VS Code, Cursor, Windsurf), <a href="https://developers.openai.com/codex/ide">install in your IDE</a>.<br />
If you want the desktop app experience, run <code>codex app</code> or visit <a href="https://chatgpt.com/codex?app-landing-page=true">the Codex App page</a>.<br />
If you are looking for the <em>cloud-based agent</em> from OpenAI, <strong>Codex Web</strong>, go to <a href="https://chatgpt.com/codex">chatgpt.com/codex</a>.

---

## Android / Termux (this fork)

This fork keeps the mobile update path artifact-first:

- `codex-update-alpha` is the default updater.
- `--mode auto` prefers the upstream ARM64 musl alpha artifact, then a fork-built remote artifact, and only allows a local source retry when `CODEX_TERMUX_ALLOW_SOURCE_FALLBACK=1` is set.
- On this device, that replaced a measured 5997-second failing local Cargo install with a successful remote-artifact install in about 20 minutes.
- The installed `codex` command is a Termux launcher wrapper that bridges DNS and CA bundle paths through `proot` and sets `termux-open-url` for browser-based login flows.
- `codex self-update` still syncs the checkout, but it refuses the broken…
