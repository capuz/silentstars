---
repo: "sparky4/fdnpkg16"
name: "fdnpkg16"
description: "FreeDOS Network Package Manager 16 bit"
url: "https://github.com/sparky4/fdnpkg16"
homepage: "https://4ch.mooo.com/freedos/repos/1.4/html/en/net/fdnpkg16/"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["freedos", "16bit", "80286", "8088", "dos", "networking", "packet"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-09-08T01:06:45Z"
lastCommitAt: "2026-06-28T01:35:00Z"
lastReleaseAt: "2025-10-07T00:30:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 61
maintainers: ["sparky4"]
openGraphImageUrl: "https://opengraph.githubassets.com/c18cb63c18d20885e636ca2ea58896cfdc93d210e713e0af771b14985c0a6262/sparky4/fdnpkg16"
---

# The actual FreeDOS package is the file fdnpkg16.zip
If you dont know how to install it in your FreeDOS system. here is the steps
use mtcp's htget to get it (works on 16 bit systems!)

```
htget -o fdnpkg16.zip http://4ch.su/freedos/fdnpkg16.zip
fdinst install fdnpkg16.zip
```

## Thats it! then you have it!

Just make sure you configure the repository system in fdnpkg16.cfg in the bin folder.

The program and config file can be placed anywhere. As long as they are together in same location! It supports that now!

### The config files included is

fdnpkg16.cfg for ibiblio repository

fdnpkg16.oem for my repository mirror with fdnpkg16 added

fdnpkg16.4 is just my config file for specifically my FreeDOS installs on my computers!

If u got a very old (1.0) FreeDOS install with all the stuff in fdos dir then use this one!

# The program itself is compiled with Open Watcom 2.0

!! Make sure you got upx installed on your system !!

Just run
```
wmake
```
to compile the main program in GNU/Linux, BSD, or DOS families.

Compiling the code is tested on FreeDOS, Debian GNU/Linux, and NetBSD.

The target os is 16-bit FreeDOS!

### For libraries:

watt32 is compiled with Open Watcom 1.9…
