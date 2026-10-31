---
repo: "ambercaravalho/tcl-flip-4-root"
name: "tcl-flip-4-root"
description: "rooting the TCL Flip 4 5G KaiOS feature phone :)"
readmeQualityOk: true
url: "https://github.com/ambercaravalho/tcl-flip-4-root"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 9
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-17T23:33:26Z"
lastCommitAt: "2026-10-31T19:00:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 16
maintainers: ["ambercaravalho"]
openGraphImageUrl: "https://opengraph.githubassets.com/13ebe6e675e45762a0a4cd759c5571d4955d6acaef59d17e0d49ed6773ac2be1/ambercaravalho/tcl-flip-4-root"
---

# tcl-flip-4-root

**Experimental, no-wipe root for the TCL Flip 4 (T440W) over Qualcomm EDL** -
make the phone fully SELinux-permissive and get an `adb root` (`uid=0`) shell,
without unlocking the bootloader or wiping userdata.

> ## Read this first - this is experimental and dangerous
>
> - This is **unofficial, experimental** reverse-engineering work that succeeded
>   on **one specific phone**. Nothing here is guaranteed to be safe on yours.
> - Writing to flash over EDL **can and may well PERMANENTLY BRICK your phone.**
>   There is no warranty and no undo button.
> - **Do your own research.** Understand each step before you run it. If a command
>   doesn't make sense to you, stop.
> - **ALWAYS MAKE A FULL, VERIFIED BACKUP BEFORE DOING ANYTHING** with
>   `scripts/backup.sh`. Every image we flash is carved from that backup and is
>   reversible - as long as the backup exists.
>
> You accept all risk. See [LICENSE](https://github.com/ambercaravalho/tcl-flip-4-root/blob/HEAD/LICENSE): provided "as is", without warranty.

Two ways to read this:

- **New here, or you just want to run the commands?** -> [Part 1: Just root it](#part-1-just-root-it).
- **Want to understand how it…
