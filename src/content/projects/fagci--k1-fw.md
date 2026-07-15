---
repo: "fagci/k1-fw"
name: "k1-fw"
description: "Firmware for K1 and K5/v3"
readmeQualityOk: true
url: "https://github.com/fagci/k1-fw"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-12-08T14:11:46Z"
lastCommitAt: "2026-07-15T05:54:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 48
maintainers: ["fagci", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/40e10062cea45335b7a2d42dde128af89717fbefbffe99c998dd351d04504c2d/fagci/k1-fw"
---

# K1 & K5/v3 FW

## Build

### FW

```sh
make clean && make release
```

### k5prog

```sh
g++ k5prog.c -o k5prog
```

## Flash

```sh 
python3 flash.py ./bin/firmware.bin -p /dev/ttyUSB0    
```

## Credits

[Muzkr](https://github.com/muzkr) - thanks for [PY32F071 LL library compilation and boilerplate](https://github.com/armel/uv-k1-k5v3-firmware-custom)

[DualTachyon](https://github.com/DualTachyon) - father of UV-K5 codebase

ClaudeAI, Grok, Perplexity - for great ideas and implementations
