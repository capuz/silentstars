---
repo: "crmne/omarchy-rescue"
name: "omarchy-rescue"
description: "The Omarchy ISO with a rescue mode: rescue tools plus Claude Code, Codex, and OpenCode in a live console"
readmeQualityOk: true
url: "https://github.com/crmne/omarchy-rescue"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [63, 37]
stars: 167
forks: 9
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-09-27T11:21:06Z"
lastCommitAt: "2026-11-01T22:59:08Z"
lastReleaseAt: "2026-10-01T10:50:18Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 28
maintainers: ["crmne", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c08eef73b8a12b08a80c8b7b68d74a535146d195dceafc98b19e9102b1bc970/crmne/omarchy-rescue"
fundingLinks: ["GITHUB:https://github.com/crmne", "PATREON:https://patreon.com/crmne"]
discussionCount: 0
---

# Omarchy Rescue

A rescue USB for Omarchy: a live Omarchy console with the rescue tools you'd
reach for from SystemRescue, and Claude Code, Codex, and OpenCode ready to help
diagnose and fix a machine that won't boot.

https://github.com/user-attachments/assets/3d764e1b-ad15-4686-975d-beed4420f63f

Music in the film: "Enthusiast" by Tours, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

## Put it on a USB stick

Download the ISO and its `.sha256` from
[Releases](https://github.com/crmne/omarchy-rescue/releases), then write it
with [Caligula](https://github.com/ifd3f/caligula) (`sudo pacman -S caligula`
on Omarchy and Arch):

```bash
caligula burn omarchy-rescue-*.iso -s "$(cut -d' ' -f1 omarchy-rescue-*.iso.sha256)"
```

It checks the download against its checksum, asks which drive to write to, and
erases everything on it.

On **macOS** or **Windows**, check the download first, then write it with
[balenaEtcher](https://etcher.balena.io): pick the ISO, pick the stick, flash.

```bash
shasum -a 256 -c omarchy-rescue-*.iso.sha256                # macOS
certutil -hashfile omarchy-rescue-<version>-x86_64.iso SHA256  # Windows: compare with the .sha256 file
```

On Windows,…
