---
repo: "tom8zds/localsend_rs"
name: "localsend_rs"
description: "A localsend protocol V2 implementation in flutter and rust for better performance."
readmeQualityOk: true
url: "https://github.com/tom8zds/localsend_rs"
language: "Rust"
languages: ["Rust", "Dart"]
languagePcts: [47, 44]
topics: ["dart", "file-sharing", "flutter", "rust"]
stars: 61
forks: 5
openIssues: 3
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-01-06T16:41:25Z"
lastCommitAt: "2026-08-22T04:05:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 44
maintainers: ["tom8zds"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ed5de96390b488f726477b484f3dfb58ae37ac9b074c08ef8f2a5420ffb6356/tom8zds/localsend_rs"
---

# localsend_rs

WIP: this repository is still WIP. 

A localsend protocol V2 implementation in flutter and rust for better performance.

## Screen shots

## Performance

Performance compare between localsend original and localsend_rs

Test condition : 

 - router: TpLink AX3000M
 - sender: Xiaomi 13 ( localsend )
 - receiver: Windows PC ( localsend_rs / localsend )

| sender    | receiver     | network speed | disk speed |
| --------- | ------------ | ------------- | ---------- |
| localsend | localsend    | 144Mbps       | 26MB/s     |
| localsend | localsend_rs | 511Mbps       | 102M/s     |

## Roadmap

- [ ] Protocol V2
    - [x] Udp announce
    - [x] Register
    - [x] Prepare upload
    - [x] Upload
    - [ ] Cancel
    - [ ] Send
- [ ] User interface
    - [ ] discover page
      - [x] device list
      - [ ] device favorite
    - [x] receive page
      - [x] task progress
      - [ ] pic preview
      - [ ] mission progress
    - [ ] send page
    - [ ] setting page
      - [x] theme setting
      - [x] locale setting
      - [x] server setting
        - [x] start / stop
        - [ ] server config
        - [x] save directory
        - [ ] save pic to album
        - [ ]…
