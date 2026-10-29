---
repo: "Illusory-moon/bot-mindscape"
name: "bot-mindscape"
description: "A general-purpose enhancement framework that gives AI bots persistent cognition and seamless immersion. It cures goldfish memory, text-machine feel, and mechanical immersion-breaking."
originalDescription: "为 AI bot 注入持久认知与无缝沉浸的通用增强框架 —— 治金鱼记忆、文字机器、机械出戏"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Illusory-moon/bot-mindscape"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agent", "ai-companion", "astrbot", "chatbot", "llm", "long-term-memory", "napcat", "onebot", "persona", "plugin"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-17T11:24:57Z"
lastCommitAt: "2026-10-29T10:20:44Z"
lastReleaseAt: "2026-09-20T15:50:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["Illusory-moon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fdeb42b33d11bd89cb3035246320220af866f6dd1757c6f099603886f474884/Illusory-moon/bot-mindscape"
---

# bot-mindscape · 心灵景观

> **A general-purpose enhancement framework across four layers: cognition, expression, immersion, and awakening.** It cures goldfish memory, the text-machine feel, mechanical immersion-breaking, and being unresponsive until called.

> **“Tell me one thing that impressed you most three days ago”**
> It can answer, and the answer is **that specific thing**, not a generic pleasantry.

**Other languages:** [English](https://github.com/Illusory-moon/bot-mindscape/blob/HEAD/README_EN.md)

---

## Quick Start

```bash
git clone https://github.com/Illusory-moon/bot-mindscape.git
cd bot-mindscape
pip install -r requirements.txt
cp config/config.example.yaml config/config.yaml
# Edit config.yaml and fill in your bot info
python scripts/run_selfcheck.py    # Self-check the environment (including the redaction scan)
python scripts/config_gui.py       # Generate config
python scripts/build_plugin.py --market   # Build a single-file plugin (required before installing into AstrBot)
```

> **Two management interfaces to choose from:**
> - Desktop: `python scripts/config_gui.py` (tkinter, standard library only)
>   ⚠️ You still need `pip install -r requirements.txt` (PyYAML…
