---
repo: "shinovon/TheEscapists-j2me"
name: "TheEscapists-j2me"
description: "The Escapists fan remake for J2ME"
readmeQualityOk: true
url: "https://github.com/shinovon/TheEscapists-j2me"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["j2me"]
stars: 22
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-29T16:29:56Z"
lastCommitAt: "2026-10-15T08:31:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 37
maintainers: ["shinovon"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8ef7ca5f7242b681425627a407ddb77ff00953a2e4404fa155a9600b9dd6994/shinovon/TheEscapists-j2me"
---

# TheEscapists-J2ME

The Escapists fan demake for J2ME platform.

## Project state

- NPC behavior is finished.
- Original maps parser is finished.
- Rendering engine is finished, but needs optimization.
- The game can be beaten without cheats.
- Some important mechanics are not yet implemented, e.g. journal and favors.

See [TODO.md](https://github.com/shinovon/TheEscapists-j2me/blob/HEAD/TODO.md) for more details

## Disclaimer

All rights to the original game belong to Mouldy Toof Studios and Team17.\
This repository does not contain any original game assets or decompiled code.

## Building

You have to obtain legal copy of The Escapists [(Steam)](https://store.steampowered.com/app/298630/The_Escapists/), decompile it with CTFAK, then build and run ResourceBuilder with the following arguments:
```
<path to orig_res> <decompiled dir> <game dir>
```

**ffmpeg must be present in PATH**

Full example:
```bash
cd ResourceBuilder
javac -d bin src/*.java
java -cp bin ResourceBuilder ../orig_res "~/CTFAK/The Escapists" "~/.local/share/Steam/steamapps/common/The Escapists/"
```

To compile the game you may use IntelliJ IDEA integrated with KEmulator nnmod, or Eclipse IDE (not newer than…
