---
repo: "Orenda-Project/rumi-platform"
name: "rumi-platform"
description: "Open-source AI teaching assistant on WhatsApp — classroom coaching, reading assessments, lesson plans, and voice interaction in 9 languages"
readmeQualityOk: true
url: "https://github.com/Orenda-Project/rumi-platform"
homepage: "https://hellorumi.ai"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["ai", "coaching", "edtech", "education", "lesson-plans", "llm", "multilingual", "open-source", "pakistan", "teaching"]
stars: 18
forks: 17
openIssues: 9
closedIssues: 4
watchers: 0
contributors: 13
recentReleases: 8
createdAt: "2026-01-28T04:18:24Z"
lastCommitAt: "2026-10-04T10:02:36Z"
lastReleaseAt: "2026-10-02T20:45:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 65
maintainers: ["hyasin270"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd718e9c3dc9fd55ed40fc2ce68c6de66bebc9619dc3b8369869b25af457d21f/Orenda-Project/rumi-platform"
---

You're not teaching alone.

---

**Rumi gives every teacher a coach in their pocket.** It runs entirely on WhatsApp — the app teachers already
have — and offers classroom coaching on real lessons, reading assessments from a voice note, lesson plans,
curriculum quizzes, and professional development, in the teacher's own language, 24 hours a day.

It is built to be **cloned and run by anyone**. Bring your own API keys, point it at a WhatsApp number, and
you have a teaching assistant for your schools — no commissioning, no vendor, no lock-in.

---

## Quick Start

```bash
# 1. Fork this repo on GitHub, then clone YOUR fork
git clone https://github.com/YOUR-ORG/rumi-platform.git
cd rumi-platform

# 2. Install — tools, dependencies, and the `rumi` command
./install.sh

# 3. Connect Rumi to your accounts — guided, one question at a time
rumi setup

# 4. Start it
rumi start
```

Then message the number Rumi linked and send **`Hi`**.

**About fifteen minutes**, most of it waiting for a Supabase project to start. `rumi setup` asks in plain
language rather than by variable name ("where should Rumi keep its memory", not `SUPABASE_URL`), checks every
value against the real service as you type…
