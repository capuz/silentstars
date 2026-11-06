---
repo: "turri21/Senhor"
name: "Senhor"
description: "Information & binaries for Senhor board"
readmeQualityOk: true
url: "https://github.com/turri21/Senhor"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [66, 21]
stars: 17
forks: 0
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2024-05-07T20:04:20Z"
lastCommitAt: "2026-11-06T12:17:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 64
maintainers: ["turri21"]
openGraphImageUrl: "https://opengraph.githubassets.com/90440a773f23f9fcd8e35b7c59b0e9edc314252e32ab0f236f84c35bd6dcdc6c/turri21/Senhor"
---

# Raw binary files for Senhor FPGA board.

___

**What is the Senhor board?**

It is the first attempt of a MiSTer [(DE10-Nano)](https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=1046) FPGA board clone by [QMTECH](https://qmtechchina.aliexpress.com/store/4486047) released in 2024.
We have named it "Senhor" as a joke, but it turned out to become a full project to port cores to it from the [MiSTer project](https://mister-devel.github.io/MkDocs_MiSTer/).

**Is it fully compatible?**

Yes and no! 

The pins where the memory module is connected are shuffled, therefore a remapping is needed and every core using the SDRAM module should be resynthesized in order to work. Although, quite often just a remap is not enough to get a stable core and more changes need to be made in the verilog code. That's where the Senhor team takes over, to fill that gap and convert this wonderful board into a cheap alternative to MiSTer. 

Hardware wise, except of the SDRAM memory modules designed for MiSTer, none of the existing MiSTer addons work on this board, since it has a different layout.

**Where can I buy it?**

Currently it is out of stock, but you may try your luck by sending a…
