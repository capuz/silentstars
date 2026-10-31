---
repo: "come880412/Leetcode_practice"
name: "Leetcode_practice"
description: "Repository for Leetcode practicing"
readmeQualityOk: true
url: "https://github.com/come880412/Leetcode_practice"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-07-01T17:25:49Z"
lastCommitAt: "2026-10-31T15:30:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 67
maintainers: ["come880412"]
openGraphImageUrl: "https://opengraph.githubassets.com/84371bf70f554dacf6fdcbb05108f990ddff8d5dce21aa01ace01a6f3f08b3d9/come880412/Leetcode_practice"
postedAt: "2026-10-18T08:23:38.923Z"
---

# Leetcode_practice

C++ / Python 解題紀錄。分類依據是**解這題需要想到的技巧**，而不是題目給的資料型別 —— 例如 1475 給的是陣列，但關鍵是「下一個更小元素」，所以歸在 Monotonic Stack。

每行格式：`難度 rating` ・題目 ・解答連結 ・一句話解法摘要

> 想跨分類找題目就在本頁 Ctrl+F，例如搜 `prefix`、`monotonic`、`二分`、`快慢指標`。

---

## A. 資料結構

### Array & Matrix

#### Prefix Sum / Difference Array
- `M` [48. Rotate Image](https://leetcode.com/problems/rotate-image/) — [C++](https://github.com/come880412/Leetcode_practice/blob/HEAD/Solution/0048.cpp)
- `M` [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) — [C++](https://github.com/come880412/Leetcode_practice/blob/HEAD/Solution/0238.cpp) · 算總乘積再除自己，用 0 的個數分三種情況避開除以零
- `H 2306` [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/product-of-array-except-self/) — [C++](https://github.com/come880412/Leetcode_practice/blob/HEAD/Solution/0862.cpp)
- `E 1416` [1652. Defuse the Bomb](https://leetcode.com/problems/defuse-the-bomb) — [C++](https://github.com/come880412/Leetcode_practice/blob/HEAD/Solution/1652.cpp) · 環狀陣列取模，k 正負決定往後或往前累加
- `M 1294` [1769. Minimum Number of Operations to Move All Balls to Each…
