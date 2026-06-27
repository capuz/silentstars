---
repo: "adindamochamad/omnibridge"
name: "omnibridge"
description: "An AI agent that identifies legacy serial device protocols autonomously. Built for Claude Opus 4.7 Hackathon 2026."
url: "https://github.com/adindamochamad/omnibridge"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [60, 33]
topics: ["ai-agent", "arduino", "claude", "hackathon", "industrial-iot", "legacy-hardware", "modbus", "opus-4-7", "serial-port", "tauri"]
stars: 42
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-04-23T15:22:28Z"
lastCommitAt: "2026-06-27T06:22:33Z"
lastReleaseAt: "2026-06-02T07:42:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 19
maintainers: ["adindamochamad"]
openGraphImageUrl: "https://opengraph.githubassets.com/20dff8c8619653ea50c6d10915acbdbd8322ad48b4641d82cd365ee8e568199c/adindamochamad/omnibridge"
---

# ⬡ OmniBridge

### **An AI agent category that didn't exist a year ago.**

OmniBridge identifies any legacy serial device protocol — binary, undocumented, proprietary — in under a minute. It is what industrial integration looks like once models can reason about raw bytes.

*Built for the Claude Opus 4.7 Hackathon 2026 · Problem Statement: **Build For What's Next***

**[▶ Watch the 2-minute demo](https://youtu.be/RX-uGdIQLLU)**

</div>

---

## Why this exists

I work as a backend engineer on IoT systems, including industrial weighing scales (*timbangan*). I have shipped the kind of custom parser OmniBridge replaces — spent days reverse-engineering vendor protocols that didn't match their own documentation, written glue code nobody else will ever touch. The legacy-hardware integration tax is real and I have paid it.

But this is not a tool just for industrial engineers. The day I first got OmniBridge working on a Modbus PLC demo, I realized the same thirty-second flow would work on:

- Any **Arduino project** that talks over Serial
- Any **scientific instrument** with a serial data port (oscilloscopes, spectrometers, bioreactors)
- Any **vintage device** from the RS-232 era still…
