---
repo: "clv-2/robloxmic"
name: "robloxmic"
description: "Uses Roblox's voice safety classifier to pre-filter microphone input"
readmeQualityOk: true
url: "https://github.com/clv-2/robloxmic"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-01T13:30:48Z"
lastCommitAt: "2026-11-13T18:27:32Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 30
maintainers: ["clv-2"]
openGraphImageUrl: "https://opengraph.githubassets.com/b462033d4299b5493fe4372370bb17ebd1497ec0dbca1bf68201a47771f4e02c/clv-2/robloxmic"
---

# robloxmic

Censors your microphone before Roblox hears it, using Roblox's
[voice-safety classifier](https://huggingface.co/Roblox/voice-safety-classifier-v3). Flagged speech is replaced with a
beep.

## Requirements

- Windows 10/11
- Python 3.11–3.14
- [VB-Cable](https://vb-audio.com/Cable/)

## Running

Double-click `start.bat`. Or:

```
pip install -r requirements.txt
python main.py
```

In Roblox: Esc → Settings → **Input Device** → **CABLE Output**.

## Options

Add `--console` to run without the window, and `--save` to keep options for next time.

- `--provider dml`: run on the GPU
- `--censor silence`: silence instead of a beep
- `--threshold 0.35`: catch more (default 0.5)
- `--pad-before 0.1 --pad-after 0.1`: censor more either side, in seconds
- `--window 1.0`: also catch whole-sentence requests, like asking for personal info
- `--simulate in.wav out.wav`: filter a recording

`python main.py --help` lists the rest.

## macOS

Untested. Install [BlackHole](https://existential.audio/blackhole/), run `python3 main.py`, and pick **BlackHole 2ch**
as the Input Device in Roblox. PRs welcome.

## License

The models are Roblox's: v3 is Apache-2.0, v2 is CC-BY-SA-3.0.
