---
repo: "b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0/MMRemover"
name: "MMRemover"
description: "A tool for cleaning Minecraft plugins of hacks"
originalDescription: "Прога для очистки плагинов майнкрафт от хаков"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0/MMRemover"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-25T05:20:59Z"
lastCommitAt: "2026-11-02T15:17:30Z"
lastReleaseAt: "2026-06-30T06:35:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 39
maintainers: ["b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6906ab61691af09ef475d82e4a32d533e46869a5fcf79260d2ab3758bfc6c05/b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0/MMRemover"
---

# MMRemover

**Minecraft Malware Remover** — a program for automatically removing viruses from Minecraft plugins.

**Malware domains to ban at the hosting provider:** the current list is at [b0b0b0.dev/vb.json](https://b0b0b0.dev/vb.json) (JSON, can be parsed automatically). Some of the domains are already dead, but blocking them at DNS is still worthwhile.

## Removes

- Hostflow
- Артёмка
- bStats.jar
- PluginMetrics.jar
- aph
- ChbkHack
- ruBstatsHack (`ru/bstats`, `me/bstats` + `bstats.xyz`)
- **SystemMetrics** (`panel.bstats.co`)
- **KtoDropper** (`lib/metrics/Boot`, `META-INF/m.bin`, `kto.ultimatebox.fun`)
- **Backdoor in the PAPI extension**: `register()` launches its own class with a fake console, network, and obfuscation. It is detected by behavior, not by class names

## SystemMetrics — junk and `panel.bstats.co`

The JAR embeds a fake "bStats": the `SystemMetrics` method downloads a payload from **`panel.bstats.co`** (this is **not** the real bStats) and calls `onEnableInj`. MMRemover finds and removes it.

But there is a nuance worth knowing in advance.

The **SystemMetrics** virus (`panel.bstats.co`) embeds itself into the plugin's main class — for example,…
