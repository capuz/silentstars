---
repo: "pykeio/earshot"
name: "earshot"
description: "Ridiculously fast & accurate streaming voice activity detection"
readmeQualityOk: true
url: "https://github.com/pykeio/earshot"
homepage: "https://docs.rs/earshot"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["rust", "vad", "voice-activity-detection", "python"]
stars: 195
forks: 9
openIssues: 2
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 3
createdAt: "2024-09-28T21:06:11Z"
lastCommitAt: "2026-08-30T00:45:07Z"
lastReleaseAt: "2026-08-19T06:05:55Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 66
undervaluedScore: 28
maintainers: ["decahedron1", "Sal-ami"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5d1e8ef730c2f389f93c6390672e209c3617f6501e7330c9d9e0cbcad7c2276/pykeio/earshot"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/pyke-osai"]
discussionCount: 0
---

# Earshot
Ridiculously fast & accurate streaming voice activity detection, written in pure Rust and also available for [Python](https://pypi.org/project/earshot/).

Earshot achieves an RTF of 0.0003 (3,600x real time): **40x faster** than Silero VAD v6 & TEN VAD - and more accurate, too!

Earshot operates on 16 millisecond frames of mono/stereo audio sampled at 16000 Hz & supports streaming. Earshot detects voice in any language and is resilient to most kinds of environmental noise with an SNR ≥ 3dB.

> If you find Earshot useful, please consider [sponsoring pyke.io](https://opencollective.com/pyke-osai).

<figure>
<figcaption><i>
Earshot, in black, performs markedly better than Silero VAD v6 and TEN VAD in blue and red.
</i></figcaption>
</figure>

## Usage
- **Python**: [`pip install earshot`](https://pypi.org/project/earshot/)

### Rust
> [`cargo add earshot`](https://crates.io/crates/earshot)

```rs
// Get per-frame probabilities from a real-time audio stream:
let mut detector = earshot::Detector::default();
let mut frame_receiver = ...
while let Some(frame) = frame_receiver.recv() {
	// `frame` is Vec<i16> with length 256.
	// Each frame passed to the detector must be exactly…
