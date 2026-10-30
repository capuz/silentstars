---
repo: "Kylrix/kylrix"
name: "kylrix"
description: "Zero-knowledge secrets and persistent memory for AI agents."
readmeQualityOk: true
url: "https://github.com/Kylrix/kylrix"
homepage: "https://www.kylrix.space"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["collaboration", "crypto", "degoogle", "forms", "meeting", "messaging", "notes", "password-manager", "privacy", "productivity"]
stars: 14
forks: 5
openIssues: 1
closedIssues: 20
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-23T14:37:20Z"
lastCommitAt: "2026-10-30T11:02:20Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 62
maintainers: ["nathfavour", "google-labs-jules[bot]", "drawmeanelephant"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b61ba86adcc6ba1a1e35fbd592192cc35174c2b0e96d974a50cdf86f7dda71e/Kylrix/kylrix"
fundingLinks: ["CUSTOM:https://www.kylrix.space/sponsor"]
discussionCount: 0
---

Open source · Self-hostable · Local-first · Zero plaintext exposure

---

## 🔐 Zero-Knowledge Secrets & Persistent Agent Memory

Kylrix establishes true zero-knowledge secret access and persistent memory for AI agents (Claude Code, Cursor, AutoGPT, CLI, VS Code, REST API, WebMCP, Discord/Telegram).

### How Agent Enclave Tokens (AET) Work
An agent key looks like `kyl_aet_<8 hex>_<32 b64url>.etk_<64 hex>`. Only the part left of the dot ever reaches the server (it is hashed and used as the bearer credential); `etk_…` is a 32-byte unlock key that stays on your machine.

1. **Client-Side DEK Wrapping**: In **Settings → Developers → Create Token**, enable "Agent key with access to private items". The browser asks you to unlock your vault (MEK/Passkey PRF), generates the `etkSecret`, and re-wraps the DEKs of your chosen vault items and 2FA codes under an HKDF-SHA256 wrapping key (AES-256-GCM, per-entry AAD bound to the row id).
2. **Envelope Storage**: The server stores only the wrapped-DEK envelope in `apikey.metadata.aet` — it **never possesses the MEK or the `etkSecret`**, and the envelope is hidden from all public token listings.
3. **Two Unlock Modes**:
   - *Client-side (default,…
