---
repo: "matiaszanolli/midi2nes"
name: "midi2nes"
description: "Convert MIDI files to NES assembly code."
url: "https://github.com/matiaszanolli/midi2nes"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["compiler", "converter", "emulation", "midi", "nes", "transpiler", "midi2nes"]
stars: 5
forks: 2
openIssues: 57
closedIssues: 90
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2016-11-28T12:52:45Z"
lastCommitAt: "2026-07-03T12:21:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 77
maintainers: ["matiaszanolli", "onurege3467"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac748beaf4998ab46867aea74c4f600df329260ec7c143ab5061ce27882b483c/matiaszanolli/midi2nes"
---

# MIDI to NES Compiler

🎵 **High-performance MIDI to NES ROM compiler featuring an MMC3 Macro-Driven Bytecode Engine, advanced pattern detection, and multiprocessing optimization**

Convert MIDI files into playable NES ROMs or use the generated audio data in homebrew NES games and music applications.

> **Status:** Fully operational end-to-end pipeline (MIDI → playable NES ROM),
> 586 tests passing. Current focus is stabilization on the road to v1.0.0.
> See **[HISTORY.md](HISTORY.md)** · **[docs/ROADMAP.md](docs/ROADMAP.md)** ·
> **[MEMORY.md](MEMORY.md)**.

## ⚡ Quick Start

**One-command MIDI to NES ROM conversion:**
```bash
python main.py input.mid output.nes
```

**That's it!** The compiler handles the entire pipeline automatically:
1. **Fast MIDI Parsing** - Optimized parser with 120x performance improvement
2. **Intelligent Channel Mapping** - Automatic track-to-NES-channel assignment
3. **Frame Generation** - High-accuracy NES audio frame data
4. **Macro Engine Bytecode Compilation** - Advanced MMC3 pattern compression and instrument generation
5. **NES ROM Compilation** - Ready-to-run NES ROM file with optional on-screen debugging

## 🚀 Performance

### Real-World…
