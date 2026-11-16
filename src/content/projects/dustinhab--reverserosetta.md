---
repo: "DustinHab/ReverseRosetta"
name: "ReverseRosetta"
description: "Runs Intel-only Mac OS X programs on PowerPC Macs: i386-to-PowerPC binary translator for Leopard. Integer code at native speed (102 %) on a G4; Cocoa apps such as Transmission 2.42 run with text."
readmeQualityOk: true
url: "https://github.com/DustinHab/ReverseRosetta"
language: "C"
languages: ["C"]
languagePcts: [90]
topics: ["binary-translation", "i386", "ibook-g4", "jit", "leopard", "mac-os-x", "powerpc", "retrocomputing", "rosetta"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-14T23:21:20Z"
lastCommitAt: "2026-11-16T04:23:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 24
maintainers: ["DustinHab"]
openGraphImageUrl: "https://opengraph.githubassets.com/c273bd350ac88ac838e1931dc0f875c773abb2dd2adc99a9790b416eb4594994/DustinHab/ReverseRosetta"
---

# ReverseRosetta

ReverseRosetta runs Intel (i386) Mac OS X programs on PowerPC Macs. It is a user-mode binary translator for
Mac OS X 10.5 Leopard: it loads an i386 Mach-O program, translates its machine code to PowerPC at run time and
passes system calls and Mach messages to the PowerPC kernel and system services. This is the reverse direction of
Apple's Rosetta, which ran PowerPC programs on Intel Macs.

> **How fast?** Ordinary programs run at about half to four fifths of the speed of their native PowerPC build on a G4:
> gzip 61 %, bzip2 52 %, perl 66 to 69 %, sort 80 %, Python 98 %. Programs that run for a fraction of a second lose most
> at startup (openssl sha1 29 %), and the first starts of a program are slower while its code is translated. Small
> computing kernels reach 60 to 102 %, OpenGL 80 to 110 %. Details and how it is measured below.

Transmission 2.42 is an Intel-only build (`file` lists x86_64 and i386, no ppc). Above it runs on an iBook G4 with a
PowerPC G4 at 1.33 GHz; `ps` shows the translator process. Both windows are real captures from the same session,
placed at their screen positions.

## Performance

Measured on an iBook G4 (PowerPC 7447A, 1.33 GHz, on…
