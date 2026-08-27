---
repo: "pengzhendong/ipyaudio"
name: "ipyaudio"
description: "A Jupyter Widget for Web Audio Playing and Recording."
readmeQualityOk: true
url: "https://github.com/pengzhendong/ipyaudio"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [62, 31]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-15T06:37:26Z"
lastCommitAt: "2026-08-27T14:25:36Z"
lastReleaseAt: "2025-04-26T12:19:32Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 31
maintainers: ["pengzhendong"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9686e95b70556d4b8fbc4544c3b878a7d3b9d935624b03fbc353a7203731ee5/pengzhendong/ipyaudio"
---

# ipyaudio

A Jupyter Widget for Web Audio Playing and Recording.

</div>

<br/>

## Installation

```bash
$ pip install ipyaudio
```

## Usage

```python
>>> !wget https://modelscope.cn/datasets/pengzhendong/filesamples/resolve/master/audio/aac/sample1.aac -O sample1.aac
>>> audio_url = "https://modelscope.cn/datasets/pengzhendong/filesamples/resolve/master/audio/aac/sample1.aac"
>>> audio_path = "sample1.aac"
```

### Player

- Play an audio from url

- Play a local audio

- Play a numpy ndarray

- Play an audio stream

### Recorder

- Record an audio with callback function

- Record an audio to file

### Streaming lifecycle

`play()` and `record()` return their widget instances, so callers can control
them directly. Async audio producers are owned by the player instead of being
launched as an untracked background task:

```python
player = ipyaudio.play(audio_stream(), rate=16_000)

await player.wait_until_done()  # propagates producer errors
# player.cancel_stream()        # stop early when needed
```

Recorder chunks use an acknowledged binary transport. At most one chunk is in
flight between the browser and Python, which provides backpressure even though
Jupyter comm sends…
