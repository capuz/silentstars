---
repo: "b4sh/rfscan"
name: "rfscan"
description: "A fast radio scanner for SDR receivers, running in the terminal with TUI or WebGUI. rfscan sweeps frequency ranges or a list of channels, stops on a signal, demodulates it (AM or NFM) and plays it, then goes on scanning when the transmission ends."
readmeQualityOk: true
url: "https://github.com/b4sh/rfscan"
homepage: "https://rfscan.sq1kw.info/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["airspy", "ham-radio", "radio", "radioscanner", "rtl-sdr", "sdr", "sdrplay"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-20T20:19:38Z"
lastCommitAt: "2026-11-13T11:25:07Z"
lastReleaseAt: "2026-11-08T17:34:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 62
maintainers: ["b4sh"]
openGraphImageUrl: "https://opengraph.githubassets.com/28dd1ea577f412323efb42955623cd24a0fa3e7409e64021d61e810063c744a1/b4sh/rfscan"
---

# rfscan

A fast radio scanner for SDR receivers that you run as your own small server: on a Raspberry Pi or a PC next to the antenna, listened to and controlled in a browser on a PC or a phone. rfscan sweeps frequency ranges or a list of channels, stops on a signal, demodulates it (AM or narrowband FM) and plays it, then goes on scanning when the transmission ends. Digital voice (DMR, P25, D-STAR, YSF, NXDN and others) is played through [DSD-FME](https://github.com/lwvmobile/dsd-fme). Local audio and a text interface in the terminal (TUI) are available on the computer it runs on.

> [!IMPORTANT]
> **Set the settle time for your receiver before the first scan.** After every retune a receiver keeps delivering samples of the previous frequency for a while, from a few to over a hundred milliseconds. If `--settle` is shorter than that, rfscan sees signals in the wrong places and scanning does not work properly. The default of 20 ms fits an Airspy, not an RTL-SDR: an RTL-SDR needs about 63 ms with smaller stream buffers (`--stream-args "bufflen=16384,buffers=64"`) and over 110 ms without them. `rfscan --calibrate` measures the right value for your receiver. An RTL-SDR also needs…
