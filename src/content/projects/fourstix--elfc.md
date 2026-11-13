---
repo: "fourstix/ELFC"
name: "ELFC"
description: "A C compiler for a CDP1802 microcomputer running Elf/OS or Mini/DOS"
readmeQualityOk: true
url: "https://github.com/fourstix/ELFC"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [56, 42]
stars: 8
forks: 2
openIssues: 1
closedIssues: 92
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-06-03T11:49:35Z"
lastCommitAt: "2026-11-13T18:30:29Z"
lastReleaseAt: "2026-01-07T21:11:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 76
maintainers: ["fourstix", "arhefner"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2fd4a218a3aa04e710aa57b790404173150474b743ba628facc389588a70dab/fourstix/ELFC"
---

# ELFC
A C compiler for a CDP1802 based microcomputer running Elf/OS or Mini/DOS.  ElfC is based on SubC written by Nils M Holms.

Documentation
---------------
* ELFC General Information (This Page)
* [ELFC Detailed Information](https://github.com/fourstix/ELFC/blob/HEAD/ELFC.md)
* [ELFC Internal Information](https://github.com/fourstix/ELFC/blob/HEAD/INSIDE.md)

Installation
-------------
* Unzip the file elfc_r382.zip into the desired directory
* Copy the file `hello.c` into the directory.
* Use the command *elfc hello.c* to compile the `hello.c` to `hello.elfos`
* Transfer the `hello.elfos` file to a microcomputer running Elf/OS or Mini/DOS.
* Make the file executable using the *chmod +x hello.elfos* command
* Run the command *hello.elfos* to view the "Hello, World!" message

Design Goals
-------------
* Use the [Asm/02](https://github.com/fourstix/Asm-02) assembler and the [Link/02](https://github.com/fourstix/Link-02) linker to produce CDP1802 binary code to run as an Elf/OS or Mini/DOS program
* Create a library based on Mike Riley's [Library/02](https://github.com/rileym65/Library-02) standard library.
* Target both Elf/OS and Mini/DOS as a platform.
* Target Windows and…
