---
repo: "roberthead/head_music"
name: "head_music"
description: "Ruby gem for the rudiments of western music theory."
url: "https://github.com/roberthead/head_music"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["music-theory", "rubygems", "music-analysis", "counterpoint"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2017-02-13T01:25:49Z"
lastCommitAt: "2026-07-04T19:20:17Z"
lastReleaseAt: "2026-07-03T20:42:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 66
undervaluedScore: 62
maintainers: ["roberthead"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/81771872/315fa780-6be4-11eb-8600-3c07e7c7c2b1"
---

# HeadMusic

The **head_music** Ruby gem provides a toolkit for working with Western music theory. Model and manipulate the fundamental elements of music including pitches, scales, key signatures, intervals, and chords.

## Features

- **Western Music Theory Fundamentals**: Work with pitches, scales, intervals, chords, and key signatures
- **Musical Analysis**: Analyze harmonic progressions, voice leading, and counterpoint
- **Style Analysis**: Rules for species counterpoint and voice leading
- **Internationalization**: Support for multiple languages (English, French, German, Italian, Russian, Spanish)
- **Instrument Modeling**: Extensive database of musical instruments with ranges and properties

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'head_music'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install head_music

## Quick Start

```ruby
require 'head_music'

# Work with pitches and intervals
pitch = HeadMusic::Rudiment::Pitch.get('C4')
higher_pitch = HeadMusic::Rudiment::Pitch.get('E4')
interval = HeadMusic::Analysis::DiatonicInterval.new(pitch, higher_pitch)
puts interval.name  # => "major third"

# Create…
