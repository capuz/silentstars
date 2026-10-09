---
repo: "InvisibleWrench/FlutterMidiCommand"
name: "FlutterMidiCommand"
description: "A Flutter plugin to send and receive MIDI"
readmeQualityOk: true
url: "https://github.com/InvisibleWrench/FlutterMidiCommand"
language: "Dart"
languages: ["Dart"]
languagePcts: [73]
topics: ["flutter", "flutter-plugin", "midi"]
stars: 121
forks: 70
openIssues: 0
closedIssues: 103
watchers: 11
contributors: 18
recentReleases: 0
createdAt: "2018-11-06T20:49:42Z"
lastCommitAt: "2026-10-09T10:51:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 50
maintainers: ["mortenboye", "elasticdog"]
openGraphImageUrl: "https://opengraph.githubassets.com/930330ceccf7c3a517234388580f89a38d28218ad3560f74da26aa3818565c66/InvisibleWrench/FlutterMidiCommand"
fundingLinks: ["GITHUB:https://github.com/InvisibleWrench"]
discussionCount: 6
---

# Flutter MIDI Command

A Flutter plugin for sending and receiving MIDI messages between Flutter and physical and virtual MIDI devices.

Wraps CoreMIDI/android.media.midi/ALSA/win32 in a thin Dart/Flutter layer.
Includes a built-in typed MIDI parser/generator (`MidiMessageParser` and `MidiMessage.parse`); see [Message parser](#message-parser).
Supports

| Transports | iOS | macOS | Android | Linux | Windows | Web |
|---|---|---|---|---|---|---|
| USB | &check; | &check; | &check; | &check; | &check; | &check;* |
| BLE | &check; | &check; | &check; | &cross; | &check; | &cross;** |
| Virtual | &check; | &check; | &check; | &cross; | &cross; | &cross; |
| Network Session | &check; | &check; | &cross; | &cross; | &cross; | &cross; |

\* via browser Web MIDI API support.
\** BLE MIDI on Web is not handled by `flutter_midi_command_ble`; Web MIDI exposure depends on browser/OS.

## To install

- Make sure your project is created with Kotlin and Swift support.
- Add `flutter_midi_command` to your `pubspec.yaml`.
- Add `flutter_midi_command_ble` only if you want BLE MIDI support.
- Minimum platform versions in this repo:
  - iOS: plugin package minimum is `11.0`…
