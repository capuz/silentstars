---
repo: "alishahusain/newt"
name: "newt"
description: "🐸 pattern algorithms data structures in javascript pseudo code space time complexity and most common implementation of each algorithm and data structure 🐸"
readmeQualityOk: true
url: "https://github.com/alishahusain/newt"
homepage: "https://github.com/alishahusain/newt"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["algorithms", "dijkstra-algorithm", "heap", "javascript", "tree"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-11T02:26:10Z"
lastCommitAt: "2026-11-03T19:04:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 81
maintainers: ["alishahusain"]
openGraphImageUrl: "https://opengraph.githubassets.com/a968a536b42fe002a395ba1e94d2727d90477c400d963e1f8dddd861207d6abf/alishahusain/newt"
---

# 

## 14 Patterns Algorithim

               🐣 Maximum Sum Subarray of Size K, Longest Substring with K Distinct CharactersString Anagrams, No-repeat Substring, etc.
function findAvgSubArrays(K, arr) {
  const result = [];
  let windowSum = 0, windowStart = 0;
  for (let winEnd = 0; winEnd < arr.length; winEnd++) {
    windowSum += arr[winEnd];   
    if (winEnd >= K - 1) {
      result.push(windowSum / K);             
      windowSum -= arr[windowStart];
      windowStart += 1;                     
    }
  }
  return result;
}
            <img
                src="https://miro.medium.com/max/372/0*o-PhzdP_jd_5L2iq.jpg"
                alt="Sliding Window Pattern"
            />

## [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) #3 🪟 
        ❓: Given a string s, find the length of the longest substring without repeating characters.
        🐣: 1️⃣ Input: s = "abcabcbb" Output: 3 Explain: The answer is "abc", with the length of 3. 2️⃣ Input: s = "bbbbb" Output: 1 Explain: The answer is "b", with the length of 1. 3️⃣ Input: s = "pwwkew" Output: 3 Explain: The answer is "wke", with the length of 3.…
