---
repo: "pohcee/dcmnorm"
name: "dcmnorm"
description: "A CLI and SDK to normalize and generally work with DICOM, built in Rust, and packaged with multiple language bindings."
readmeQualityOk: true
url: "https://github.com/pohcee/dcmnorm"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["dicom", "dimse", "medical-imaging", "medicalimaging", "render", "rust", "cli", "json", "parser", "gemini-cli-extension"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T17:08:31Z"
lastCommitAt: "2026-11-16T04:26:39Z"
lastReleaseAt: "2026-04-19T01:41:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["jasonklotzer", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fccde65f624126f114b7a6c3648f0f149ec56df84988497f99c4c5d5ca2c9819/pohcee/dcmnorm"
---

# dcmnorm

Fast, open-source DICOM toolkit in Rust: parse, render, transcode, reformat, and network.
Ships as a CLI, a Rust library, and Node.js/Python/Java bindings.

**🔗 Live demo:** try the Node bindings in your [browser](https://dcmnorm-test-website-spzcbrdjlq-uc.a.run.app) — upload a `.dcm` file (or pick a bundled
sample) and see its JSON metadata, a JPEG of every frame, and per-step timings.

## Quick start

```bash
# install the latest release (Linux, macOS, Windows)
uv tool install dcmnorm           # or: curl -sSL pohcee.com/dcmnorm | sh  (Linux, macOS)

dcmnorm scan.dcm                                                   # DICOM → JSON
dcmnorm scan.dcm frame.png                                         # render a frame
dcmnorm scan.dcm out.dcm --transfer-syntax 1.2.840.10008.1.2.1     # transcode to Explicit VR LE
dcmnorm cine.dcm cine.mp4                                          # multi-frame → MP4
dcmnorm --mpr coronal series/*.dcm coronal.png                     # multiplanar reformat
dcmtalk echoscu somepacs.example.com:11112                         # verify a PACS connection
```

See [Install](#install) for other options (the Claude plugin, release archives, `.deb`,…
