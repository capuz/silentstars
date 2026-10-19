---
repo: "powturbo/Turbo-Range-Coder"
name: "Turbo-Range-Coder"
description: "TurboRC -  Fastest Range Coder + Arithmetic Coding / Fastest Asymmetric Numeral Systems"
readmeQualityOk: true
url: "https://github.com/powturbo/Turbo-Range-Coder"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["range-coder", "entropy-coding", "arithmetic-coding", "entropy-coder", "arithmetic-coder", "encoding", "decoding", "huffman-coding", "asymmetric-numeral-systems", "data-compression"]
stars: 100
forks: 7
openIssues: 2
closedIssues: 5
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2019-12-24T20:47:37Z"
lastCommitAt: "2026-10-19T09:14:11Z"
lastReleaseAt: "2023-06-09T13:06:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 44
maintainers: ["powturbo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/230001929/dc419900-26a4-11ea-8615-082d609a18eb"
---

## TurboRC: Turbo Range Coder + rANS Asymmetric Numeral Systems

  <img
    alt="Turbo-Range-Coder" src="Turbo-Range-Coder.png"
    width="400px"
  >

======================================
* **Fastest (Branchless) Range Coder / Arithmetic Coder**
  * 100% C (C++ headers). 
  * OS/Arch: Linux amd/intel, arm, RISC-V, PowerPC, s390x, Apple M1-M5 MacOs. Windows: MSYS2, Mingw, visual c++
  * No other Range Coder / Arithmetic Coder encode or decode faster with better compression
  * Up to 3 times faster than the next fastest range coder with similar compression ratio
  * Can work as bitwise or/and as multisymbol range coder
  * 32 or 64 bits range coder. Big + Little endian
  * Renormalization output 8,16 or 32 bits 
  * Easy connection to bit, nibble or byte predictors. 
  * Several built-in predictors: simple, dual speed, fsm
  * Built-in order0, order1, order2, Sliding Context, Context mixing,<br/>
            - Run Length Encoding, Gamma Coding, Rice Coding,<br/>
            - Bit entropy coding,<br/>
            - Turbo VLC: novel Variable Length Coding for large integers, <br/>
            - MTF (Move-To-Front) / QLFC (Quantized Local Frequency Coding)<br/>
  * Fast full 8/16…
