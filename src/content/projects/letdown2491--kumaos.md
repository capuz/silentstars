---
repo: "Letdown2491/kumaOS"
name: "kumaOS"
description: "A declarative, atomic, and immutable distro based on Fedora bootc using Niri and a custom shell, kumaUI, by default."
readmeQualityOk: true
url: "https://github.com/Letdown2491/kumaOS"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["bootc", "declarative", "fedora", "immutable", "linux", "niri", "noctalia", "atomic-updates", "distro"]
stars: 7
forks: 0
openIssues: 6
closedIssues: 36
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-08T21:39:04Z"
lastCommitAt: "2026-10-21T21:12:02Z"
lastReleaseAt: "2026-08-17T18:13:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 59
maintainers: ["Letdown2491", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f3c4ef3e1722a57f7ac01c261ce105c87ccccb91d34790c46d6bacb0b6c2d0d/Letdown2491/kumaOS"
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
