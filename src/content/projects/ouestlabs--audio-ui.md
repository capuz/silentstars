---
repo: "ouestlabs/audio-ui"
name: "audio-ui"
description: "Audio controls for React: knobs, faders, meters, waveforms, timelines, sequencers and piano rolls, as headless primitives on npm or shadcn/ui components."
readmeQualityOk: true
url: "https://github.com/ouestlabs/audio-ui"
homepage: "https://www.audio-ui.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["audio-ui", "react", "shadcn", "tailwindcss", "accessibility", "audio", "daw", "fader", "headless", "knob"]
stars: 218
forks: 9
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-09-07T21:38:16Z"
lastCommitAt: "2026-11-25T13:20:40Z"
lastReleaseAt: "2026-07-11T04:02:45Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 43
maintainers: ["lucien-loua"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac45c7a9b1fb4c281c92489745dad194903bb4edc0da7f70d12824d548dc2cb5/ouestlabs/audio-ui"
fundingLinks: ["GITHUB:https://github.com/lucien-loua"]
discussionCount: 2
---

# audio/ui

Accessible, composable Audio UI components for the web, in React, Vue, Svelte or plain HTML: knobs, faders, meters, pads, waveforms, timelines, piano rolls and the synths, mixers and players made from them.

- **Primitives.** Headless, accessible parts with the behavior built in and the styling left to you, written once on the UI SDK kernel and copied into your project for React, Vue, Svelte or the web.
- **Components you own.** A shadcn registry of styled components, blocks and hooks built on the primitives, copied into your project with the CLI.
- **Web Audio API first.** Meters, spectrum analyzers and tuners read real signals from `AnalyserNode`s, and live values move without re-rendering React.
- **Built on [audio.js](https://audio.js.org).** The engine's decoders, effects, analysis and MIDI files come from audio.js; audio/ui is the interface on top of it.

Docs and demos: **https://www.audio-ui.dev**

## Use it

```sh
# a headless primitive, for React (-vue, -svelte and -web for the others)
npx shadcn@latest add @audio-ui/knob-react

# a styled component, and what it needs, from the registry
npx shadcn@latest add @audio-ui/knob
```
