---
repo: "albertms10/music_notes"
name: "music_notes"
description: "Music theory Dart library"
url: "https://github.com/albertms10/music_notes"
homepage: "https://pub.dev/packages/music_notes"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["music", "music-theory", "dart", "education", "midi", "music-notation"]
stars: 42
forks: 11
openIssues: 5
closedIssues: 19
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2020-06-01T23:59:43Z"
lastCommitAt: "2026-06-28T01:43:37Z"
lastReleaseAt: "2023-06-11T21:13:30Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 43
maintainers: ["dependabot[bot]", "albertms10"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c2c478b56e62d6f6c48e6f6844c1707bd4a47e46a3b3b56d9bef94d712ac27/albertms10/music_notes"
discussionCount: 1
---

A comprehensive Dart library for effortlessly working with music theory concepts,
offering an elegant and beautifully crafted API.

## Features

- Notes, accidentals, and enharmonic operations
- Intervals, qualities, and circle of fifths
- Chords, scales, harmonic functions, inversions and retrogrades
- Keys, key signatures, and modes
- Frequencies and tuning systems (_work in progress_)

## Usage

Import the package into your Dart code:

```dart
import 'package:music_notes/music_notes.dart';
```

Now, you can use the provided APIs to perform various music theory operations.
For more detailed usage instructions and examples, please refer to the
[API documentation](https://pub.dev/documentation/music_notes/latest/).

### Notes

Define a `Note` from a `NoteName` (`.a` to `.g`) and an `Accidental`, or using their
shorthand static constants:

```dart
const Note(.e, .flat); // E♭
Note.c; // C
Note.d; // D
Note.f; // F
```

`NoteName`s can be obtained from semitones or ordinal:

```dart
NoteName.fromSemitones(2); // NoteName.d
NoteName.fromSemitones(9); // NoteName.a

NoteName.fromOrdinal(3); // NoteName.e
NoteName.fromOrdinal(7); // NoteName.b
```

Alter a `Note` with `sharp` or…
