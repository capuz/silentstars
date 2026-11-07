---
repo: "bottlesdevs/next-winebridge"
name: "next-winebridge"
description: "The source code of the Next version of WineBridge"
readmeQualityOk: true
url: "https://github.com/bottlesdevs/next-winebridge"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2024-12-29T23:01:10Z"
lastCommitAt: "2026-11-07T09:29:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 64
undervaluedScore: 29
maintainers: ["cyberphantom52", "mirkobrombin"]
openGraphImageUrl: "https://opengraph.githubassets.com/4279e4cfd878b829b3f65d61348ca9e8297141e9f8d29c1efdf8f69f35650d64/bottlesdevs/next-winebridge"
fundingLinks: ["GITHUB:https://github.com/bottlesdevs", "LIBERAPAY:https://liberapay.com/Bottles", "CUSTOM:https://usebottles.com/funding"]
---

# next-winebridge
The source code of the Next version of WineBridge

## Testing
Tests for winebridge are meant to be run inside wine. Generate the test executables using the following command:
```bash
cargo test --no-run --lib
```

This will generate the test executables in the `target/$TARGET/debug/deps` which can be run using wine as follows:
```bash
wine target/$TARGET/debug/deps/next-winebridge-*.exe --test-threads=1
```

The `--test-threads=1` flag is required becase parallel operations on Wine registry can interfere with each other and cause tests to fail. This issue is not specific to this project.
