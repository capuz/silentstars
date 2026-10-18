---
repo: "redplait/denvdis"
name: "denvdis"
description: "NVidia sass disassembler/inline patcher"
readmeQualityOk: true
url: "https://github.com/redplait/denvdis"
homepage: "https://redplait.blogspot.com/2025/07/ced-sed-like-cubin-editor.html"
language: "C++"
languages: ["C++", "Perl"]
languagePcts: [48, 25]
stars: 110
forks: 16
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-02-11T12:27:20Z"
lastCommitAt: "2026-10-18T08:16:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["redplait"]
openGraphImageUrl: "https://opengraph.githubassets.com/01e50f2a57189b98c694d3b13e51de163b4b9b65d5af3775ced6ca5981f25b41/redplait/denvdis"
---

NVidia sass disassembler. See chaotic and incomplete documentation in my [blog](https://redplait.blogspot.com/search/label/cuda)

### Dependencies
* [ELFIO](https://github.com/serge1/ELFIO) for ELF files parsing
* [FP16](https://github.com/Maratyszcza/FP16) for rendering fp16 values

I used gcc built-in __uint128_t type, so probably on other platforms it's better to use something like abseil [Numeric](https://github.com/abseil/abseil-cpp/tree/master/absl/numeric)

As an illustration sub-dir [test](https://github.com/redplait/denvdis/tree/master/test) contains 4 small applications:
### ced
sed-like tool for inline patching of sass instructions within cubin files. See details in my [blog](https://redplait.blogspot.com/2025/07/ced-sed-like-cubin-editor.html)

Practical [example](https://redplait.blogspot.com/2025/09/practical-ced-usage-extracting-sm.html) - how to read SR_MACHINE_ID registers

To extract/replace files inside FatBinary use tool from [fb](https://github.com/redplait/denvdis/tree/master/fb) sub-dir - it also have some limited support of object files ([x86-64](https://redplait.blogspot.com/2026/09/fatbin-tools-for-object-files.html) only).
You can't replace compressed…
