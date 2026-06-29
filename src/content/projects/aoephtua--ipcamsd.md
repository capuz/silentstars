---
repo: "aoephtua/ipcamsd"
name: "ipcamsd"
description: "📹 Node.js command line tool for transfering, merging and converting IP camera records"
url: "https://github.com/aoephtua/ipcamsd"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["javascript", "commandline", "cli", "h264", "ip-camera", "reolink", "bedee", "es6", "node", "nodejs"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-08-07T16:12:00Z"
lastCommitAt: "2026-06-29T07:22:28Z"
lastReleaseAt: "2025-03-13T15:17:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 38
maintainers: ["aoephtua"]
openGraphImageUrl: "https://opengraph.githubassets.com/6814684abbf0b65dc637b05fac3d6f9a8ad13feafa9a7dbfae8cd4024b0b36e7/aoephtua/ipcamsd"
---

# ipcamsd

Node.js command line tool and library for downloading, merging and converting record files of IP cameras.

## Installation

    $ npm install -g ipcamsd

## Usage

### General Options

```
Options:
  --version                 output the version number
  --host <host...>          host of ip camera (multiple: true, required)
  --firmware <firmware...>  firmware of ip camera (multiple: true, default: hi3510)
  --username <username...>  username of ip camera (multiple: true)
  --password <password...>  password of ip camera (multiple: true)
  --ssl <ssl...>            use secure socket layer (multiple: true, default: false)
  --help                    display help for command
```

### Firmwares

- hi3510 (default)
- reolink

### Commands

Use **[ipcamsd-cmd-generator](https://github.com/aoephtua/ipcamsd-cmd-generator)** to generate commands for ipcamsd.

- [fetch](#fetch)
- [list](#list)

#### fetch

Transfers and converts records of the specified parameters. This is the **default** command.

    $ ipcamsd (fetch) --start-date [YYYYMMDD|today|yesterday] --video-filter "setpts=PTS/2" --host [IP...] --username [...] --password [...]

**Note**: `-c copy` is applied to stream…
