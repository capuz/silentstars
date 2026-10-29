---
repo: "nh59yytyd5-dev/chinalaw-cli"
name: "chinalaw-cli"
description: "China law and regulation search CLI for AI agents"
originalDescription: "面向 AI Agent 的中国法律法规检索 CLI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nh59yytyd5-dev/chinalaw-cli"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 10
forks: 1
openIssues: 5
closedIssues: 38
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-05-21T14:40:21Z"
lastCommitAt: "2026-10-29T12:25:14Z"
lastReleaseAt: "2026-10-13T02:49:51Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 57
maintainers: ["nh59yytyd5-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e3560d015794c4eaa5d89f3dff559bb5d93c9c222fec318c79816b596a4313/nh59yytyd5-dev/chinalaw-cli"
---

`chinalaw` organizes publicly available laws, administrative regulations, and judicial interpretations into a database that can be queried article by article. Every returned article comes with its validity status, effective date, version, official source, and verification time: a model can propose leads, but citations must go back to the original text retrieved by the tool, so both humans and agents can review them. It does not answer legal questions and does not replace legal judgment.

```console
$ chinalaw article 民法典 533 --format md
## Civil Code, Article 533

> After a contract is formed, if its basis changes materially due to circumstances the parties could not have foreseen when concluding it, which do not constitute commercial risk, and continued performance would be manifestly unfair to one party, the adversely affected party may renegotiate with the other party. If no agreement is reached within a reasonable period, either party may request that the people's court or arbitration institution modify or terminate the contract.
The people's court or arbitration institution shall modify or terminate the contract based on the actual circumstances of the case and the principle…
