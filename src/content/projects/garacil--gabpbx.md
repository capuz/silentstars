---
repo: "garacil/gabpbx"
name: "gabpbx"
description: "GABPBX is a fork from asterisk but, with chan_sofia and other features."
readmeQualityOk: true
url: "https://github.com/garacil/gabpbx"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 5
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-30T10:07:01Z"
lastCommitAt: "2026-09-06T08:04:36Z"
lastReleaseAt: "2026-06-28T20:25:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 71
maintainers: ["garacil"]
openGraphImageUrl: "https://opengraph.githubassets.com/b97354281a4ab4664cf4926ee1aa34f07ddaa551b0f8471fd27fa43e98bc2bcb/garacil/gabpbx"
---

# GABPBX

GABPBX is the Germán Aracil Boned PBX: a GPLv2 open-source PBX and telephony toolkit maintained by Germán Luis Aracil Boned <garacilb@gmail.com>.

---

## The basics — a fork of Asterisk

GABPBX is a **fork of Asterisk**, first created in **2008**. It keeps everything that made Asterisk dependable, and concentrates its new engineering where it matters most — the SIP channel.

| You keep | What it means |
| :-- | :-- |
| **The proven Asterisk architecture** | Modules, channels, the PBX core, the scheduler — unchanged. |
| **The same dialplan** | Contexts, extensions, priorities, applications and functions, byte-for-byte familiar. |
| **The same AMI** | The Asterisk Manager Interface and its event/action model. |
| **The same realtime APIs** | `extconfig.conf`, the realtime engines, and the familiar `sippeers` / `sipregs` families. |

Existing Asterisk, Digium and third-party copyright notices and the GPLv2 terms are preserved in the source files where they apply.

---

## GABPBX 1.8.0 — the star is `chan_sofia`

**`chan_sofia` is a complete, modern SIP channel driver built on the battle-tested [Sofia-SIP](https://github.com/garacil/sofia-sip) NUA stack — a true drop-in…
