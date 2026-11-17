---
repo: "Yikai-Liao/symusic"
name: "symusic"
description: "A swift and unified toolkit for symbolic music processing"
readmeQualityOk: true
url: "https://github.com/Yikai-Liao/symusic"
homepage: "https://symusic.readthedocs.io/en/latest/"
language: "C++"
languages: ["C++"]
languagePcts: [79]
stars: 190
forks: 17
openIssues: 3
closedIssues: 50
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2023-09-21T11:06:34Z"
lastCommitAt: "2026-11-17T14:38:28Z"
lastReleaseAt: "2023-12-10T08:45:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 32
maintainers: ["Yikai-Liao", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af20d764b903c4dccbef91b415e9e078c6944842e74825449a257d0a4d87b460/Yikai-Liao/symusic"
discussionCount: 0
---

# symusic

**Sy**music (**Sy**mbolic **Music**) is a fast toolkit for note-level symbolic music. It reads and writes MIDI and ABC, converts between ticks, quarter notes and seconds, transforms scores, exports NumPy arrays and piano rolls, and renders audio from SoundFonts. The core is C++20 with a Python binding built on nanobind, and parses MIDI hundreds of times faster than pure-Python libraries.

## Install

```sh
pip install symusic
```

Wheels cover CPython 3.10–3.14 on Linux, macOS and Windows. To build from source you need CMake and a C++20 compiler; see [CONTRIBUTING.md](https://github.com/Yikai-Liao/symusic/blob/main/CONTRIBUTING.md#set-up).

## Example

```python
import pickle
from symusic import Score

score = Score("song.mid")  # ticks by default; ABC with fmt="abc"
print(score)  # tracks and event counts

shifted = score.shift_pitch(2)  # returns a new score
score.shift_time(480, inplace=True)  # or mutates in place

seconds = score.to("second")  # "tick", "quarter" or "second"
notes = seconds.tracks[0].notes.numpy()  # dict of NumPy arrays
roll = score.tracks[0].pianoroll(modes=["onset", "frame"], pitch_range=(0, 128))

score.dump_midi("out.mid")
restored =…
