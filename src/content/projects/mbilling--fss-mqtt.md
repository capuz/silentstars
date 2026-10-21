---
repo: "mbilling/fss-mqtt"
name: "fss-mqtt"
description: "Fast, keyboard-driven MQTT v5 explorer for the terminal"
readmeQualityOk: true
url: "https://github.com/mbilling/fss-mqtt"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-07T21:32:17Z"
lastCommitAt: "2026-10-21T08:50:02Z"
lastReleaseAt: "2026-10-20T15:40:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["mbilling", "benduran-fbin"]
openGraphImageUrl: "https://opengraph.githubassets.com/143becaf42fc0bcb7a194c2c8e2442b6d5b5b4441441e65ca02b92e2ed2a77f3/mbilling/fss-mqtt"
---

# fss-mqtt

A fast, keyboard-driven MQTT explorer for the terminal. Subscribe to a broker and get a
live topic tree you narrow down just by typing; edit any message and publish it again.

## Install

Pre-built binaries for Linux, macOS and Windows are on the GitHub releases page.

```sh
# Debian / Ubuntu
sudo apt install ./fss-mqtt_<version>-1_amd64.deb
# Fedora / RHEL / openSUSE
sudo dnf install ./fss-mqtt-<version>-1.x86_64.rpm
# Homebrew (macOS, Linux)
brew install mbilling/tap/fss-mqtt
# Windows
scoop bucket add mbilling https://github.com/mbilling/scoop-bucket
scoop install fss-mqtt
```

The Linux binaries are static and run on any distribution. winget isn't set up yet
(see [RELEASING.md](https://github.com/mbilling/fss-mqtt/blob/HEAD/RELEASING.md)).

From source (Rust 1.88+):

```sh
cargo build --release        # → target/release/fss-mqtt (~1.1 MB)
cargo install --path .       # or install it to ~/.cargo/bin
```

## Usage

```sh
fss-mqtt broker.example.com                # connect (and save the connection)
fss-mqtt mqtts://broker:8883 -u me         # TLS (system trust store); asks for the password
fss-mqtt broker:8883 --cafile ca.pem       # TLS with your own CA
fss-mqtt…
