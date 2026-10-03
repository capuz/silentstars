---
repo: "BurningTreeC/gainstagefx"
name: "gainstagefx"
description: "A CLAP / VST3 / AUv2 plugin"
readmeQualityOk: true
url: "https://github.com/BurningTreeC/gainstagefx"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["amplifier", "clap", "clap-plugin", "daw", "daw-plugins", "distortion", "pedal", "preamp", "saturation", "vst3"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-03T15:54:45Z"
lastCommitAt: "2026-10-03T09:23:27Z"
lastReleaseAt: "2026-09-24T08:31:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["BurningTreeC"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c8bc8ac87a030a716a266971aaef9fffc859a0dae36c30c2b82d850bbf94d64/BurningTreeC/gainstagefx"
---

# GainStageFx

Circuit modelled gain stages, from subtle preamplifier saturation to a scooped
high gain sound, and the rest of a guitar rig behind them: a pedal in front,
a power stage, a speaker that loads it, a cabinet and up to two microphones.
CLAP and VST3 on Linux, Windows and macOS, and an Audio Unit (v2) on macOS as
well; built with [nice-plug], with a [vizia] panel.

Nothing here is a filter shaped to sound like an amplifier. Every circuit is a
netlist — resistors, capacitors, inductors, valves, transistors, diodes,
op-amps, transformers — solved by modified nodal analysis, with Newton–Raphson
wherever a part is not linear. The sound comes out of the topology, so a
capacitor in the gain leg makes the mid-hump because that is what it does in the
hardware, not because someone drew the curve.

## The chain

```text
PEDAL -> CIRCUIT (preamp) -> POWER AMP <-> SPEAKER LOAD -> CONE -> CABINET -> MIC A / MIC B -> OUTPUT
```

Each stage is chosen on its own. A pedal can sit in front of any circuit, any
circuit can drive any power stage, and any power stage can drive any speaker in
any cabinet. The arrow between the power amp and the speaker goes both ways:
the speaker's impedance…
