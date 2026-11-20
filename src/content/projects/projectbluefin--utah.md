---
repo: "projectbluefin/utah"
name: "utah"
description: "Bluefin built with Fedora Hummingbird technology"
readmeQualityOk: true
url: "https://github.com/projectbluefin/utah"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 27
forks: 23
openIssues: 23
closedIssues: 401
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2026-08-26T20:20:21Z"
lastCommitAt: "2026-11-20T12:03:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["mergeraptor[bot]", "hanthor", "Karibhou"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5df814997e93a0fe27f1343d8a4f1f7ab2054ed7579b6cb32c6eef654329508/projectbluefin/utah"
---

# Utahraptor

*LUKS ISO test passed for commit `d67dd762cc2d`. [CI run](https://github.com/projectbluefin/utah/actions/runs/44384347296) also runs independent desktop tests that do not gate this record; the LUKS and production ISO jobs passed; [screenshots and provenance](https://github.com/projectbluefin/utah/tree/25592aea41def24e3c724fd9b103a0808fb0fd8c).*

†Utahraptor ostrommaysi

Bluefin built on Fedora Hummingbird. The more ... civilized murder machine.

> Your day keeps getting worse. Why are there more.

**Experimental pre-alpha** — the image builds, boots, and installs end to
end in local QEMU validation: the live ISO's bootc-installer creates a
LUKS2-encrypted disk from the ISO's embedded container store with no
network, and the installed system boots on its own to GDM and a GNOME
session (verified record: [docs/verification](https://github.com/projectbluefin/utah/tree/verification)).
Testing container images and live ISOs are available for hardware testing,
but nothing here is ready to run on a machine you care about yet. [Filing
issues](https://github.com/projectbluefin/utah/issues) is the whole point.
