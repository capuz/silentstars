---
repo: "ponut64/SCSP_poneSound"
name: "SCSP_poneSound"
description: "68K Driver"
readmeQualityOk: true
url: "https://github.com/ponut64/SCSP_poneSound"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 33
forks: 5
openIssues: 1
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2020-01-06T04:46:10Z"
lastCommitAt: "2026-11-07T10:36:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 68
undervaluedScore: 28
maintainers: ["ponut64"]
openGraphImageUrl: "https://opengraph.githubassets.com/09a04f03af13d7827d969744f76d14f2609ffa15c1ea2d0994def7322bd9adb4/ponut64/SCSP_poneSound"
---

# 68k
SEGA Saturn SCSP Command & Control Driver and Linked Library
by Ponut64
Hitherto otherwise known as "ponèSound"

Currently supports playback of uncompressed 8-bit signed and 16-bit big-endian signed raw audio samples of up to 65536 samples in size. That would make 64KB the largest 8-bit raw size, and 128kb the largest 16-bit raw size.

Additionally supports real-time decompression and playback of ADX sound data by sound CPU from sound RAM. Three channels are supported, provided the bitrate of each channel is low enough. The available bitrates for use with ADX are 23040 Hz, 15360 Hz, 11520 Hz, and 7680 Hz. Only one bitrate can be properly decompressed by the Sound CPU at a time due to the need to build multiplication tables for ADX' advanced decompression method. That doesn't mean bitrates can't be mixed, it is just that quality is not guaranteed.
The channel allowance is as follows:
1 23040 Hz, 
1 15360 Hz + 1 "Ultra Low" Hz, 
2 11520 Hz, 
1 11520Hz + 1 "Ultra Low" Hz, 
3 "Ultra Low" Hz 
"Ultra Low Hz" being interchangable with 7680 Hz, 5760 Hz, and 3840 Hz

The driver has two linked libraries.
Primarily there is pcmsys.c and pcmsys.h ; these are the files needed for general…
