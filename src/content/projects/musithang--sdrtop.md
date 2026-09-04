---
repo: "musithang/sdrtop"
name: "sdrtop"
description: "Terminal monitor for SDR hardware - written in Rust. Early development."
readmeQualityOk: true
url: "https://github.com/musithang/sdrtop"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["hackrf", "portapack", "radio", "ratatui", "rust", "sdr", "terminal", "tui", "rtlsdr", "soapy-sdr"]
stars: 116
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-05-27T13:52:10Z"
lastCommitAt: "2026-09-04T08:10:38Z"
lastReleaseAt: "2026-09-03T21:53:54Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["musithang"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b992ce3211b22c2ddd8f8d59f4f2ee443b95cf7529e5602b11bab033b42f087/musithang/sdrtop"
fundingLinks: ["KO_FI:https://ko-fi.com/musithang"]
---

</p>

<h1 align="center">sdrtop</h1>

  <b>A bench instrument for software defined radios, living in your terminal.</b><br>
  <sub>Spectrum, waterfall, and the measurements a plot cannot give you.</sub>
</p>

</p>

  <b>Tested on real hardware</b><br>
</p>

  <b>Via SoapySDR</b> <img src="https://img.shields.io/badge/BETA-orange" alt="Beta"><br>
  <br>
  <sub>Grey means <b>written from the API, not from owning one</b>. It should work. Nobody has told me either way yet, which is exactly as reassuring as it sounds. <a href="user_docs/hardware.md#soapysdr-the-honest-version">The honest version</a>.</sub>
</p>

</p>

**Hey there! This is my take on a terminal monitor for SDR hardware.** I wanted something that could hunt down every bit of diagnostic data from your radio and stream it straight to your terminal. Not a lazy `*-info` clone: raw, real-time metrics with a spectrum, a waterfall and a set of bench instruments, in a tmux pane, an SSH session, or the postage-stamp screen of a cyberdeck. I set out to print a few numbers. There is now a Friis noise figure model in here. I'm not entirely sure how that happened.

It's a hobby project built in my spare time, and honestly, I made it…
