---
repo: "HelgeSverre/rust-vst3-host"
name: "rust-vst3-host"
description: "A safe Rust library for hosting VST3 plugins — discover, load, play audio, automate parameters, send/receive MIDI, and isolate plugin crashes, with zero unsafe in the public API."
readmeQualityOk: true
url: "https://github.com/HelgeSverre/rust-vst3-host"
homepage: "https://docs.rs/vst3-host"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["audio", "plugin-host", "rust", "vst3"]
stars: 36
forks: 11
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-02-05T18:17:23Z"
lastCommitAt: "2026-10-05T10:47:28Z"
lastReleaseAt: "2026-07-06T11:50:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 63
maintainers: ["HelgeSverre", "ro-ag", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fc90ad4f6436c0c27d8e21eda6dd6016209fc2eed6bba4092c35441be95002e/HelgeSverre/rust-vst3-host"
---

# vst3-host

A safe Rust library for hosting VST3 plugins: discover them, load them, play audio
through them, control parameters, send MIDI, and isolate crashes — without writing any
`unsafe` code yourself.

```rust
use vst3_host::{simple, midi::MidiChannel};

fn main() -> vst3_host::Result<()> {
    // Load a synth and start it playing through the default audio device.
    let plugin = simple::load_plugin("/Library/Audio/Plug-Ins/VST3/Dexed.vst3")?;
    let audio = simple::play(plugin)?;

    // Play middle C (MIDI note 60) for one second.
    audio.lock().send_midi_note(60, 100, MidiChannel::Ch1)?;
    std::thread::sleep(std::time::Duration::from_secs(1));
    Ok(())
}
```

## What it does

- **Discovery** — find installed VST3 plugins and read their metadata.
- **Audio** — a bundled CPAL backend drives a plugin to your speakers; or plug in your own
  backend. Host effects on live audio input, or render offline to a WAV file.
- **Parameters** — list, read, set, and format parameters as the plugin itself displays them,
  with sample-accurate automation (`set_parameter_at`).
- **MIDI** — notes, control changes, pitch bend, and aftertouch, with sample-accurate
  scheduling;…
