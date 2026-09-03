---
repo: "BonnyAD9/raplay"
name: "raplay"
description: "Rust library for playing audio"
readmeQualityOk: true
url: "https://github.com/BonnyAD9/raplay"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["audio", "audio-library", "rust", "cpal"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2023-07-13T12:03:43Z"
lastCommitAt: "2026-09-03T08:13:30Z"
lastReleaseAt: "2026-09-03T08:15:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 42
maintainers: ["BonnyAD9"]
openGraphImageUrl: "https://opengraph.githubassets.com/161ce5b8d47fee9f9b318c474b1e6736755317d8092a18e3815f415ce6bc88a3/BonnyAD9/raplay"
---

# raplay
Library for playing audio.

The library is not tested systematically, but I have been using daily in my
music player for years and I'm not aware of any unexpected problems.

## Features
- Play(Resume)/Pause
- Callback when audio ends
- Callback for errors
- Volume
- Seeking
- Get audio position and length
- Fade-in/fade-out on play/pause
- Gapless playback with prefetching of the next source.

## Supported formats
All the decoding is done by
[symphonia](https://github.com/pdeljanov/Symphonia/tree/master), so the
supported formats are the same as symphonia.

## Examples

### Play a sine wave
```rust
use raplay::{Sink, source::Sine};

let mut sink = Sink::default(); // Get the default output
let src = Sine::new(1000.); // Create 1000Hz sine source
sink.load(Box::new(src), true)?; // Play the sine wave
# Ok::<(), raplay::Error>(())
```

### Play a mp3 file
```rust
use std::fs::File;
use raplay::{Sink, source::Symph};

let mut sink = Sink::default(); // Get the default output
let file = File::open("music.mp3").unwrap(); // Open the mp3 file
let src = Symph::try_new(file, &Default::default())?; // Create a symphonia
                                                      //…
