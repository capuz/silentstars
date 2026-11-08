---
repo: "angellinares/dn2_firmware_explore"
name: "dn2_firmware_explore"
description: "A repository to experiment on the Elektron DN2 firmware"
readmeQualityOk: true
url: "https://github.com/angellinares/dn2_firmware_explore"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 26
forks: 6
openIssues: 19
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-09-07T10:21:38Z"
lastCommitAt: "2026-11-08T14:14:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 34
maintainers: ["angellinares", "w-winter"]
openGraphImageUrl: "https://opengraph.githubassets.com/a932ac198587c3df530fa5f6f7f050e6a1c86779d800865b5f93f27a44daf7f5/angellinares/dn2_firmware_explore"
---

# dn_firmware

Tools to inspect, modify and rebuild **Elektron Digitone** firmware, and a set of
mods for the Digitone II that we built with them. The tools cover the Digitone II
(DN2) and the original Digitone and Digitone Keys (DN1).

**This repository holds code and documentation only.** It contains no Elektron
firmware, original or modified, and it never will. Bring your own OS file: the one
that Elektron publish for your instrument. Each mod applies to *your* copy of that
file. Before a mod writes, it checks that your copy is the one we measured it against.

## Mods for the Digitone II 1.11

Apply them with `dnfw mods apply`, or in the browser on the project site,
**<https://angellinares.github.io/dn2_firmware_explore/>**. The site runs entirely
in your browser and uploads nothing. The browser and the command line make the same
file, byte for byte. A test checks this.

| Mod | What it does | Status | In the browser |
|---|---|---|---|
| `lfo4` | A fourth LFO under `[MOD]`, like LFO1–3. Modulates on every voice; kept by SAVE PROJECT and across a power-cycle | confirmed on hardware | yes |
| `arpmodes` | SHUF and RAND as real arpeggiator modes | confirmed on hardware | yes…
