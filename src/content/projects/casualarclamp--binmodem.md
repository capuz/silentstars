---
repo: "CasualArclamp/BinModem"
name: "BinModem"
description: "A dial-up softmodem in Rust: V.22bis, V.32, V.42, V.42bis and a V.250 AT interface, with a sound card for a line."
readmeQualityOk: true
url: "https://github.com/CasualArclamp/BinModem"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["bbs", "dial-up", "dsp", "itu-t", "modem", "rust", "softmodem", "v42", "zmodem", "winmodem"]
stars: 39
forks: 5
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-08T03:19:25Z"
lastCommitAt: "2026-11-22T11:46:24Z"
lastReleaseAt: "2026-09-17T12:27:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 45
maintainers: ["CasualArclamp", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dfffdea14be0abc4c624dbb8245ac43c7fadc5ae0dd56ea553ddbf5f067cce1/CasualArclamp/BinModem"
fundingLinks: ["CUSTOM:https://www.paypal.me/Arclamp"]
---

# BinModem

If you've found this worth your time, please consider [donating via PayPal](https://www.paypal.me/Arclamp).

A dial-up softmodem in Rust. Everything a modem does — the tones, the
handshakes, the error control, the compression — is code, and the line is a
sound card. No DSP chip, no driver blob, and none of a winmodem's dependence on
one vendor's Windows.

Written against the ITU-T Recommendations, with clause numbers cited in the
source for every normative constant, and against the RFCs for everything
carried over the top of them. 2175 tests.
