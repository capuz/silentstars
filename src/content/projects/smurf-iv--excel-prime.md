---
repo: "Smurf-IV/Excel_PRIME"
name: "Excel_PRIME"
description: "Excel P.erformant R.eader via I.nterfaces for M.emory E.fficiency. Without using any external libraries. Optimised for Range extraction"
readmeQualityOk: true
url: "https://github.com/Smurf-IV/Excel_PRIME"
homepage: "https://github.com/Smurf-IV/Excel_PRIME"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["excel", "csharp", "netcore", "xml", "zip", "xlsb", "xlsx", "xlsxreader", "xlsbreader"]
stars: 12
forks: 3
openIssues: 6
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-07T06:42:27Z"
lastCommitAt: "2026-11-15T11:19:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["Smurf-IV"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1071297271/0b58cde1-7fe7-4f27-84ea-c2e52280cc10"
discussionCount: 1
---

# Excel_PRIME 🌟
- **Excel**_**P**erformant **R**eader via **I**nterfaces for **M**emory **E**fficiency.
- Without using any external libraries.
- Optimised for Range extraction.
- 

# What does that mean?
- _Yet another Excel reader ?_, 
    - Starting with .Net 8 as the performant Runtime (See Benchmarks)
    - .Net9 gives an extra 5% boost, 
    - .Net10 Another 5% over .Net9 ;-)
    - .Net11 Another 5% -> 10% (`async`'s ;-)) over .Net10 ;-)

Lets take each of the above elements and explain:

## Excel 📈
- Open _Large_ 2007 (Onwards) XLS**X** file formats and XLS**B** (BIFF12)
- Zip Deflate format _Only_

## Performant 🚀
- _Try_ **to be** as fast as possible, i.e.
    - Forward only Lazy loading
    - Only "Quick" decipher / convert of the cell(s) types to ease GC pressure
    - No attempt at "creating / using" datatables with headers etc.
    - Use `IEnumerable`s with initial offset starts (Row / Column)
    - Allow `CancellationToken`s to be used to allow page transitioning cancellation (More on this later)
- Now the fastest in Real world usage [2025-11-19 onwards](https://github.com/Smurf-IV/Excel_PRIME/discussions/2#discussioncomment-15013658)
### Q & A's
- Q: There are…
