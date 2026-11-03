---
repo: "aicodix/modem"
name: "modem"
description: "Simple OFDM modem for transceiving datagrams"
readmeQualityOk: true
url: "https://github.com/aicodix/modem"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["ofdm", "modem", "audio", "coherent", "polar"]
stars: 150
forks: 29
openIssues: 0
closedIssues: 14
watchers: 14
contributors: 3
recentReleases: 0
createdAt: "2021-06-09T22:10:53Z"
lastCommitAt: "2026-11-03T10:55:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 36
maintainers: ["claude", "xdsopl"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60892e3ec368804d78883e5d630ce315382ca87efc92fa3f48b72d16e62c23c/aicodix/modem"
---

### OFDM MODEM

Quick start:

Create file ```uncoded.dat``` with ```2048``` bits of random data:

```
dd if=/dev/urandom of=uncoded.dat bs=1 count=256
```

Encode file ```uncoded.dat``` to ```encoded.wav``` [WAV](https://en.wikipedia.org/wiki/WAV) audio file with 48000 Hz sample rate and 32 bit float samples:

```
./encode encoded.wav 48000 32 ANONYMOUS QAM16 1/2 short uncoded.dat
```

Start recording to ```recorded.wav``` audio file and stop after 5 seconds:

```
sox -d -c 1 -e float recorded.wav
```

Start playing ```encoded.wav``` audio file:

```
play encoded.wav
```

Decode ```recorded.wav``` audio file to ```decoded.dat``` file:

```
./decode recorded.wav decoded.dat
```

Compare original ```uncoded.dat``` with ```decoded.dat```:

```
diff -s uncoded.dat decoded.dat
```

### Stream Audio

This currently works on macOS and Linux only.

Stream live audio into the decoder:

```
sox -q -d -c 1 -e float -t wav - | ./decode - decoded.dat
```

Stream audio out of the encoder:

```
./encode - 48000 32 ANONYMOUS QAM16 1/2 short uncoded.dat | play -q -
```

### Supported Modes

All modes need a bandwidth of 2400 Hz and there are two frame sizes.

These are the durations for each…
