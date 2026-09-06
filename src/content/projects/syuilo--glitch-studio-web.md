---
repo: "syuilo/glitch-studio-web"
name: "glitch-studio-web"
description: "🤯 A̴ g̸l̶i̴t̵c̷h̵ d̶e̶d̴i̷c̶a̵t̴e̴d̴ i̷m̶a̶g̸e̵ e̷d̶i̵t̶i̷n̸g̴ s̵o̴f̶t̷w̸a̶r̸e̶"
readmeQualityOk: true
url: "https://github.com/syuilo/glitch-studio-web"
homepage: "http://syuilo.dev/glitch-studio-web/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [49, 30]
stars: 6
forks: 0
openIssues: 15
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-10T04:19:15Z"
lastCommitAt: "2026-09-06T08:04:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 70
undervaluedScore: 45
maintainers: ["syuilo"]
openGraphImageUrl: "https://opengraph.githubassets.com/56e249974641f2e261eb0256098673c64881ee0f4b991cd4f167f008306211c7/syuilo/glitch-studio-web"
---

# Glitch Studio for Web

## 設計理念

### 解像度に左右されない描画結果
例えば1000x1000でレンダリングしても5000x5000でレンダリングしても、もちろん画像としての解像度は異なりますが視覚的な差異がないようにFX処理をすることを目標にしています

ref. https://en.m.wikipedia.org/wiki/Resolution_independence

それを実現するためには、もし線を描画するFXがあるとすると、線の太さの指定はpxではなく、画像に占める比率(0%~100%(内部的には0.0~1.0))を指定するようにするなどのFX設計が必要になります
