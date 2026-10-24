---
repo: "Letdown2491/kumaOS"
name: "kumaOS"
description: "A declarative, atomic, and immutable distro based on Fedora bootc using Niri and a custom shell, kumaUI, by default."
readmeQualityOk: true
url: "https://github.com/Letdown2491/kumaOS"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["bootc", "declarative", "fedora", "immutable", "linux", "niri", "noctalia", "atomic-updates", "distro"]
stars: 8
forks: 0
openIssues: 3
closedIssues: 44
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-08T21:39:04Z"
lastCommitAt: "2026-10-24T08:06:27Z"
lastReleaseAt: "2026-08-17T18:13:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["Letdown2491"]
openGraphImageUrl: "https://opengraph.githubassets.com/f74d07cbb6cf3178bf6e56d2d842c4379d64bc99665a8037f98d7422ce9764c7/Letdown2491/kumaOS"
---

# kumaOS

**Your system is one file.**

kumaOS turns a short text file into a working Linux system. You write
down what the machine should have (a desktop, some applications, a few
command line tools) and kuma builds that description into a complete
system image. Installing a machine, and every update after it, comes
from that file.

Building the whole system, instead of editing a running one, gives you
three things. An update lands completely or not at all. The version you
were running is still on the disk, so going back is a reboot. And a new
system that cannot boot to a working desktop puts the old one back by
itself, without you there.

kumaOS is a layer over
[Fedora bootc](https://docs.fedoraproject.org/en-US/bootc/). Fedora
supplies the packages and the kernel. kuma decides what goes into the
image and keeps the running machine matching your file. New to any of
these words? [The glossary](https://github.com/Letdown2491/kumaOS/blob/HEAD/docs/glossary.md) defines each in a line.

## Your declaration

```toml
schema_version = 1

[system]
desktop = "niri"   # "niri", or "cosmic" (experimental); omit for headless

[user]
name = "me"
shell = "fish"
# password_hash = '$6$...'   #…
