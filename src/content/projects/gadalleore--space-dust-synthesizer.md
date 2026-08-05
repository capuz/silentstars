---
repo: "gadalleore/Space_Dust_Synthesizer"
name: "Space_Dust_Synthesizer"
description: "A simple subtractive music keyboard synthesizer with filters, effects, and character."
readmeQualityOk: true
url: "https://github.com/gadalleore/Space_Dust_Synthesizer"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["music", "synthesizer", "vst-plugin", "vst3", "vstplugin", "audio-unit", "standalone"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-28T23:48:43Z"
lastCommitAt: "2026-08-05T06:06:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["gadalleore", "Giuseppe-Dalle-Ore", "jwang47"]
openGraphImageUrl: "https://opengraph.githubassets.com/96ffa178dc99f85668221e2671f2632300175fc33699b48328de46008ef2340e/gadalleore/Space_Dust_Synthesizer"
---

# Space Dust - JUCE Synthesizer Plugin

A pure CMake-based polyphonic synthesizer built with JUCE 8, shipping as a VST3 plugin, an Audio Unit (AU), and a standalone app. Cosmic particles of sound.

**Repository:** [github.com/gadalleore/Space_Dust_Synthesizer](https://github.com/gadalleore/Space_Dust_Synthesizer)

```bash
git clone https://github.com/gadalleore/Space_Dust_Synthesizer.git
cd Space_Dust_Synthesizer
```

**Known Good With:** Ableton Live 10, 11, and 12 (heavily tested for stability as of 2026).

## Versions and branches

Two versions of Space Dust are maintained side by side in this one repository, on
separate branches. Neither is abandoned — pick the branch for the version you mean
to work on.

| Branch | Version | Product name | Status |
|---|---|---|---|
| `main` | 2.0.0 | **Space Dust V2** | In development. Installs alongside V1 rather than replacing it — different product name, different preset folder. |
| `v1-maintenance` | 1.0.18 | **Space Dust** | The released version, in the wild. Still maintained: fixes for shipped users land here. |

Because the two install under different names, both can be loaded in the same
project at once, which is what makes it safe…
